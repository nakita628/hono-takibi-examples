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

export function getAuthKey() {
  return ['auth'] as const
}

export function getBackupKey() {
  return ['backup'] as const
}

export function getCustomTemplatesKey() {
  return ['custom_templates'] as const
}

export function getDockerKey() {
  return ['docker'] as const
}

export function getEdgeGroupsKey() {
  return ['edge_groups'] as const
}

export function getEdgeJobsKey() {
  return ['edge_jobs'] as const
}

export function getEdgeStacksKey() {
  return ['edge_stacks'] as const
}

export function getEndpointGroupsKey() {
  return ['endpoint_groups'] as const
}

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getGitopsKey() {
  return ['gitops'] as const
}

export function getKubernetesKey() {
  return ['kubernetes'] as const
}

export function getLdapKey() {
  return ['ldap'] as const
}

export function getMotdKey() {
  return ['motd'] as const
}

export function getRegistriesKey() {
  return ['registries'] as const
}

export function getResourceControlsKey() {
  return ['resource_controls'] as const
}

export function getRestoreKey() {
  return ['restore'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSslKey() {
  return ['ssl'] as const
}

export function getStacksKey() {
  return ['stacks'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTeamMembershipsKey() {
  return ['team_memberships'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUploadKey() {
  return ['upload'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWebsocketKey() {
  return ['websocket'] as const
}

export function getPostAuthMutationKey() {
  return ['auth', '/auth', 'POST'] as const
}

export function getPostAuthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.$post>) {
      return parseResponse(client.auth.$post(args, options))
    },
  })
}

export function usePostAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
          TError,
          InferRequestType<typeof client.auth.$post>,
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
  const mutationDefaults = getPostAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthLogoutMutationKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function getPostAuthLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.logout.$post(undefined, options))
    },
  })
}

export function usePostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthOauthValidateMutationKey() {
  return ['auth', '/auth/oauth/validate', 'POST'] as const
}

export function getPostAuthOauthValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.validate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.oauth.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthOauthValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.oauth.validate.$post>) {
      return parseResponse(client.auth.oauth.validate.$post(args, options))
    },
  })
}

export function usePostAuthOauthValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.validate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.oauth.validate.$post>,
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
  const mutationDefaults = getPostAuthOauthValidateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBackupMutationKey() {
  return ['backup', '/backup', 'POST'] as const
}

export function getPostBackupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.$post>>>>>,
    TError,
    InferRequestType<typeof client.backup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backup.$post>) {
      return parseResponse(client.backup.$post(args, options))
    },
  })
}

export function usePostBackup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.backup.$post>,
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
  const mutationDefaults = getPostBackupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_templates.$get>>,
) {
  return ['custom_templates', '/custom_templates', toValue(args)] as const
}

export function getCustomTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>
            >
          >,
          ReturnType<typeof getCustomTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomTemplatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['$get']>>,
) {
  return ['custom_templates', '/custom_templates/:id', toValue(args)] as const
}

export function getCustomTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomTemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomTemplatesIdMutationKey() {
  return ['custom_templates', '/custom_templates/:id', 'PUT'] as const
}

export function getPutCustomTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.custom_templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custom_templates)[':id']['$put']>) {
      return parseResponse(client.custom_templates[':id'].$put(args, options))
    },
  })
}

export function usePutCustomTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.custom_templates)[':id']['$put']>,
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
  const mutationDefaults = getPutCustomTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCustomTemplatesIdMutationKey() {
  return ['custom_templates', '/custom_templates/:id', 'DELETE'] as const
}

export function getDeleteCustomTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.custom_templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custom_templates)[':id']['$delete']>) {
      return parseResponse(client.custom_templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.custom_templates)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.custom_templates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteCustomTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomTemplatesIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>>,
) {
  return ['custom_templates', '/custom_templates/:id/file', toValue(args)] as const
}

export function getCustomTemplatesIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomTemplatesIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_templates[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomTemplatesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomTemplatesIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTemplatesIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomTemplatesIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_templates[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomTemplatesIdGitFetchMutationKey() {
  return ['custom_templates', '/custom_templates/:id/git_fetch', 'PUT'] as const
}

export function getPutCustomTemplatesIdGitFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomTemplatesIdGitFetchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>,
    ) {
      return parseResponse(client.custom_templates[':id'].git_fetch.$put(args, options))
    },
  })
}

export function usePutCustomTemplatesIdGitFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>,
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
  const mutationDefaults = getPutCustomTemplatesIdGitFetchMutationOptions<TError, TOnMutateResult>(
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

export function getPostCustomTemplatesCreateFileMutationKey() {
  return ['custom_templates', '/custom_templates/create/file', 'POST'] as const
}

export function getPostCustomTemplatesCreateFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.create.file.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.custom_templates.create.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomTemplatesCreateFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custom_templates.create.file.$post>) {
      return parseResponse(client.custom_templates.create.file.$post(args, options))
    },
  })
}

export function usePostCustomTemplatesCreateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.custom_templates.create.file.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.custom_templates.create.file.$post>,
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
  const mutationDefaults = getPostCustomTemplatesCreateFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostCustomTemplatesCreateRepositoryMutationKey() {
  return ['custom_templates', '/custom_templates/create/repository', 'POST'] as const
}

export function getPostCustomTemplatesCreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.custom_templates.create.repository.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.custom_templates.create.repository.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomTemplatesCreateRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.custom_templates.create.repository.$post>,
    ) {
      return parseResponse(client.custom_templates.create.repository.$post(args, options))
    },
  })
}

export function usePostCustomTemplatesCreateRepository<
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
                Awaited<ReturnType<typeof client.custom_templates.create.repository.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.custom_templates.create.repository.$post>,
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
  const mutationDefaults = getPostCustomTemplatesCreateRepositoryMutationOptions<
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

export function getPostCustomTemplatesCreateStringMutationKey() {
  return ['custom_templates', '/custom_templates/create/string', 'POST'] as const
}

export function getPostCustomTemplatesCreateStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.custom_templates.create.string.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.custom_templates.create.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomTemplatesCreateStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custom_templates.create.string.$post>) {
      return parseResponse(client.custom_templates.create.string.$post(args, options))
    },
  })
}

export function usePostCustomTemplatesCreateString<
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
                Awaited<ReturnType<typeof client.custom_templates.create.string.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.custom_templates.create.string.$post>,
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
  const mutationDefaults = getPostCustomTemplatesCreateStringMutationOptions<
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

export function getDockerEnvironmentIdContainersContainerIdGpusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
    >
  >,
) {
  return ['docker', '/docker/:environmentId/containers/:containerId/gpus', toValue(args)] as const
}

export function getDockerEnvironmentIdContainersContainerIdGpusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerEnvironmentIdContainersContainerIdGpusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docker[':environmentId'].containers[':containerId'].gpus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerEnvironmentIdContainersContainerIdGpus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
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
                    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
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
                    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDockerEnvironmentIdContainersContainerIdGpusQueryKey>
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
              (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerEnvironmentIdContainersContainerIdGpusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerEnvironmentIdContainersContainerIdGpusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docker[':environmentId'].containers[':containerId'].gpus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDockerEnvironmentIdDashboardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>
  >,
) {
  return ['docker', '/docker/:environmentId/dashboard', toValue(args)] as const
}

export function getDockerEnvironmentIdDashboardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerEnvironmentIdDashboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docker[':environmentId'].dashboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerEnvironmentIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDockerEnvironmentIdDashboardQueryKey>
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
          Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerEnvironmentIdDashboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerEnvironmentIdDashboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docker[':environmentId'].dashboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDockerEnvironmentIdImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>
  >,
) {
  return ['docker', '/docker/:environmentId/images', toValue(args)] as const
}

export function getDockerEnvironmentIdImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerEnvironmentIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docker[':environmentId'].images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerEnvironmentIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDockerEnvironmentIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerEnvironmentIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerEnvironmentIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.docker[':environmentId'].images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeGroupsQueryKey() {
  return ['edge_groups', '/edge_groups'] as const
}

export function getEdgeGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEdgeGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEdgeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
          >,
          ReturnType<typeof getEdgeGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEdgeGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEdgeGroupsMutationKey() {
  return ['edge_groups', '/edge_groups', 'POST'] as const
}

export function getPostEdgeGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.edge_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_groups.$post>) {
      return parseResponse(client.edge_groups.$post(args, options))
    },
  })
}

export function usePostEdgeGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.edge_groups.$post>,
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
  const mutationDefaults = getPostEdgeGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEdgeGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_groups)[':id']['$get']>>,
) {
  return ['edge_groups', '/edge_groups/:id', toValue(args)] as const
}

export function getEdgeGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEdgeGroupsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEdgeGroupsIdMutationKey() {
  return ['edge_groups', '/edge_groups/:id', 'PUT'] as const
}

export function getPutEdgeGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.edge_groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEdgeGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_groups)[':id']['$put']>) {
      return parseResponse(client.edge_groups[':id'].$put(args, options))
    },
  })
}

export function usePutEdgeGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.edge_groups)[':id']['$put']>,
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
  const mutationDefaults = getPutEdgeGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEdgeGroupsIdMutationKey() {
  return ['edge_groups', '/edge_groups/:id', 'DELETE'] as const
}

export function getDeleteEdgeGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.edge_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_groups)[':id']['$delete']>) {
      return parseResponse(client.edge_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEdgeGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.edge_groups)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.edge_groups)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEdgeGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getEdgeJobsQueryKey() {
  return ['edge_jobs', '/edge_jobs'] as const
}

export function getEdgeJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEdgeJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEdgeJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
          >,
          ReturnType<typeof getEdgeJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEdgeJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_jobs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['$get']>>,
) {
  return ['edge_jobs', '/edge_jobs/:id', toValue(args)] as const
}

export function getEdgeJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEdgeJobsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEdgeJobsIdMutationKey() {
  return ['edge_jobs', '/edge_jobs/:id', 'PUT'] as const
}

export function getPutEdgeJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.edge_jobs)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEdgeJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_jobs)[':id']['$put']>) {
      return parseResponse(client.edge_jobs[':id'].$put(args, options))
    },
  })
}

export function usePutEdgeJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.edge_jobs)[':id']['$put']>,
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
  const mutationDefaults = getPutEdgeJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEdgeJobsIdMutationKey() {
  return ['edge_jobs', '/edge_jobs/:id', 'DELETE'] as const
}

