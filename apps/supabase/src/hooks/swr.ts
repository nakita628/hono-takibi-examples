import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1BranchesBranchIdOrRefKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref', args] as const
}

export function useGetV1BranchesBranchIdOrRef<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BranchesBranchIdOrRefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches[':branch_id_or_ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BranchesBranchIdOrRef<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BranchesBranchIdOrRefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches[':branch_id_or_ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BranchesBranchIdOrRefKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref', 'DELETE'] as const
}

export function useDeleteV1BranchesBranchIdOrRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BranchesBranchIdOrRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$delete']> },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BranchesBranchIdOrRefKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref', 'PATCH'] as const
}

export function usePatchV1BranchesBranchIdOrRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BranchesBranchIdOrRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['$patch']> },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BranchesBranchIdOrRefPushKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/push', 'POST'] as const
}

export function usePostV1BranchesBranchIdOrRefPush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BranchesBranchIdOrRefPushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['push']['$post']>
        },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BranchesBranchIdOrRefMergeKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/merge', 'POST'] as const
}

export function usePostV1BranchesBranchIdOrRefMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BranchesBranchIdOrRefMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['merge']['$post']>
        },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BranchesBranchIdOrRefResetKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/reset', 'POST'] as const
}

export function usePostV1BranchesBranchIdOrRefReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BranchesBranchIdOrRefResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['reset']['$post']>
        },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BranchesBranchIdOrRefRestoreKey() {
  return ['v1', '/v1/branches/:branch_id_or_ref/restore', 'POST'] as const
}

export function usePostV1BranchesBranchIdOrRefRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BranchesBranchIdOrRefRestoreKey()
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
            (typeof client.v1.branches)[':branch_id_or_ref']['restore']['$post']
          >
        },
      ) => parseResponse(client.v1.branches[':branch_id_or_ref'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BranchesBranchIdOrRefDiffKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_id_or_ref/diff', args] as const
}

export function useGetV1BranchesBranchIdOrRefDiff<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BranchesBranchIdOrRefDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.branches[':branch_id_or_ref'].diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BranchesBranchIdOrRefDiff<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1BranchesBranchIdOrRefDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_id_or_ref']['diff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.branches[':branch_id_or_ref'].diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsKey() {
  return ['v1', '/v1/projects'] as const
}

export function useGetV1Projects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Projects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function usePostV1Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.projects.$post> }) =>
        parseResponse(client.v1.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsAvailableRegionsKey(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
) {
  return ['v1', '/v1/projects/available-regions', args] as const
}

export function useGetV1ProjectsAvailableRegions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsAvailableRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects['available-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsAvailableRegions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)['available-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsAvailableRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)['available-regions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects['available-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsKey() {
  return ['v1', '/v1/organizations'] as const
}

export function useGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsKey() {
  return ['v1', '/v1/organizations', 'POST'] as const
}

export function usePostV1Organizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.organizations.$post> }) =>
        parseResponse(client.v1.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OauthAuthorizeKey(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
) {
  return ['v1', '/v1/oauth/authorize', args] as const
}

export function useGetV1OauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.v1.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OauthAuthorizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OauthTokenKey() {
  return ['v1', '/v1/oauth/token', 'POST'] as const
}

export function usePostV1OauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.token.$post> }) =>
        parseResponse(client.v1.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OauthRevokeKey() {
  return ['v1', '/v1/oauth/revoke', 'POST'] as const
}

export function usePostV1OauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oauth.revoke.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.oauth.revoke.$post> }) =>
        parseResponse(client.v1.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OauthAuthorizeProjectClaimKey(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
) {
  return ['v1', '/v1/oauth/authorize/project-claim', args] as const
}

export function useGetV1OauthAuthorizeProjectClaim<TError = unknown>(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OauthAuthorizeProjectClaimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.oauth.authorize['project-claim'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OauthAuthorizeProjectClaim<TError = unknown>(
  args: InferRequestType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OauthAuthorizeProjectClaimKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.oauth.authorize)['project-claim']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.oauth.authorize['project-claim'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SnippetsKey(args: InferRequestType<typeof client.v1.snippets.$get>) {
  return ['v1', '/v1/snippets', args] as const
}

export function useGetV1Snippets<TError = unknown>(
  args: InferRequestType<typeof client.v1.snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SnippetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Snippets<TError = unknown>(
  args: InferRequestType<typeof client.v1.snippets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SnippetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.snippets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SnippetsIdKey(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
) {
  return ['v1', '/v1/snippets/:id', args] as const
}

export function useGetV1SnippetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SnippetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snippets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SnippetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.snippets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SnippetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.snippets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.snippets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProfileKey() {
  return ['v1', '/v1/profile'] as const
}

export function useGetV1Profile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Profile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefActionsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions', args] as const
}

export function useGetV1ProjectsRefActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadV1ProjectsRefActionsKey() {
  return ['v1', '/v1/projects/:ref/actions', 'HEAD'] as const
}

export function useHeadV1ProjectsRefActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV1ProjectsRefActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['actions']['$head']> },
      ) => parseResponse(client.v1.projects[':ref'].actions.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefActionsRunIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id', args] as const
}

export function useGetV1ProjectsRefActionsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefActionsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].actions[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefActionsRunId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefActionsRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].actions[':run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefActionsRunIdStatusKey() {
  return ['v1', '/v1/projects/:ref/actions/:run_id/status', 'PATCH'] as const
}

export function usePatchV1ProjectsRefActionsRunIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefActionsRunIdStatusKey()
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
            (typeof client.v1.projects)[':ref']['actions'][':run_id']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].actions[':run_id'].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefActionsRunIdLogsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/actions/:run_id/logs', args] as const
}

export function useGetV1ProjectsRefActionsRunIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
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
        ? getGetV1ProjectsRefActionsRunIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].actions[':run_id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefActionsRunIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
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
        ? getGetV1ProjectsRefActionsRunIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['actions'][':run_id']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].actions[':run_id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefApiKeysKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys', args] as const
}

export function useGetV1ProjectsRefApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref']['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref']['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefApiKeysKey() {
  return ['v1', '/v1/projects/:ref/api-keys', 'POST'] as const
}

export function usePostV1ProjectsRefApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['$post']> },
      ) => parseResponse(client.v1.projects[':ref']['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefApiKeysLegacyKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys/legacy', args] as const
}

export function useGetV1ProjectsRefApiKeysLegacy<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysLegacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefApiKeysLegacy<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysLegacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefApiKeysLegacyKey() {
  return ['v1', '/v1/projects/:ref/api-keys/legacy', 'PUT'] as const
}

export function usePutV1ProjectsRefApiKeysLegacy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefApiKeysLegacyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys']['legacy']['$put']>
        },
      ) => parseResponse(client.v1.projects[':ref']['api-keys'].legacy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefApiKeysIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/api-keys/:id', args] as const
}

export function useGetV1ProjectsRefApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefApiKeysIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefApiKeysIdKey() {
  return ['v1', '/v1/projects/:ref/api-keys/:id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsRefApiKeysIdKey() {
  return ['v1', '/v1/projects/:ref/api-keys/:id', 'PATCH'] as const
}

export function usePatchV1ProjectsRefApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['api-keys'][':id']['$patch']>
        },
      ) => parseResponse(client.v1.projects[':ref']['api-keys'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefBranchesKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/branches', args] as const
}

export function useGetV1ProjectsRefBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefBranchesKey() {
  return ['v1', '/v1/projects/:ref/branches', 'POST'] as const
}

export function usePostV1ProjectsRefBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefBranchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].branches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefBranchesKey() {
  return ['v1', '/v1/projects/:ref/branches', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefBranchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['branches']['$delete']> },
      ) => parseResponse(client.v1.projects[':ref'].branches.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefBranchesNameKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/branches/:name', args] as const
}

export function useGetV1ProjectsRefBranchesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBranchesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].branches[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefBranchesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBranchesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['branches'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].branches[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefCustomHostnameKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/custom-hostname', args] as const
}

export function useGetV1ProjectsRefCustomHostname<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefCustomHostnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['custom-hostname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefCustomHostname<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefCustomHostnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['custom-hostname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefCustomHostnameKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefCustomHostname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefCustomHostnameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':ref']['custom-hostname'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefCustomHostnameInitializeKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/initialize', 'POST'] as const
}

export function usePostV1ProjectsRefCustomHostnameInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefCustomHostnameInitializeKey()
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
            (typeof client.v1.projects)[':ref']['custom-hostname']['initialize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['custom-hostname'].initialize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefCustomHostnameReverifyKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/reverify', 'POST'] as const
}

export function usePostV1ProjectsRefCustomHostnameReverify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefCustomHostnameReverifyKey()
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
            (typeof client.v1.projects)[':ref']['custom-hostname']['reverify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['custom-hostname'].reverify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefCustomHostnameActivateKey() {
  return ['v1', '/v1/projects/:ref/custom-hostname/activate', 'POST'] as const
}

export function usePostV1ProjectsRefCustomHostnameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefCustomHostnameActivateKey()
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
            (typeof client.v1.projects)[':ref']['custom-hostname']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['custom-hostname'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefJitAccessKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/jit-access', args] as const
}

export function useGetV1ProjectsRefJitAccess<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefJitAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref']['jit-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefJitAccess<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefJitAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref']['jit-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefJitAccessKey() {
  return ['v1', '/v1/projects/:ref/jit-access', 'PUT'] as const
}

