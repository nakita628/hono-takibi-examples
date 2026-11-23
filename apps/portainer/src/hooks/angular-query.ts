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

export function injectPostAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
        TError,
        InferRequestType<typeof client.auth.$post>,
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
    const mutationDefaults = getPostAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
          >
        | undefined,
        TError,
        void,
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
    const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAuthOauthValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.validate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.oauth.validate.$post>,
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
    const mutationDefaults = getPostAuthOauthValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBackup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.$post>>>>>,
        TError,
        InferRequestType<typeof client.backup.$post>,
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
    const mutationDefaults = getPostBackupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCustomTemplatesQueryKey(
  args: InferRequestType<typeof client.custom_templates.$get>,
) {
  return ['custom_templates', '/custom_templates', args] as const
}

export function getCustomTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.custom_templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTemplatesQueryKey>
  >({
    queryKey: getCustomTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCustomTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.custom_templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCustomTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
) {
  return ['custom_templates', '/custom_templates/:id', args] as const
}

export function getCustomTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomTemplatesIdQueryKey>
  >({
    queryKey: getCustomTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCustomTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomTemplatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutCustomTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCustomTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteCustomTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCustomTemplatesIdFileQueryKey(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
) {
  return ['custom_templates', '/custom_templates/:id/file', args] as const
}

export function getCustomTemplatesIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomTemplatesIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_templates[':id'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCustomTemplatesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCustomTemplatesIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutCustomTemplatesIdGitFetch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCustomTemplatesIdGitFetchMutationOptions<
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

export function injectPostCustomTemplatesCreateFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomTemplatesCreateFileMutationOptions<
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

export function injectPostCustomTemplatesCreateRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomTemplatesCreateRepositoryMutationOptions<
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

export function injectPostCustomTemplatesCreateString<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCustomTemplatesCreateStringMutationOptions<
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

export function getDockerEnvironmentIdContainersContainerIdGpusQueryKey(
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
) {
  return ['docker', '/docker/:environmentId/containers/:containerId/gpus', args] as const
}

export function getDockerEnvironmentIdContainersContainerIdGpusQueryOptions<
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
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDockerEnvironmentIdContainersContainerIdGpusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docker[':environmentId'].containers[':containerId'].gpus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDockerEnvironmentIdContainersContainerIdGpus<
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
  args: () => InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDockerEnvironmentIdContainersContainerIdGpusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDockerEnvironmentIdDashboardQueryKey(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
) {
  return ['docker', '/docker/:environmentId/dashboard', args] as const
}

export function getDockerEnvironmentIdDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDockerEnvironmentIdDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docker[':environmentId'].dashboard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDockerEnvironmentIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDockerEnvironmentIdDashboardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDockerEnvironmentIdImagesQueryKey(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
) {
  return ['docker', '/docker/:environmentId/images', args] as const
}

export function getDockerEnvironmentIdImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDockerEnvironmentIdImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.docker[':environmentId'].images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDockerEnvironmentIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDockerEnvironmentIdImagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEdgeGroupsQueryKey() {
  return ['edge_groups', '/edge_groups'] as const
}

export function getEdgeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeGroupsQueryKey>
  >({
    queryKey: getEdgeGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEdgeGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.edge_groups.$post>,
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
    const mutationDefaults = getPostEdgeGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEdgeGroupsIdQueryKey(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
) {
  return ['edge_groups', '/edge_groups/:id', args] as const
}

export function getEdgeGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeGroupsIdQueryKey>
  >({
    queryKey: getEdgeGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEdgeGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.edge_groups)[':id']['$put']>,
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
    const mutationDefaults = getPutEdgeGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEdgeGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEdgeGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEdgeJobsQueryKey() {
  return ['edge_jobs', '/edge_jobs'] as const
}

export function getEdgeJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsQueryKey>
  >({
    queryKey: getEdgeJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeJobsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getEdgeJobsIdQueryKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id', args] as const
}

export function getEdgeJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdQueryKey>
  >({
    queryKey: getEdgeJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEdgeJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.edge_jobs)[':id']['$put']>,
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
    const mutationDefaults = getPutEdgeJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEdgeJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteEdgeJobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEdgeJobsIdFileQueryKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/file', args] as const
}

export function getEdgeJobsIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdFileQueryKey>
  >({
    queryKey: getEdgeJobsIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_jobs[':id'].file.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeJobsIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeJobsIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeJobsIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEdgeJobsIdTasksQueryKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks', args] as const
}

export function getEdgeJobsIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeJobsIdTasksQueryKey>
  >({
    queryKey: getEdgeJobsIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_jobs[':id'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEdgeJobsIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeJobsIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeJobsIdTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEdgeJobsIdTasksTaskIDLogsQueryKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', args] as const
}

export function getEdgeJobsIdTasksTaskIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEdgeJobsIdTasksTaskIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_jobs[':id'].tasks[':taskID'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEdgeJobsIdTasksTaskIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEdgeJobsIdTasksTaskIDLogsQueryKey>
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
      ...getEdgeJobsIdTasksTaskIDLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEdgeJobsIdTasksTaskIDLogs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEdgeJobsIdTasksTaskIDLogsMutationOptions<
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

export function injectDeleteEdgeJobsIdTasksTaskIDLogs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEdgeJobsIdTasksTaskIDLogsMutationOptions<
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

export function injectPostEdgeJobsCreateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.file.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.edge_jobs.create.file.$post>,
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
    const mutationDefaults = getPostEdgeJobsCreateFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEdgeJobsCreateString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.string.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.edge_jobs.create.string.$post>,
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
    const mutationDefaults = getPostEdgeJobsCreateStringMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEdgeStacksQueryKey(args: InferRequestType<typeof client.edge_stacks.$get>) {
  return ['edge_stacks', '/edge_stacks', args] as const
}

export function getEdgeStacksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.edge_stacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEdgeStacksQueryKey>
  >({
    queryKey: getEdgeStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_stacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeStacks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.edge_stacks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeStacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeStacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEdgeStacksIdQueryKey(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
) {
  return ['edge_stacks', '/edge_stacks/:id', args] as const
}

export function getEdgeStacksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeStacksIdQueryKey>
  >({
    queryKey: getEdgeStacksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_stacks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgeStacksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeStacksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeStacksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEdgeStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.edge_stacks)[':id']['$put']>,
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
    const mutationDefaults = getPutEdgeStacksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEdgeStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEdgeStacksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEdgeStacksIdFileQueryKey(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
) {
  return ['edge_stacks', '/edge_stacks/:id/file', args] as const
}

export function getEdgeStacksIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEdgeStacksIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edge_stacks[':id'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEdgeStacksIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgeStacksIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEdgeStacksIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEdgeStacksIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEdgeStacksCreateFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.file.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.edge_stacks.create.file.$post>,
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
    const mutationDefaults = getPostEdgeStacksCreateFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEdgeStacksCreateRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEdgeStacksCreateRepositoryMutationOptions<
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

export function injectPostEdgeStacksCreateString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.string.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.edge_stacks.create.string.$post>,
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
    const mutationDefaults = getPostEdgeStacksCreateStringMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEndpointGroupsQueryKey(
  args: InferRequestType<typeof client.endpoint_groups.$get>,
) {
  return ['endpoint_groups', '/endpoint_groups', args] as const
}

export function getEndpointGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.endpoint_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointGroupsQueryKey>
  >({
    queryKey: getEndpointGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoint_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEndpointGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.endpoint_groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEndpointGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.endpoint_groups.$post>,
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
    const mutationDefaults = getPostEndpointGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEndpointGroupsIdQueryKey(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
) {
  return ['endpoint_groups', '/endpoint_groups/:id', args] as const
}

export function getEndpointGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointGroupsIdQueryKey>
  >({
    queryKey: getEndpointGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoint_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEndpointGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEndpointGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEndpointGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutEndpointGroupsIdEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointGroupsIdEndpointsEndpointIdMutationOptions<
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

export function injectDeleteEndpointGroupsIdEndpointsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEndpointGroupsIdEndpointsEndpointIdMutationOptions<
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

export function getEndpointsQueryKey(args: InferRequestType<typeof client.endpoints.$get>) {
  return ['endpoints', '/endpoints', args] as const
}

export function getEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointsQueryKey>
  >({
    queryKey: getEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.endpoints.$post>,
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
    const mutationDefaults = getPostEndpointsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.endpoints.$delete>,
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
    const mutationDefaults = getDeleteEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEndpointsIdQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
) {
  return ['endpoints', '/endpoints/:id', args] as const
}

export function getEndpointsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsIdQueryKey>
  >({
    queryKey: getEndpointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEndpointsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.endpoints)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.endpoints)[':id']['$put']>,
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
    const mutationDefaults = getPutEndpointsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.endpoints)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteEndpointsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutEndpointsIdAssociation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointsIdAssociationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEndpointsIdDockerV2BrowsePut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsIdDockerV2BrowsePutMutationOptions<
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

export function getEndpointsIdDockerhubRegistryIdQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/dockerhub/:registryId', args] as const
}

export function getEndpointsIdDockerhubRegistryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdDockerhubRegistryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].dockerhub[':registryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdDockerhubRegistryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEndpointsIdDockerhubRegistryIdQueryKey>
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
      ...getEndpointsIdDockerhubRegistryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEndpointsIdEdgeJobsJobIDLogs<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsIdEdgeJobsJobIDLogsMutationOptions<
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

export function getEndpointsIdEdgeStacksStackIdQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/edge/stacks/:stackId', args] as const
}

export function getEndpointsIdEdgeStacksStackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdEdgeStacksStackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].edge.stacks[':stackId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdEdgeStacksStackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEndpointsIdEdgeStacksStackIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEndpointsIdEdgeStatusQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/edge/status', args] as const
}

export function getEndpointsIdEdgeStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdEdgeStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].edge.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdEdgeStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEndpointsIdEdgeStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEndpointsIdForceupdateservice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointsIdForceupdateserviceMutationOptions<
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

export function getEndpointsIdKubernetesHelmQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm', args] as const
}

export function getEndpointsIdKubernetesHelmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdKubernetesHelmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdKubernetesHelm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEndpointsIdKubernetesHelmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEndpointsIdKubernetesHelm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsIdKubernetesHelmMutationOptions<
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

export function getEndpointsIdKubernetesHelmReleaseQueryKey(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release', args] as const
}

export function getEndpointsIdKubernetesHelmReleaseQueryOptions<
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
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdKubernetesHelmReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdKubernetesHelmRelease<
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
  args: () => InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEndpointsIdKubernetesHelmReleaseQueryKey>
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
      ...getEndpointsIdKubernetesHelmReleaseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteEndpointsIdKubernetesHelmRelease<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEndpointsIdKubernetesHelmReleaseMutationOptions<
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

export function getEndpointsIdKubernetesHelmReleaseHistoryQueryKey(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release/history', args] as const
}

export function getEndpointsIdKubernetesHelmReleaseHistoryQueryOptions<
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
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdKubernetesHelmReleaseHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].kubernetes.helm[':release'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdKubernetesHelmReleaseHistory<
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
  args: () => InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEndpointsIdKubernetesHelmReleaseHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostEndpointsIdKubernetesHelmReleaseRollback<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsIdKubernetesHelmReleaseRollbackMutationOptions<
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

export function getEndpointsIdRegistriesQueryKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/registries', args] as const
}

export function getEndpointsIdRegistriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEndpointsIdRegistriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints[':id'].registries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsIdRegistries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEndpointsIdRegistriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutEndpointsIdRegistriesRegistryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointsIdRegistriesRegistryIdMutationOptions<
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

export function injectPutEndpointsIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointsIdSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEndpointsIdSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsIdSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEndpointsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEndpointsGlobalKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsGlobalKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutEndpointsRelations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEndpointsRelationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEndpointsSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEndpointsSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEndpointsSummaryQueryKey() {
  return ['endpoints', '/endpoints/summary'] as const
}

export function getEndpointsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEndpointsSummaryQueryKey>
  >({
    queryKey: getEndpointsSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoints.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEndpointsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEndpointsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEndpointsSummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGitopsRepoFilePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gitops.repo.file.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gitops.repo.file.preview.$post>,
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
    const mutationDefaults = getPostGitopsRepoFilePreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGitopsSourcesQueryKey(
  args: InferRequestType<typeof client.gitops.sources.$get>,
) {
  return ['gitops', '/gitops/sources', args] as const
}

export function getGitopsSourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gitops.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesQueryKey>
  >({
    queryKey: getGitopsSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGitopsSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gitops.sources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGitopsSourcesIdQueryKey(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
) {
  return ['gitops', '/gitops/sources/:id', args] as const
}

export function getGitopsSourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesIdQueryKey>
  >({
    queryKey: getGitopsSourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.sources[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGitopsSourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsSourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsSourcesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutGitopsSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.gitops.sources)[':id']['$put']>,
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
    const mutationDefaults = getPutGitopsSourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGitopsSourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGitopsSourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutGitopsSourcesIdAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGitopsSourcesIdAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGitopsSourcesIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGitopsSourcesIdTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGitopsSourcesIdWorkflowsQueryKey(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
) {
  return ['gitops', '/gitops/sources/:id/workflows', args] as const
}

export function getGitopsSourcesIdWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGitopsSourcesIdWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.sources[':id'].workflows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGitopsSourcesIdWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGitopsSourcesIdWorkflowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGitopsSourcesGit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.git.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gitops.sources.git.$post>,
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
    const mutationDefaults = getPostGitopsSourcesGitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGitopsSourcesSummaryQueryKey() {
  return ['gitops', '/gitops/sources/summary'] as const
}

export function getGitopsSourcesSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsSourcesSummaryQueryKey>
  >({
    queryKey: getGitopsSourcesSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.sources.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGitopsSourcesSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsSourcesSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsSourcesSummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGitopsSourcesTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gitops.sources.test.$post>,
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
    const mutationDefaults = getPostGitopsSourcesTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGitopsWorkflowsQueryKey(
  args: InferRequestType<typeof client.gitops.workflows.$get>,
) {
  return ['gitops', '/gitops/workflows', args] as const
}

export function getGitopsWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gitops.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsQueryKey>
  >({
    queryKey: getGitopsWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGitopsWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gitops.workflows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsWorkflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGitopsWorkflowsIdQueryKey(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
) {
  return ['gitops', '/gitops/workflows/:id', args] as const
}

export function getGitopsWorkflowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsIdQueryKey>
  >({
    queryKey: getGitopsWorkflowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.workflows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGitopsWorkflowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsWorkflowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsWorkflowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGitopsWorkflowsSummaryQueryKey() {
  return ['gitops', '/gitops/workflows/summary'] as const
}

export function getGitopsWorkflowsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGitopsWorkflowsSummaryQueryKey>
  >({
    queryKey: getGitopsWorkflowsSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.gitops.workflows.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGitopsWorkflowsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGitopsWorkflowsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGitopsWorkflowsSummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/applications', args] as const
}

export function getKubernetesIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdApplicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdApplicationsCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/applications/count', args] as const
}

export function getKubernetesIdApplicationsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdApplicationsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].applications.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdApplicationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKubernetesIdApplicationsCountQueryKey>
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
      ...getKubernetesIdApplicationsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdClusterRoleBindingsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdClusterRoleBindingsDeleteMutationOptions<
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

export function injectPostKubernetesIdClusterRolesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdClusterRolesDeleteMutationOptions<
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

export function getKubernetesIdClusterrolebindingsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/clusterrolebindings', args] as const
}

export function getKubernetesIdClusterrolebindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdClusterrolebindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].clusterrolebindings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdClusterrolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdClusterrolebindingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdClusterrolesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/clusterroles', args] as const
}

export function getKubernetesIdClusterrolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdClusterrolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].clusterroles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdClusterroles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdClusterrolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdConfigmapsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps', args] as const
}

export function getKubernetesIdConfigmapsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdConfigmapsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].configmaps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdConfigmaps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdConfigmapsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdConfigmapsCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps/count', args] as const
}

export function getKubernetesIdConfigmapsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdConfigmapsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].configmaps.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdConfigmapsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdConfigmapsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdCronJobsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/cron_jobs', args] as const
}

export function getKubernetesIdCronJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdCronJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].cron_jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdCronJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdCronJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdCronJobsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdCronJobsDeleteMutationOptions<
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

export function getKubernetesIdDashboardQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/dashboard', args] as const
}

export function getKubernetesIdDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].dashboard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdDashboardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/deployments', args] as const
}

export function getKubernetesIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdDescribeQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/describe', args] as const
}

export function getKubernetesIdDescribeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdDescribeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].describe.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdDescribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdDescribeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdEventsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/events', args] as const
}

export function getKubernetesIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdIngressclassesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingressclasses', args] as const
}

export function getKubernetesIdIngressclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdIngressclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].ingressclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdIngressclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdIngressclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdIngresscontrollersQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresscontrollers', args] as const
}

export function getKubernetesIdIngresscontrollersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdIngresscontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].ingresscontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdIngresscontrollers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdIngresscontrollersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdIngresscontrollers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdIngresscontrollersMutationOptions<
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

export function getKubernetesIdIngressesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses', args] as const
}

export function getKubernetesIdIngressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdIngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdIngresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdIngressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdIngressesCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses/count', args] as const
}

export function getKubernetesIdIngressesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdIngressesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].ingresses.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdIngressesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdIngressesCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdIngressesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdIngressesDeleteMutationOptions<
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

export function getKubernetesIdJobsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/jobs', args] as const
}

