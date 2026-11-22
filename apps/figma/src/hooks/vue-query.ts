import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['$get']>>,
) {
  return ['v1', '/v1/files/:file_key', toValue(args)] as const
}

export function getV1FilesFileKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FilesFileKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>,
) {
  return ['v1', '/v1/files/:file_key/nodes', toValue(args)] as const
}

export function getV1FilesFileKeyNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['nodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyNodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ImagesFileKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':file_key']['$get']>>,
) {
  return ['v1', '/v1/images/:file_key', toValue(args)] as const
}

export function getV1ImagesFileKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':file_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImagesFileKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.images[':file_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImagesFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':file_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ImagesFileKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':file_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesFileKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImagesFileKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.images[':file_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>>,
) {
  return ['v1', '/v1/files/:file_key/images', toValue(args)] as const
}

export function getV1FilesFileKeyImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['images']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyImagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyMetaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>>,
) {
  return ['v1', '/v1/files/:file_key/meta', toValue(args)] as const
}

export function getV1FilesFileKeyMetaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['meta']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FilesFileKeyDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FilesFileKeyDuplicateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Teams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.teams.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>>,
) {
  return ['v1', '/v1/teams/:team_id', toValue(args)] as const
}

export function getV1TeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1TeamsTeamIdInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsTeamIdInvitesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TeamsTeamIdProjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>
  >,
) {
  return ['v1', '/v1/teams/:team_id/projects', toValue(args)] as const
}

export function getV1TeamsTeamIdProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':team_id'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TeamsTeamIdProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['projects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdProjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':team_id'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/meta', toValue(args)] as const
}

export function getV1ProjectsProjectIdMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['meta']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_id/files', toValue(args)] as const
}

export function getV1ProjectsProjectIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1TeamsTeamIdFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsTeamIdFoldersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TeamsTeamIdFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>,
) {
  return ['v2', '/v2/teams/:team_id/folders', toValue(args)] as const
}

export function getV2TeamsTeamIdFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamsTeamIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.teams[':team_id'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TeamsTeamIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TeamsTeamIdFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamsTeamIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.teams[':team_id'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FoldersFolderIdFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>
  >,
) {
  return ['v2', '/v2/folders/:folder_id/folders', toValue(args)] as const
}

export function getV2FoldersFolderIdFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FoldersFolderIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.folders[':folder_id'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FoldersFolderIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FoldersFolderIdFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FoldersFolderIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.folders[':folder_id'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FoldersFolderIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>
  >,
) {
  return ['v2', '/v2/folders/:folder_id/files', toValue(args)] as const
}

export function getV2FoldersFolderIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FoldersFolderIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.folders[':folder_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FoldersFolderIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FoldersFolderIdFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FoldersFolderIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.folders[':folder_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FoldersFolderIdMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>
  >,
) {
  return ['v2', '/v2/folders/:folder_id/meta', toValue(args)] as const
}

export function getV2FoldersFolderIdMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FoldersFolderIdMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.folders[':folder_id'].meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FoldersFolderIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.folders)[':folder_id']['meta']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FoldersFolderIdMetaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FoldersFolderIdMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.folders[':folder_id'].meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/versions', toValue(args)] as const
}

export function getV1FilesFileKeyVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/comments', toValue(args)] as const
}

export function getV1FilesFileKeyCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['comments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyCommentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FilesFileKeyComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FilesFileKeyCommentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1FilesFileKeyCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FilesFileKeyCommentsCommentIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FilesFileKeyCommentsCommentIdReactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
    >
  >,
) {
  return ['v1', '/v1/files/:file_key/comments/:comment_id/reactions', toValue(args)] as const
}