export function usePutV1ProjectsRefJitAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefJitAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['jit-access']['$put']> },
      ) => parseResponse(client.v1.projects[':ref']['jit-access'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefNetworkBansRetrieveKey() {
  return ['v1', '/v1/projects/:ref/network-bans/retrieve', 'POST'] as const
}

export function usePostV1ProjectsRefNetworkBansRetrieve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefNetworkBansRetrieveKey()
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
            (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['network-bans'].retrieve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefNetworkBansRetrieveEnrichedKey() {
  return ['v1', '/v1/projects/:ref/network-bans/retrieve/enriched', 'POST'] as const
}

export function usePostV1ProjectsRefNetworkBansRetrieveEnriched<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefNetworkBansRetrieveEnrichedKey()
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
            (typeof client.v1.projects)[':ref']['network-bans']['retrieve']['enriched']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['network-bans'].retrieve.enriched.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefNetworkBansKey() {
  return ['v1', '/v1/projects/:ref/network-bans', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefNetworkBans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefNetworkBansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['network-bans']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':ref']['network-bans'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefNetworkRestrictionsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/network-restrictions', args] as const
}

export function useGetV1ProjectsRefNetworkRestrictions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefNetworkRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['network-restrictions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefNetworkRestrictions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefNetworkRestrictionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['network-restrictions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefNetworkRestrictionsKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions', 'PATCH'] as const
}

export function usePatchV1ProjectsRefNetworkRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefNetworkRestrictionsKey()
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
            (typeof client.v1.projects)[':ref']['network-restrictions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['network-restrictions'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefNetworkRestrictionsApplyKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions/apply', 'POST'] as const
}

export function usePostV1ProjectsRefNetworkRestrictionsApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefNetworkRestrictionsApplyKey()
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
            (typeof client.v1.projects)[':ref']['network-restrictions']['apply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['network-restrictions'].apply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefNetworkRestrictionsReviewKey() {
  return ['v1', '/v1/projects/:ref/network-restrictions/review', 'POST'] as const
}

export function usePostV1ProjectsRefNetworkRestrictionsReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefNetworkRestrictionsReviewKey()
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
            (typeof client.v1.projects)[':ref']['network-restrictions']['review']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['network-restrictions'].review.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefPgsodiumKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/pgsodium', args] as const
}

export function useGetV1ProjectsRefPgsodium<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefPgsodiumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].pgsodium.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefPgsodium<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefPgsodiumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].pgsodium.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefPgsodiumKey() {
  return ['v1', '/v1/projects/:ref/pgsodium', 'PUT'] as const
}

export function usePutV1ProjectsRefPgsodium<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefPgsodiumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['pgsodium']['$put']> },
      ) => parseResponse(client.v1.projects[':ref'].pgsodium.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefPostgrestKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/postgrest', args] as const
}

export function useGetV1ProjectsRefPostgrest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefPostgrestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].postgrest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefPostgrest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefPostgrestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].postgrest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefPostgrestKey() {
  return ['v1', '/v1/projects/:ref/postgrest', 'PATCH'] as const
}

export function usePatchV1ProjectsRefPostgrest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefPostgrestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['postgrest']['$patch']> },
      ) => parseResponse(client.v1.projects[':ref'].postgrest.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
) {
  return ['v1', '/v1/projects/:ref', args] as const
}

export function useGetV1ProjectsRef<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsRefKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRef<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsRefKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefKey() {
  return ['v1', '/v1/projects/:ref', 'DELETE'] as const
}

export function useDeleteV1ProjectsRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['$delete']> },
      ) => parseResponse(client.v1.projects[':ref'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsRefKey() {
  return ['v1', '/v1/projects/:ref', 'PATCH'] as const
}

export function usePatchV1ProjectsRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':ref']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['$patch']> },
      ) => parseResponse(client.v1.projects[':ref'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefSecretsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/secrets', args] as const
}

export function useGetV1ProjectsRefSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefSecretsKey() {
  return ['v1', '/v1/projects/:ref/secrets', 'POST'] as const
}

export function usePostV1ProjectsRefSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefSecretsKey() {
  return ['v1', '/v1/projects/:ref/secrets', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['secrets']['$delete']> },
      ) => parseResponse(client.v1.projects[':ref'].secrets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefSslEnforcementKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/ssl-enforcement', args] as const
}

export function useGetV1ProjectsRefSslEnforcement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefSslEnforcementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefSslEnforcement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefSslEnforcementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefSslEnforcementKey() {
  return ['v1', '/v1/projects/:ref/ssl-enforcement', 'PUT'] as const
}

export function usePutV1ProjectsRefSslEnforcement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefSslEnforcementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['ssl-enforcement']['$put']>
        },
      ) => parseResponse(client.v1.projects[':ref']['ssl-enforcement'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefTypesTypescriptKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/types/typescript', args] as const
}

export function useGetV1ProjectsRefTypesTypescript<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefTypesTypescriptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].types.typescript.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefTypesTypescript<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefTypesTypescriptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['types']['typescript']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].types.typescript.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefVanitySubdomainKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/vanity-subdomain', args] as const
}

export function useGetV1ProjectsRefVanitySubdomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefVanitySubdomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefVanitySubdomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefVanitySubdomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefVanitySubdomainKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefVanitySubdomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefVanitySubdomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['$delete']>
        },
      ) =>
        parseResponse(client.v1.projects[':ref']['vanity-subdomain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefVanitySubdomainCheckAvailabilityKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain/check-availability', 'POST'] as const
}

export function usePostV1ProjectsRefVanitySubdomainCheckAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefVanitySubdomainCheckAvailabilityKey()
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
            (typeof client.v1.projects)[':ref']['vanity-subdomain']['check-availability']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['vanity-subdomain']['check-availability'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefVanitySubdomainActivateKey() {
  return ['v1', '/v1/projects/:ref/vanity-subdomain/activate', 'POST'] as const
}

export function usePostV1ProjectsRefVanitySubdomainActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefVanitySubdomainActivateKey()
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
            (typeof client.v1.projects)[':ref']['vanity-subdomain']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref']['vanity-subdomain'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefUpgradeKey() {
  return ['v1', '/v1/projects/:ref/upgrade', 'POST'] as const
}

export function usePostV1ProjectsRefUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].upgrade.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefUpgradeEligibilityKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/upgrade/eligibility', args] as const
}