export function getKubernetesIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdJobsQueryKey>
  >({
    queryKey: getKubernetesIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKubernetesIdJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKubernetesIdJobsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdJobsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdManifestsDryRun<
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
                ReturnType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>,
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
    const mutationDefaults = getPostKubernetesIdManifestsDryRunMutationOptions<
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

export function getKubernetesIdMaxResourceLimitsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/max_resource_limits', args] as const
}

export function getKubernetesIdMaxResourceLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMaxResourceLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].max_resource_limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMaxResourceLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMaxResourceLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdMetricsApplicationsResourcesQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/applications_resources', args] as const
}

export function getKubernetesIdMetricsApplicationsResourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMetricsApplicationsResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].metrics.applications_resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMetricsApplicationsResources<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMetricsApplicationsResourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdMetricsNodesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes', args] as const
}

export function getKubernetesIdMetricsNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMetricsNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].metrics.nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMetricsNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMetricsNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdMetricsNodesNameQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes/:name', args] as const
}

export function getKubernetesIdMetricsNodesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMetricsNodesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].metrics.nodes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMetricsNodesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMetricsNodesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdMetricsPodsNamespaceNameQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/:namespace/:name', args] as const
}

export function getKubernetesIdMetricsPodsNamespaceNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMetricsPodsNamespaceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMetricsPodsNamespaceName<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMetricsPodsNamespaceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/namespace/:namespace', args] as const
}