export function getV1FilesFileKeyCommentsCommentIdReactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyCommentsCommentIdReactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyCommentsCommentIdReactions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.files)[':file_key']['comments'][':comment_id']['reactions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1FilesFileKeyCommentsCommentIdReactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyCommentsCommentIdReactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].comments[':comment_id'].reactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FilesFileKeyCommentsCommentIdReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1FilesFileKeyCommentsCommentIdReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FilesFileKeyCommentsCommentIdReactionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1MeQueryKey() {
  return ['v1', '/v1/me'] as const
}

export function getV1MeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1MeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Me<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
          ReturnType<typeof getV1MeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1MeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TeamsTeamIdComponentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>
  >,
) {
  return ['v1', '/v1/teams/:team_id/components', toValue(args)] as const
}

export function getV1TeamsTeamIdComponentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':team_id'].components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TeamsTeamIdComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['components']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['components']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdComponentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':team_id'].components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyComponentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/components', toValue(args)] as const
}

export function getV1FilesFileKeyComponentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['components']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['components']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyComponentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ComponentsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.components)[':key']['$get']>>,
) {
  return ['v1', '/v1/components/:key', toValue(args)] as const
}

export function getV1ComponentsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.components)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ComponentsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.components[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ComponentsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.components)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ComponentsKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.components)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ComponentsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ComponentsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.components[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TeamsTeamIdComponentSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>
  >,
) {
  return ['v1', '/v1/teams/:team_id/component_sets', toValue(args)] as const
}

export function getV1TeamsTeamIdComponentSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdComponentSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':team_id'].component_sets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TeamsTeamIdComponentSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['component_sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdComponentSetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdComponentSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':team_id'].component_sets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyComponentSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/component_sets', toValue(args)] as const
}

export function getV1FilesFileKeyComponentSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyComponentSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].component_sets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyComponentSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['component_sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyComponentSetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyComponentSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].component_sets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ComponentSetsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>>,
) {
  return ['v1', '/v1/component_sets/:key', toValue(args)] as const
}

export function getV1ComponentSetsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ComponentSetsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.component_sets[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ComponentSetsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.component_sets)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ComponentSetsKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.component_sets)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ComponentSetsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ComponentSetsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.component_sets[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TeamsTeamIdStylesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>,
) {
  return ['v1', '/v1/teams/:team_id/styles', toValue(args)] as const
}

export function getV1TeamsTeamIdStylesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdStylesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':team_id'].styles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TeamsTeamIdStyles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.teams)[':team_id']['styles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdStylesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdStylesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':team_id'].styles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyStylesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>>,
) {
  return ['v1', '/v1/files/:file_key/styles', toValue(args)] as const
}

export function getV1FilesFileKeyStylesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyStylesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].styles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyStyles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.files)[':file_key']['styles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['styles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyStylesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyStylesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].styles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StylesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.styles)[':key']['$get']>>,
) {
  return ['v1', '/v1/styles/:key', toValue(args)] as const
}

export function getV1StylesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.styles)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StylesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.styles[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StylesKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.styles)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getV1StylesKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.styles)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StylesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StylesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.styles[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
) {
  return ['v2', '/v2/webhooks', toValue(args)] as const
}

export function getV2WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
          >,
          ReturnType<typeof getV2WebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2WebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>,
) {
  return ['v2', '/v2/webhooks/:webhook_id', toValue(args)] as const
}

export function getV2WebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhooksWebhookIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TeamsTeamIdWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>
  >,
) {
  return ['v2', '/v2/teams/:team_id/webhooks', toValue(args)] as const
}

export function getV2TeamsTeamIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamsTeamIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.teams[':team_id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TeamsTeamIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':team_id']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TeamsTeamIdWebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamsTeamIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.teams[':team_id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WebhooksWebhookIdRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>
  >,
) {
  return ['v2', '/v2/webhooks/:webhook_id/requests', toValue(args)] as const
}

export function getV2WebhooksWebhookIdRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WebhooksWebhookIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.webhooks[':webhook_id'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WebhooksWebhookIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.webhooks)[':webhook_id']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WebhooksWebhookIdRequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WebhooksWebhookIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.webhooks[':webhook_id'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ActivityLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.activity_logs.$get>>,
) {
  return ['v1', '/v1/activity_logs', toValue(args)] as const
}

