import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2_0Key() {
  return ['2.0'] as const
}

export function getGet20UsersUsernameKey(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
) {
  return ['2.0', '/2.0/users/:username', args] as const
}

export function useGet20UsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20UsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2.0'].users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20UsersUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20UsersUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['users'][':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2.0'].users[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20RepositoriesUsernameKey(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
) {
  return ['2.0', '/2.0/repositories/:username', args] as const
}

export function useGet20RepositoriesUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20RepositoriesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2.0'].repositories[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20RepositoriesUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20RepositoriesUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2.0']['repositories'][':username']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2.0'].repositories[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20RepositoriesUsernameSlugKey(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
) {
  return ['2.0', '/2.0/repositories/:username/:slug', args] as const
}

export function useGet20RepositoriesUsernameSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20RepositoriesUsernameSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2.0'].repositories[':username'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20RepositoriesUsernameSlug<TError = unknown>(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20RepositoriesUsernameSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2.0'].repositories[':username'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20RepositoriesUsernameSlugPullrequestsKey(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests', args] as const
}

export function useGet20RepositoriesUsernameSlugPullrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
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
        ? getGet20RepositoriesUsernameSlugPullrequestsKey(args)
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
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
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
          client['2.0'].repositories[':username'][':slug'].pullrequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20RepositoriesUsernameSlugPullrequests<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
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
        ? getGet20RepositoriesUsernameSlugPullrequestsKey(args)
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
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
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
          client['2.0'].repositories[':username'][':slug'].pullrequests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20RepositoriesUsernameSlugPullrequestsPidKey(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
) {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests/:pid', args] as const
}

export function useGet20RepositoriesUsernameSlugPullrequestsPid<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
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
        ? getGet20RepositoriesUsernameSlugPullrequestsPidKey(args)
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
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
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
          client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20RepositoriesUsernameSlugPullrequestsPid<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
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
        ? getGet20RepositoriesUsernameSlugPullrequestsPidKey(args)
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
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
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
          client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20RepositoriesUsernameSlugPullrequestsPidMergeKey() {
  return ['2.0', '/2.0/repositories/:username/:slug/pullrequests/:pid/merge', 'POST'] as const
}

export function usePost20RepositoriesUsernameSlugPullrequestsPidMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20RepositoriesUsernameSlugPullrequestsPidMergeKey()
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
            (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].merge.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