export function getKubernetesIdMetricsPodsNamespaceNamespaceQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdMetricsPodsNamespaceNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdMetricsPodsNamespaceNamespace<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdMetricsPodsNamespaceNamespaceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces', args] as const
}

export function getKubernetesIdNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteKubernetesIdNamespaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKubernetesIdNamespacesMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace', args] as const
}

export function getKubernetesIdNamespacesNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKubernetesIdNamespacesNamespaceQueryKey>
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
      ...getKubernetesIdNamespacesNamespaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespace<
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
                ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>,
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
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceMutationOptions<
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

export function injectPostKubernetesIdNamespacesNamespaceConfigmaps<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespaceConfigmapsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    args,
  ] as const
}

export function getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceConfigmapsConfigmapQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
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

export function injectDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments', args] as const
}

export function getKubernetesIdNamespacesNamespaceDeploymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceDeployments<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdNamespacesNamespaceDeployments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespaceDeploymentsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', args] as const
}

export function getKubernetesIdNamespacesNamespaceDeploymentsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceDeploymentsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceDeploymentsName<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceDeploymentsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceDeploymentsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function injectDeleteKubernetesIdNamespacesNamespaceDeploymentsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function injectPatchKubernetesIdNamespacesNamespaceDeploymentsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchKubernetesIdNamespacesNamespaceDeploymentsNameMutationOptions<
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