export function getDeleteEdgeJobsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>) {
      return parseResponse(client.edge_jobs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEdgeJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEdgeJobsIdMutationOptions<TError, TOnMutateResult>(
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

export function getEdgeJobsIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>>,
) {
  return ['edge_jobs', '/edge_jobs/:id/file', toValue(args)] as const
}

export function getEdgeJobsIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeJobsIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_jobs[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeJobsIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEdgeJobsIdFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeJobsIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_jobs[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeJobsIdTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks', toValue(args)] as const
}

export function getEdgeJobsIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeJobsIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_jobs[':id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeJobsIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEdgeJobsIdTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeJobsIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_jobs[':id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeJobsIdTasksTaskIDLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
  >,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', toValue(args)] as const
}

export function getEdgeJobsIdTasksTaskIDLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeJobsIdTasksTaskIDLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_jobs[':id'].tasks[':taskID'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeJobsIdTasksTaskIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
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
                  ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEdgeJobsIdTasksTaskIDLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdTasksTaskIDLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeJobsIdTasksTaskIDLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_jobs[':id'].tasks[':taskID'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEdgeJobsIdTasksTaskIDLogsMutationKey() {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', 'POST'] as const
}

export function getPostEdgeJobsIdTasksTaskIDLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeJobsIdTasksTaskIDLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>,
    ) {
      return parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$post(args, options))
    },
  })
}

export function usePostEdgeJobsIdTasksTaskIDLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>,
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
  const mutationDefaults = getPostEdgeJobsIdTasksTaskIDLogsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEdgeJobsIdTasksTaskIDLogsMutationKey() {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', 'DELETE'] as const
}

export function getDeleteEdgeJobsIdTasksTaskIDLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeJobsIdTasksTaskIDLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']
      >,
    ) {
      return parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$delete(args, options))
    },
  })
}

export function useDeleteEdgeJobsIdTasksTaskIDLogs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']>,
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
  const mutationDefaults = getDeleteEdgeJobsIdTasksTaskIDLogsMutationOptions<
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

export function getPostEdgeJobsCreateFileMutationKey() {
  return ['edge_jobs', '/edge_jobs/create/file', 'POST'] as const
}

export function getPostEdgeJobsCreateFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.file.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.edge_jobs.create.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeJobsCreateFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_jobs.create.file.$post>) {
      return parseResponse(client.edge_jobs.create.file.$post(args, options))
    },
  })
}

export function usePostEdgeJobsCreateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.file.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.edge_jobs.create.file.$post>,
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
  const mutationDefaults = getPostEdgeJobsCreateFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostEdgeJobsCreateStringMutationKey() {
  return ['edge_jobs', '/edge_jobs/create/string', 'POST'] as const
}

export function getPostEdgeJobsCreateStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.string.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.edge_jobs.create.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeJobsCreateStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_jobs.create.string.$post>) {
      return parseResponse(client.edge_jobs.create.string.$post(args, options))
    },
  })
}

export function usePostEdgeJobsCreateString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.string.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.edge_jobs.create.string.$post>,
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
  const mutationDefaults = getPostEdgeJobsCreateStringMutationOptions<TError, TOnMutateResult>(
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

export function getEdgeStacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edge_stacks.$get>>,
) {
  return ['edge_stacks', '/edge_stacks', toValue(args)] as const
}

export function getEdgeStacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edge_stacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_stacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEdgeStacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edge_stacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
          >,
          ReturnType<typeof getEdgeStacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_stacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeStacksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['$get']>>,
) {
  return ['edge_stacks', '/edge_stacks/:id', toValue(args)] as const
}

export function getEdgeStacksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeStacksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_stacks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeStacksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEdgeStacksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeStacksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeStacksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_stacks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEdgeStacksIdMutationKey() {
  return ['edge_stacks', '/edge_stacks/:id', 'PUT'] as const
}

export function getPutEdgeStacksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.edge_stacks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEdgeStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_stacks)[':id']['$put']>) {
      return parseResponse(client.edge_stacks[':id'].$put(args, options))
    },
  })
}

export function usePutEdgeStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.edge_stacks)[':id']['$put']>,
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
  const mutationDefaults = getPutEdgeStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEdgeStacksIdMutationKey() {
  return ['edge_stacks', '/edge_stacks/:id', 'DELETE'] as const
}

export function getDeleteEdgeStacksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.edge_stacks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_stacks)[':id']['$delete']>) {
      return parseResponse(client.edge_stacks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEdgeStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.edge_stacks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEdgeStacksIdMutationOptions<TError, TOnMutateResult>(
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

export function getEdgeStacksIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>>,
) {
  return ['edge_stacks', '/edge_stacks/:id/file', toValue(args)] as const
}

export function getEdgeStacksIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeStacksIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edge_stacks[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeStacksIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEdgeStacksIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeStacksIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeStacksIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edge_stacks[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEdgeStacksIdStatusMutationKey() {
  return ['edge_stacks', '/edge_stacks/:id/status', 'PUT'] as const
}

export function getPutEdgeStacksIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.edge_stacks)[':id']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEdgeStacksIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']>) {
      return parseResponse(client.edge_stacks[':id'].status.$put(args, options))
    },
  })
}

export function usePutEdgeStacksIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.edge_stacks)[':id']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']>,
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
  const mutationDefaults = getPutEdgeStacksIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostEdgeStacksCreateFileMutationKey() {
  return ['edge_stacks', '/edge_stacks/create/file', 'POST'] as const
}

export function getPostEdgeStacksCreateFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.file.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.edge_stacks.create.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeStacksCreateFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_stacks.create.file.$post>) {
      return parseResponse(client.edge_stacks.create.file.$post(args, options))
    },
  })
}

export function usePostEdgeStacksCreateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.file.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.edge_stacks.create.file.$post>,
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
  const mutationDefaults = getPostEdgeStacksCreateFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostEdgeStacksCreateRepositoryMutationKey() {
  return ['edge_stacks', '/edge_stacks/create/repository', 'POST'] as const
}

export function getPostEdgeStacksCreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.repository.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.edge_stacks.create.repository.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeStacksCreateRepositoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_stacks.create.repository.$post>) {
      return parseResponse(client.edge_stacks.create.repository.$post(args, options))
    },
  })
}

export function usePostEdgeStacksCreateRepository<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.edge_stacks.create.repository.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.edge_stacks.create.repository.$post>,
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
  const mutationDefaults = getPostEdgeStacksCreateRepositoryMutationOptions<
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

export function getPostEdgeStacksCreateStringMutationKey() {
  return ['edge_stacks', '/edge_stacks/create/string', 'POST'] as const
}

export function getPostEdgeStacksCreateStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.string.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.edge_stacks.create.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeStacksCreateStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.edge_stacks.create.string.$post>) {
      return parseResponse(client.edge_stacks.create.string.$post(args, options))
    },
  })
}

export function usePostEdgeStacksCreateString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.edge_stacks.create.string.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.edge_stacks.create.string.$post>,
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
  const mutationDefaults = getPostEdgeStacksCreateStringMutationOptions<TError, TOnMutateResult>(
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

export function getEndpointGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint_groups.$get>>,
) {
  return ['endpoint_groups', '/endpoint_groups', toValue(args)] as const
}

export function getEndpointGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoint_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>
            >
          >,
          ReturnType<typeof getEndpointGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoint_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEndpointGroupsMutationKey() {
  return ['endpoint_groups', '/endpoint_groups', 'POST'] as const
}

export function getPostEndpointGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.endpoint_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.endpoint_groups.$post>) {
      return parseResponse(client.endpoint_groups.$post(args, options))
    },
  })
}

export function usePostEndpointGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.endpoint_groups.$post>,
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
  const mutationDefaults = getPostEndpointGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getEndpointGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>>,
) {
  return ['endpoint_groups', '/endpoint_groups/:id', toValue(args)] as const
}

export function getEndpointGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoint_groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEndpointGroupsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoint_groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEndpointGroupsIdMutationKey() {
  return ['endpoint_groups', '/endpoint_groups/:id', 'PUT'] as const
}

export function getPutEndpointGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoint_groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.endpoint_groups)[':id']['$put']>) {
      return parseResponse(client.endpoint_groups[':id'].$put(args, options))
    },
  })
}

export function usePutEndpointGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.endpoint_groups)[':id']['$put']>,
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
  const mutationDefaults = getPutEndpointGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEndpointGroupsIdMutationKey() {
  return ['endpoint_groups', '/endpoint_groups/:id', 'DELETE'] as const
}

export function getDeleteEndpointGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEndpointGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']>) {
      return parseResponse(client.endpoint_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEndpointGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEndpointGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutEndpointGroupsIdEndpointsEndpointIdMutationKey() {
  return ['endpoint_groups', '/endpoint_groups/:id/endpoints/:endpointId', 'PUT'] as const
}

export function getPutEndpointGroupsIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointGroupsIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']
      >,
    ) {
      return parseResponse(
        client.endpoint_groups[':id'].endpoints[':endpointId'].$put(args, options),
      )
    },
  })
}

export function usePutEndpointGroupsIdEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']
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
  const mutationDefaults = getPutEndpointGroupsIdEndpointsEndpointIdMutationOptions<
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

export function getDeleteEndpointGroupsIdEndpointsEndpointIdMutationKey() {
  return ['endpoint_groups', '/endpoint_groups/:id/endpoints/:endpointId', 'DELETE'] as const
}

export function getDeleteEndpointGroupsIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEndpointGroupsIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.endpoint_groups[':id'].endpoints[':endpointId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEndpointGroupsIdEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
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
  const mutationDefaults = getDeleteEndpointGroupsIdEndpointsEndpointIdMutationOptions<
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

export function getEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoints.$get>>,
) {
  return ['endpoints', '/endpoints', toValue(args)] as const
}

export function getEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          ReturnType<typeof getEndpointsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEndpointsMutationKey() {
  return ['endpoints', '/endpoints', 'POST'] as const
}

export function getPostEndpointsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$post>>>>>,
    TError,
    InferRequestType<typeof client.endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.endpoints.$post>) {
      return parseResponse(client.endpoints.$post(args, options))
    },
  })
}

export function usePostEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.endpoints.$post>,
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
  const mutationDefaults = getPostEndpointsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEndpointsMutationKey() {
  return ['endpoints', '/endpoints', 'DELETE'] as const
}

export function getDeleteEndpointsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.endpoints.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.endpoints.$delete>) {
      return parseResponse(client.endpoints.$delete(args, options))
    },
  })
}

export function useDeleteEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.endpoints.$delete>,
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
  const mutationDefaults = getDeleteEndpointsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEndpointsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['$get']>>,
) {
  return ['endpoints', '/endpoints/:id', toValue(args)] as const
}

export function getEndpointsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEndpointsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEndpointsIdMutationKey() {
  return ['endpoints', '/endpoints/:id', 'PUT'] as const
}

export function getPutEndpointsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.endpoints)[':id']['$put']>) {
      return parseResponse(client.endpoints[':id'].$put(args, options))
    },
  })
}

export function usePutEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['$put']>,
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
  const mutationDefaults = getPutEndpointsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEndpointsIdMutationKey() {
  return ['endpoints', '/endpoints/:id', 'DELETE'] as const
}

export function getDeleteEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.endpoints)[':id']['$delete']>) {
      return parseResponse(client.endpoints[':id'].$delete(args, options))
    },
  })
}

