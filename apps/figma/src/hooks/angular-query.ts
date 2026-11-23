import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV1FilesFileKeyQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
) {
  return ['v1', '/v1/files/:file_key', args] as const
}

export function getV1FilesFileKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyQueryKey>
  >({
    queryKey: getV1FilesFileKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1FilesFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FilesFileKeyNodesQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/nodes', args] as const
}

export function getV1FilesFileKeyNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyNodesQueryKey>
  >({
    queryKey: getV1FilesFileKeyNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileKeyNodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ImagesFileKeyQueryKey(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
) {
  return ['v1', '/v1/images/:file_key', args] as const
}

export function getV1ImagesFileKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesFileKeyQueryKey>
  >({
    queryKey: getV1ImagesFileKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.images[':file_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ImagesFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.images)[':file_key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesFileKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ImagesFileKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FilesFileKeyImagesQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/images', args] as const
}

export function getV1FilesFileKeyImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyImagesQueryKey>
  >({
    queryKey: getV1FilesFileKeyImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyMetaQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/meta', args] as const
}

export function getV1FilesFileKeyMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyMetaQueryKey>
  >({
    queryKey: getV1FilesFileKeyMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FilesFileKeyMetaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1FilesFileKeyDuplicateMutationKey() {
  return ['v1', '/v1/files/:file_key/duplicate', 'POST'] as const
}

export function getPostV1FilesFileKeyDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FilesFileKeyDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>,
    ) {
      return parseResponse(client.v1.files[':file_key'].duplicate.$post(args, options))
    },
  })
}

export function injectPostV1FilesFileKeyDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.files)[':file_key']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FilesFileKeyDuplicateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1TeamsMutationKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function getPostV1TeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.teams.$post>) {
      return parseResponse(client.v1.teams.$post(args, options))
    },
  })
}

export function injectPostV1Teams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id', args] as const
}

export function getV1TeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdQueryKey>
  >({
    queryKey: getV1TeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':team_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1TeamsTeamIdInvitesMutationKey() {
  return ['v1', '/v1/teams/:team_id/invites', 'POST'] as const
}

export function getPostV1TeamsTeamIdInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsTeamIdInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']>,
    ) {
      return parseResponse(client.v1.teams[':team_id'].invites.$post(args, options))
    },
  })
}

export function injectPostV1TeamsTeamIdInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['invites']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':team_id']['invites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TeamsTeamIdInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1TeamsTeamIdProjectsQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/projects', args] as const
}

export function getV1TeamsTeamIdProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdProjectsQueryKey>
  >({
    queryKey: getV1TeamsTeamIdProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':team_id'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TeamsTeamIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TeamsTeamIdProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdMetaQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/meta', args] as const
}

export function getV1ProjectsProjectIdMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdMetaQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectIdMetaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectIdFilesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
) {
  return ['v1', '/v1/projects/:project_id/files', args] as const
}

export function getV1ProjectsProjectIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdFilesQueryKey>
  >({
    queryKey: getV1ProjectsProjectIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1TeamsTeamIdFoldersMutationKey() {
  return ['v1', '/v1/teams/:team_id/folders', 'POST'] as const
}

export function getPostV1TeamsTeamIdFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsTeamIdFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']>,
    ) {
      return parseResponse(client.v1.teams[':team_id'].folders.$post(args, options))
    },
  })
}