export function injectPostKubernetesIdNamespacesNamespaceDeploymentsNameRollback<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackMutationOptions<
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

export function injectPutKubernetesIdNamespacesNamespaceDeploymentsNameScale<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceEventsQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/events', args] as const
}

export function getKubernetesIdNamespacesNamespaceEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceEvents<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresscontrollers', args] as const
}

export function getKubernetesIdNamespacesNamespaceIngresscontrollersQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceIngresscontrollersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceIngresscontrollers<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceIngresscontrollersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceIngresscontrollers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceIngresscontrollersMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceIngressesQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', args] as const
}

export function getKubernetesIdNamespacesNamespaceIngressesQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceIngressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceIngresses<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceIngressesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceIngresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceIngressesMutationOptions<
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

export function injectPostKubernetesIdNamespacesNamespaceIngresses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespaceIngressesMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses/:ingress', args] as const
}

export function getKubernetesIdNamespacesNamespaceIngressesIngressQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceIngressesIngressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceIngressesIngress<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceIngressesIngressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims',
    args,
  ] as const
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespacePersistentVolumeClaims<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespacePersistentVolumeClaimsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdNamespacesNamespacePersistentVolumeClaims<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsMutationOptions<
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

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims/:name',
    args,
  ] as const
}