export function useDeleteEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.endpoints)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteEndpointsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutEndpointsIdAssociationMutationKey() {
  return ['endpoints', '/endpoints/:id/association', 'PUT'] as const
}

export function getPutEndpointsIdAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['association']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['association']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsIdAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':id']['association']['$put']>,
    ) {
      return parseResponse(client.endpoints[':id'].association.$put(args, options))
    },
  })
}

export function usePutEndpointsIdAssociation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.endpoints)[':id']['association']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['association']['$put']>,
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
  const mutationDefaults = getPutEndpointsIdAssociationMutationOptions<TError, TOnMutateResult>(
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

export function getPostEndpointsIdDockerV2BrowsePutMutationKey() {
  return ['endpoints', '/endpoints/:id/docker/v2/browse/put', 'POST'] as const
}

export function getPostEndpointsIdDockerV2BrowsePutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsIdDockerV2BrowsePutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']
      >,
    ) {
      return parseResponse(client.endpoints[':id'].docker.v2.browse.put.$post(args, options))
    },
  })
}

export function usePostEndpointsIdDockerV2BrowsePut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']
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
  const mutationDefaults = getPostEndpointsIdDockerV2BrowsePutMutationOptions<
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

export function getEndpointsIdDockerhubRegistryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
  >,
) {
  return ['endpoints', '/endpoints/:id/dockerhub/:registryId', toValue(args)] as const
}

export function getEndpointsIdDockerhubRegistryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdDockerhubRegistryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].dockerhub[':registryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdDockerhubRegistryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
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
                  ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEndpointsIdDockerhubRegistryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdDockerhubRegistryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdDockerhubRegistryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].dockerhub[':registryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEndpointsIdEdgeJobsJobIDLogsMutationKey() {
  return ['endpoints', '/endpoints/:id/edge/jobs/:jobID/logs', 'POST'] as const
}

export function getPostEndpointsIdEdgeJobsJobIDLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsIdEdgeJobsJobIDLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']
      >,
    ) {
      return parseResponse(client.endpoints[':id'].edge.jobs[':jobID'].logs.$post(args, options))
    },
  })
}

export function usePostEndpointsIdEdgeJobsJobIDLogs<
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
                    (typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']
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
  const mutationDefaults = getPostEndpointsIdEdgeJobsJobIDLogsMutationOptions<
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

export function getEndpointsIdEdgeStacksStackIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
  >,
) {
  return ['endpoints', '/endpoints/:id/edge/stacks/:stackId', toValue(args)] as const
}

export function getEndpointsIdEdgeStacksStackIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdEdgeStacksStackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].edge.stacks[':stackId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdEdgeStacksStackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
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
                  ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEndpointsIdEdgeStacksStackIdQueryKey>
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
            ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdEdgeStacksStackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdEdgeStacksStackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].edge.stacks[':stackId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEndpointsIdEdgeStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>
  >,
) {
  return ['endpoints', '/endpoints/:id/edge/status', toValue(args)] as const
}

export function getEndpointsIdEdgeStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdEdgeStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].edge.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdEdgeStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEndpointsIdEdgeStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdEdgeStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdEdgeStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].edge.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEndpointsIdForceupdateserviceMutationKey() {
  return ['endpoints', '/endpoints/:id/forceupdateservice', 'PUT'] as const
}

export function getPutEndpointsIdForceupdateserviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsIdForceupdateserviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>,
    ) {
      return parseResponse(client.endpoints[':id'].forceupdateservice.$put(args, options))
    },
  })
}

export function usePutEndpointsIdForceupdateservice<
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
                Awaited<ReturnType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>,
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
  const mutationDefaults = getPutEndpointsIdForceupdateserviceMutationOptions<
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

export function getEndpointsIdKubernetesHelmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm', toValue(args)] as const
}

export function getEndpointsIdKubernetesHelmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdKubernetesHelmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdKubernetesHelm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEndpointsIdKubernetesHelmQueryKey>
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
          Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdKubernetesHelmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdKubernetesHelmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].kubernetes.helm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEndpointsIdKubernetesHelmMutationKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm', 'POST'] as const
}

export function getPostEndpointsIdKubernetesHelmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsIdKubernetesHelmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>,
    ) {
      return parseResponse(client.endpoints[':id'].kubernetes.helm.$post(args, options))
    },
  })
}

export function usePostEndpointsIdKubernetesHelm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>,
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
  const mutationDefaults = getPostEndpointsIdKubernetesHelmMutationOptions<TError, TOnMutateResult>(
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

export function getEndpointsIdKubernetesHelmReleaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release', toValue(args)] as const
}

export function getEndpointsIdKubernetesHelmReleaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdKubernetesHelmReleaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdKubernetesHelmRelease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
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
                    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
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
                    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEndpointsIdKubernetesHelmReleaseQueryKey>
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
            ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdKubernetesHelmReleaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdKubernetesHelmReleaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEndpointsIdKubernetesHelmReleaseMutationKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release', 'DELETE'] as const
}

export function getDeleteEndpointsIdKubernetesHelmReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEndpointsIdKubernetesHelmReleaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
      >,
    ) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEndpointsIdKubernetesHelmRelease<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
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
  const mutationDefaults = getDeleteEndpointsIdKubernetesHelmReleaseMutationOptions<
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

export function getEndpointsIdKubernetesHelmReleaseHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
    >
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release/history', toValue(args)] as const
}

export function getEndpointsIdKubernetesHelmReleaseHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdKubernetesHelmReleaseHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdKubernetesHelmReleaseHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
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
                    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
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
                    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEndpointsIdKubernetesHelmReleaseHistoryQueryKey>
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
              (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdKubernetesHelmReleaseHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdKubernetesHelmReleaseHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEndpointsIdKubernetesHelmReleaseRollbackMutationKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release/rollback', 'POST'] as const
}

export function getPostEndpointsIdKubernetesHelmReleaseRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsIdKubernetesHelmReleaseRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
      >,
    ) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].rollback.$post(args, options),
      )
    },
  })
}

export function usePostEndpointsIdKubernetesHelmReleaseRollback<
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
                    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
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
  const mutationDefaults = getPostEndpointsIdKubernetesHelmReleaseRollbackMutationOptions<
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

export function getEndpointsIdRegistriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>>,
) {
  return ['endpoints', '/endpoints/:id/registries', toValue(args)] as const
}

export function getEndpointsIdRegistriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointsIdRegistriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints[':id'].registries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsIdRegistries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEndpointsIdRegistriesQueryKey>
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
          Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdRegistriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointsIdRegistriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints[':id'].registries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEndpointsIdRegistriesRegistryIdMutationKey() {
  return ['endpoints', '/endpoints/:id/registries/:registryId', 'PUT'] as const
}

export function getPutEndpointsIdRegistriesRegistryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsIdRegistriesRegistryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>,
    ) {
      return parseResponse(client.endpoints[':id'].registries[':registryId'].$put(args, options))
    },
  })
}

export function usePutEndpointsIdRegistriesRegistryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.endpoints)[':id']['registries'][':registryId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>,
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
  const mutationDefaults = getPutEndpointsIdRegistriesRegistryIdMutationOptions<
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

export function getPutEndpointsIdSettingsMutationKey() {
  return ['endpoints', '/endpoints/:id/settings', 'PUT'] as const
}

export function getPutEndpointsIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsIdSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']>) {
      return parseResponse(client.endpoints[':id'].settings.$put(args, options))
    },
  })
}

export function usePutEndpointsIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)[':id']['settings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']>,
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
  const mutationDefaults = getPutEndpointsIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostEndpointsIdSnapshotMutationKey() {
  return ['endpoints', '/endpoints/:id/snapshot', 'POST'] as const
}

export function getPostEndpointsIdSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['snapshot']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsIdSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']>,
    ) {
      return parseResponse(client.endpoints[':id'].snapshot.$post(args, options))
    },
  })
}

export function usePostEndpointsIdSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.endpoints)[':id']['snapshot']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']>,
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
  const mutationDefaults = getPostEndpointsIdSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getPostEndpointsDeleteMutationKey() {
  return ['endpoints', '/endpoints/delete', 'POST'] as const
}

export function getPostEndpointsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.delete.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.endpoints.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.endpoints.delete.$post>) {
      return parseResponse(client.endpoints.delete.$post(args, options))
    },
  })
}

export function usePostEndpointsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.delete.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.endpoints.delete.$post>,
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
  const mutationDefaults = getPostEndpointsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostEndpointsGlobalKeyMutationKey() {
  return ['endpoints', '/endpoints/global-key', 'POST'] as const
}

export function getPostEndpointsGlobalKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)['global-key']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsGlobalKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.endpoints['global-key'].$post(undefined, options))
    },
  })
}

export function usePostEndpointsGlobalKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.endpoints)['global-key']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostEndpointsGlobalKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPutEndpointsRelationsMutationKey() {
  return ['endpoints', '/endpoints/relations', 'PUT'] as const
}

export function getPutEndpointsRelationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.relations.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.endpoints.relations.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutEndpointsRelationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.endpoints.relations.$put>) {
      return parseResponse(client.endpoints.relations.$put(args, options))
    },
  })
}

export function usePutEndpointsRelations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.relations.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.endpoints.relations.$put>,
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
  const mutationDefaults = getPutEndpointsRelationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostEndpointsSnapshotMutationKey() {
  return ['endpoints', '/endpoints/snapshot', 'POST'] as const
}

export function getPostEndpointsSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.snapshot.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostEndpointsSnapshotMutationKey(),
    async mutationFn() {
      return parseResponse(client.endpoints.snapshot.$post(undefined, options))
    },
  })
}

export function usePostEndpointsSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.snapshot.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostEndpointsSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getEndpointsSummaryQueryKey() {
  return ['endpoints', '/endpoints/summary'] as const
}

export function getEndpointsSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEndpointsSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEndpointsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>
            >
          >,
          ReturnType<typeof getEndpointsSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEndpointsSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGitopsRepoFilePreviewMutationKey() {
  return ['gitops', '/gitops/repo/file/preview', 'POST'] as const
}

export function getPostGitopsRepoFilePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.repo.file.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.gitops.repo.file.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGitopsRepoFilePreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gitops.repo.file.preview.$post>) {
      return parseResponse(client.gitops.repo.file.preview.$post(args, options))
    },
  })
}

export function usePostGitopsRepoFilePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.gitops.repo.file.preview.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.gitops.repo.file.preview.$post>,
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
  const mutationDefaults = getPostGitopsRepoFilePreviewMutationOptions<TError, TOnMutateResult>(
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

export function getGitopsSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.sources.$get>>,
) {
  return ['gitops', '/gitops/sources', toValue(args)] as const
}

export function getGitopsSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGitopsSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
          >,
          ReturnType<typeof getGitopsSourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGitopsSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGitopsSourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.sources)[':id']['$get']>>,
) {
  return ['gitops', '/gitops/sources/:id', toValue(args)] as const
}