export function useGetV1ProjectsRefUpgradeEligibility<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
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
        ? getGetV1ProjectsRefUpgradeEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].upgrade.eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefUpgradeEligibility<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
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
        ? getGetV1ProjectsRefUpgradeEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['eligibility']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].upgrade.eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefUpgradeStatusKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/upgrade/status', args] as const
}

export function useGetV1ProjectsRefUpgradeStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefUpgradeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].upgrade.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefUpgradeStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefUpgradeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['upgrade']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].upgrade.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefReadonlyKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/readonly', args] as const
}

export function useGetV1ProjectsRefReadonly<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefReadonlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].readonly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefReadonly<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefReadonlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['readonly']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].readonly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefReadonlyTemporaryDisableKey() {
  return ['v1', '/v1/projects/:ref/readonly/temporary-disable', 'POST'] as const
}

export function usePostV1ProjectsRefReadonlyTemporaryDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefReadonlyTemporaryDisableKey()
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
            (typeof client.v1.projects)[':ref']['readonly']['temporary-disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].readonly['temporary-disable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefReadReplicasSetupKey() {
  return ['v1', '/v1/projects/:ref/read-replicas/setup', 'POST'] as const
}

export function usePostV1ProjectsRefReadReplicasSetup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefReadReplicasSetupKey()
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
            (typeof client.v1.projects)[':ref']['read-replicas']['setup']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref']['read-replicas'].setup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefReadReplicasRemoveKey() {
  return ['v1', '/v1/projects/:ref/read-replicas/remove', 'POST'] as const
}

export function usePostV1ProjectsRefReadReplicasRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefReadReplicasRemoveKey()
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
            (typeof client.v1.projects)[':ref']['read-replicas']['remove']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref']['read-replicas'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefHealthKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/health', args] as const
}

export function useGetV1ProjectsRefHealth<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefHealth<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthSigningKeysLegacyKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/legacy', args] as const
}

export function useGetV1ProjectsRefConfigAuthSigningKeysLegacy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysLegacyKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthSigningKeysLegacy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysLegacyKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigAuthSigningKeysLegacyKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/legacy', 'POST'] as const
}

export function usePostV1ProjectsRefConfigAuthSigningKeysLegacy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigAuthSigningKeysLegacyKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['legacy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'].legacy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthSigningKeysKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys', args] as const
}

export function useGetV1ProjectsRefConfigAuthSigningKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthSigningKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigAuthSigningKeysKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys', 'POST'] as const
}

export function usePostV1ProjectsRefConfigAuthSigningKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigAuthSigningKeysKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthSigningKeysIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', args] as const
}

export function useGetV1ProjectsRefConfigAuthSigningKeysId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthSigningKeysId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSigningKeysIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$get']
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
          client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefConfigAuthSigningKeysIdKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefConfigAuthSigningKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefConfigAuthSigningKeysIdKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigAuthSigningKeysIdKey() {
  return ['v1', '/v1/projects/:ref/config/auth/signing-keys/:id', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigAuthSigningKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigAuthSigningKeysIdKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['signing-keys'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['signing-keys'][':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/auth', args] as const
}

export function useGetV1ProjectsRefConfigAuth<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].config.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuth<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigAuthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].config.auth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigAuthKey() {
  return ['v1', '/v1/projects/:ref/config/auth', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['config']['auth']['$patch']>
        },
      ) => parseResponse(client.v1.projects[':ref'].config.auth.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthThirdPartyAuthKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth', args] as const
}

export function useGetV1ProjectsRefConfigAuthThirdPartyAuth<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
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
        ? getGetV1ProjectsRefConfigAuthThirdPartyAuthKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
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
          client.v1.projects[':ref'].config.auth['third-party-auth'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthThirdPartyAuth<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
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
        ? getGetV1ProjectsRefConfigAuthThirdPartyAuthKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$get']
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
          client.v1.projects[':ref'].config.auth['third-party-auth'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigAuthThirdPartyAuthKey() {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth', 'POST'] as const
}

export function usePostV1ProjectsRefConfigAuthThirdPartyAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigAuthThirdPartyAuthKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['third-party-auth'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthThirdPartyAuthTpaIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', args] as const
}

export function useGetV1ProjectsRefConfigAuthThirdPartyAuthTpaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthThirdPartyAuthTpaIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
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
          client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthThirdPartyAuthTpaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthThirdPartyAuthTpaIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$get']
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
          client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdKey() {
  return ['v1', '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['third-party-auth'][':tpa_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth['third-party-auth'][':tpa_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefPauseKey() {
  return ['v1', '/v1/projects/:ref/pause', 'POST'] as const
}

export function usePostV1ProjectsRefPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['pause']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefRestartKey() {
  return ['v1', '/v1/projects/:ref/restart', 'POST'] as const
}

export function usePostV1ProjectsRefRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restart']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['restart']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefRestoreKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/restore', args] as const
}

export function useGetV1ProjectsRefRestore<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefRestore<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefRestoreKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].restore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefRestoreKey() {
  return ['v1', '/v1/projects/:ref/restore', 'POST'] as const
}

export function usePostV1ProjectsRefRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefRestoreCancelKey() {
  return ['v1', '/v1/projects/:ref/restore/cancel', 'POST'] as const
}

export function usePostV1ProjectsRefRestoreCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefRestoreCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['restore']['cancel']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].restore.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefBillingAddonsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/billing/addons', args] as const
}