export function getV1ActivityLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.activity_logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ActivityLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.activity_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ActivityLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.activity_logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>
            >
          >,
          ReturnType<typeof getV1ActivityLogsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.activity_logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ActivityLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ActivityLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.activity_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1DeveloperLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.developer_logs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.developer_logs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeveloperLogsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AiUsageDailyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ai_usage.daily.$get>>,
) {
  return ['v1', '/v1/ai_usage/daily', toValue(args)] as const
}

export function getV1AiUsageDailyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ai_usage.daily.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiUsageDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.ai_usage.daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiUsageDaily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.ai_usage.daily.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>
            >
          >,
          ReturnType<typeof getV1AiUsageDailyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ai_usage.daily.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiUsageDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.ai_usage.daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
) {
  return ['v1', '/v1/payments', toValue(args)] as const
}

export function getV1PaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
          >,
          ReturnType<typeof getV1PaymentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyVariablesLocalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/variables/local', toValue(args)] as const
}

export function getV1FilesFileKeyVariablesLocalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyVariablesLocalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].variables.local.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyVariablesLocal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.files)[':file_key']['variables']['local']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyVariablesLocalQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyVariablesLocalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].variables.local.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FilesFileKeyVariablesPublishedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/variables/published', toValue(args)] as const
}

export function getV1FilesFileKeyVariablesPublishedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyVariablesPublishedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].variables.published.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyVariablesPublished<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['variables']['published']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.files)[':file_key']['variables']['published']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.files)[':file_key']['variables']['published']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyVariablesPublishedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyVariablesPublishedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].variables.published.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FilesFileKeyVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FilesFileKeyVariablesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FilesFileKeyDevResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>
  >,
) {
  return ['v1', '/v1/files/:file_key/dev_resources', toValue(args)] as const
}

export function getV1FilesFileKeyDevResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FilesFileKeyDevResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.files[':file_key'].dev_resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FilesFileKeyDevResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.files)[':file_key']['dev_resources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FilesFileKeyDevResourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FilesFileKeyDevResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.files[':file_key'].dev_resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1DevResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.dev_resources.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DevResourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1DevResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.dev_resources.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.dev_resources.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DevResourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1FilesFileKeyDevResourcesDevResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FilesFileKeyDevResourcesDevResourceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
    >
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/actions', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyComponentActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].component.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyComponentActions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['actions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyComponentActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].component.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
    >
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/component/usages', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyComponentUsagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].component.usages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyComponentUsages<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['component']['usages']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyComponentUsagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].component.usages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
    >
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/actions', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyStyleActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].style.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyStyleActions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['style']['actions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyStyleActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].style.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']>
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/style/usages', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyStyleUsagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].style.usages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyStyleUsages<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.analytics.libraries)[':file_key']['style']['usages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyStyleUsagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].style.usages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
    >
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/actions', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyVariableActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].variable.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyVariableActions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['actions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyVariableActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].variable.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
    >
  >,
) {
  return ['v1', '/v1/analytics/libraries/:file_key/variable/usages', toValue(args)] as const
}

export function getV1AnalyticsLibrariesFileKeyVariableUsagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.analytics.libraries[':file_key'].variable.usages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnalyticsLibrariesFileKeyVariableUsages<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.analytics.libraries)[':file_key']['variable']['usages']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnalyticsLibrariesFileKeyVariableUsagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.analytics.libraries[':file_key'].variable.usages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1OembedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oembed.$get>>,
) {
  return ['v1', '/v1/oembed', toValue(args)] as const
}

export function getV1OembedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oembed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1OembedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.oembed.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Oembed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.oembed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>
          >,
          ReturnType<typeof getV1OembedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.oembed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OembedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1OembedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.oembed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