export function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespacePersistentVolumeClaimsName<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesNamespacePodsQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods', args] as const
}

export function getKubernetesIdNamespacesNamespacePodsQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespacePodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespacePods<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespacePodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteKubernetesIdNamespacesNamespacePodsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKubernetesIdNamespacesNamespacePodsNameMutationOptions<
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

export function getKubernetesIdNamespacesNamespacePodsNameLogQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name/log', args] as const
}

export function getKubernetesIdNamespacesNamespacePodsNameLogQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespacePodsNameLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespacePodsNameLog<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespacePodsNameLogQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdNamespacesNamespacePodsNameRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespacePodsNameRestartMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceReplicasetsQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/replicasets', args] as const
}

export function getKubernetesIdNamespacesNamespaceReplicasetsQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceReplicasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceReplicasets<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceReplicasetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/resource_quotas', args] as const
}

export function getKubernetesIdNamespacesNamespaceResourceQuotasQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceResourceQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceResourceQuotas<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceResourceQuotasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdNamespacesNamespaceSecrets<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespaceSecretsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', args] as const
}

export function getKubernetesIdNamespacesNamespaceSecretsSecretQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceSecretsSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceSecretsSecret<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceSecretsSecretQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceSecretsSecret<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
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

export function injectDeleteKubernetesIdNamespacesNamespaceSecretsSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteKubernetesIdNamespacesNamespaceSecretsSecretMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
) {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name',
    args,
  ] as const
}

export function getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceServiceAccountsName<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceServiceAccountsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceServicesQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', args] as const
}

export function getKubernetesIdNamespacesNamespaceServicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceServices<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceServicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdNamespacesNamespaceServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceServicesMutationOptions<
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

export function injectPostKubernetesIdNamespacesNamespaceServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNamespacesNamespaceServicesMutationOptions<
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

export function injectPutKubernetesIdNamespacesNamespaceSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdNamespacesNamespaceSystemMutationOptions<
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

export function getKubernetesIdNamespacesNamespaceVolumesQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/volumes', args] as const
}

export function getKubernetesIdNamespacesNamespaceVolumesQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesNamespaceVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesNamespaceVolumes<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesNamespaceVolumesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNamespacesCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/count', args] as const
}

export function getKubernetesIdNamespacesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNamespacesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].namespaces.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNamespacesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNamespacesCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdNodesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/nodes', args] as const
}

export function getKubernetesIdNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdNodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKubernetesIdNodesNameDrain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdNodesNameDrainMutationOptions<
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

export function getKubernetesIdNodesLimitsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/nodes_limits', args] as const
}

export function getKubernetesIdNodesLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdNodesLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].nodes_limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdNodesLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdNodesLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdPersistentVolumeClaimsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims', args] as const
}

export function getKubernetesIdPersistentVolumeClaimsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdPersistentVolumeClaimsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volume_claims.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdPersistentVolumeClaims<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKubernetesIdPersistentVolumeClaimsQueryKey>
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
      ...getKubernetesIdPersistentVolumeClaimsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdPersistentVolumeClaimsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdPersistentVolumeClaimsDeleteMutationOptions<
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

export function injectPutKubernetesIdPersistentVolumeClaimsResize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdPersistentVolumeClaimsResizeMutationOptions<
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

export function getKubernetesIdPersistentVolumesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes', args] as const
}

export function getKubernetesIdPersistentVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdPersistentVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdPersistentVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdPersistentVolumesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdPersistentVolumesNameQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/:name', args] as const
}

export function getKubernetesIdPersistentVolumesNameQueryOptions<
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
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdPersistentVolumesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].persistent_volumes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdPersistentVolumesName<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdPersistentVolumesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdPersistentVolumesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdPersistentVolumesDeleteMutationOptions<
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

export function injectPutKubernetesIdPersistentVolumesReclaimPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdPersistentVolumesReclaimPolicyMutationOptions<
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

export function getKubernetesIdPodsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/pods', args] as const
}

export function getKubernetesIdPodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesIdPodsQueryKey>
  >({
    queryKey: getKubernetesIdPodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].pods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdPods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKubernetesIdPodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdPodsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdRbacEnabledQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/rbac_enabled', args] as const
}

export function getKubernetesIdRbacEnabledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdRbacEnabledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].rbac_enabled.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdRbacEnabled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdRbacEnabledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdRoleBindingsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdRoleBindingsDeleteMutationOptions<
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

export function getKubernetesIdRolebindingsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/rolebindings', args] as const
}

export function getKubernetesIdRolebindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdRolebindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].rolebindings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdRolebindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdRolebindingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdRolesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/roles', args] as const
}

export function getKubernetesIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostKubernetesIdRolesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdRolesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKubernetesIdSecretsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/secrets', args] as const
}

export function getKubernetesIdSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdSecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdSecretsCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/secrets/count', args] as const
}

export function getKubernetesIdSecretsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdSecretsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].secrets.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdSecretsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdSecretsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdServiceAccountsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']>,
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
    const mutationDefaults = getPostKubernetesIdServiceAccountsDeleteMutationOptions<
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

export function getKubernetesIdServiceaccountsQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/serviceaccounts', args] as const
}

export function getKubernetesIdServiceaccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdServiceaccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].serviceaccounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdServiceaccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdServiceaccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdServicesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/services', args] as const
}

export function getKubernetesIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdServicesCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/services/count', args] as const
}

export function getKubernetesIdServicesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdServicesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].services.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdServicesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdServicesCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostKubernetesIdServicesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdServicesDeleteMutationOptions<
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

export function getKubernetesIdStorageClassesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes', args] as const
}

export function getKubernetesIdStorageClassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdStorageClassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].storage_classes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdStorageClasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdStorageClassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdStorageClassesNameQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes/:name', args] as const
}

export function getKubernetesIdStorageClassesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdStorageClassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].storage_classes[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdStorageClassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getKubernetesIdStorageClassesNameQueryKey>
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
      ...getKubernetesIdStorageClassesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutKubernetesIdStorageClassesNameDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutKubernetesIdStorageClassesNameDefaultMutationOptions<
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

export function injectPostKubernetesIdStorageClassesDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostKubernetesIdStorageClassesDeleteMutationOptions<
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

export function getKubernetesIdVersionQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/version', args] as const
}

export function getKubernetesIdVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].version.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdVersionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdVolumesQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/volumes', args] as const
}

export function getKubernetesIdVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesIdVolumesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKubernetesIdVolumesNamespaceVolumeQueryKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/:namespace/:volume', args] as const
}

export function getKubernetesIdVolumesNamespaceVolumeQueryOptions<
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
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdVolumesNamespaceVolumeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdVolumesNamespaceVolume<
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
  args: () => InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdVolumesNamespaceVolumeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesIdVolumesCountQueryKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/count', args] as const
}

export function getKubernetesIdVolumesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getKubernetesIdVolumesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes[':id'].volumes.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectKubernetesIdVolumesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getKubernetesIdVolumesCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getKubernetesConfigQueryKey(
  args: InferRequestType<typeof client.kubernetes.config.$get>,
) {
  return ['kubernetes', '/kubernetes/config', args] as const
}

