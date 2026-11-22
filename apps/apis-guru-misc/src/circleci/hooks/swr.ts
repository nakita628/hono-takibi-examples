import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMeKey() {
  return ['me'] as const
}

export function getProjectKey() {
  return ['project'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRecentBuildsKey() {
  return ['recent-builds'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetProjectUsernameProjectKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
) {
  return ['project', '/project/:username/:project', args] as const
}

export function useGetProjectUsernameProject<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':username'][':project'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProject<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.project[':username'][':project'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectUsernameProjectKey() {
  return ['project', '/project/:username/:project', 'POST'] as const
}

export function usePostProjectUsernameProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.project)[':username'][':project']['$post']> },
      ) => parseResponse(client.project[':username'][':project'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectUsernameProjectBuildCacheKey() {
  return ['project', '/project/:username/:project/build-cache', 'DELETE'] as const
}

export function useDeleteProjectUsernameProjectBuildCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['build-cache']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['build-cache']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectUsernameProjectBuildCacheKey()
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
            (typeof client.project)[':username'][':project']['build-cache']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project']['build-cache'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectCheckoutKeyKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
) {
  return ['project', '/project/:username/:project/checkout-key', args] as const
}

export function useGetProjectUsernameProjectCheckoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectCheckoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project[':username'][':project']['checkout-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectCheckoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectCheckoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project[':username'][':project']['checkout-key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectUsernameProjectCheckoutKeyKey() {
  return ['project', '/project/:username/:project/checkout-key', 'POST'] as const
}

export function usePostProjectUsernameProjectCheckoutKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['checkout-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectCheckoutKeyKey()
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
            (typeof client.project)[':username'][':project']['checkout-key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project']['checkout-key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectCheckoutKeyFingerprintKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
) {
  return ['project', '/project/:username/:project/checkout-key/:fingerprint', args] as const
}

export function useGetProjectUsernameProjectCheckoutKeyFingerprint<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
        ? getGetProjectUsernameProjectCheckoutKeyFingerprintKey(args)
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
                (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
          client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectCheckoutKeyFingerprint<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
        ? getGetProjectUsernameProjectCheckoutKeyFingerprintKey(args)
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
                (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$get']
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
          client.project[':username'][':project']['checkout-key'][':fingerprint'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectUsernameProjectCheckoutKeyFingerprintKey() {
  return ['project', '/project/:username/:project/checkout-key/:fingerprint', 'DELETE'] as const
}

export function useDeleteProjectUsernameProjectCheckoutKeyFingerprint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectUsernameProjectCheckoutKeyFingerprintKey()
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
            (typeof client.project)[':username'][':project']['checkout-key'][':fingerprint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project']['checkout-key'][':fingerprint'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectEnvvarKey(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
) {
  return ['project', '/project/:username/:project/envvar', args] as const
}

export function useGetProjectUsernameProjectEnvvar<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectEnvvarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':username'][':project'].envvar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectEnvvar<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectEnvvarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.project[':username'][':project'].envvar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectUsernameProjectEnvvarKey() {
  return ['project', '/project/:username/:project/envvar', 'POST'] as const
}

export function usePostProjectUsernameProjectEnvvar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['envvar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectEnvvarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.project)[':username'][':project']['envvar']['$post']>
        },
      ) => parseResponse(client.project[':username'][':project'].envvar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectEnvvarNameKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
) {
  return ['project', '/project/:username/:project/envvar/:name', args] as const
}

export function useGetProjectUsernameProjectEnvvarName<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
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
        ? getGetProjectUsernameProjectEnvvarNameKey(args)
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
                (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
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
          client.project[':username'][':project'].envvar[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectEnvvarName<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
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
        ? getGetProjectUsernameProjectEnvvarNameKey(args)
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
                (typeof client.project)[':username'][':project']['envvar'][':name']['$get']
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
          client.project[':username'][':project'].envvar[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectUsernameProjectEnvvarNameKey() {
  return ['project', '/project/:username/:project/envvar/:name', 'DELETE'] as const
}

export function useDeleteProjectUsernameProjectEnvvarName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['envvar'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectUsernameProjectEnvvarNameKey()
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
            (typeof client.project)[':username'][':project']['envvar'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project'].envvar[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectUsernameProjectSshKeyKey() {
  return ['project', '/project/:username/:project/ssh-key', 'POST'] as const
}

export function usePostProjectUsernameProjectSshKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['ssh-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectSshKeyKey()
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
            (typeof client.project)[':username'][':project']['ssh-key']['$post']
          >
        },
      ) =>
        parseResponse(client.project[':username'][':project']['ssh-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectUsernameProjectTreeBranchKey() {
  return ['project', '/project/:username/:project/tree/:branch', 'POST'] as const
}

export function usePostProjectUsernameProjectTreeBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.project)[':username'][':project']['tree'][':branch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.project)[':username'][':project']['tree'][':branch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectTreeBranchKey()
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
            (typeof client.project)[':username'][':project']['tree'][':branch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project'].tree[':branch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectBuildNumKey(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
) {
  return ['project', '/project/:username/:project/:build_num', args] as const
}

export function useGetProjectUsernameProjectBuildNum<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectBuildNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project[':username'][':project'][':build_num'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectBuildNum<TError = unknown>(
  args: InferRequestType<(typeof client.project)[':username'][':project'][':build_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectUsernameProjectBuildNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.project)[':username'][':project'][':build_num']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.project[':username'][':project'][':build_num'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectUsernameProjectBuildNumArtifactsKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
) {
  return ['project', '/project/:username/:project/:build_num/artifacts', args] as const
}

export function useGetProjectUsernameProjectBuildNumArtifacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
        ? getGetProjectUsernameProjectBuildNumArtifactsKey(args)
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
                (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
          client.project[':username'][':project'][':build_num'].artifacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectBuildNumArtifacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
        ? getGetProjectUsernameProjectBuildNumArtifactsKey(args)
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
                (typeof client.project)[':username'][':project'][':build_num']['artifacts']['$get']
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
          client.project[':username'][':project'][':build_num'].artifacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectUsernameProjectBuildNumCancelKey() {
  return ['project', '/project/:username/:project/:build_num/cancel', 'POST'] as const
}

export function usePostProjectUsernameProjectBuildNumCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectBuildNumCancelKey()
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
            (typeof client.project)[':username'][':project'][':build_num']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project'][':build_num'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectUsernameProjectBuildNumRetryKey() {
  return ['project', '/project/:username/:project/:build_num/retry', 'POST'] as const
}

export function usePostProjectUsernameProjectBuildNumRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectUsernameProjectBuildNumRetryKey()
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
            (typeof client.project)[':username'][':project'][':build_num']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.project[':username'][':project'][':build_num'].retry.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectUsernameProjectBuildNumTestsKey(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
) {
  return ['project', '/project/:username/:project/:build_num/tests', args] as const
}

export function useGetProjectUsernameProjectBuildNumTests<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
        ? getGetProjectUsernameProjectBuildNumTestsKey(args)
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
                (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
          client.project[':username'][':project'][':build_num'].tests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectUsernameProjectBuildNumTests<TError = unknown>(
  args: InferRequestType<
    (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
        ? getGetProjectUsernameProjectBuildNumTestsKey(args)
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
                (typeof client.project)[':username'][':project'][':build_num']['tests']['$get']
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
          client.project[':username'][':project'][':build_num'].tests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsKey() {
  return ['projects', '/projects'] as const
}

export function useGetProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecentBuildsKey(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
) {
  return ['recent-builds', '/recent-builds', args] as const
}

export function useGetRecentBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecentBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recent-builds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecentBuilds<TError = unknown>(
  args: InferRequestType<(typeof client)['recent-builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecentBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recent-builds']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recent-builds'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserHerokuKeyKey() {
  return ['user', '/user/heroku-key', 'POST'] as const
}

export function usePostUserHerokuKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['heroku-key']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserHerokuKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.user['heroku-key'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
