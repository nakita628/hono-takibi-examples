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

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1FilesFileKeyKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
) {
  return ['v1', '/v1/files/:file_key', args] as const
}

export function useGetV1FilesFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyNodesKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/nodes', args] as const
}

export function useGetV1FilesFileKeyNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ImagesFileKeyKey(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
) {
  return ['v1', '/v1/images/:file_key', args] as const
}

export function useGetV1ImagesFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImagesFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.images[':file_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ImagesFileKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ImagesFileKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.images[':file_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyImagesKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/images', args] as const
}

export function useGetV1FilesFileKeyImages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyImages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyMetaKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/meta', args] as const
}

export function useGetV1FilesFileKeyMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FilesFileKeyDuplicateKey() {
  return ['v1', '/v1/files/:file_key/duplicate', 'POST'] as const
}

export function usePostV1FilesFileKeyDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesFileKeyDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']> },
      ) => parseResponse(client.v1.files[':file_key'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function usePostV1Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.teams.$post> }) =>
        parseResponse(client.v1.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id', args] as const
}

export function useGetV1TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdInvitesKey() {
  return ['v1', '/v1/teams/:team_id/invites', 'POST'] as const
}

export function usePostV1TeamsTeamIdInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']> },
      ) => parseResponse(client.v1.teams[':team_id'].invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdProjectsKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/projects', args] as const
}

export function useGetV1TeamsTeamIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdMetaKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/meta', args] as const
}

export function useGetV1ProjectsProjectIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsProjectIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsProjectIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdFilesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/files', args] as const
}

export function useGetV1ProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsProjectIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsProjectIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdFoldersKey() {
  return ['v1', '/v1/teams/:team_id/folders', 'POST'] as const
}

export function usePostV1TeamsTeamIdFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']> },
      ) => parseResponse(client.v1.teams[':team_id'].folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsTeamIdFoldersKey(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
) {
  return ['v2', '/v2/teams/:team_id/folders', args] as const
}

export function useGetV2TeamsTeamIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':team_id'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':team_id'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FoldersFolderIdFoldersKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/folders', args] as const
}

export function useGetV2FoldersFolderIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FoldersFolderIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FoldersFolderIdFilesKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/files', args] as const
}

export function useGetV2FoldersFolderIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FoldersFolderIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FoldersFolderIdMetaKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/meta', args] as const
}

export function useGetV2FoldersFolderIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FoldersFolderIdMeta<TError = unknown>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2FoldersFolderIdMetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.folders[':folder_id'].meta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyVersionsKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/versions', args] as const
}

export function useGetV1FilesFileKeyVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyCommentsKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/comments', args] as const
}

export function useGetV1FilesFileKeyComments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyComments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FilesFileKeyCommentsKey() {
  return ['v1', '/v1/files/:file_key/comments', 'POST'] as const
}

export function usePostV1FilesFileKeyComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesFileKeyCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']> },
      ) => parseResponse(client.v1.files[':file_key'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FilesFileKeyCommentsCommentIdKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id', 'DELETE'] as const
}

export function useDeleteV1FilesFileKeyCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FilesFileKeyCommentsCommentIdKey()
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
            (typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.files[':file_key'].comments[':comment_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileKeyCommentsCommentIdReactionsKey(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
) {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', args] as const
}

export function useGetV1FilesFileKeyCommentsCommentIdReactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
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
        ? getGetV1FilesFileKeyCommentsCommentIdReactionsKey(args)
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
                (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
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
          client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyCommentsCommentIdReactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
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
        ? getGetV1FilesFileKeyCommentsCommentIdReactionsKey(args)
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
                (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
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
          client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FilesFileKeyCommentsCommentIdReactionsKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', 'POST'] as const
}

export function usePostV1FilesFileKeyCommentsCommentIdReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesFileKeyCommentsCommentIdReactionsKey()
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
            (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.files[':file_key'].comments[':comment_id'].reactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FilesFileKeyCommentsCommentIdReactionsKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', 'DELETE'] as const
}

export function useDeleteV1FilesFileKeyCommentsCommentIdReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FilesFileKeyCommentsCommentIdReactionsKey()
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
            (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.files[':file_key'].comments[':comment_id'].reactions.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MeKey() {
  return ['v1', '/v1/me'] as const
}

export function useGetV1Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV1MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Me<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetV1MeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdComponentsKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/components', args] as const
}

export function useGetV1TeamsTeamIdComponents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdComponents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyComponentsKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/components', args] as const
}

export function useGetV1FilesFileKeyComponents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyComponents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyComponentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].components.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ComponentsKeyKey(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
) {
  return ['v1', '/v1/components/:key', args] as const
}

export function useGetV1ComponentsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ComponentsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.components[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ComponentsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ComponentsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.components[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdComponentSetsKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/component_sets', args] as const
}

export function useGetV1TeamsTeamIdComponentSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdComponentSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':team_id'].component_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdComponentSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdComponentSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':team_id'].component_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyComponentSetsKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/component_sets', args] as const
}

export function useGetV1FilesFileKeyComponentSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyComponentSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].component_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyComponentSets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyComponentSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].component_sets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ComponentSetsKeyKey(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
) {
  return ['v1', '/v1/component_sets/:key', args] as const
}

export function useGetV1ComponentSetsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ComponentSetsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.component_sets[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ComponentSetsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ComponentSetsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.component_sets[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdStylesKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/styles', args] as const
}

export function useGetV1TeamsTeamIdStyles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdStylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].styles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdStyles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdStylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.teams[':team_id'].styles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyStylesKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/styles', args] as const
}