export function useGetV1ProjectsRefBillingAddons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBillingAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].billing.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefBillingAddons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefBillingAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].billing.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefBillingAddonsKey() {
  return ['v1', '/v1/projects/:ref/billing/addons', 'PATCH'] as const
}

export function usePatchV1ProjectsRefBillingAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefBillingAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['billing']['addons']['$patch']>
        },
      ) => parseResponse(client.v1.projects[':ref'].billing.addons.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefBillingAddonsAddonVariantKey() {
  return ['v1', '/v1/projects/:ref/billing/addons/:addon_variant', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefBillingAddonsAddonVariant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefBillingAddonsAddonVariantKey()
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
            (typeof client.v1.projects)[':ref']['billing']['addons'][':addon_variant']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].billing.addons[':addon_variant'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefClaimTokenKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/claim-token', args] as const
}

export function useGetV1ProjectsRefClaimToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefClaimTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['claim-token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefClaimToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefClaimTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref']['claim-token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefClaimTokenKey() {
  return ['v1', '/v1/projects/:ref/claim-token', 'POST'] as const
}

export function usePostV1ProjectsRefClaimToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefClaimTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$post']> },
      ) => parseResponse(client.v1.projects[':ref']['claim-token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefClaimTokenKey() {
  return ['v1', '/v1/projects/:ref/claim-token', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefClaimToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefClaimTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['claim-token']['$delete']> },
      ) => parseResponse(client.v1.projects[':ref']['claim-token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefAdvisorsPerformanceKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/advisors/performance', args] as const
}

export function useGetV1ProjectsRefAdvisorsPerformance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
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
        ? getGetV1ProjectsRefAdvisorsPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].advisors.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAdvisorsPerformance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
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
        ? getGetV1ProjectsRefAdvisorsPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['advisors']['performance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].advisors.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAdvisorsSecurityKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/advisors/security', args] as const
}