export function getGitopsSourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.sources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGitopsSourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.sources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsSourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.sources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGitopsSourcesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGitopsSourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.sources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGitopsSourcesIdMutationKey() {
  return ['gitops', '/gitops/sources/:id', 'PUT'] as const
}

export function getPutGitopsSourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.gitops.sources)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGitopsSourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.gitops.sources)[':id']['$put']>) {
      return parseResponse(client.gitops.sources[':id'].$put(args, options))
    },
  })
}

export function usePutGitopsSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gitops.sources)[':id']['$put']>,
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
  const mutationDefaults = getPutGitopsSourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGitopsSourcesIdMutationKey() {
  return ['gitops', '/gitops/sources/:id', 'DELETE'] as const
}

export function getDeleteGitopsSourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.gitops.sources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGitopsSourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.gitops.sources)[':id']['$delete']>) {
      return parseResponse(client.gitops.sources[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGitopsSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.gitops.sources)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteGitopsSourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutGitopsSourcesIdAccessMutationKey() {
  return ['gitops', '/gitops/sources/:id/access', 'PUT'] as const
}

export function getPutGitopsSourcesIdAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gitops.sources)[':id']['access']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGitopsSourcesIdAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']>,
    ) {
      return parseResponse(client.gitops.sources[':id'].access.$put(args, options))
    },
  })
}

export function usePutGitopsSourcesIdAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['access']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']>,
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
  const mutationDefaults = getPutGitopsSourcesIdAccessMutationOptions<TError, TOnMutateResult>(
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

export function getPostGitopsSourcesIdTestMutationKey() {
  return ['gitops', '/gitops/sources/:id/test', 'POST'] as const
}

export function getPostGitopsSourcesIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gitops.sources)[':id']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGitopsSourcesIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']>,
    ) {
      return parseResponse(client.gitops.sources[':id'].test.$post(args, options))
    },
  })
}

export function usePostGitopsSourcesIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['test']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']>,
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
  const mutationDefaults = getPostGitopsSourcesIdTestMutationOptions<TError, TOnMutateResult>(
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

export function getGitopsSourcesIdWorkflowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>
  >,
) {
  return ['gitops', '/gitops/sources/:id/workflows', toValue(args)] as const
}

export function getGitopsSourcesIdWorkflowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGitopsSourcesIdWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.sources[':id'].workflows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsSourcesIdWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGitopsSourcesIdWorkflowsQueryKey>
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
          Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesIdWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGitopsSourcesIdWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.sources[':id'].workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGitopsSourcesGitMutationKey() {
  return ['gitops', '/gitops/sources/git', 'POST'] as const
}

export function getPostGitopsSourcesGitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.git.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.gitops.sources.git.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGitopsSourcesGitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gitops.sources.git.$post>) {
      return parseResponse(client.gitops.sources.git.$post(args, options))
    },
  })
}

export function usePostGitopsSourcesGit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.git.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.gitops.sources.git.$post>,
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
  const mutationDefaults = getPostGitopsSourcesGitMutationOptions<TError, TOnMutateResult>(
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

export function getGitopsSourcesSummaryQueryKey() {
  return ['gitops', '/gitops/sources/summary'] as const
}

export function getGitopsSourcesSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGitopsSourcesSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.sources.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsSourcesSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
            >
          >,
          ReturnType<typeof getGitopsSourcesSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGitopsSourcesSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.sources.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGitopsSourcesTestMutationKey() {
  return ['gitops', '/gitops/sources/test', 'POST'] as const
}

export function getPostGitopsSourcesTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.gitops.sources.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGitopsSourcesTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gitops.sources.test.$post>) {
      return parseResponse(client.gitops.sources.test.$post(args, options))
    },
  })
}

export function usePostGitopsSourcesTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.gitops.sources.test.$post>,
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
  const mutationDefaults = getPostGitopsSourcesTestMutationOptions<TError, TOnMutateResult>(
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

export function getGitopsWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.workflows.$get>>,
) {
  return ['gitops', '/gitops/workflows', toValue(args)] as const
}

export function getGitopsWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGitopsWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.workflows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gitops.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>
            >
          >,
          ReturnType<typeof getGitopsWorkflowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGitopsWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGitopsWorkflowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>>,
) {
  return ['gitops', '/gitops/workflows/:id', toValue(args)] as const
}

export function getGitopsWorkflowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGitopsWorkflowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.workflows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsWorkflowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGitopsWorkflowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGitopsWorkflowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.workflows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGitopsWorkflowsSummaryQueryKey() {
  return ['gitops', '/gitops/workflows/summary'] as const
}

export function getGitopsWorkflowsSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGitopsWorkflowsSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gitops.workflows.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGitopsWorkflowsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
            >
          >,
          ReturnType<typeof getGitopsWorkflowsSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGitopsWorkflowsSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.gitops.workflows.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdApplicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/applications', toValue(args)] as const
}

export function getKubernetesIdApplicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].applications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdApplicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdApplicationsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/applications/count', toValue(args)] as const
}

export function getKubernetesIdApplicationsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdApplicationsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].applications.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdApplicationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdApplicationsCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdApplicationsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdApplicationsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].applications.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdClusterRoleBindingsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/cluster_role_bindings/delete', 'POST'] as const
}

export function getPostKubernetesIdClusterRoleBindingsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdClusterRoleBindingsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].cluster_role_bindings.delete.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdClusterRoleBindingsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
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
  const mutationDefaults = getPostKubernetesIdClusterRoleBindingsDeleteMutationOptions<
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

export function getPostKubernetesIdClusterRolesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/cluster_roles/delete', 'POST'] as const
}

export function getPostKubernetesIdClusterRolesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdClusterRolesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].cluster_roles.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdClusterRolesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdClusterRolesDeleteMutationOptions<
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

export function getKubernetesIdClusterrolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/clusterrolebindings', toValue(args)] as const
}

export function getKubernetesIdClusterrolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdClusterrolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].clusterrolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdClusterrolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdClusterrolebindingsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdClusterrolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdClusterrolebindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].clusterrolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdClusterrolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/clusterroles', toValue(args)] as const
}

export function getKubernetesIdClusterrolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdClusterrolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].clusterroles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdClusterroles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdClusterrolesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdClusterrolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdClusterrolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].clusterroles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdConfigmapsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps', toValue(args)] as const
}

export function getKubernetesIdConfigmapsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdConfigmapsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].configmaps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdConfigmapsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdConfigmapsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdConfigmapsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].configmaps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdConfigmapsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps/count', toValue(args)] as const
}

export function getKubernetesIdConfigmapsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdConfigmapsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].configmaps.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdConfigmapsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdConfigmapsCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdConfigmapsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdConfigmapsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].configmaps.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdCronJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/cron_jobs', toValue(args)] as const
}

export function getKubernetesIdCronJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdCronJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].cron_jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdCronJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdCronJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdCronJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdCronJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].cron_jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdCronJobsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/cron_jobs/delete', 'POST'] as const
}

export function getPostKubernetesIdCronJobsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdCronJobsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].cron_jobs.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdCronJobsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdCronJobsDeleteMutationOptions<
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

export function getKubernetesIdDashboardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/dashboard', toValue(args)] as const
}

export function getKubernetesIdDashboardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdDashboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].dashboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdDashboardQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdDashboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdDashboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].dashboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/deployments', toValue(args)] as const
}

export function getKubernetesIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdDescribeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/describe', toValue(args)] as const
}

export function getKubernetesIdDescribeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdDescribeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].describe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdDescribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdDescribeQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdDescribeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdDescribeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].describe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/events', toValue(args)] as const
}

export function getKubernetesIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdIngressclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/ingressclasses', toValue(args)] as const
}

export function getKubernetesIdIngressclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdIngressclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].ingressclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdIngressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdIngressclassesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdIngressclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdIngressclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].ingressclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdIngresscontrollersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/ingresscontrollers', toValue(args)] as const
}

export function getKubernetesIdIngresscontrollersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdIngresscontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].ingresscontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdIngresscontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdIngresscontrollersQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdIngresscontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdIngresscontrollersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].ingresscontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdIngresscontrollersMutationKey() {
  return ['kubernetes', '/kubernetes/:id/ingresscontrollers', 'PUT'] as const
}

export function getPutKubernetesIdIngresscontrollersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdIngresscontrollersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>,
    ) {
      return parseResponse(client.kubernetes[':id'].ingresscontrollers.$put(args, options))
    },
  })
}

export function usePutKubernetesIdIngresscontrollers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>,
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
  const mutationDefaults = getPutKubernetesIdIngresscontrollersMutationOptions<
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

export function getKubernetesIdIngressesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses', toValue(args)] as const
}

export function getKubernetesIdIngressesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdIngressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].ingresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdIngressesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdIngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdIngressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].ingresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdIngressesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses/count', toValue(args)] as const
}

export function getKubernetesIdIngressesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdIngressesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].ingresses.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdIngressesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdIngressesCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdIngressesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdIngressesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].ingresses.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdIngressesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/ingresses/delete', 'POST'] as const
}

export function getPostKubernetesIdIngressesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdIngressesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].ingresses.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdIngressesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdIngressesDeleteMutationOptions<
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

export function getKubernetesIdJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/jobs', toValue(args)] as const
}

export function getKubernetesIdJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdJobsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/jobs/delete', 'POST'] as const
}

export function getPostKubernetesIdJobsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdJobsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].jobs.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdJobsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdJobsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostKubernetesIdManifestsDryRunMutationKey() {
  return ['kubernetes', '/kubernetes/:id/manifests/dry_run', 'POST'] as const
}

export function getPostKubernetesIdManifestsDryRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdManifestsDryRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].manifests.dry_run.$post(args, options))
    },
  })
}

export function usePostKubernetesIdManifestsDryRun<
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
                  ReturnType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdManifestsDryRunMutationOptions<
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

export function getKubernetesIdMaxResourceLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/max_resource_limits', toValue(args)] as const
}

export function getKubernetesIdMaxResourceLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMaxResourceLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].max_resource_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMaxResourceLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMaxResourceLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMaxResourceLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMaxResourceLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].max_resource_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdMetricsApplicationsResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/applications_resources', toValue(args)] as const
}

export function getKubernetesIdMetricsApplicationsResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMetricsApplicationsResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].metrics.applications_resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMetricsApplicationsResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']>
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
                    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
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
                    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMetricsApplicationsResourcesQueryKey>
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
              (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMetricsApplicationsResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMetricsApplicationsResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].metrics.applications_resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdMetricsNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes', toValue(args)] as const
}

export function getKubernetesIdMetricsNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMetricsNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].metrics.nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMetricsNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMetricsNodesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMetricsNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMetricsNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].metrics.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdMetricsNodesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes/:name', toValue(args)] as const
}

export function getKubernetesIdMetricsNodesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMetricsNodesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].metrics.nodes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMetricsNodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMetricsNodesNameQueryKey>
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
            ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMetricsNodesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMetricsNodesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].metrics.nodes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdMetricsPodsNamespaceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/:namespace/:name', toValue(args)] as const
}

export function getKubernetesIdMetricsPodsNamespaceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMetricsPodsNamespaceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMetricsPodsNamespaceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMetricsPodsNamespaceNameQueryKey>
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
              (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMetricsPodsNamespaceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMetricsPodsNamespaceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/namespace/:namespace', toValue(args)] as const
}

export function getKubernetesIdMetricsPodsNamespaceNamespaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdMetricsPodsNamespaceNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
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
                    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
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
                    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey>
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
              (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces', toValue(args)] as const
}

export function getKubernetesIdNamespacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']>,
    ) {
      return parseResponse(client.kubernetes[':id'].namespaces.$put(args, options))
    },
  })
}

export function usePutKubernetesIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']>,
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
  const mutationDefaults = getPutKubernetesIdNamespacesMutationOptions<TError, TOnMutateResult>(
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

export function getPostKubernetesIdNamespacesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'POST'] as const
}

export function getPostKubernetesIdNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].namespaces.$post(args, options))
    },
  })
}

export function usePostKubernetesIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdNamespacesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKubernetesIdNamespacesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'DELETE'] as const
}

export function getDeleteKubernetesIdNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKubernetesIdNamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>,
    ) {
      return parseResponse(client.kubernetes[':id'].namespaces.$delete(args, options))
    },
  })
}

export function useDeleteKubernetesIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>,
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
  const mutationDefaults = getDeleteKubernetesIdNamespacesMutationOptions<TError, TOnMutateResult>(
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

export function getKubernetesIdNamespacesNamespaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>,
    ) {
      return parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$put(args, options))
    },
  })
}

export function usePutKubernetesIdNamespacesNamespace<
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
                  ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>,
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceMutationOptions<
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

export function getPostKubernetesIdNamespacesNamespaceConfigmapsMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/configmaps', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespaceConfigmapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceConfigmapsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].configmaps.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceConfigmaps<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespaceConfigmapsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    'PUT',
  ] as const
}

export function getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
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

export function getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    'DELETE',
  ] as const
}

export function getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
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
  const mutationDefaults =
    getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceDeploymentsQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdNamespacesNamespaceDeploymentsMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespaceDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceDeployments<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespaceDeploymentsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceDeploymentsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceDeploymentsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceDeploymentsName<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name',
    'DELETE',
  ] as const
}

export function getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteKubernetesIdNamespacesNamespaceDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
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
  const mutationDefaults = getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getPatchKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', 'PATCH'] as const
}

export function getPatchKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchKubernetesIdNamespacesNamespaceDeploymentsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchKubernetesIdNamespacesNamespaceDeploymentsName<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
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
  const mutationDefaults = getPatchKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/rollback',
    'POST',
  ] as const
}

export function getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].rollback.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceDeploymentsNameRollback<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
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
  const mutationDefaults =
    getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackMutationOptions<
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

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/scale',
    'PUT',
  ] as const
}

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].scale.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceDeploymentsNameScale<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/events', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceEventsQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/ingresscontrollers',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceIngresscontrollersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceIngresscontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceIngresscontrollersMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresscontrollers', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceIngresscontrollersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceIngresscontrollersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceIngresscontrollers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceIngresscontrollersMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceIngressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceIngressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceIngressesQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceIngressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceIngressesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceIngresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceIngressesMutationOptions<
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

export function getPostKubernetesIdNamespacesNamespaceIngressesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespaceIngressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceIngressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceIngresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespaceIngressesMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/ingresses/:ingress',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceIngressesIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceIngressesIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespacePersistentVolumeClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims',
    'POST',
  ] as const
}

export function getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespacePersistentVolumeClaims<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
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
  const mutationDefaults =
    getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsMutationOptions<
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

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims/:name',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespacePersistentVolumeClaimsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesNamespacePodsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespacePodsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespacePodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespacePods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']>
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespacePodsQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespacePodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespacePodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteKubernetesIdNamespacesNamespacePodsNameMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name', 'DELETE'] as const
}

export function getDeleteKubernetesIdNamespacesNamespacePodsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKubernetesIdNamespacesNamespacePodsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKubernetesIdNamespacesNamespacePodsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
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
  const mutationDefaults = getDeleteKubernetesIdNamespacesNamespacePodsNameMutationOptions<
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

export function getKubernetesIdNamespacesNamespacePodsNameLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/pods/:name/log',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespacePodsNameLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespacePodsNameLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespacePodsNameLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespacePodsNameLogQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespacePodsNameLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespacePodsNameLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdNamespacesNamespacePodsNameRestartMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name/restart', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespacePodsNameRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespacePodsNameRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].restart.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespacePodsNameRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespacePodsNameRestartMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceReplicasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/replicasets', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceReplicasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceReplicasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceReplicasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceReplicasetsQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceReplicasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceReplicasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/resource_quotas',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceResourceQuotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceResourceQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdNamespacesNamespaceSecretsMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespaceSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].secrets.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceSecrets<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespaceSecretsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/secrets/:secret',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceSecretsSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceSecretsSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceSecretsSecretMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceSecretsSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceSecretsSecret<
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
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

export function getDeleteKubernetesIdNamespacesNamespaceSecretsSecretMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', 'DELETE'] as const
}

export function getDeleteKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteKubernetesIdNamespacesNamespaceSecretsSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$delete(args, options),
      )
    },
  })
}

export function useDeleteKubernetesIdNamespacesNamespaceSecretsSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
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
  const mutationDefaults = getDeleteKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
    >
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name',
    toValue(args),
  ] as const
}

export function getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceServiceAccountsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsMutationKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name/image_pull_secrets',
    'PUT',
  ] as const
}

export function getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].service_accounts[
          ':name'
        ].image_pull_secrets.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
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
  const mutationDefaults =
    getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceServicesQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdNamespacesNamespaceServicesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].services.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceServicesMutationOptions<
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

export function getPostKubernetesIdNamespacesNamespaceServicesMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', 'POST'] as const
}

export function getPostKubernetesIdNamespacesNamespaceServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNamespacesNamespaceServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].services.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdNamespacesNamespaceServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
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
  const mutationDefaults = getPostKubernetesIdNamespacesNamespaceServicesMutationOptions<
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

export function getPutKubernetesIdNamespacesNamespaceSystemMutationKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/system', 'PUT'] as const
}

export function getPutKubernetesIdNamespacesNamespaceSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdNamespacesNamespaceSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].system.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdNamespacesNamespaceSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
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
  const mutationDefaults = getPutKubernetesIdNamespacesNamespaceSystemMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceVolumesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
    >
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/volumes', toValue(args)] as const
}

export function getKubernetesIdNamespacesNamespaceVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesNamespaceVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesNamespaceVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
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
                    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesNamespaceVolumesQueryKey>
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
              (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesNamespaceVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesNamespaceVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNamespacesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/count', toValue(args)] as const
}

export function getKubernetesIdNamespacesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNamespacesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].namespaces.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNamespacesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNamespacesCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNamespacesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNamespacesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].namespaces.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/nodes', toValue(args)] as const
}

export function getKubernetesIdNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNodesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdNodesNameDrainMutationKey() {
  return ['kubernetes', '/kubernetes/:id/nodes/:name/drain', 'POST'] as const
}

export function getPostKubernetesIdNodesNameDrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdNodesNameDrainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].nodes[':name'].drain.$post(args, options))
    },
  })
}

export function usePostKubernetesIdNodesNameDrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdNodesNameDrainMutationOptions<
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

export function getKubernetesIdNodesLimitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/nodes_limits', toValue(args)] as const
}

export function getKubernetesIdNodesLimitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdNodesLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].nodes_limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdNodesLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdNodesLimitsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdNodesLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdNodesLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].nodes_limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdPersistentVolumeClaimsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims', toValue(args)] as const
}

export function getKubernetesIdPersistentVolumeClaimsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdPersistentVolumeClaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volume_claims.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdPersistentVolumeClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdPersistentVolumeClaimsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdPersistentVolumeClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdPersistentVolumeClaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].persistent_volume_claims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdPersistentVolumeClaimsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims/delete', 'POST'] as const
}

export function getPostKubernetesIdPersistentVolumeClaimsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdPersistentVolumeClaimsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volume_claims.delete.$post(args, options),
      )
    },
  })
}

export function usePostKubernetesIdPersistentVolumeClaimsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
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
  const mutationDefaults = getPostKubernetesIdPersistentVolumeClaimsDeleteMutationOptions<
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

export function getPutKubernetesIdPersistentVolumeClaimsResizeMutationKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims/resize', 'PUT'] as const
}

export function getPutKubernetesIdPersistentVolumeClaimsResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdPersistentVolumeClaimsResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volume_claims.resize.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdPersistentVolumeClaimsResize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
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
  const mutationDefaults = getPutKubernetesIdPersistentVolumeClaimsResizeMutationOptions<
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

export function getKubernetesIdPersistentVolumesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes', toValue(args)] as const
}

export function getKubernetesIdPersistentVolumesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdPersistentVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdPersistentVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdPersistentVolumesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdPersistentVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdPersistentVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].persistent_volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdPersistentVolumesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/:name', toValue(args)] as const
}

export function getKubernetesIdPersistentVolumesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdPersistentVolumesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volumes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdPersistentVolumesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
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
                    (typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']
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
                    (typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdPersistentVolumesNameQueryKey>
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
            ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdPersistentVolumesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdPersistentVolumesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].persistent_volumes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdPersistentVolumesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/delete', 'POST'] as const
}

export function getPostKubernetesIdPersistentVolumesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdPersistentVolumesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']
      >,
    ) {
      return parseResponse(client.kubernetes[':id'].persistent_volumes.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdPersistentVolumesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']
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
  const mutationDefaults = getPostKubernetesIdPersistentVolumesDeleteMutationOptions<
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

export function getPutKubernetesIdPersistentVolumesReclaimPolicyMutationKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/reclaim_policy', 'PUT'] as const
}

export function getPutKubernetesIdPersistentVolumesReclaimPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdPersistentVolumesReclaimPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volumes.reclaim_policy.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdPersistentVolumesReclaimPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
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
  const mutationDefaults = getPutKubernetesIdPersistentVolumesReclaimPolicyMutationOptions<
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

export function getKubernetesIdPodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/pods', toValue(args)] as const
}

export function getKubernetesIdPodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdPodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].pods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdPods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdPodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdPodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdPodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].pods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdRbacEnabledQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/rbac_enabled', toValue(args)] as const
}

export function getKubernetesIdRbacEnabledQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdRbacEnabledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].rbac_enabled.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdRbacEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdRbacEnabledQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdRbacEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdRbacEnabledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].rbac_enabled.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdRoleBindingsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/role_bindings/delete', 'POST'] as const
}

export function getPostKubernetesIdRoleBindingsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdRoleBindingsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].role_bindings.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdRoleBindingsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdRoleBindingsDeleteMutationOptions<
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

export function getKubernetesIdRolebindingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/rolebindings', toValue(args)] as const
}

export function getKubernetesIdRolebindingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdRolebindingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].rolebindings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdRolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdRolebindingsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdRolebindingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdRolebindingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].rolebindings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/roles', toValue(args)] as const
}

export function getKubernetesIdRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdRolesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/roles/delete', 'POST'] as const
}

export function getPostKubernetesIdRolesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdRolesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].roles.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdRolesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdRolesDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getKubernetesIdSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/secrets', toValue(args)] as const
}

export function getKubernetesIdSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdSecretsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdSecretsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/secrets/count', toValue(args)] as const
}

export function getKubernetesIdSecretsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdSecretsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].secrets.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdSecretsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdSecretsCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdSecretsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdSecretsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].secrets.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdServiceAccountsDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/service_accounts/delete', 'POST'] as const
}

export function getPostKubernetesIdServiceAccountsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdServiceAccountsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']
      >,
    ) {
      return parseResponse(client.kubernetes[':id'].service_accounts.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdServiceAccountsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']
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
  const mutationDefaults = getPostKubernetesIdServiceAccountsDeleteMutationOptions<
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

export function getKubernetesIdServiceaccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/serviceaccounts', toValue(args)] as const
}

export function getKubernetesIdServiceaccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdServiceaccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].serviceaccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdServiceaccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdServiceaccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdServiceaccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].serviceaccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/services', toValue(args)] as const
}

export function getKubernetesIdServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdServicesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/services/count', toValue(args)] as const
}

export function getKubernetesIdServicesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdServicesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].services.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdServicesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdServicesCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdServicesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdServicesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].services.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostKubernetesIdServicesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/services/delete', 'POST'] as const
}

export function getPostKubernetesIdServicesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdServicesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>,
    ) {
      return parseResponse(client.kubernetes[':id'].services.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdServicesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdServicesDeleteMutationOptions<
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

export function getKubernetesIdStorageClassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes', toValue(args)] as const
}

export function getKubernetesIdStorageClassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdStorageClassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].storage_classes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdStorageClasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdStorageClassesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdStorageClassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdStorageClassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].storage_classes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdStorageClassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes/:name', toValue(args)] as const
}

export function getKubernetesIdStorageClassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdStorageClassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].storage_classes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdStorageClassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
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
                  ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdStorageClassesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdStorageClassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdStorageClassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].storage_classes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutKubernetesIdStorageClassesNameDefaultMutationKey() {
  return ['kubernetes', '/kubernetes/:id/storage_classes/:name/default', 'PUT'] as const
}

export function getPutKubernetesIdStorageClassesNameDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutKubernetesIdStorageClassesNameDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
      >,
    ) {
      return parseResponse(
        client.kubernetes[':id'].storage_classes[':name'].default.$put(args, options),
      )
    },
  })
}

export function usePutKubernetesIdStorageClassesNameDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
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
  const mutationDefaults = getPutKubernetesIdStorageClassesNameDefaultMutationOptions<
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

export function getPostKubernetesIdStorageClassesDeleteMutationKey() {
  return ['kubernetes', '/kubernetes/:id/storage_classes/delete', 'POST'] as const
}

export function getPostKubernetesIdStorageClassesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKubernetesIdStorageClassesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']
      >,
    ) {
      return parseResponse(client.kubernetes[':id'].storage_classes.delete.$post(args, options))
    },
  })
}

export function usePostKubernetesIdStorageClassesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']>,
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
  const mutationDefaults = getPostKubernetesIdStorageClassesDeleteMutationOptions<
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

export function getKubernetesIdVersionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/version', toValue(args)] as const
}

export function getKubernetesIdVersionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].version.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].version.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>>,
) {
  return ['kubernetes', '/kubernetes/:id/volumes', toValue(args)] as const
}

export function getKubernetesIdVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].volumes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdVolumesQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdVolumesNamespaceVolumeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/:namespace/:volume', toValue(args)] as const
}

export function getKubernetesIdVolumesNamespaceVolumeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdVolumesNamespaceVolumeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdVolumesNamespaceVolume<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']>
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
                    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
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
                    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getKubernetesIdVolumesNamespaceVolumeQueryKey>
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
              (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdVolumesNamespaceVolumeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdVolumesNamespaceVolumeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesIdVolumesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>
  >,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/count', toValue(args)] as const
}

export function getKubernetesIdVolumesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesIdVolumesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes[':id'].volumes.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesIdVolumesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKubernetesIdVolumesCountQueryKey>
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
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdVolumesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesIdVolumesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes[':id'].volumes.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKubernetesConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kubernetes.config.$get>>,
) {
  return ['kubernetes', '/kubernetes/config', toValue(args)] as const
}

export function getKubernetesConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kubernetes.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKubernetesConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kubernetes.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKubernetesConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kubernetes.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>
            >
          >,
          ReturnType<typeof getKubernetesConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKubernetesConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kubernetes.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLdapCheckMutationKey() {
  return ['ldap', '/ldap/check', 'POST'] as const
}

export function getPostLdapCheckMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ldap.check.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.ldap.check.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLdapCheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ldap.check.$post>) {
      return parseResponse(client.ldap.check.$post(args, options))
    },
  })
}

export function usePostLdapCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ldap.check.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.ldap.check.$post>,
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
  const mutationDefaults = getPostLdapCheckMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMotdQueryKey() {
  return ['motd', '/motd'] as const
}

export function getMotdQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMotdQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.motd.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMotd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
          ReturnType<typeof getMotdQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMotdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMotdQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.motd.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistriesQueryKey() {
  return ['registries', '/registries'] as const
}

export function getRegistriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegistriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
          >,
          ReturnType<typeof getRegistriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegistriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.registries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRegistriesMutationKey() {
  return ['registries', '/registries', 'POST'] as const
}

export function getPostRegistriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>>,
    TError,
    InferRequestType<typeof client.registries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registries.$post>) {
      return parseResponse(client.registries.$post(args, options))
    },
  })
}

export function usePostRegistries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.registries.$post>,
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
  const mutationDefaults = getPostRegistriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRegistriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':id']['$get']>>,
) {
  return ['registries', '/registries/:id', toValue(args)] as const
}

export function getRegistriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRegistriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRegistriesIdMutationKey() {
  return ['registries', '/registries/:id', 'PUT'] as const
}

export function getPutRegistriesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.registries)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRegistriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registries)[':id']['$put']>) {
      return parseResponse(client.registries[':id'].$put(args, options))
    },
  })
}

export function usePutRegistriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.registries)[':id']['$put']>,
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
  const mutationDefaults = getPutRegistriesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRegistriesIdMutationKey() {
  return ['registries', '/registries/:id', 'DELETE'] as const
}

export function getDeleteRegistriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.registries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registries)[':id']['$delete']>) {
      return parseResponse(client.registries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRegistriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.registries)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.registries)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRegistriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostRegistriesIdConfigureMutationKey() {
  return ['registries', '/registries/:id/configure', 'POST'] as const
}

export function getPostRegistriesIdConfigureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registries)[':id']['configure']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.registries)[':id']['configure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistriesIdConfigureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registries)[':id']['configure']['$post']>,
    ) {
      return parseResponse(client.registries[':id'].configure.$post(args, options))
    },
  })
}

export function usePostRegistriesIdConfigure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.registries)[':id']['configure']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.registries)[':id']['configure']['$post']>,
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
  const mutationDefaults = getPostRegistriesIdConfigureMutationOptions<TError, TOnMutateResult>(
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

export function getPostRegistriesPingMutationKey() {
  return ['registries', '/registries/ping', 'POST'] as const
}

export function getPostRegistriesPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.ping.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registries.ping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistriesPingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registries.ping.$post>) {
      return parseResponse(client.registries.ping.$post(args, options))
    },
  })
}

export function usePostRegistriesPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registries.ping.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.registries.ping.$post>,
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
  const mutationDefaults = getPostRegistriesPingMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourceControlsMutationKey() {
  return ['resource_controls', '/resource_controls', 'POST'] as const
}

export function getPostResourceControlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource_controls.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resource_controls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceControlsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resource_controls.$post>) {
      return parseResponse(client.resource_controls.$post(args, options))
    },
  })
}

export function usePostResourceControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.resource_controls.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.resource_controls.$post>,
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
  const mutationDefaults = getPostResourceControlsMutationOptions<TError, TOnMutateResult>(
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

export function getPutResourceControlsIdMutationKey() {
  return ['resource_controls', '/resource_controls/:id', 'PUT'] as const
}

export function getPutResourceControlsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resource_controls)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resource_controls)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResourceControlsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resource_controls)[':id']['$put']>) {
      return parseResponse(client.resource_controls[':id'].$put(args, options))
    },
  })
}

export function usePutResourceControlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resource_controls)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resource_controls)[':id']['$put']>,
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
  const mutationDefaults = getPutResourceControlsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteResourceControlsIdMutationKey() {
  return ['resource_controls', '/resource_controls/:id', 'DELETE'] as const
}

export function getDeleteResourceControlsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_controls)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.resource_controls)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourceControlsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resource_controls)[':id']['$delete']>) {
      return parseResponse(client.resource_controls[':id'].$delete(args, options))
    },
  })
}

export function useDeleteResourceControlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.resource_controls)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.resource_controls)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteResourceControlsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostRestoreMutationKey() {
  return ['restore', '/restore', 'POST'] as const
}

export function getPostRestoreMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.$post>>>>>,
    TError,
    InferRequestType<typeof client.restore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restore.$post>) {
      return parseResponse(client.restore.$post(args, options))
    },
  })
}

export function usePostRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.restore.$post>,
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
  const mutationDefaults = getPostRestoreMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesQueryKey() {
  return ['roles', '/roles'] as const
}

export function getRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSettingsMutationKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function getPutSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
    TError,
    InferRequestType<typeof client.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$put>) {
      return parseResponse(client.settings.$put(args, options))
    },
  })
}

export function usePutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.$put>,
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
  const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsPublicQueryKey() {
  return ['settings', '/settings/public'] as const
}

export function getSettingsPublicQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPublicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>
            >
          >,
          ReturnType<typeof getSettingsPublicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPublicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.public.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSslQueryKey() {
  return ['ssl', '/ssl'] as const
}

export function getSslQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSslQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ssl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSsl<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
          ReturnType<typeof getSslQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSslQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ssl.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSslMutationKey() {
  return ['ssl', '/ssl', 'PUT'] as const
}

export function getPutSslMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.ssl.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSslMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ssl.$put>) {
      return parseResponse(client.ssl.$put(args, options))
    },
  })
}