export function injectPostV1TeamsTeamIdFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['folders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':team_id']['folders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TeamsTeamIdFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TeamsTeamIdFoldersQueryKey(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
) {
  return ['v2', '/v2/teams/:team_id/folders', args] as const
}

export function getV2TeamsTeamIdFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamsTeamIdFoldersQueryKey>
  >({
    queryKey: getV2TeamsTeamIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.teams[':team_id'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TeamsTeamIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2TeamsTeamIdFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2FoldersFolderIdFoldersQueryKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/folders', args] as const
}

export function getV2FoldersFolderIdFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FoldersFolderIdFoldersQueryKey>
  >({
    queryKey: getV2FoldersFolderIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.folders[':folder_id'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FoldersFolderIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FoldersFolderIdFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2FoldersFolderIdFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2FoldersFolderIdFilesQueryKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/files', args] as const
}

export function getV2FoldersFolderIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FoldersFolderIdFilesQueryKey>
  >({
    queryKey: getV2FoldersFolderIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.folders[':folder_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FoldersFolderIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FoldersFolderIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2FoldersFolderIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2FoldersFolderIdMetaQueryKey(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
) {
  return ['v2', '/v2/folders/:folder_id/meta', args] as const
}

export function getV2FoldersFolderIdMetaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FoldersFolderIdMetaQueryKey>
  >({
    queryKey: getV2FoldersFolderIdMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.folders[':folder_id'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FoldersFolderIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FoldersFolderIdMetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2FoldersFolderIdMetaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyVersionsQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/versions', args] as const
}

export function getV1FilesFileKeyVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyVersionsQueryKey>
  >({
    queryKey: getV1FilesFileKeyVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyCommentsQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/comments', args] as const
}

export function getV1FilesFileKeyCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyCommentsQueryKey>
  >({
    queryKey: getV1FilesFileKeyCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1FilesFileKeyCommentsMutationKey() {
  return ['v1', '/v1/files/:file_key/comments', 'POST'] as const
}

export function getPostV1FilesFileKeyCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FilesFileKeyCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']>,
    ) {
      return parseResponse(client.v1.files[':file_key'].comments.$post(args, options))
    },
  })
}

export function injectPostV1FilesFileKeyComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FilesFileKeyCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1FilesFileKeyCommentsCommentIdMutationKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteV1FilesFileKeyCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FilesFileKeyCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.files[':file_key'].comments[':comment_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1FilesFileKeyCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.files)[':file_key']['comments'][':comment_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FilesFileKeyCommentsCommentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyCommentsCommentIdReactionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
) {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', args] as const
}

export function getV1FilesFileKeyCommentsCommentIdReactionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyCommentsCommentIdReactionsQueryKey>
  >({
    queryKey: getV1FilesFileKeyCommentsCommentIdReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyCommentsCommentIdReactions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyCommentsCommentIdReactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyCommentsCommentIdReactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1FilesFileKeyCommentsCommentIdReactionsMutationKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', 'POST'] as const
}

export function getPostV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1FilesFileKeyCommentsCommentIdReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.files[':file_key'].comments[':comment_id'].reactions.$post(args, options),
      )
    },
  })
}

export function injectPostV1FilesFileKeyCommentsCommentIdReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1FilesFileKeyCommentsCommentIdReactionsMutationKey() {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', 'DELETE'] as const
}

export function getDeleteV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FilesFileKeyCommentsCommentIdReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.files[':file_key'].comments[':comment_id'].reactions.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1FilesFileKeyCommentsCommentIdReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1MeQueryKey() {
  return ['v1', '/v1/me'] as const
}

export function getV1MeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeQueryKey>
  >({
    queryKey: getV1MeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Me<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1TeamsTeamIdComponentsQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/components', args] as const
}

export function getV1TeamsTeamIdComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdComponentsQueryKey>
  >({
    queryKey: getV1TeamsTeamIdComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':team_id'].components.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TeamsTeamIdComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TeamsTeamIdComponentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyComponentsQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/components', args] as const
}

export function getV1FilesFileKeyComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyComponentsQueryKey>
  >({
    queryKey: getV1FilesFileKeyComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].components.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyComponentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ComponentsKeyQueryKey(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
) {
  return ['v1', '/v1/components/:key', args] as const
}

export function getV1ComponentsKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.components)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ComponentsKeyQueryKey>
  >({
    queryKey: getV1ComponentsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.components[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ComponentsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.components)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ComponentsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ComponentsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1TeamsTeamIdComponentSetsQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/component_sets', args] as const
}

export function getV1TeamsTeamIdComponentSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdComponentSetsQueryKey>
  >({
    queryKey: getV1TeamsTeamIdComponentSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':team_id'].component_sets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TeamsTeamIdComponentSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdComponentSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1TeamsTeamIdComponentSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyComponentSetsQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/component_sets', args] as const
}

export function getV1FilesFileKeyComponentSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyComponentSetsQueryKey>
  >({
    queryKey: getV1FilesFileKeyComponentSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].component_sets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyComponentSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyComponentSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyComponentSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ComponentSetsKeyQueryKey(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
) {
  return ['v1', '/v1/component_sets/:key', args] as const
}

export function getV1ComponentSetsKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ComponentSetsKeyQueryKey>
  >({
    queryKey: getV1ComponentSetsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.component_sets[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ComponentSetsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ComponentSetsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ComponentSetsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1TeamsTeamIdStylesQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
) {
  return ['v1', '/v1/teams/:team_id/styles', args] as const
}

export function getV1TeamsTeamIdStylesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdStylesQueryKey>
  >({
    queryKey: getV1TeamsTeamIdStylesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':team_id'].styles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1TeamsTeamIdStyles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdStylesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TeamsTeamIdStylesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FilesFileKeyStylesQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/styles', args] as const
}

export function getV1FilesFileKeyStylesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyStylesQueryKey>
  >({
    queryKey: getV1FilesFileKeyStylesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].styles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyStyles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyStylesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyStylesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1StylesKeyQueryKey(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
) {
  return ['v1', '/v1/styles/:key', args] as const
}

export function getV1StylesKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StylesKeyQueryKey>
  >({
    queryKey: getV1StylesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.styles[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1StylesKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.styles)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StylesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StylesKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2WebhooksQueryKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  return ['v2', '/v2/webhooks', args] as const
}

export function getV2WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >({
    queryKey: getV2WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2WebhooksMutationKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function getPostV2WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.webhooks.$post>) {
      return parseResponse(client.v2.webhooks.$post(args, options))
    },
  })
}

export function injectPostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhook_id', args] as const
}

export function getV2WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
  >({
    queryKey: getV2WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2WebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhook_id', 'PUT'] as const
}

export function getPutV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']>) {
      return parseResponse(client.v2.webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function injectPutV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2WebhooksWebhookIdMutationKey() {
  return ['v2', '/v2/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v2.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TeamsTeamIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
) {
  return ['v2', '/v2/teams/:team_id/webhooks', args] as const
}

export function getV2TeamsTeamIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamsTeamIdWebhooksQueryKey>
  >({
    queryKey: getV2TeamsTeamIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.teams[':team_id'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TeamsTeamIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2TeamsTeamIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2WebhooksWebhookIdRequestsQueryKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
) {
  return ['v2', '/v2/webhooks/:webhook_id/requests', args] as const
}

export function getV2WebhooksWebhookIdRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksWebhookIdRequestsQueryKey>
  >({
    queryKey: getV2WebhooksWebhookIdRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.webhooks[':webhook_id'].requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2WebhooksWebhookIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WebhooksWebhookIdRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2WebhooksWebhookIdRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ActivityLogsQueryKey(
  args: InferRequestType<typeof client.v1.activity_logs.$get>,
) {
  return ['v1', '/v1/activity_logs', args] as const
}

export function getV1ActivityLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.activity_logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ActivityLogsQueryKey>
  >({
    queryKey: getV1ActivityLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.activity_logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.activity_logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ActivityLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ActivityLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1DeveloperLogsMutationKey() {
  return ['v1', '/v1/developer_logs', 'POST'] as const
}

export function getPostV1DeveloperLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.developer_logs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.developer_logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeveloperLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.developer_logs.$post>) {
      return parseResponse(client.v1.developer_logs.$post(args, options))
    },
  })
}

export function injectPostV1DeveloperLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.developer_logs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.developer_logs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DeveloperLogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AiUsageDailyQueryKey(
  args: InferRequestType<typeof client.v1.ai_usage.daily.$get>,
) {
  return ['v1', '/v1/ai_usage/daily', args] as const
}

export function getV1AiUsageDailyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.ai_usage.daily.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageDailyQueryKey>
  >({
    queryKey: getV1AiUsageDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ai_usage.daily.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1AiUsageDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.ai_usage.daily.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AiUsageDailyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AiUsageDailyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1PaymentsQueryKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  return ['v1', '/v1/payments', args] as const
}

export function getV1PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >({
    queryKey: getV1PaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FilesFileKeyVariablesLocalQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/variables/local', args] as const
}

export function getV1FilesFileKeyVariablesLocalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyVariablesLocalQueryKey>
  >({
    queryKey: getV1FilesFileKeyVariablesLocalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].variables.local.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyVariablesLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyVariablesLocalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyVariablesLocalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyVariablesPublishedQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/variables/published', args] as const
}

export function getV1FilesFileKeyVariablesPublishedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyVariablesPublishedQueryKey>
  >({
    queryKey: getV1FilesFileKeyVariablesPublishedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].variables.published.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyVariablesPublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.files)[':file_key']['variables']['published']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyVariablesPublishedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyVariablesPublishedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1FilesFileKeyVariablesMutationKey() {
  return ['v1', '/v1/files/:file_key/variables', 'POST'] as const
}

export function getPostV1FilesFileKeyVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FilesFileKeyVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']>,
    ) {
      return parseResponse(client.v1.files[':file_key'].variables.$post(args, options))
    },
  })
}

export function injectPostV1FilesFileKeyVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.files)[':file_key']['variables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FilesFileKeyVariablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1FilesFileKeyDevResourcesQueryKey(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
) {
  return ['v1', '/v1/files/:file_key/dev_resources', args] as const
}

export function getV1FilesFileKeyDevResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyDevResourcesQueryKey>
  >({
    queryKey: getV1FilesFileKeyDevResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.files[':file_key'].dev_resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FilesFileKeyDevResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FilesFileKeyDevResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1FilesFileKeyDevResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1DevResourcesMutationKey() {
  return ['v1', '/v1/dev_resources', 'PUT'] as const
}

export function getPutV1DevResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.dev_resources.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DevResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dev_resources.$put>) {
      return parseResponse(client.v1.dev_resources.$put(args, options))
    },
  })
}

export function injectPutV1DevResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.dev_resources.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DevResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1DevResourcesMutationKey() {
  return ['v1', '/v1/dev_resources', 'POST'] as const
}

export function getPostV1DevResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.dev_resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DevResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dev_resources.$post>) {
      return parseResponse(client.v1.dev_resources.$post(args, options))
    },
  })
}

export function injectPostV1DevResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.dev_resources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DevResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1FilesFileKeyDevResourcesDevResourceIdMutationKey() {
  return ['v1', '/v1/files/:file_key/dev_resources/:dev_resource_id', 'DELETE'] as const
}

export function getDeleteV1FilesFileKeyDevResourcesDevResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FilesFileKeyDevResourcesDevResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.files[':file_key'].dev_resources[':dev_resource_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1FilesFileKeyDevResourcesDevResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.v1.files)[':file_key']['dev_resources'][':dev_resource_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1FilesFileKeyDevResourcesDevResourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/actions', args] as const
}

export function getV1AnalyticsLibrariesFileKeyComponentActionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].component.actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyComponentActions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyComponentActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/usages', args] as const
}

export function getV1AnalyticsLibrariesFileKeyComponentUsagesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].component.usages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyComponentUsages<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyComponentUsagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/actions', args] as const
}

export function getV1AnalyticsLibrariesFileKeyStyleActionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].style.actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyStyleActions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyStyleActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/usages', args] as const
}

export function getV1AnalyticsLibrariesFileKeyStyleUsagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].style.usages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyStyleUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyStyleUsagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/actions', args] as const
}

export function getV1AnalyticsLibrariesFileKeyVariableActionsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].variable.actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyVariableActions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyVariableActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/usages', args] as const
}

export function getV1AnalyticsLibrariesFileKeyVariableUsagesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey>
  >({
    queryKey: getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].variable.usages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1AnalyticsLibrariesFileKeyVariableUsages<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AnalyticsLibrariesFileKeyVariableUsagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1OembedQueryKey(args: InferRequestType<typeof client.v1.oembed.$get>) {
  return ['v1', '/v1/oembed', args] as const
}

export function getV1OembedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.oembed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OembedQueryKey>
  >({
    queryKey: getV1OembedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.oembed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Oembed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.oembed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OembedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1OembedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