export function useGetV1ProjectsRefAdvisorsSecurity<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefAdvisorsSecurityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].advisors.security.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAdvisorsSecurity<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefAdvisorsSecurityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['advisors']['security']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].advisors.security.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsLogsAllKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs.all', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsLogsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsLogsAllKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsLogsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsLogsAllKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs.all']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['logs.all'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsLogsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsLogsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints.logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsLogsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints.logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefAnalyticsEndpointsLogsKey() {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/logs', 'POST'] as const
}

export function usePostV1ProjectsRefAnalyticsEndpointsLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefAnalyticsEndpointsLogsKey()
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
            (typeof client.v1.projects)[':ref']['analytics']['endpoints']['logs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].analytics.endpoints.logs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsUsageApiCountsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/usage.api-counts', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsUsageApiCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsUsageApiCountsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsUsageApiCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsUsageApiCountsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-counts']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['usage.api-counts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/usage.api-requests-count', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsUsageApiRequestsCountKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['usage.api-requests-count']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['usage.api-requests-count'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/functions.combined-stats', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStats<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsFunctionsCombinedStatsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['functions.combined-stats']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints['functions.combined-stats'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefAnalyticsEndpointsMetricsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/analytics/endpoints/metrics', args] as const
}

export function useGetV1ProjectsRefAnalyticsEndpointsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsMetricsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints.metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefAnalyticsEndpointsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
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
        ? getGetV1ProjectsRefAnalyticsEndpointsMetricsKey(args)
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
                (typeof client.v1.projects)[':ref']['analytics']['endpoints']['metrics']['$get']
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
          client.v1.projects[':ref'].analytics.endpoints.metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefCliLoginRoleKey() {
  return ['v1', '/v1/projects/:ref/cli/login-role', 'POST'] as const
}

export function usePostV1ProjectsRefCliLoginRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefCliLoginRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].cli['login-role'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefCliLoginRoleKey() {
  return ['v1', '/v1/projects/:ref/cli/login-role', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefCliLoginRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefCliLoginRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['cli']['login-role']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':ref'].cli['login-role'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseMigrationsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/migrations', args] as const
}

export function useGetV1ProjectsRefDatabaseMigrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
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
        ? getGetV1ProjectsRefDatabaseMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseMigrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
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
        ? getGetV1ProjectsRefDatabaseMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefDatabaseMigrationsKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'PUT'] as const
}

export function usePutV1ProjectsRefDatabaseMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefDatabaseMigrationsKey()
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
            (typeof client.v1.projects)[':ref']['database']['migrations']['$put']
          >
        },
      ) => parseResponse(client.v1.projects[':ref'].database.migrations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseMigrationsKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseMigrationsKey()
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
            (typeof client.v1.projects)[':ref']['database']['migrations']['$post']
          >
        },
      ) => parseResponse(client.v1.projects[':ref'].database.migrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefDatabaseMigrationsKey() {
  return ['v1', '/v1/projects/:ref/database/migrations', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefDatabaseMigrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['migrations']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefDatabaseMigrationsKey()
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
            (typeof client.v1.projects)[':ref']['database']['migrations']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref'].database.migrations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseMigrationsVersionKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/migrations/:version', args] as const
}

export function useGetV1ProjectsRefDatabaseMigrationsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
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
        ? getGetV1ProjectsRefDatabaseMigrationsVersionKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
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
          client.v1.projects[':ref'].database.migrations[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseMigrationsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
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
        ? getGetV1ProjectsRefDatabaseMigrationsVersionKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$get']
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
          client.v1.projects[':ref'].database.migrations[':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefDatabaseMigrationsVersionKey() {
  return ['v1', '/v1/projects/:ref/database/migrations/:version', 'PATCH'] as const
}

export function usePatchV1ProjectsRefDatabaseMigrationsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefDatabaseMigrationsVersionKey()
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
            (typeof client.v1.projects)[':ref']['database']['migrations'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.migrations[':version'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseQueryKey() {
  return ['v1', '/v1/projects/:ref/database/query', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].database.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseQueryReadOnlyKey() {
  return ['v1', '/v1/projects/:ref/database/query/read-only', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseQueryReadOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseQueryReadOnlyKey()
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
            (typeof client.v1.projects)[':ref']['database']['query']['read-only']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.query['read-only'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseWebhooksEnableKey() {
  return ['v1', '/v1/projects/:ref/database/webhooks/enable', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseWebhooksEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseWebhooksEnableKey()
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
            (typeof client.v1.projects)[':ref']['database']['webhooks']['enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.webhooks.enable.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseContextKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/context', args] as const
}

export function useGetV1ProjectsRefDatabaseContext<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseContext<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefDatabasePasswordKey() {
  return ['v1', '/v1/projects/:ref/database/password', 'PATCH'] as const
}

export function usePatchV1ProjectsRefDatabasePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['password']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefDatabasePasswordKey()
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
            (typeof client.v1.projects)[':ref']['database']['password']['$patch']
          >
        },
      ) => parseResponse(client.v1.projects[':ref'].database.password.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseJitKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/jit', args] as const
}

export function useGetV1ProjectsRefDatabaseJit<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseJitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].database.jit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseJit<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseJitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].database.jit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefDatabaseJitKey() {
  return ['v1', '/v1/projects/:ref/database/jit', 'PUT'] as const
}

export function usePutV1ProjectsRefDatabaseJit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefDatabaseJitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$put']>
        },
      ) => parseResponse(client.v1.projects[':ref'].database.jit.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseJitKey() {
  return ['v1', '/v1/projects/:ref/database/jit', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseJit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseJitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].database.jit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseJitListKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/jit/list', args] as const
}

export function useGetV1ProjectsRefDatabaseJitList<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
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
        ? getGetV1ProjectsRefDatabaseJitListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.jit.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseJitList<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
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
        ? getGetV1ProjectsRefDatabaseJitListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.jit.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseJitInviteKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseJitInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseJitInviteKey()
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
            (typeof client.v1.projects)[':ref']['database']['jit']['invite']['$post']
          >
        },
      ) => parseResponse(client.v1.projects[':ref'].database.jit.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseJitInviteAcceptKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite/accept', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseJitInviteAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseJitInviteAcceptKey()
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
            (typeof client.v1.projects)[':ref']['database']['jit']['invite']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.jit.invite.accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefDatabaseJitInviteInviteIdKey() {
  return ['v1', '/v1/projects/:ref/database/jit/invite/:invite_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefDatabaseJitInviteInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefDatabaseJitInviteInviteIdKey()
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
            (typeof client.v1.projects)[':ref']['database']['jit']['invite'][':invite_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.jit.invite[':invite_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefDatabaseJitUserIdKey() {
  return ['v1', '/v1/projects/:ref/database/jit/:user_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefDatabaseJitUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefDatabaseJitUserIdKey()
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
            (typeof client.v1.projects)[':ref']['database']['jit'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.jit[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseOpenapiKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/openapi', args] as const
}

export function useGetV1ProjectsRefDatabaseOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefFunctionsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/functions', args] as const
}

export function useGetV1ProjectsRefFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefFunctionsKey() {
  return ['v1', '/v1/projects/:ref/functions', 'PUT'] as const
}

export function usePutV1ProjectsRefFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$put']> },
      ) => parseResponse(client.v1.projects[':ref'].functions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefFunctionsKey() {
  return ['v1', '/v1/projects/:ref/functions', 'POST'] as const
}

export function usePostV1ProjectsRefFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$post']> },
      ) => parseResponse(client.v1.projects[':ref'].functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefFunctionsKey() {
  return ['v1', '/v1/projects/:ref/functions', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['$delete']> },
      ) => parseResponse(client.v1.projects[':ref'].functions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefFunctionsDeployKey() {
  return ['v1', '/v1/projects/:ref/functions/deploy', 'POST'] as const
}

export function usePostV1ProjectsRefFunctionsDeploy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefFunctionsDeployKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['functions']['deploy']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].functions.deploy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefFunctionsFunctionSlugKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', args] as const
}

export function useGetV1ProjectsRefFunctionsFunctionSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
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
        ? getGetV1ProjectsRefFunctionsFunctionSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefFunctionsFunctionSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
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
        ? getGetV1ProjectsRefFunctionsFunctionSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefFunctionsFunctionSlugKey() {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefFunctionsFunctionSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefFunctionsFunctionSlugKey()
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
            (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsRefFunctionsFunctionSlugKey() {
  return ['v1', '/v1/projects/:ref/functions/:function_slug', 'PATCH'] as const
}

export function usePatchV1ProjectsRefFunctionsFunctionSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefFunctionsFunctionSlugKey()
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
            (typeof client.v1.projects)[':ref']['functions'][':function_slug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].functions[':function_slug'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefFunctionsFunctionSlugBodyKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/functions/:function_slug/body', args] as const
}

export function useGetV1ProjectsRefFunctionsFunctionSlugBody<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
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
        ? getGetV1ProjectsRefFunctionsFunctionSlugBodyKey(args)
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
                (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
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
          client.v1.projects[':ref'].functions[':function_slug'].body.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefFunctionsFunctionSlugBody<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
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
        ? getGetV1ProjectsRefFunctionsFunctionSlugBodyKey(args)
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
                (typeof client.v1.projects)[':ref']['functions'][':function_slug']['body']['$get']
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
          client.v1.projects[':ref'].functions[':function_slug'].body.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefStorageBucketsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/storage/buckets', args] as const
}

export function useGetV1ProjectsRefStorageBuckets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefStorageBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].storage.buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefStorageBuckets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefStorageBucketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['storage']['buckets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].storage.buckets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDiskKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/disk', args] as const
}

export function useGetV1ProjectsRefConfigDisk<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigDiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].config.disk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDisk<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigDiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':ref'].config.disk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigDiskKey() {
  return ['v1', '/v1/projects/:ref/config/disk', 'POST'] as const
}

export function usePostV1ProjectsRefConfigDisk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigDiskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['$post']>
        },
      ) => parseResponse(client.v1.projects[':ref'].config.disk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDiskUtilKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/disk/util', args] as const
}

export function useGetV1ProjectsRefConfigDiskUtil<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
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
        ? getGetV1ProjectsRefConfigDiskUtilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.disk.util.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDiskUtil<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
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
        ? getGetV1ProjectsRefConfigDiskUtilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['util']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.disk.util.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDiskAutoscaleKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/disk/autoscale', args] as const
}

export function useGetV1ProjectsRefConfigDiskAutoscale<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
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
        ? getGetV1ProjectsRefConfigDiskAutoscaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.disk.autoscale.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDiskAutoscale<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
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
        ? getGetV1ProjectsRefConfigDiskAutoscaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':ref']['config']['disk']['autoscale']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.disk.autoscale.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigStorageKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/storage', args] as const
}