export function useGetV1FilesFileKeyStyles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyStylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].styles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyStyles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyStylesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file_key'].styles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StylesKeyKey(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
) {
  return ['v1', '/v1/styles/:key', args] as const
}

export function useGetV1StylesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StylesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.styles[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StylesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StylesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.styles[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WebhooksKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  return ['v2', '/v2/webhooks', args] as const
}

export function useGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WebhooksKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function usePostV2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.webhooks.$post> }) =>
        parseResponse(client.v2.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhook_id', args] as const
}

export function useGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhook_id', 'PUT'] as const
}

export function usePutV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']> },
      ) => parseResponse(client.v2.webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.v2.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsTeamIdWebhooksKey(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
) {
  return ['v2', '/v2/teams/:team_id/webhooks', args] as const
}

export function useGetV2TeamsTeamIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':team_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':team_id'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdRequestsKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhook_id/requests', args] as const
}

export function useGetV2WebhooksWebhookIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.webhooks[':webhook_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.webhooks[':webhook_id'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ActivityLogsKey(
  args: InferRequestType<typeof client.v1.activity_logs.$get>,
) {
  return ['v1', '/v1/activity_logs', args] as const
}

export function useGetV1ActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.v1.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ActivityLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ActivityLogs<TError = unknown>(
  args: InferRequestType<typeof client.v1.activity_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ActivityLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.activity_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DeveloperLogsKey() {
  return ['v1', '/v1/developer_logs', 'POST'] as const
}

export function usePostV1DeveloperLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.developer_logs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.developer_logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeveloperLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.developer_logs.$post> }) =>
        parseResponse(client.v1.developer_logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AiUsageDailyKey(
  args: InferRequestType<typeof client.v1.ai_usage.daily.$get>,
) {
  return ['v1', '/v1/ai_usage/daily', args] as const
}

export function useGetV1AiUsageDaily<TError = unknown>(
  args: InferRequestType<typeof client.v1.ai_usage.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AiUsageDailyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ai_usage.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AiUsageDaily<TError = unknown>(
  args: InferRequestType<typeof client.v1.ai_usage.daily.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AiUsageDailyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.ai_usage.daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  return ['v1', '/v1/payments', args] as const
}

export function useGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Payments<TError = unknown>(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyVariablesLocalKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/variables/local', args] as const
}

export function useGetV1FilesFileKeyVariablesLocal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyVariablesLocalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].variables.local.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyVariablesLocal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyVariablesLocalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].variables.local.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FilesFileKeyVariablesPublishedKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/variables/published', args] as const
}

export function useGetV1FilesFileKeyVariablesPublished<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
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
        ? getGetV1FilesFileKeyVariablesPublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].variables.published.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyVariablesPublished<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
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
        ? getGetV1FilesFileKeyVariablesPublishedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].variables.published.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FilesFileKeyVariablesKey() {
  return ['v1', '/v1/files/:file_key/variables', 'POST'] as const
}

export function usePostV1FilesFileKeyVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesFileKeyVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']> },
      ) => parseResponse(client.v1.files[':file_key'].variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileKeyDevResourcesKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/dev_resources', args] as const
}

export function useGetV1FilesFileKeyDevResources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyDevResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].dev_resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFileKeyDevResources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1FilesFileKeyDevResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.files[':file_key'].dev_resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DevResourcesKey() {
  return ['v1', '/v1/dev_resources', 'PUT'] as const
}

export function usePutV1DevResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dev_resources.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DevResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dev_resources.$put> }) =>
        parseResponse(client.v1.dev_resources.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DevResourcesKey() {
  return ['v1', '/v1/dev_resources', 'POST'] as const
}

export function usePostV1DevResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dev_resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dev_resources.$post> }) =>
        parseResponse(client.v1.dev_resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FilesFileKeyDevResourcesDevResourceIdKey() {
  return ['v1', '/v1/files/:file_key/dev_resources/:dev_resource_id', 'DELETE'] as const
}

export function useDeleteV1FilesFileKeyDevResourcesDevResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FilesFileKeyDevResourcesDevResourceIdKey()
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
            (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.files[':file_key'].dev_resources[':dev_resource_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyComponentActionsKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/actions', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyComponentActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyComponentActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].component.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyComponentActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyComponentActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].component.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyComponentUsagesKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/usages', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyComponentUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyComponentUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].component.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyComponentUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyComponentUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].component.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyStyleActionsKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/actions', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyStyleActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyStyleActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].style.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyStyleActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyStyleActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].style.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyStyleUsagesKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/usages', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyStyleUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyStyleUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].style.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyStyleUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyStyleUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].style.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyVariableActionsKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/actions', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyVariableActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyVariableActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].variable.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyVariableActions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyVariableActionsKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
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
          client.v1.analytics.libraries[':file_key'].variable.actions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AnalyticsLibrariesFileKeyVariableUsagesKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/usages', args] as const
}

export function useGetV1AnalyticsLibrariesFileKeyVariableUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyVariableUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].variable.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnalyticsLibrariesFileKeyVariableUsages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
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
        ? getGetV1AnalyticsLibrariesFileKeyVariableUsagesKey(args)
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
                (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
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
          client.v1.analytics.libraries[':file_key'].variable.usages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OembedKey(args: InferRequestType<typeof client.v1.oembed.$get>) {
  return ['v1', '/v1/oembed', args] as const
}

export function useGetV1Oembed<TError = unknown>(
  args: InferRequestType<typeof client.v1.oembed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OembedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oembed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Oembed<TError = unknown>(
  args: InferRequestType<typeof client.v1.oembed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OembedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.oembed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