export function getKubernetesConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kubernetes.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKubernetesConfigQueryKey>
  >({
    queryKey: getKubernetesConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kubernetes.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKubernetesConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.kubernetes.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKubernetesConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKubernetesConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLdapCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ldap.check.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.ldap.check.$post>,
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
    const mutationDefaults = getPostLdapCheckMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMotdQueryKey() {
  return ['motd', '/motd'] as const
}

export function getMotdQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMotdQueryKey>
  >({
    queryKey: getMotdQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.motd.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMotd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMotdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMotdQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getRegistriesQueryKey() {
  return ['registries', '/registries'] as const
}

export function getRegistriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistriesQueryKey>
  >({
    queryKey: getRegistriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.registries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRegistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegistriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRegistries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registries.$post>,
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
    const mutationDefaults = getPostRegistriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRegistriesIdQueryKey(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
) {
  return ['registries', '/registries/:id', args] as const
}

export function getRegistriesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistriesIdQueryKey>
  >({
    queryKey: getRegistriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registries[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRegistriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRegistriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.registries)[':id']['$put']>,
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
    const mutationDefaults = getPutRegistriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRegistriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRegistriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRegistriesIdConfigure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegistriesIdConfigureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRegistriesPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.ping.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registries.ping.$post>,
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
    const mutationDefaults = getPostRegistriesPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostResourceControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.resource_controls.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.resource_controls.$post>,
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
    const mutationDefaults = getPostResourceControlsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutResourceControlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutResourceControlsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteResourceControlsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteResourceControlsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.$post>>>>>,
        TError,
        InferRequestType<typeof client.restore.$post>,
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
    const mutationDefaults = getPostRestoreMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRolesQueryKey() {
  return ['roles', '/roles'] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
        TError,
        InferRequestType<typeof client.settings.$put>,
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
    const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsPublicQueryKey() {
  return ['settings', '/settings/public'] as const
}

export function getSettingsPublicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPublicQueryKey>
  >({
    queryKey: getSettingsPublicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSslQueryKey() {
  return ['ssl', '/ssl'] as const
}

export function getSslQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSslQueryKey>
  >({
    queryKey: getSslQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ssl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSsl<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSslQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSslQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSsl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$put>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.ssl.$put>,
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
    const mutationDefaults = getPutSslMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStacksQueryKey(args: InferRequestType<typeof client.stacks.$get>) {
  return ['stacks', '/stacks', args] as const
}

export function getStacksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStacksQueryKey>
  >({
    queryKey: getStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStacks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stacks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStacksIdQueryKey(args: InferRequestType<(typeof client.stacks)[':id']['$get']>) {
  return ['stacks', '/stacks/:id', args] as const
}

export function getStacksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.stacks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStacksIdQueryKey>
  >({
    queryKey: getStacksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stacks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStacksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stacks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStacksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stacks)[':id']['$put']>,
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
    const mutationDefaults = getPutStacksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteStacksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStacksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutStacksIdAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStacksIdAssociateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStacksIdFileQueryKey(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
) {
  return ['stacks', '/stacks/:id/file', args] as const
}

export function getStacksIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStacksIdFileQueryKey>
  >({
    queryKey: getStacksIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stacks[':id'].file.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStacksIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStacksIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStacksIdGit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['git']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stacks)[':id']['git']['$post']>,
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
    const mutationDefaults = getPostStacksIdGitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutStacksIdGitRedeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStacksIdGitRedeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksIdMigrate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksIdMigrateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksIdStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksIdStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksCreateKubernetesRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateKubernetesRepositoryMutationOptions<
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

export function injectPostStacksCreateKubernetesString<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateKubernetesStringMutationOptions<
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

export function injectPostStacksCreateKubernetesUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateKubernetesUrlMutationOptions<
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

export function injectPostStacksCreateStandaloneFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateStandaloneFileMutationOptions<
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

export function injectPostStacksCreateStandaloneRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateStandaloneRepositoryMutationOptions<
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

export function injectPostStacksCreateStandaloneString<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateStandaloneStringMutationOptions<
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

export function injectPostStacksCreateSwarmFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.swarm.file.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.stacks.create.swarm.file.$post>,
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
    const mutationDefaults = getPostStacksCreateSwarmFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksCreateSwarmRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateSwarmRepositoryMutationOptions<
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

export function injectPostStacksCreateSwarmString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksCreateSwarmStringMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteStacksNameName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStacksNameNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostStacksWebhooksWebhookID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksWebhooksWebhookIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >({
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSystemNodesQueryKey() {
  return ['system', '/system/nodes'] as const
}

export function getSystemNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemNodesQueryKey>
  >({
    queryKey: getSystemNodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.nodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemNodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSystemStatusQueryKey() {
  return ['system', '/system/status'] as const
}

export function getSystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemStatusQueryKey>
  >({
    queryKey: getSystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSystemUpgrade<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSystemUpgradeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSystemVersionQueryKey() {
  return ['system', '/system/version'] as const
}

export function getSystemVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemVersionQueryKey>
  >({
    queryKey: getSystemVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
        TError,
        InferRequestType<typeof client.tags.$post>,
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
    const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamMembershipsQueryKey() {
  return ['team_memberships', '/team_memberships'] as const
}

export function getTeamMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembershipsQueryKey>
  >({
    queryKey: getTeamMembershipsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team_memberships.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamMemberships<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamMembershipsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTeamMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.team_memberships.$post>,
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
    const mutationDefaults = getPostTeamMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutTeamMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTeamMembershipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamMembershipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsQueryKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
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
    const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsIdQueryKey(args: InferRequestType<(typeof client.teams)[':id']['$get']>) {
  return ['teams', '/teams/:id', args] as const
}

export function getTeamsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.teams)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsIdQueryKey>
  >({
    queryKey: getTeamsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTeamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':id']['$put']>,
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
    const mutationDefaults = getPutTeamsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTeamsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
) {
  return ['teams', '/teams/:id/memberships', args] as const
}

export function getTeamsIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsIdMembershipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTemplatesQueryKey() {
  return ['templates', '/templates'] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTemplatesIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplatesHelmQueryKey(
  args: InferRequestType<typeof client.templates.helm.$get>,
) {
  return ['templates', '/templates/helm', args] as const
}

export function getTemplatesHelmQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.helm.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesHelmQueryKey>
  >({
    queryKey: getTemplatesHelmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.helm.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplatesHelm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.helm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesHelmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesHelmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTemplatesHelmCommandQueryKey(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
) {
  return ['templates', '/templates/helm/:command', args] as const
}

export function getTemplatesHelmCommandQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTemplatesHelmCommandQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.helm[':command'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplatesHelmCommand<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTemplatesHelmCommandQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostUploadTlsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadTlsCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$put']>,
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
    const mutationDefaults = getPutUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdEffectiveAccessQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
) {
  return ['users', '/users/:id/effective-access', args] as const
}

export function getUsersIdEffectiveAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIdEffectiveAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id']['effective-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdEffectiveAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUsersIdEffectiveAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdHelmRepositoriesQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
) {
  return ['users', '/users/:id/helm/repositories', args] as const
}

export function getUsersIdHelmRepositoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIdHelmRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].helm.repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdHelmRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUsersIdHelmRepositoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostUsersIdHelmRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdHelmRepositoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersIdHelmRepositoriesRepositoryID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdHelmRepositoriesRepositoryIDMutationOptions<
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

export function getUsersIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
) {
  return ['users', '/users/:id/memberships', args] as const
}

export function getUsersIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdMembershipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutUsersIdPasswd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersIdPasswdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdTokensQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
) {
  return ['users', '/users/:id/tokens', args] as const
}

export function getUsersIdTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdTokensQueryKey>
  >({
    queryKey: getUsersIdTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersIdTokensKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdTokensKeyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersAdminCheckQueryKey() {
  return ['users', '/users/admin/check'] as const
}

export function getUsersAdminCheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAdminCheckQueryKey>
  >({
    queryKey: getUsersAdminCheckQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.admin.check.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersAdminCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersAdminCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersAdminCheckQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersAdminInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.init.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.users.admin.init.$post>,
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
    const mutationDefaults = getPostUsersAdminInitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
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
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$put']>,
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
    const mutationDefaults = getPutWebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$post']>,
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
    const mutationDefaults = getPostWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebsocketAttachQueryKey(
  args: InferRequestType<typeof client.websocket.attach.$get>,
) {
  return ['websocket', '/websocket/attach', args] as const
}

export function getWebsocketAttachQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.websocket.attach.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketAttachQueryKey>
  >({
    queryKey: getWebsocketAttachQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.websocket.attach.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebsocketAttach<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.websocket.attach.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebsocketAttachQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebsocketAttachQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWebsocketExecQueryKey(
  args: InferRequestType<typeof client.websocket.exec.$get>,
) {
  return ['websocket', '/websocket/exec', args] as const
}

export function getWebsocketExecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.websocket.exec.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketExecQueryKey>
  >({
    queryKey: getWebsocketExecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.websocket.exec.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebsocketExec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.websocket.exec.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebsocketExecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebsocketExecQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWebsocketKubernetesShellQueryKey(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
) {
  return ['websocket', '/websocket/kubernetes-shell', args] as const
}

export function getWebsocketKubernetesShellQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebsocketKubernetesShellQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.websocket['kubernetes-shell'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebsocketKubernetesShell<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWebsocketKubernetesShellQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebsocketPodQueryKey(args: InferRequestType<typeof client.websocket.pod.$get>) {
  return ['websocket', '/websocket/pod', args] as const
}

export function getWebsocketPodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.websocket.pod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebsocketPodQueryKey>
  >({
    queryKey: getWebsocketPodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.websocket.pod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebsocketPod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.websocket.pod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebsocketPodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebsocketPodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