export function useGetV1ProjectsRefConfigStorage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigStorage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigStorageKey() {
  return ['v1', '/v1/projects/:ref/config/storage', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['config']['storage']['$patch']>
        },
      ) => parseResponse(client.v1.projects[':ref'].config.storage.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDatabasePgbouncerKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pgbouncer', args] as const
}

export function useGetV1ProjectsRefConfigDatabasePgbouncer<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePgbouncerKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
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
          client.v1.projects[':ref'].config.database.pgbouncer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDatabasePgbouncer<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePgbouncerKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['pgbouncer']['$get']
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
          client.v1.projects[':ref'].config.database.pgbouncer.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDatabasePoolerKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/pooler', args] as const
}

export function useGetV1ProjectsRefConfigDatabasePooler<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePoolerKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.database.pooler.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDatabasePooler<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePoolerKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.database.pooler.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigDatabasePoolerKey() {
  return ['v1', '/v1/projects/:ref/config/database/pooler', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigDatabasePooler<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigDatabasePoolerKey()
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
            (typeof client.v1.projects)[':ref']['config']['database']['pooler']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref'].config.database.pooler.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigDatabasePostgresKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/database/postgres', args] as const
}

export function useGetV1ProjectsRefConfigDatabasePostgres<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePostgresKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
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
          client.v1.projects[':ref'].config.database.postgres.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigDatabasePostgres<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
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
        ? getGetV1ProjectsRefConfigDatabasePostgresKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$get']
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
          client.v1.projects[':ref'].config.database.postgres.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefConfigDatabasePostgresKey() {
  return ['v1', '/v1/projects/:ref/config/database/postgres', 'PUT'] as const
}

export function usePutV1ProjectsRefConfigDatabasePostgres<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefConfigDatabasePostgresKey()
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
            (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref'].config.database.postgres.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigDatabasePostgresKey() {
  return ['v1', '/v1/projects/:ref/config/database/postgres', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigDatabasePostgres<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigDatabasePostgresKey()
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
            (typeof client.v1.projects)[':ref']['config']['database']['postgres']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.database.postgres.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigRealtimeKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/config/realtime', args] as const
}

export function useGetV1ProjectsRefConfigRealtime<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigRealtimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigRealtime<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefConfigRealtimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].config.realtime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefConfigRealtimeKey() {
  return ['v1', '/v1/projects/:ref/config/realtime', 'PATCH'] as const
}

export function usePatchV1ProjectsRefConfigRealtime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefConfigRealtimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['$patch']>
        },
      ) => parseResponse(client.v1.projects[':ref'].config.realtime.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigRealtimeShutdownKey() {
  return ['v1', '/v1/projects/:ref/config/realtime/shutdown', 'POST'] as const
}

export function usePostV1ProjectsRefConfigRealtimeShutdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigRealtimeShutdownKey()
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
            (typeof client.v1.projects)[':ref']['config']['realtime']['shutdown']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.realtime.shutdown.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthSsoProvidersKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers', args] as const
}

export function useGetV1ProjectsRefConfigAuthSsoProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSsoProvidersKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
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
          client.v1.projects[':ref'].config.auth.sso.providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthSsoProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSsoProvidersKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$get']
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
          client.v1.projects[':ref'].config.auth.sso.providers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefConfigAuthSsoProvidersKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers', 'POST'] as const
}

export function usePostV1ProjectsRefConfigAuthSsoProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefConfigAuthSsoProvidersKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth.sso.providers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefConfigAuthSsoProvidersProviderIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', args] as const
}

export function useGetV1ProjectsRefConfigAuthSsoProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSsoProvidersProviderIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
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
          client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefConfigAuthSsoProvidersProviderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
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
        ? getGetV1ProjectsRefConfigAuthSsoProvidersProviderIdKey(args)
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
                (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$get']
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
          client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', 'PUT'] as const
}

export function usePutV1ProjectsRefConfigAuthSsoProvidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsRefConfigAuthSsoProvidersProviderIdKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdKey() {
  return ['v1', '/v1/projects/:ref/config/auth/sso/providers/:provider_id', 'DELETE'] as const
}

export function useDeleteV1ProjectsRefConfigAuthSsoProvidersProviderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsRefConfigAuthSsoProvidersProviderIdKey()
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
            (typeof client.v1.projects)[':ref']['config']['auth']['sso']['providers'][':provider_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].config.auth.sso.providers[':provider_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseBackupsKey(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
) {
  return ['v1', '/v1/projects/:ref/database/backups', args] as const
}

export function useGetV1ProjectsRefDatabaseBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsRefDatabaseBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':ref'].database.backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePitrKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore-pitr', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseBackupsRestorePitr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseBackupsRestorePitrKey()
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
            (typeof client.v1.projects)[':ref']['database']['backups']['restore-pitr']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.backups['restore-pitr'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseBackupsRestorePointKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/restore-point', args] as const
}

export function useGetV1ProjectsRefDatabaseBackupsRestorePoint<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
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
        ? getGetV1ProjectsRefDatabaseBackupsRestorePointKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
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
          client.v1.projects[':ref'].database.backups['restore-point'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseBackupsRestorePoint<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
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
        ? getGetV1ProjectsRefDatabaseBackupsRestorePointKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$get']
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
          client.v1.projects[':ref'].database.backups['restore-point'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseBackupsRestorePointKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore-point', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseBackupsRestorePoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseBackupsRestorePointKey()
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
            (typeof client.v1.projects)[':ref']['database']['backups']['restore-point']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.backups['restore-point'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseBackupsRestoreKey() {
  return ['v1', '/v1/projects/:ref/database/backups/restore', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseBackupsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseBackupsRestoreKey()
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
            (typeof client.v1.projects)[':ref']['database']['backups']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.backups.restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsRefDatabaseBackupsScheduleKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
) {
  return ['v1', '/v1/projects/:ref/database/backups/schedule', args] as const
}

export function useGetV1ProjectsRefDatabaseBackupsSchedule<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
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
        ? getGetV1ProjectsRefDatabaseBackupsScheduleKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
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
          client.v1.projects[':ref'].database.backups.schedule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsRefDatabaseBackupsSchedule<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
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
        ? getGetV1ProjectsRefDatabaseBackupsScheduleKey(args)
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
                (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$get']
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
          client.v1.projects[':ref'].database.backups.schedule.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsRefDatabaseBackupsScheduleKey() {
  return ['v1', '/v1/projects/:ref/database/backups/schedule', 'PATCH'] as const
}

export function usePatchV1ProjectsRefDatabaseBackupsSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsRefDatabaseBackupsScheduleKey()
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
            (typeof client.v1.projects)[':ref']['database']['backups']['schedule']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':ref'].database.backups.schedule.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsRefDatabaseBackupsUndoKey() {
  return ['v1', '/v1/projects/:ref/database/backups/undo', 'POST'] as const
}

export function usePostV1ProjectsRefDatabaseBackupsUndo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsRefDatabaseBackupsUndoKey()
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
            (typeof client.v1.projects)[':ref']['database']['backups']['undo']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':ref'].database.backups.undo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsSlugEntitlementsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/entitlements', args] as const
}

export function useGetV1OrganizationsSlugEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':slug'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsSlugEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':slug'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsSlugMembersKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/members', args] as const
}

export function useGetV1OrganizationsSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations[':slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations[':slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsSlugKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug', args] as const
}

export function useGetV1OrganizationsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsSlugProjectClaimTokenKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:slug/project-claim/:token', args] as const
}

export function useGetV1OrganizationsSlugProjectClaimToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
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
        ? getGetV1OrganizationsSlugProjectClaimTokenKey(args)
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
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
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
          client.v1.organizations[':slug']['project-claim'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsSlugProjectClaimToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
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
        ? getGetV1OrganizationsSlugProjectClaimTokenKey(args)
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
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$get']
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
          client.v1.organizations[':slug']['project-claim'][':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsSlugProjectClaimTokenKey() {
  return ['v1', '/v1/organizations/:slug/project-claim/:token', 'POST'] as const
}

export function usePostV1OrganizationsSlugProjectClaimToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsSlugProjectClaimTokenKey()
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
            (typeof client.v1.organizations)[':slug']['project-claim'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':slug']['project-claim'][':token'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsSlugProjectsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
) {
  return ['v1', '/v1/organizations/:slug/projects', args] as const
}

export function useGetV1OrganizationsSlugProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':slug'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsSlugProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':slug']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1OrganizationsSlugProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':slug']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':slug'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