export function usePutSsl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$put>>>>>
          | undefined,
          TError,
          InferRequestType<typeof client.ssl.$put>,
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
  const mutationDefaults = getPutSslMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
) {
  return ['stacks', '/stacks', toValue(args)] as const
}

export function getStacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStacks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          ReturnType<typeof getStacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStacksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
) {
  return ['stacks', '/stacks/:id', toValue(args)] as const
}

export function getStacksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStacksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getStacksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStacksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStacksIdMutationKey() {
  return ['stacks', '/stacks/:id', 'PUT'] as const
}

export function getPutStacksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['$put']>) {
      return parseResponse(client.stacks[':id'].$put(args, options))
    },
  })
}

export function usePutStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['$put']>,
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
  const mutationDefaults = getPutStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStacksIdMutationKey() {
  return ['stacks', '/stacks/:id', 'DELETE'] as const
}

export function getDeleteStacksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['$delete']>) {
      return parseResponse(client.stacks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutStacksIdAssociateMutationKey() {
  return ['stacks', '/stacks/:id/associate', 'PUT'] as const
}

export function getPutStacksIdAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':id']['associate']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['associate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStacksIdAssociateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['associate']['$put']>) {
      return parseResponse(client.stacks[':id'].associate.$put(args, options))
    },
  })
}

export function usePutStacksIdAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['associate']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['associate']['$put']>,
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
  const mutationDefaults = getPutStacksIdAssociateMutationOptions<TError, TOnMutateResult>(
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

export function getStacksIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['file']['$get']>>,
) {
  return ['stacks', '/stacks/:id/file', toValue(args)] as const
}

export function getStacksIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStacksIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStacksIdFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStacksIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStacksIdGitMutationKey() {
  return ['stacks', '/stacks/:id/git', 'POST'] as const
}

export function getPostStacksIdGitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['git']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['git']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksIdGitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['git']['$post']>) {
      return parseResponse(client.stacks[':id'].git.$post(args, options))
    },
  })
}

export function usePostStacksIdGit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['git']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['git']['$post']>,
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
  const mutationDefaults = getPostStacksIdGitMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutStacksIdGitRedeployMutationKey() {
  return ['stacks', '/stacks/:id/git/redeploy', 'PUT'] as const
}

export function getPutStacksIdGitRedeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStacksIdGitRedeployMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>,
    ) {
      return parseResponse(client.stacks[':id'].git.redeploy.$put(args, options))
    },
  })
}

export function usePutStacksIdGitRedeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>,
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
  const mutationDefaults = getPutStacksIdGitRedeployMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksIdMigrateMutationKey() {
  return ['stacks', '/stacks/:id/migrate', 'POST'] as const
}

export function getPostStacksIdMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['migrate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksIdMigrateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']>) {
      return parseResponse(client.stacks[':id'].migrate.$post(args, options))
    },
  })
}

export function usePostStacksIdMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['migrate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']>,
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
  const mutationDefaults = getPostStacksIdMigrateMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksIdStartMutationKey() {
  return ['stacks', '/stacks/:id/start', 'POST'] as const
}

export function getPostStacksIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['start']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksIdStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['start']['$post']>) {
      return parseResponse(client.stacks[':id'].start.$post(args, options))
    },
  })
}

export function usePostStacksIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['start']['$post']>,
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
  const mutationDefaults = getPostStacksIdStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksIdStopMutationKey() {
  return ['stacks', '/stacks/:id/stop', 'POST'] as const
}

export function getPostStacksIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksIdStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':id']['stop']['$post']>) {
      return parseResponse(client.stacks[':id'].stop.$post(args, options))
    },
  })
}

export function usePostStacksIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':id']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':id']['stop']['$post']>,
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
  const mutationDefaults = getPostStacksIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksCreateKubernetesRepositoryMutationKey() {
  return ['stacks', '/stacks/create/kubernetes/repository', 'POST'] as const
}

export function getPostStacksCreateKubernetesRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.kubernetes.repository.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.kubernetes.repository.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateKubernetesRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.stacks.create.kubernetes.repository.$post>,
    ) {
      return parseResponse(client.stacks.create.kubernetes.repository.$post(args, options))
    },
  })
}

export function usePostStacksCreateKubernetesRepository<
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
                Awaited<ReturnType<typeof client.stacks.create.kubernetes.repository.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.kubernetes.repository.$post>,
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
  const mutationDefaults = getPostStacksCreateKubernetesRepositoryMutationOptions<
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

export function getPostStacksCreateKubernetesStringMutationKey() {
  return ['stacks', '/stacks/create/kubernetes/string', 'POST'] as const
}

export function getPostStacksCreateKubernetesStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.kubernetes.string.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.kubernetes.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateKubernetesStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.kubernetes.string.$post>) {
      return parseResponse(client.stacks.create.kubernetes.string.$post(args, options))
    },
  })
}

export function usePostStacksCreateKubernetesString<
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
                Awaited<ReturnType<typeof client.stacks.create.kubernetes.string.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.kubernetes.string.$post>,
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
  const mutationDefaults = getPostStacksCreateKubernetesStringMutationOptions<
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

export function getPostStacksCreateKubernetesUrlMutationKey() {
  return ['stacks', '/stacks/create/kubernetes/url', 'POST'] as const
}

export function getPostStacksCreateKubernetesUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.kubernetes.url.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.kubernetes.url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateKubernetesUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.kubernetes.url.$post>) {
      return parseResponse(client.stacks.create.kubernetes.url.$post(args, options))
    },
  })
}

export function usePostStacksCreateKubernetesUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stacks.create.kubernetes.url.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.kubernetes.url.$post>,
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
  const mutationDefaults = getPostStacksCreateKubernetesUrlMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksCreateStandaloneFileMutationKey() {
  return ['stacks', '/stacks/create/standalone/file', 'POST'] as const
}

export function getPostStacksCreateStandaloneFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.standalone.file.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.standalone.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateStandaloneFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.standalone.file.$post>) {
      return parseResponse(client.stacks.create.standalone.file.$post(args, options))
    },
  })
}

export function usePostStacksCreateStandaloneFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stacks.create.standalone.file.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.standalone.file.$post>,
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
  const mutationDefaults = getPostStacksCreateStandaloneFileMutationOptions<
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

export function getPostStacksCreateStandaloneRepositoryMutationKey() {
  return ['stacks', '/stacks/create/standalone/repository', 'POST'] as const
}

export function getPostStacksCreateStandaloneRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.standalone.repository.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.standalone.repository.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateStandaloneRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.stacks.create.standalone.repository.$post>,
    ) {
      return parseResponse(client.stacks.create.standalone.repository.$post(args, options))
    },
  })
}

export function usePostStacksCreateStandaloneRepository<
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
                Awaited<ReturnType<typeof client.stacks.create.standalone.repository.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.standalone.repository.$post>,
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
  const mutationDefaults = getPostStacksCreateStandaloneRepositoryMutationOptions<
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

export function getPostStacksCreateStandaloneStringMutationKey() {
  return ['stacks', '/stacks/create/standalone/string', 'POST'] as const
}

export function getPostStacksCreateStandaloneStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.standalone.string.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.standalone.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateStandaloneStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.standalone.string.$post>) {
      return parseResponse(client.stacks.create.standalone.string.$post(args, options))
    },
  })
}

export function usePostStacksCreateStandaloneString<
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
                Awaited<ReturnType<typeof client.stacks.create.standalone.string.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.standalone.string.$post>,
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
  const mutationDefaults = getPostStacksCreateStandaloneStringMutationOptions<
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

export function getPostStacksCreateSwarmFileMutationKey() {
  return ['stacks', '/stacks/create/swarm/file', 'POST'] as const
}

export function getPostStacksCreateSwarmFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.swarm.file.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.swarm.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateSwarmFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.swarm.file.$post>) {
      return parseResponse(client.stacks.create.swarm.file.$post(args, options))
    },
  })
}

export function usePostStacksCreateSwarmFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stacks.create.swarm.file.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.swarm.file.$post>,
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
  const mutationDefaults = getPostStacksCreateSwarmFileMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksCreateSwarmRepositoryMutationKey() {
  return ['stacks', '/stacks/create/swarm/repository', 'POST'] as const
}

export function getPostStacksCreateSwarmRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.swarm.repository.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.swarm.repository.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateSwarmRepositoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.swarm.repository.$post>) {
      return parseResponse(client.stacks.create.swarm.repository.$post(args, options))
    },
  })
}

export function usePostStacksCreateSwarmRepository<
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
                Awaited<ReturnType<typeof client.stacks.create.swarm.repository.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.swarm.repository.$post>,
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
  const mutationDefaults = getPostStacksCreateSwarmRepositoryMutationOptions<
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

export function getPostStacksCreateSwarmStringMutationKey() {
  return ['stacks', '/stacks/create/swarm/string', 'POST'] as const
}

export function getPostStacksCreateSwarmStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.swarm.string.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.stacks.create.swarm.string.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksCreateSwarmStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.create.swarm.string.$post>) {
      return parseResponse(client.stacks.create.swarm.string.$post(args, options))
    },
  })
}

export function usePostStacksCreateSwarmString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stacks.create.swarm.string.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.stacks.create.swarm.string.$post>,
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
  const mutationDefaults = getPostStacksCreateSwarmStringMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStacksNameNameMutationKey() {
  return ['stacks', '/stacks/name/:name', 'DELETE'] as const
}

export function getDeleteStacksNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks.name)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.stacks.name)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksNameNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks.name)[':name']['$delete']>) {
      return parseResponse(client.stacks.name[':name'].$delete(args, options))
    },
  })
}

export function useDeleteStacksNameName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.stacks.name)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.stacks.name)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteStacksNameNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostStacksWebhooksWebhookIDMutationKey() {
  return ['stacks', '/stacks/webhooks/:webhookID', 'POST'] as const
}

export function getPostStacksWebhooksWebhookIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks.webhooks)[':webhookID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksWebhooksWebhookIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']>,
    ) {
      return parseResponse(client.stacks.webhooks[':webhookID'].$post(args, options))
    },
  })
}

export function usePostStacksWebhooksWebhookID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks.webhooks)[':webhookID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']>,
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
  const mutationDefaults = getPostStacksWebhooksWebhookIDMutationOptions<TError, TOnMutateResult>(
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          ReturnType<typeof getSystemInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemNodesQueryKey() {
  return ['system', '/system/nodes'] as const
}

export function getSystemNodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemNodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
          >,
          ReturnType<typeof getSystemNodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemNodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.nodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemStatusQueryKey() {
  return ['system', '/system/status'] as const
}

export function getSystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
          >,
          ReturnType<typeof getSystemStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemUpgradeMutationKey() {
  return ['system', '/system/upgrade', 'POST'] as const
}

export function getPostSystemUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.upgrade.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemUpgradeMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.upgrade.$post(undefined, options))
    },
  })
}

