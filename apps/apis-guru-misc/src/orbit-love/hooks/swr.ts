import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUserKey() {
  return ['user'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getWorkspaceSlugKey() {
  return ['{workspace_slug}'] as const
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesKey() {
  return ['workspaces', '/workspaces'] as const
}

export function useGetWorkspaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkspacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspacesWorkspaceSlugKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_slug', args] as const
}

export function useGetWorkspacesWorkspaceSlug<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspacesWorkspaceSlug<TError = unknown>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspacesWorkspaceSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workspaces[':workspace_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugActivitiesKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activities', args] as const
}

export function useGetWorkspaceSlugActivities<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugActivities<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspaceSlugActivitiesKey() {
  return [':workspace_slug', '/:workspace_slug/activities', 'POST'] as const
}

export function usePostWorkspaceSlugActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugActivitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']> },
      ) => parseResponse(client[':workspace_slug'].activities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugActivitiesIdKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activities/:id', args] as const
}

export function useGetWorkspaceSlugActivitiesId<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].activities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugActivitiesId<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].activities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugActivityTypesKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activity_types', args] as const
}

export function useGetWorkspaceSlugActivityTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].activity_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugActivityTypes<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugActivityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].activity_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugMembersKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members', args] as const
}

export function useGetWorkspaceSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspaceSlugMembersKey() {
  return [':workspace_slug', '/:workspace_slug/members', 'POST'] as const
}

export function usePostWorkspaceSlugMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':workspace_slug']['members']['$post']> },
      ) => parseResponse(client[':workspace_slug'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugMembersFindKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members/find', args] as const
}

export function useGetWorkspaceSlugMembersFind<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugMembersFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].members.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugMembersFind<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugMembersFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].members.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugMembersMemberSlugKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', args] as const
}

export function useGetWorkspaceSlugMembersMemberSlug<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
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
        ? getGetWorkspaceSlugMembersMemberSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].members[':member_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugMembersMemberSlug<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
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
        ? getGetWorkspaceSlugMembersMemberSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].members[':member_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspaceSlugMembersMemberSlugKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', 'PUT'] as const
}

export function usePutWorkspaceSlugMembersMemberSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspaceSlugMembersMemberSlugKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['$put']
          >
        },
      ) =>
        parseResponse(client[':workspace_slug'].members[':member_slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspaceSlugMembersMemberSlugKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', 'DELETE'] as const
}

export function useDeleteWorkspaceSlugMembersMemberSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspaceSlugMembersMemberSlugKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugMembersMemberSlugActivitiesKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities', args] as const
}

export function useGetWorkspaceSlugMembersMemberSlugActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
        ? getGetWorkspaceSlugMembersMemberSlugActivitiesKey(args)
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
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
          client[':workspace_slug'].members[':member_slug'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugMembersMemberSlugActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
        ? getGetWorkspaceSlugMembersMemberSlugActivitiesKey(args)
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
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
          client[':workspace_slug'].members[':member_slug'].activities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspaceSlugMembersMemberSlugActivitiesKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities', 'POST'] as const
}

export function usePostWorkspaceSlugMembersMemberSlugActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugMembersMemberSlugActivitiesKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].activities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWorkspaceSlugMembersMemberSlugActivitiesIdKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities/:id', 'PUT'] as const
}

export function usePutWorkspaceSlugMembersMemberSlugActivitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspaceSlugMembersMemberSlugActivitiesIdKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].activities[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdKey() {
  return [
    ':workspace_slug',
    '/:workspace_slug/members/:member_slug/activities/:id',
    'DELETE',
  ] as const
}

export function useDeleteWorkspaceSlugMembersMemberSlugActivitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].activities[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWorkspaceSlugMembersMemberSlugIdentitiesKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/identities', 'POST'] as const
}

export function usePostWorkspaceSlugMembersMemberSlugIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugMembersMemberSlugIdentitiesKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].identities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspaceSlugMembersMemberSlugIdentitiesKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/identities', 'DELETE'] as const
}

export function useDeleteWorkspaceSlugMembersMemberSlugIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspaceSlugMembersMemberSlugIdentitiesKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].identities.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugMembersMemberSlugNotesKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes', args] as const
}

export function useGetWorkspaceSlugMembersMemberSlugNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
        ? getGetWorkspaceSlugMembersMemberSlugNotesKey(args)
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
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
          client[':workspace_slug'].members[':member_slug'].notes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugMembersMemberSlugNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
        ? getGetWorkspaceSlugMembersMemberSlugNotesKey(args)
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
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
          client[':workspace_slug'].members[':member_slug'].notes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspaceSlugMembersMemberSlugNotesKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes', 'POST'] as const
}

export function usePostWorkspaceSlugMembersMemberSlugNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugMembersMemberSlugNotesKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].notes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWorkspaceSlugMembersMemberSlugNotesIdKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes/:id', 'PUT'] as const
}

export function usePutWorkspaceSlugMembersMemberSlugNotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspaceSlugMembersMemberSlugNotesIdKey()
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
            (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].members[':member_slug'].notes[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugOrganizationsKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/organizations', args] as const
}

export function useGetWorkspaceSlugOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugOrganizationsOrganizationIdKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/organizations/:organization_id', args] as const
}

export function useGetWorkspaceSlugOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspaceSlugOrganizationsOrganizationIdKey() {
  return [':workspace_slug', '/:workspace_slug/organizations/:organization_id', 'PUT'] as const
}

export function usePutWorkspaceSlugOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspaceSlugOrganizationsOrganizationIdKey()
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
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':workspace_slug'].organizations[':organization_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugOrganizationsOrganizationIdActivitiesKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/activities',
    args,
  ] as const
}

export function useGetWorkspaceSlugOrganizationsOrganizationIdActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdActivitiesKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].activities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugOrganizationsOrganizationIdActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdActivitiesKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].activities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugOrganizationsOrganizationIdMembersKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/members',
    args,
  ] as const
}

export function useGetWorkspaceSlugOrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdMembersKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugOrganizationsOrganizationIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
        ? getGetWorkspaceSlugOrganizationsOrganizationIdMembersKey(args)
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
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
          client[':workspace_slug'].organizations[':organization_id'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugReportsKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/reports', args] as const
}

export function useGetWorkspaceSlugReports<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugReports<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWorkspaceSlugWebhooksKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks', args] as const
}

export function useGetWorkspaceSlugWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':workspace_slug'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkspaceSlugWebhooksKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks', 'POST'] as const
}

export function usePostWorkspaceSlugWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkspaceSlugWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']> },
      ) => parseResponse(client[':workspace_slug'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkspaceSlugWebhooksIdKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', args] as const
}

export function useGetWorkspaceSlugWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkspaceSlugWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkspaceSlugWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':workspace_slug'].webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWorkspaceSlugWebhooksIdKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', 'PUT'] as const
}

export function usePutWorkspaceSlugWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWorkspaceSlugWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']> },
      ) => parseResponse(client[':workspace_slug'].webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWorkspaceSlugWebhooksIdKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', 'DELETE'] as const
}

export function useDeleteWorkspaceSlugWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkspaceSlugWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>
        },
      ) => parseResponse(client[':workspace_slug'].webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