export function usePostSystemUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.system.upgrade.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSystemUpgradeMutationOptions<TError, TOnMutateResult>(
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

export function getSystemVersionQueryKey() {
  return ['system', '/system/version'] as const
}

export function getSystemVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
          >,
          ReturnType<typeof getSystemVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsIdMutationKey() {
  return ['tags', '/tags/:id', 'DELETE'] as const
}

export function getDeleteTagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':id']['$delete']>) {
      return parseResponse(client.tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamMembershipsQueryKey() {
  return ['team_memberships', '/team_memberships'] as const
}

export function getTeamMembershipsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamMembershipsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team_memberships.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>
            >
          >,
          ReturnType<typeof getTeamMembershipsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamMembershipsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team_memberships.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamMembershipsMutationKey() {
  return ['team_memberships', '/team_memberships', 'POST'] as const
}

export function getPostTeamMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.team_memberships.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamMembershipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.team_memberships.$post>) {
      return parseResponse(client.team_memberships.$post(args, options))
    },
  })
}

export function usePostTeamMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.team_memberships.$post>,
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
  const mutationDefaults = getPostTeamMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getPutTeamMembershipsIdMutationKey() {
  return ['team_memberships', '/team_memberships/:id', 'PUT'] as const
}

export function getPutTeamMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team_memberships)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.team_memberships)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team_memberships)[':id']['$put']>) {
      return parseResponse(client.team_memberships[':id'].$put(args, options))
    },
  })
}

export function usePutTeamMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team_memberships)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.team_memberships)[':id']['$put']>,
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
  const mutationDefaults = getPutTeamMembershipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTeamMembershipsIdMutationKey() {
  return ['team_memberships', '/team_memberships/:id', 'DELETE'] as const
}

export function getDeleteTeamMembershipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.team_memberships)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamMembershipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team_memberships)[':id']['$delete']>) {
      return parseResponse(client.team_memberships[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTeamMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.team_memberships)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.team_memberships)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTeamMembershipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
) {
  return ['teams', '/teams', toValue(args)] as const
}

export function getTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          ReturnType<typeof getTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsMutationKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function getPostTeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.$post>) {
      return parseResponse(client.teams.$post(args, options))
    },
  })
}

export function usePostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
          TError,
          InferRequestType<typeof client.teams.$post>,
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
  const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['$get']>>,
) {
  return ['teams', '/teams/:id', toValue(args)] as const
}

export function getTeamsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTeamsIdMutationKey() {
  return ['teams', '/teams/:id', 'PUT'] as const
}

export function getPutTeamsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.teams)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':id']['$put']>) {
      return parseResponse(client.teams[':id'].$put(args, options))
    },
  })
}

export function usePutTeamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':id']['$put']>,
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
  const mutationDefaults = getPutTeamsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTeamsIdMutationKey() {
  return ['teams', '/teams/:id', 'DELETE'] as const
}

export function getDeleteTeamsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':id']['$delete']>) {
      return parseResponse(client.teams[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTeamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTeamsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamsIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>>,
) {
  return ['teams', '/teams/:id/memberships', toValue(args)] as const
}

export function getTeamsIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesQueryKey() {
  return ['templates', '/templates'] as const
}

export function getTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesIdFileMutationKey() {
  return ['templates', '/templates/:id/file', 'POST'] as const
}

export function getPostTemplatesIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesIdFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['file']['$post']>) {
      return parseResponse(client.templates[':id'].file.$post(args, options))
    },
  })
}

export function usePostTemplatesIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':id']['file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':id']['file']['$post']>,
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
  const mutationDefaults = getPostTemplatesIdFileMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesHelmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.helm.$get>>,
) {
  return ['templates', '/templates/helm', toValue(args)] as const
}

export function getTemplatesHelmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.helm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesHelmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.helm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesHelm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.helm.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
          >,
          ReturnType<typeof getTemplatesHelmQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesHelmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesHelmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.helm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesHelmCommandQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates.helm)[':command']['$get']>>,
) {
  return ['templates', '/templates/helm/:command', toValue(args)] as const
}

export function getTemplatesHelmCommandQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates.helm)[':command']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesHelmCommandQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.helm[':command'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesHelmCommand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates.helm)[':command']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesHelmCommandQueryKey>
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
          Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesHelmCommandQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesHelmCommandQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.helm[':command'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUploadTlsCertificateMutationKey() {
  return ['upload', '/upload/tls/:certificate', 'POST'] as const
}

export function getPostUploadTlsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upload.tls)[':certificate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.upload.tls)[':certificate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadTlsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.upload.tls)[':certificate']['$post']>) {
      return parseResponse(client.upload.tls[':certificate'].$post(args, options))
    },
  })
}

export function usePostUploadTlsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.upload.tls)[':certificate']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.upload.tls)[':certificate']['$post']>,
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
  const mutationDefaults = getPostUploadTlsCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  return ['users', '/users/:id', toValue(args)] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdMutationKey() {
  return ['users', '/users/:id', 'PUT'] as const
}

export function getPutUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$put']>) {
      return parseResponse(client.users[':id'].$put(args, options))
    },
  })
}

export function usePutUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['$put']>,
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
  const mutationDefaults = getPutUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersIdMutationKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function getDeleteUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$delete']>) {
      return parseResponse(client.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdEffectiveAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>
  >,
) {
  return ['users', '/users/:id/effective-access', toValue(args)] as const
}

export function getUsersIdEffectiveAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdEffectiveAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id']['effective-access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdEffectiveAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdEffectiveAccessQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdEffectiveAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdEffectiveAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id']['effective-access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdHelmRepositoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>
  >,
) {
  return ['users', '/users/:id/helm/repositories', toValue(args)] as const
}

export function getUsersIdHelmRepositoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdHelmRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].helm.repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdHelmRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdHelmRepositoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdHelmRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdHelmRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].helm.repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdHelmRepositoriesMutationKey() {
  return ['users', '/users/:id/helm/repositories', 'POST'] as const
}

export function getPostUsersIdHelmRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdHelmRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']>,
    ) {
      return parseResponse(client.users[':id'].helm.repositories.$post(args, options))
    },
  })
}

export function usePostUsersIdHelmRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']>,
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
  const mutationDefaults = getPostUsersIdHelmRepositoriesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdHelmRepositoriesRepositoryIDMutationKey() {
  return ['users', '/users/:id/helm/repositories/:repositoryID', 'DELETE'] as const
}

export function getDeleteUsersIdHelmRepositoriesRepositoryIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdHelmRepositoriesRepositoryIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id'].helm.repositories[':repositoryID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersIdHelmRepositoriesRepositoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
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
  const mutationDefaults = getDeleteUsersIdHelmRepositoriesRepositoryIDMutationOptions<
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

export function getUsersIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['memberships']['$get']>>,
) {
  return ['users', '/users/:id/memberships', toValue(args)] as const
}

export function getUsersIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersIdPasswdMutationKey() {
  return ['users', '/users/:id/passwd', 'PUT'] as const
}

export function getPutUsersIdPasswdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['passwd']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['passwd']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdPasswdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['passwd']['$put']>) {
      return parseResponse(client.users[':id'].passwd.$put(args, options))
    },
  })
}

export function usePutUsersIdPasswd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':id']['passwd']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['passwd']['$put']>,
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
  const mutationDefaults = getPutUsersIdPasswdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['tokens']['$get']>>,
) {
  return ['users', '/users/:id/tokens', toValue(args)] as const
}

export function getUsersIdTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersIdTokensMutationKey() {
  return ['users', '/users/:id/tokens', 'POST'] as const
}

export function getPostUsersIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['tokens']['$post']>) {
      return parseResponse(client.users[':id'].tokens.$post(args, options))
    },
  })
}

export function usePostUsersIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':id']['tokens']['$post']>,
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
  const mutationDefaults = getPostUsersIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdTokensKeyIDMutationKey() {
  return ['users', '/users/:id/tokens/:keyID', 'DELETE'] as const
}

export function getDeleteUsersIdTokensKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdTokensKeyIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>,
    ) {
      return parseResponse(client.users[':id'].tokens[':keyID'].$delete(args, options))
    },
  })
}

export function useDeleteUsersIdTokensKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>,
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
  const mutationDefaults = getDeleteUsersIdTokensKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getUsersAdminCheckQueryKey() {
  return ['users', '/users/admin/check'] as const
}

export function getUsersAdminCheckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersAdminCheckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.admin.check.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersAdminCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>
            >
          >,
          ReturnType<typeof getUsersAdminCheckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAdminCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersAdminCheckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.admin.check.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersAdminInitMutationKey() {
  return ['users', '/users/admin/init', 'POST'] as const
}

export function getPostUsersAdminInitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.init.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.admin.init.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersAdminInitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.admin.init.$post>) {
      return parseResponse(client.users.admin.init.$post(args, options))
    },
  })
}

export function usePostUsersAdminInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.init.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.admin.init.$post>,
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
  const mutationDefaults = getPostUsersAdminInitMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function getPutWebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$put']>) {
      return parseResponse(client.webhooks[':id'].$put(args, options))
    },
  })
}

export function usePutWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$put']>,
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
  const mutationDefaults = getPutWebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'POST'] as const
}

export function getPostWebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$post']>) {
      return parseResponse(client.webhooks[':id'].$post(args, options))
    },
  })
}

export function usePostWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$post']>,
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
  const mutationDefaults = getPostWebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhooksIdMutationKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebsocketAttachQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.attach.$get>>,
) {
  return ['websocket', '/websocket/attach', toValue(args)] as const
}

export function getWebsocketAttachQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.attach.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebsocketAttachQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.websocket.attach.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebsocketAttach<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.attach.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>
            >
          >,
          ReturnType<typeof getWebsocketAttachQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketAttachQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebsocketAttachQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.websocket.attach.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebsocketExecQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.exec.$get>>,
) {
  return ['websocket', '/websocket/exec', toValue(args)] as const
}

export function getWebsocketExecQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.exec.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebsocketExecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.websocket.exec.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebsocketExec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.exec.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
          >,
          ReturnType<typeof getWebsocketExecQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketExecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebsocketExecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.websocket.exec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebsocketKubernetesShellQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>>,
) {
  return ['websocket', '/websocket/kubernetes-shell', toValue(args)] as const
}

export function getWebsocketKubernetesShellQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebsocketKubernetesShellQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.websocket['kubernetes-shell'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebsocketKubernetesShell<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebsocketKubernetesShellQueryKey>
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
          Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketKubernetesShellQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebsocketKubernetesShellQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.websocket['kubernetes-shell'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebsocketPodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.pod.$get>>,
) {
  return ['websocket', '/websocket/pod', toValue(args)] as const
}

export function getWebsocketPodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.pod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebsocketPodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.websocket.pod.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebsocketPod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.websocket.pod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
          >,
          ReturnType<typeof getWebsocketPodQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketPodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebsocketPodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.websocket.pod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
