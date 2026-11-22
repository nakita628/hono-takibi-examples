import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAuthKey() {
  return ['auth', '/auth', 'POST'] as const
}

export function usePostAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.$post> }) =>
        parseResponse(client.auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLogoutKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function usePostAuthLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthOauthValidateKey() {
  return ['auth', '/auth/oauth/validate', 'POST'] as const
}

export function usePostAuthOauthValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.validate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.oauth.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthOauthValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.oauth.validate.$post> }) =>
        parseResponse(client.auth.oauth.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackupKey() {
  return ['backup', '/backup', 'POST'] as const
}

export function usePostBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.backup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.backup.$post> }) =>
        parseResponse(client.backup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomTemplatesKey(
  args: InferRequestType<typeof client.custom_templates.$get>,
) {
  return ['custom_templates', '/custom_templates', args] as const
}

export function useGetCustomTemplates<TError = unknown>(
  args: InferRequestType<typeof client.custom_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomTemplates<TError = unknown>(
  args: InferRequestType<typeof client.custom_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomTemplatesIdKey(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
) {
  return ['custom_templates', '/custom_templates/:id', args] as const
}

export function useGetCustomTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomTemplatesIdKey() {
  return ['custom_templates', '/custom_templates/:id', 'PUT'] as const
}

export function usePutCustomTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom_templates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custom_templates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.custom_templates)[':id']['$put']> },
      ) => parseResponse(client.custom_templates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomTemplatesIdKey() {
  return ['custom_templates', '/custom_templates/:id', 'DELETE'] as const
}

export function useDeleteCustomTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.custom_templates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.custom_templates)[':id']['$delete']> },
      ) => parseResponse(client.custom_templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomTemplatesIdFileKey(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
) {
  return ['custom_templates', '/custom_templates/:id/file', args] as const
}

export function useGetCustomTemplatesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomTemplatesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomTemplatesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_templates[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomTemplatesIdGitFetchKey() {
  return ['custom_templates', '/custom_templates/:id/git_fetch', 'PUT'] as const
}

export function usePutCustomTemplatesIdGitFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomTemplatesIdGitFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']> },
      ) => parseResponse(client.custom_templates[':id'].git_fetch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomTemplatesCreateFileKey() {
  return ['custom_templates', '/custom_templates/create/file', 'POST'] as const
}

export function usePostCustomTemplatesCreateFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.custom_templates.create.file.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_templates.create.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomTemplatesCreateFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.custom_templates.create.file.$post> },
      ) => parseResponse(client.custom_templates.create.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomTemplatesCreateRepositoryKey() {
  return ['custom_templates', '/custom_templates/create/repository', 'POST'] as const
}

export function usePostCustomTemplatesCreateRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.custom_templates.create.repository.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_templates.create.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomTemplatesCreateRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.custom_templates.create.repository.$post> },
      ) => parseResponse(client.custom_templates.create.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCustomTemplatesCreateStringKey() {
  return ['custom_templates', '/custom_templates/create/string', 'POST'] as const
}

export function usePostCustomTemplatesCreateString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.custom_templates.create.string.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_templates.create.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomTemplatesCreateStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.custom_templates.create.string.$post> },
      ) => parseResponse(client.custom_templates.create.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDockerEnvironmentIdContainersContainerIdGpusKey(
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
) {
  return ['docker', '/docker/:environmentId/containers/:containerId/gpus', args] as const
}

export function useGetDockerEnvironmentIdContainersContainerIdGpus<TError = unknown>(
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdContainersContainerIdGpusKey(args)
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
                (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
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
          client.docker[':environmentId'].containers[':containerId'].gpus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerEnvironmentIdContainersContainerIdGpus<TError = unknown>(
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdContainersContainerIdGpusKey(args)
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
                (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
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
          client.docker[':environmentId'].containers[':containerId'].gpus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDockerEnvironmentIdDashboardKey(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
) {
  return ['docker', '/docker/:environmentId/dashboard', args] as const
}

export function useGetDockerEnvironmentIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docker[':environmentId'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerEnvironmentIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docker[':environmentId'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDockerEnvironmentIdImagesKey(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
) {
  return ['docker', '/docker/:environmentId/images', args] as const
}

export function useGetDockerEnvironmentIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docker[':environmentId'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDockerEnvironmentIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDockerEnvironmentIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docker)[':environmentId']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docker[':environmentId'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeGroupsKey() {
  return ['edge_groups', '/edge_groups'] as const
}

export function useGetEdgeGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEdgeGroupsKey() {
  return ['edge_groups', '/edge_groups', 'POST'] as const
}

export function usePostEdgeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.edge_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.edge_groups.$post> }) =>
        parseResponse(client.edge_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeGroupsIdKey(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
) {
  return ['edge_groups', '/edge_groups/:id', args] as const
}

export function useGetEdgeGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEdgeGroupsIdKey() {
  return ['edge_groups', '/edge_groups/:id', 'PUT'] as const
}

export function usePutEdgeGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.edge_groups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEdgeGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_groups)[':id']['$put']> },
      ) => parseResponse(client.edge_groups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEdgeGroupsIdKey() {
  return ['edge_groups', '/edge_groups/:id', 'DELETE'] as const
}

export function useDeleteEdgeGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_groups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.edge_groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_groups)[':id']['$delete']> },
      ) => parseResponse(client.edge_groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeJobsKey() {
  return ['edge_jobs', '/edge_jobs'] as const
}

export function useGetEdgeJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeJobsIdKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id', args] as const
}

export function useGetEdgeJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeJobsId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEdgeJobsIdKey() {
  return ['edge_jobs', '/edge_jobs/:id', 'PUT'] as const
}

export function usePutEdgeJobsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.edge_jobs)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEdgeJobsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_jobs)[':id']['$put']> },
      ) => parseResponse(client.edge_jobs[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEdgeJobsIdKey() {
  return ['edge_jobs', '/edge_jobs/:id', 'DELETE'] as const
}

export function useDeleteEdgeJobsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_jobs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeJobsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_jobs)[':id']['$delete']> },
      ) => parseResponse(client.edge_jobs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeJobsIdFileKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/file', args] as const
}

export function useGetEdgeJobsIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeJobsIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeJobsIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeJobsIdTasksKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks', args] as const
}

export function useGetEdgeJobsIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeJobsIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeJobsIdTasks<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeJobsIdTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_jobs)[':id']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_jobs[':id'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeJobsIdTasksTaskIDLogsKey(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
) {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', args] as const
}

export function useGetEdgeJobsIdTasksTaskIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
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
        ? getGetEdgeJobsIdTasksTaskIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeJobsIdTasksTaskIDLogs<TError = unknown>(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
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
        ? getGetEdgeJobsIdTasksTaskIDLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEdgeJobsIdTasksTaskIDLogsKey() {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', 'POST'] as const
}

export function usePostEdgeJobsIdTasksTaskIDLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeJobsIdTasksTaskIDLogsKey()
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
            (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']
          >
        },
      ) => parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEdgeJobsIdTasksTaskIDLogsKey() {
  return ['edge_jobs', '/edge_jobs/:id/tasks/:taskID/logs', 'DELETE'] as const
}

export function useDeleteEdgeJobsIdTasksTaskIDLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeJobsIdTasksTaskIDLogsKey()
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
            (typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']
          >
        },
      ) => parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeJobsCreateFileKey() {
  return ['edge_jobs', '/edge_jobs/create/file', 'POST'] as const
}

export function usePostEdgeJobsCreateFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.file.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge_jobs.create.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeJobsCreateFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.edge_jobs.create.file.$post> },
      ) => parseResponse(client.edge_jobs.create.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeJobsCreateStringKey() {
  return ['edge_jobs', '/edge_jobs/create/string', 'POST'] as const
}

export function usePostEdgeJobsCreateString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_jobs.create.string.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge_jobs.create.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeJobsCreateStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.edge_jobs.create.string.$post> },
      ) => parseResponse(client.edge_jobs.create.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeStacksKey(args: InferRequestType<typeof client.edge_stacks.$get>) {
  return ['edge_stacks', '/edge_stacks', args] as const
}

export function useGetEdgeStacks<TError = unknown>(
  args: InferRequestType<typeof client.edge_stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeStacks<TError = unknown>(
  args: InferRequestType<typeof client.edge_stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeStacksIdKey(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
) {
  return ['edge_stacks', '/edge_stacks/:id', args] as const
}

export function useGetEdgeStacksId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeStacksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeStacksId<TError = unknown>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeStacksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEdgeStacksIdKey() {
  return ['edge_stacks', '/edge_stacks/:id', 'PUT'] as const
}

export function usePutEdgeStacksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.edge_stacks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEdgeStacksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_stacks)[':id']['$put']> },
      ) => parseResponse(client.edge_stacks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEdgeStacksIdKey() {
  return ['edge_stacks', '/edge_stacks/:id', 'DELETE'] as const
}

export function useDeleteEdgeStacksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.edge_stacks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.edge_stacks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeStacksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_stacks)[':id']['$delete']> },
      ) => parseResponse(client.edge_stacks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeStacksIdFileKey(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
) {
  return ['edge_stacks', '/edge_stacks/:id/file', args] as const
}

export function useGetEdgeStacksIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeStacksIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeStacksIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeStacksIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.edge_stacks)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edge_stacks[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEdgeStacksIdStatusKey() {
  return ['edge_stacks', '/edge_stacks/:id/status', 'PUT'] as const
}

export function usePutEdgeStacksIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.edge_stacks)[':id']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEdgeStacksIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']> },
      ) => parseResponse(client.edge_stacks[':id'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeStacksCreateFileKey() {
  return ['edge_stacks', '/edge_stacks/create/file', 'POST'] as const
}

export function usePostEdgeStacksCreateFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.file.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge_stacks.create.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeStacksCreateFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.edge_stacks.create.file.$post> },
      ) => parseResponse(client.edge_stacks.create.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeStacksCreateRepositoryKey() {
  return ['edge_stacks', '/edge_stacks/create/repository', 'POST'] as const
}

export function usePostEdgeStacksCreateRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.repository.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge_stacks.create.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeStacksCreateRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.edge_stacks.create.repository.$post> },
      ) => parseResponse(client.edge_stacks.create.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeStacksCreateStringKey() {
  return ['edge_stacks', '/edge_stacks/create/string', 'POST'] as const
}

export function usePostEdgeStacksCreateString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edge_stacks.create.string.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge_stacks.create.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeStacksCreateStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.edge_stacks.create.string.$post> },
      ) => parseResponse(client.edge_stacks.create.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointGroupsKey(
  args: InferRequestType<typeof client.endpoint_groups.$get>,
) {
  return ['endpoint_groups', '/endpoint_groups', args] as const
}

export function useGetEndpointGroups<TError = unknown>(
  args: InferRequestType<typeof client.endpoint_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoint_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointGroups<TError = unknown>(
  args: InferRequestType<typeof client.endpoint_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoint_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEndpointGroupsKey() {
  return ['endpoint_groups', '/endpoint_groups', 'POST'] as const
}

export function usePostEndpointGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint_groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.endpoint_groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.endpoint_groups.$post> }) =>
        parseResponse(client.endpoint_groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointGroupsIdKey(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
) {
  return ['endpoint_groups', '/endpoint_groups/:id', args] as const
}

export function useGetEndpointGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoint_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoint_groups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEndpointGroupsIdKey() {
  return ['endpoint_groups', '/endpoint_groups/:id', 'PUT'] as const
}

export function usePutEndpointGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoint_groups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoint_groups)[':id']['$put']> },
      ) => parseResponse(client.endpoint_groups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEndpointGroupsIdKey() {
  return ['endpoint_groups', '/endpoint_groups/:id', 'DELETE'] as const
}

export function useDeleteEndpointGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoint_groups)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEndpointGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']> },
      ) => parseResponse(client.endpoint_groups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEndpointGroupsIdEndpointsEndpointIdKey() {
  return ['endpoint_groups', '/endpoint_groups/:id/endpoints/:endpointId', 'PUT'] as const
}

export function usePutEndpointGroupsIdEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointGroupsIdEndpointsEndpointIdKey()
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
            (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.endpoint_groups[':id'].endpoints[':endpointId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEndpointGroupsIdEndpointsEndpointIdKey() {
  return ['endpoint_groups', '/endpoint_groups/:id/endpoints/:endpointId', 'DELETE'] as const
}

export function useDeleteEndpointGroupsIdEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEndpointGroupsIdEndpointsEndpointIdKey()
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
            (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.endpoint_groups[':id'].endpoints[':endpointId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsKey(args: InferRequestType<typeof client.endpoints.$get>) {
  return ['endpoints', '/endpoints', args] as const
}

export function useGetEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEndpointsKey() {
  return ['endpoints', '/endpoints', 'POST'] as const
}

export function usePostEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.endpoints.$post> }) =>
        parseResponse(client.endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEndpointsKey() {
  return ['endpoints', '/endpoints', 'DELETE'] as const
}

export function useDeleteEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.endpoints.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.endpoints.$delete> }) =>
        parseResponse(client.endpoints.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
) {
  return ['endpoints', '/endpoints/:id', args] as const
}

export function useGetEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEndpointsIdKey() {
  return ['endpoints', '/endpoints/:id', 'PUT'] as const
}

export function usePutEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoints)[':id']['$put']> },
      ) => parseResponse(client.endpoints[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEndpointsIdKey() {
  return ['endpoints', '/endpoints/:id', 'DELETE'] as const
}

export function useDeleteEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoints)[':id']['$delete']> },
      ) => parseResponse(client.endpoints[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEndpointsIdAssociationKey() {
  return ['endpoints', '/endpoints/:id/association', 'PUT'] as const
}

export function usePutEndpointsIdAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['association']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['association']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsIdAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoints)[':id']['association']['$put']> },
      ) => parseResponse(client.endpoints[':id'].association.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsIdDockerV2BrowsePutKey() {
  return ['endpoints', '/endpoints/:id/docker/v2/browse/put', 'POST'] as const
}

export function usePostEndpointsIdDockerV2BrowsePut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsIdDockerV2BrowsePutKey()
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
            (typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']
          >
        },
      ) => parseResponse(client.endpoints[':id'].docker.v2.browse.put.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdDockerhubRegistryIdKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/dockerhub/:registryId', args] as const
}

export function useGetEndpointsIdDockerhubRegistryId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
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
        ? getGetEndpointsIdDockerhubRegistryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.endpoints[':id'].dockerhub[':registryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdDockerhubRegistryId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
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
        ? getGetEndpointsIdDockerhubRegistryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.endpoints[':id'].dockerhub[':registryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEndpointsIdEdgeJobsJobIDLogsKey() {
  return ['endpoints', '/endpoints/:id/edge/jobs/:jobID/logs', 'POST'] as const
}

export function usePostEndpointsIdEdgeJobsJobIDLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsIdEdgeJobsJobIDLogsKey()
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
            (typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']
          >
        },
      ) =>
        parseResponse(client.endpoints[':id'].edge.jobs[':jobID'].logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdEdgeStacksStackIdKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/edge/stacks/:stackId', args] as const
}

export function useGetEndpointsIdEdgeStacksStackId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
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
        ? getGetEndpointsIdEdgeStacksStackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.endpoints[':id'].edge.stacks[':stackId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdEdgeStacksStackId<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
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
        ? getGetEndpointsIdEdgeStacksStackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.endpoints[':id'].edge.stacks[':stackId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEndpointsIdEdgeStatusKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/edge/status', args] as const
}

export function useGetEndpointsIdEdgeStatus<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdEdgeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].edge.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdEdgeStatus<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdEdgeStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['edge']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].edge.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEndpointsIdForceupdateserviceKey() {
  return ['endpoints', '/endpoints/:id/forceupdateservice', 'PUT'] as const
}

export function usePutEndpointsIdForceupdateservice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsIdForceupdateserviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>
        },
      ) => parseResponse(client.endpoints[':id'].forceupdateservice.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdKubernetesHelmKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm', args] as const
}

export function useGetEndpointsIdKubernetesHelm<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdKubernetesHelmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].kubernetes.helm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdKubernetesHelm<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdKubernetesHelmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].kubernetes.helm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEndpointsIdKubernetesHelmKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm', 'POST'] as const
}

export function usePostEndpointsIdKubernetesHelm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsIdKubernetesHelmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>
        },
      ) => parseResponse(client.endpoints[':id'].kubernetes.helm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdKubernetesHelmReleaseKey(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release', args] as const
}

export function useGetEndpointsIdKubernetesHelmRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
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
        ? getGetEndpointsIdKubernetesHelmReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdKubernetesHelmRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
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
        ? getGetEndpointsIdKubernetesHelmReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEndpointsIdKubernetesHelmReleaseKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release', 'DELETE'] as const
}

export function useDeleteEndpointsIdKubernetesHelmRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEndpointsIdKubernetesHelmReleaseKey()
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
            (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdKubernetesHelmReleaseHistoryKey(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
) {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release/history', args] as const
}

export function useGetEndpointsIdKubernetesHelmReleaseHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdKubernetesHelmReleaseHistoryKey(args)
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
                (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
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
          client.endpoints[':id'].kubernetes.helm[':release'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdKubernetesHelmReleaseHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdKubernetesHelmReleaseHistoryKey(args)
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
                (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
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
          client.endpoints[':id'].kubernetes.helm[':release'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEndpointsIdKubernetesHelmReleaseRollbackKey() {
  return ['endpoints', '/endpoints/:id/kubernetes/helm/:release/rollback', 'POST'] as const
}

export function usePostEndpointsIdKubernetesHelmReleaseRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsIdKubernetesHelmReleaseRollbackKey()
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
            (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.endpoints[':id'].kubernetes.helm[':release'].rollback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsIdRegistriesKey(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
) {
  return ['endpoints', '/endpoints/:id/registries', args] as const
}

export function useGetEndpointsIdRegistries<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdRegistriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].registries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsIdRegistries<TError = unknown>(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEndpointsIdRegistriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['registries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints[':id'].registries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEndpointsIdRegistriesRegistryIdKey() {
  return ['endpoints', '/endpoints/:id/registries/:registryId', 'PUT'] as const
}

export function usePutEndpointsIdRegistriesRegistryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsIdRegistriesRegistryIdKey()
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
            (typeof client.endpoints)[':id']['registries'][':registryId']['$put']
          >
        },
      ) =>
        parseResponse(client.endpoints[':id'].registries[':registryId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEndpointsIdSettingsKey() {
  return ['endpoints', '/endpoints/:id/settings', 'PUT'] as const
}

export function usePutEndpointsIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.endpoints)[':id']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']> },
      ) => parseResponse(client.endpoints[':id'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsIdSnapshotKey() {
  return ['endpoints', '/endpoints/:id/snapshot', 'POST'] as const
}

export function usePostEndpointsIdSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.endpoints)[':id']['snapshot']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsIdSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']> },
      ) => parseResponse(client.endpoints[':id'].snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsDeleteKey() {
  return ['endpoints', '/endpoints/delete', 'POST'] as const
}

export function usePostEndpointsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.delete.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.endpoints.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.endpoints.delete.$post> }) =>
        parseResponse(client.endpoints.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsGlobalKeyKey() {
  return ['endpoints', '/endpoints/global-key', 'POST'] as const
}

export function usePostEndpointsGlobalKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.endpoints)['global-key']['$post']>>>
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
  const swrKey = customKey ?? getPostEndpointsGlobalKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.endpoints['global-key'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEndpointsRelationsKey() {
  return ['endpoints', '/endpoints/relations', 'PUT'] as const
}

export function usePutEndpointsRelations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.relations.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.endpoints.relations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEndpointsRelationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.endpoints.relations.$put> }) =>
        parseResponse(client.endpoints.relations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEndpointsSnapshotKey() {
  return ['endpoints', '/endpoints/snapshot', 'POST'] as const
}

export function usePostEndpointsSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.snapshot.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEndpointsSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.endpoints.snapshot.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEndpointsSummaryKey() {
  return ['endpoints', '/endpoints/summary'] as const
}

export function useGetEndpointsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpointsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGitopsRepoFilePreviewKey() {
  return ['gitops', '/gitops/repo/file/preview', 'POST'] as const
}

export function usePostGitopsRepoFilePreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.repo.file.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.gitops.repo.file.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGitopsRepoFilePreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.gitops.repo.file.preview.$post> },
      ) => parseResponse(client.gitops.repo.file.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGitopsSourcesKey(args: InferRequestType<typeof client.gitops.sources.$get>) {
  return ['gitops', '/gitops/sources', args] as const
}

export function useGetGitopsSources<TError = unknown>(
  args: InferRequestType<typeof client.gitops.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGitopsSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsSources<TError = unknown>(
  args: InferRequestType<typeof client.gitops.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGitopsSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGitopsSourcesIdKey(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
) {
  return ['gitops', '/gitops/sources/:id', args] as const
}

export function useGetGitopsSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGitopsSourcesIdKey() {
  return ['gitops', '/gitops/sources/:id', 'PUT'] as const
}

export function usePutGitopsSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gitops.sources)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGitopsSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gitops.sources)[':id']['$put']> },
      ) => parseResponse(client.gitops.sources[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGitopsSourcesIdKey() {
  return ['gitops', '/gitops/sources/:id', 'DELETE'] as const
}

export function useDeleteGitopsSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.gitops.sources)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGitopsSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gitops.sources)[':id']['$delete']> },
      ) => parseResponse(client.gitops.sources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGitopsSourcesIdAccessKey() {
  return ['gitops', '/gitops/sources/:id/access', 'PUT'] as const
}

export function usePutGitopsSourcesIdAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gitops.sources)[':id']['access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGitopsSourcesIdAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']> },
      ) => parseResponse(client.gitops.sources[':id'].access.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGitopsSourcesIdTestKey() {
  return ['gitops', '/gitops/sources/:id/test', 'POST'] as const
}

export function usePostGitopsSourcesIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gitops.sources)[':id']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGitopsSourcesIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']> },
      ) => parseResponse(client.gitops.sources[':id'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGitopsSourcesIdWorkflowsKey(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
) {
  return ['gitops', '/gitops/sources/:id/workflows', args] as const
}

export function useGetGitopsSourcesIdWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesIdWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources[':id'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsSourcesIdWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesIdWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gitops.sources)[':id']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources[':id'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGitopsSourcesGitKey() {
  return ['gitops', '/gitops/sources/git', 'POST'] as const
}

export function usePostGitopsSourcesGit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.git.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.gitops.sources.git.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGitopsSourcesGitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gitops.sources.git.$post> }) =>
        parseResponse(client.gitops.sources.git.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGitopsSourcesSummaryKey() {
  return ['gitops', '/gitops/sources/summary'] as const
}

export function useGetGitopsSourcesSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsSourcesSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsSourcesSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.sources.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGitopsSourcesTestKey() {
  return ['gitops', '/gitops/sources/test', 'POST'] as const
}

export function usePostGitopsSourcesTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.sources.test.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.gitops.sources.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGitopsSourcesTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gitops.sources.test.$post> }) =>
        parseResponse(client.gitops.sources.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGitopsWorkflowsKey(
  args: InferRequestType<typeof client.gitops.workflows.$get>,
) {
  return ['gitops', '/gitops/workflows', args] as const
}

export function useGetGitopsWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.gitops.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.gitops.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGitopsWorkflowsIdKey(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
) {
  return ['gitops', '/gitops/workflows/:id', args] as const
}

export function useGetGitopsWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsWorkflowsId<TError = unknown>(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.gitops.workflows)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGitopsWorkflowsSummaryKey() {
  return ['gitops', '/gitops/workflows/summary'] as const
}

export function useGetGitopsWorkflowsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGitopsWorkflowsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGitopsWorkflowsSummaryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.gitops.workflows.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gitops.workflows.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdApplicationsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/applications', args] as const
}

export function useGetKubernetesIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdApplicationsCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/applications/count', args] as const
}

export function useGetKubernetesIdApplicationsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdApplicationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].applications.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdApplicationsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdApplicationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].applications.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdClusterRoleBindingsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/cluster_role_bindings/delete', 'POST'] as const
}

export function usePostKubernetesIdClusterRoleBindingsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdClusterRoleBindingsDeleteKey()
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
            (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].cluster_role_bindings.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdClusterRolesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/cluster_roles/delete', 'POST'] as const
}

export function usePostKubernetesIdClusterRolesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdClusterRolesDeleteKey()
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
            (typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']
          >
        },
      ) => parseResponse(client.kubernetes[':id'].cluster_roles.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdClusterrolebindingsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/clusterrolebindings', args] as const
}

export function useGetKubernetesIdClusterrolebindings<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdClusterrolebindingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].clusterrolebindings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdClusterrolebindings<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdClusterrolebindingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].clusterrolebindings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdClusterrolesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/clusterroles', args] as const
}

export function useGetKubernetesIdClusterroles<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdClusterrolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].clusterroles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdClusterroles<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdClusterrolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].clusterroles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdConfigmapsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps', args] as const
}

export function useGetKubernetesIdConfigmaps<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdConfigmaps<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdConfigmapsCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/configmaps/count', args] as const
}

export function useGetKubernetesIdConfigmapsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdConfigmapsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].configmaps.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdConfigmapsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdConfigmapsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].configmaps.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdCronJobsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/cron_jobs', args] as const
}

export function useGetKubernetesIdCronJobs<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdCronJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].cron_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdCronJobs<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdCronJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].cron_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdCronJobsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/cron_jobs/delete', 'POST'] as const
}

export function usePostKubernetesIdCronJobsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdCronJobsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>
        },
      ) => parseResponse(client.kubernetes[':id'].cron_jobs.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdDashboardKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/dashboard', args] as const
}

export function useGetKubernetesIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdDashboard<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdDeploymentsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/deployments', args] as const
}

export function useGetKubernetesIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdDescribeKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/describe', args] as const
}

export function useGetKubernetesIdDescribe<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDescribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].describe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdDescribe<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdDescribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['describe']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].describe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdEventsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/events', args] as const
}

export function useGetKubernetesIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdIngressclassesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingressclasses', args] as const
}

export function useGetKubernetesIdIngressclasses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingressclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdIngressclasses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingressclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdIngresscontrollersKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresscontrollers', args] as const
}

export function useGetKubernetesIdIngresscontrollers<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngresscontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].ingresscontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdIngresscontrollers<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngresscontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].ingresscontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdIngresscontrollersKey() {
  return ['kubernetes', '/kubernetes/:id/ingresscontrollers', 'PUT'] as const
}

export function usePutKubernetesIdIngresscontrollers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdIngresscontrollersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>
        },
      ) => parseResponse(client.kubernetes[':id'].ingresscontrollers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdIngressesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses', args] as const
}

export function useGetKubernetesIdIngresses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdIngresses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdIngressesCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/ingresses/count', args] as const
}

export function useGetKubernetesIdIngressesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingresses.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdIngressesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdIngressesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].ingresses.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdIngressesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/ingresses/delete', 'POST'] as const
}

export function usePostKubernetesIdIngressesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdIngressesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>
        },
      ) => parseResponse(client.kubernetes[':id'].ingresses.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdJobsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/jobs', args] as const
}

export function useGetKubernetesIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdJobsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/jobs/delete', 'POST'] as const
}

export function usePostKubernetesIdJobsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdJobsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']> },
      ) => parseResponse(client.kubernetes[':id'].jobs.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdManifestsDryRunKey() {
  return ['kubernetes', '/kubernetes/:id/manifests/dry_run', 'POST'] as const
}

export function usePostKubernetesIdManifestsDryRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdManifestsDryRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>
        },
      ) => parseResponse(client.kubernetes[':id'].manifests.dry_run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdMaxResourceLimitsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/max_resource_limits', args] as const
}

export function useGetKubernetesIdMaxResourceLimits<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMaxResourceLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].max_resource_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMaxResourceLimits<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMaxResourceLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].max_resource_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdMetricsApplicationsResourcesKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/applications_resources', args] as const
}

export function useGetKubernetesIdMetricsApplicationsResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsApplicationsResourcesKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
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
          client.kubernetes[':id'].metrics.applications_resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMetricsApplicationsResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsApplicationsResourcesKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
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
          client.kubernetes[':id'].metrics.applications_resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdMetricsNodesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes', args] as const
}

export function useGetKubernetesIdMetricsNodes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].metrics.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMetricsNodes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].metrics.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdMetricsNodesNameKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/nodes/:name', args] as const
}

export function useGetKubernetesIdMetricsNodesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
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
        ? getGetKubernetesIdMetricsNodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].metrics.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMetricsNodesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
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
        ? getGetKubernetesIdMetricsNodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].metrics.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdMetricsPodsNamespaceNameKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/:namespace/:name', args] as const
}

export function useGetKubernetesIdMetricsPodsNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsPodsNamespaceNameKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
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
          client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMetricsPodsNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsPodsNamespaceNameKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
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
          client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdMetricsPodsNamespaceNamespaceKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/metrics/pods/namespace/:namespace', args] as const
}

export function useGetKubernetesIdMetricsPodsNamespaceNamespace<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsPodsNamespaceNamespaceKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
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
          client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdMetricsPodsNamespaceNamespace<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdMetricsPodsNamespaceNamespaceKey(args)
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
                (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
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
          client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces', args] as const
}

export function useGetKubernetesIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'PUT'] as const
}

export function usePutKubernetesIdNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']> },
      ) => parseResponse(client.kubernetes[':id'].namespaces.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'POST'] as const
}

export function usePostKubernetesIdNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']> },
      ) => parseResponse(client.kubernetes[':id'].namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKubernetesIdNamespacesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces', 'DELETE'] as const
}

export function useDeleteKubernetesIdNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKubernetesIdNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']> },
      ) => parseResponse(client.kubernetes[':id'].namespaces.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace', args] as const
}

export function useGetKubernetesIdNamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
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
        ? getGetKubernetesIdNamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
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
        ? getGetKubernetesIdNamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']
          >
        },
      ) =>
        parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceConfigmapsKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/configmaps', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespaceConfigmaps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceConfigmapsKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].configmaps.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey(
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

export function useGetKubernetesIdNamespacesNamespaceConfigmapsConfigmap<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceConfigmapsConfigmap<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    'PUT',
  ] as const
}

export function usePutKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap',
    'DELETE',
  ] as const
}

export function useDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceDeploymentsKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceDeploymentsKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespaceDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceDeploymentsKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceDeploymentsNameKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name',
    'DELETE',
  ] as const
}

export function useDeleteKubernetesIdNamespacesNamespaceDeploymentsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKubernetesIdNamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchKubernetesIdNamespacesNamespaceDeploymentsNameKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/deployments/:name', 'PATCH'] as const
}

export function usePatchKubernetesIdNamespacesNamespaceDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKubernetesIdNamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/rollback',
    'POST',
  ] as const
}

export function usePostKubernetesIdNamespacesNamespaceDeploymentsNameRollback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceDeploymentsNameRollbackKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].rollback.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/scale',
    'PUT',
  ] as const
}

export function usePutKubernetesIdNamespacesNamespaceDeploymentsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceDeploymentsNameScaleKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].scale.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceEventsKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/events', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceEventsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceEventsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceIngresscontrollersKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresscontrollers', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceIngresscontrollers<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngresscontrollersKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceIngresscontrollers<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngresscontrollersKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceIngresscontrollersKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresscontrollers', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceIngresscontrollers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceIngresscontrollersKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceIngressesKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngressesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngressesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceIngressesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceIngresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceIngressesKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresses.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceIngressesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespaceIngresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceIngressesKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].ingresses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceIngressesIngressKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/ingresses/:ingress', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceIngressesIngress<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngressesIngressKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceIngressesIngress<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceIngressesIngressKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsKey(
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

export function useGetKubernetesIdNamespacesNamespacePersistentVolumeClaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespacePersistentVolumeClaims<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims',
    'POST',
  ] as const
}

export function usePostKubernetesIdNamespacesNamespacePersistentVolumeClaims<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespacePersistentVolumeClaimsKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameKey(
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

export function useGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespacePodsKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods', args] as const
}

export function useGetKubernetesIdNamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePodsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].pods.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePodsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].pods.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteKubernetesIdNamespacesNamespacePodsNameKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name', 'DELETE'] as const
}

export function useDeleteKubernetesIdNamespacesNamespacePodsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKubernetesIdNamespacesNamespacePodsNameKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespacePodsNameLogKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name/log', args] as const
}

export function useGetKubernetesIdNamespacesNamespacePodsNameLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePodsNameLogKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespacePodsNameLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespacePodsNameLogKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespacePodsNameRestartKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/pods/:name/restart', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespacePodsNameRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespacePodsNameRestartKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].restart.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceReplicasetsKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/replicasets', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceResourceQuotasKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/resource_quotas', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceResourceQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceResourceQuotasKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceResourceQuotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceResourceQuotasKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceSecretsKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespaceSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceSecretsKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].secrets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceSecretsSecretKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceSecretsSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceSecretsSecretKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceSecretsSecret<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceSecretsSecretKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceSecretsSecretKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceSecretsSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceSecretsSecretKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteKubernetesIdNamespacesNamespaceSecretsSecretKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/secrets/:secret', 'DELETE'] as const
}

export function useDeleteKubernetesIdNamespacesNamespaceSecretsSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKubernetesIdNamespacesNamespaceSecretsSecretKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceServiceAccountsNameKey(
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

export function useGetKubernetesIdNamespacesNamespaceServiceAccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceServiceAccountsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceServiceAccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceServiceAccountsNameKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsKey() {
  return [
    'kubernetes',
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name/image_pull_secrets',
    'PUT',
  ] as const
}

export function usePutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecrets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].service_accounts[
            ':name'
          ].image_pull_secrets.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceServicesKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceServicesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceServicesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceServicesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceServicesKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].services.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdNamespacesNamespaceServicesKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/services', 'POST'] as const
}

export function usePostKubernetesIdNamespacesNamespaceServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNamespacesNamespaceServicesKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].services.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKubernetesIdNamespacesNamespaceSystemKey() {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/system', 'PUT'] as const
}

export function usePutKubernetesIdNamespacesNamespaceSystem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdNamespacesNamespaceSystemKey()
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
            (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].namespaces[':namespace'].system.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesNamespaceVolumesKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/:namespace/volumes', args] as const
}

export function useGetKubernetesIdNamespacesNamespaceVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceVolumesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesNamespaceVolumes<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesNamespaceVolumesKey(args)
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
                (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
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
          client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNamespacesCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/namespaces/count', args] as const
}

export function useGetKubernetesIdNamespacesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].namespaces.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNamespacesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNamespacesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].namespaces.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdNodesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/nodes', args] as const
}

export function useGetKubernetesIdNodes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNodes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdNodesNameDrainKey() {
  return ['kubernetes', '/kubernetes/:id/nodes/:name/drain', 'POST'] as const
}

export function usePostKubernetesIdNodesNameDrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdNodesNameDrainKey()
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
            (typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']
          >
        },
      ) => parseResponse(client.kubernetes[':id'].nodes[':name'].drain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdNodesLimitsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/nodes_limits', args] as const
}

export function useGetKubernetesIdNodesLimits<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNodesLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].nodes_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdNodesLimits<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdNodesLimitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].nodes_limits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdPersistentVolumeClaimsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims', args] as const
}

export function useGetKubernetesIdPersistentVolumeClaims<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
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
        ? getGetKubernetesIdPersistentVolumeClaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].persistent_volume_claims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdPersistentVolumeClaims<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
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
        ? getGetKubernetesIdPersistentVolumeClaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].persistent_volume_claims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdPersistentVolumeClaimsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims/delete', 'POST'] as const
}

export function usePostKubernetesIdPersistentVolumeClaimsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdPersistentVolumeClaimsDeleteKey()
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
            (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].persistent_volume_claims.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutKubernetesIdPersistentVolumeClaimsResizeKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volume_claims/resize', 'PUT'] as const
}

export function usePutKubernetesIdPersistentVolumeClaimsResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdPersistentVolumeClaimsResizeKey()
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
            (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].persistent_volume_claims.resize.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdPersistentVolumesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes', args] as const
}

export function useGetKubernetesIdPersistentVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdPersistentVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].persistent_volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdPersistentVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdPersistentVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].persistent_volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdPersistentVolumesNameKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/:name', args] as const
}

export function useGetKubernetesIdPersistentVolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
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
        ? getGetKubernetesIdPersistentVolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.kubernetes[':id'].persistent_volumes[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdPersistentVolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
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
        ? getGetKubernetesIdPersistentVolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.kubernetes[':id'].persistent_volumes[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdPersistentVolumesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/delete', 'POST'] as const
}

export function usePostKubernetesIdPersistentVolumesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdPersistentVolumesDeleteKey()
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
            (typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.kubernetes[':id'].persistent_volumes.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutKubernetesIdPersistentVolumesReclaimPolicyKey() {
  return ['kubernetes', '/kubernetes/:id/persistent_volumes/reclaim_policy', 'PUT'] as const
}

export function usePutKubernetesIdPersistentVolumesReclaimPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdPersistentVolumesReclaimPolicyKey()
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
            (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].persistent_volumes.reclaim_policy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdPodsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/pods', args] as const
}

export function useGetKubernetesIdPods<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdPodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdPods<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdPodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['pods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdRbacEnabledKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/rbac_enabled', args] as const
}

export function useGetKubernetesIdRbacEnabled<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRbacEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].rbac_enabled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdRbacEnabled<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRbacEnabledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].rbac_enabled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdRoleBindingsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/role_bindings/delete', 'POST'] as const
}

export function usePostKubernetesIdRoleBindingsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdRoleBindingsDeleteKey()
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
            (typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']
          >
        },
      ) => parseResponse(client.kubernetes[':id'].role_bindings.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdRolebindingsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/rolebindings', args] as const
}

export function useGetKubernetesIdRolebindings<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRolebindingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].rolebindings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdRolebindings<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRolebindingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].rolebindings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdRolesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/roles', args] as const
}

export function useGetKubernetesIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdRolesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/roles/delete', 'POST'] as const
}

export function usePostKubernetesIdRolesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdRolesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']> },
      ) => parseResponse(client.kubernetes[':id'].roles.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdSecretsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/secrets', args] as const
}

export function useGetKubernetesIdSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdSecretsCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/secrets/count', args] as const
}

export function useGetKubernetesIdSecretsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdSecretsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].secrets.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdSecretsCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdSecretsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].secrets.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdServiceAccountsDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/service_accounts/delete', 'POST'] as const
}

export function usePostKubernetesIdServiceAccountsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdServiceAccountsDeleteKey()
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
            (typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']
          >
        },
      ) =>
        parseResponse(client.kubernetes[':id'].service_accounts.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdServiceaccountsKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/serviceaccounts', args] as const
}

export function useGetKubernetesIdServiceaccounts<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdServiceaccounts<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdServicesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/services', args] as const
}

export function useGetKubernetesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdServicesCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/services/count', args] as const
}

export function useGetKubernetesIdServicesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServicesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].services.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdServicesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdServicesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].services.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKubernetesIdServicesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/services/delete', 'POST'] as const
}

export function usePostKubernetesIdServicesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdServicesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>
        },
      ) => parseResponse(client.kubernetes[':id'].services.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdStorageClassesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes', args] as const
}

export function useGetKubernetesIdStorageClasses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdStorageClassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].storage_classes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdStorageClasses<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdStorageClassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].storage_classes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdStorageClassesNameKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/storage_classes/:name', args] as const
}

export function useGetKubernetesIdStorageClassesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
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
        ? getGetKubernetesIdStorageClassesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].storage_classes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdStorageClassesName<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
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
        ? getGetKubernetesIdStorageClassesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.kubernetes[':id'].storage_classes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKubernetesIdStorageClassesNameDefaultKey() {
  return ['kubernetes', '/kubernetes/:id/storage_classes/:name/default', 'PUT'] as const
}

export function usePutKubernetesIdStorageClassesNameDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKubernetesIdStorageClassesNameDefaultKey()
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
            (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
          >
        },
      ) =>
        parseResponse(
          client.kubernetes[':id'].storage_classes[':name'].default.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostKubernetesIdStorageClassesDeleteKey() {
  return ['kubernetes', '/kubernetes/:id/storage_classes/delete', 'POST'] as const
}

export function usePostKubernetesIdStorageClassesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKubernetesIdStorageClassesDeleteKey()
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
            (typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']
          >
        },
      ) => parseResponse(client.kubernetes[':id'].storage_classes.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKubernetesIdVersionKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/version', args] as const
}

export function useGetKubernetesIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].version.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdVolumesKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/volumes', args] as const
}

export function useGetKubernetesIdVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdVolumes<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdVolumesNamespaceVolumeKey(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/:namespace/:volume', args] as const
}

export function useGetKubernetesIdVolumesNamespaceVolume<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesNamespaceVolumeKey(args)
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
                (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
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
          client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdVolumesNamespaceVolume<TError = unknown>(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesNamespaceVolumeKey(args)
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
                (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
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
          client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesIdVolumesCountKey(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
) {
  return ['kubernetes', '/kubernetes/:id/volumes/count', args] as const
}

export function useGetKubernetesIdVolumesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].volumes.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesIdVolumesCount<TError = unknown>(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesIdVolumesCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes[':id'].volumes.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKubernetesConfigKey(
  args: InferRequestType<typeof client.kubernetes.config.$get>,
) {
  return ['kubernetes', '/kubernetes/config', args] as const
}

export function useGetKubernetesConfig<TError = unknown>(
  args: InferRequestType<typeof client.kubernetes.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKubernetesConfig<TError = unknown>(
  args: InferRequestType<typeof client.kubernetes.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetKubernetesConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kubernetes.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kubernetes.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLdapCheckKey() {
  return ['ldap', '/ldap/check', 'POST'] as const
}

export function usePostLdapCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ldap.check.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.ldap.check.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLdapCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ldap.check.$post> }) =>
        parseResponse(client.ldap.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMotdKey() {
  return ['motd', '/motd'] as const
}

export function useGetMotd<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMotdKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.motd.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMotd<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMotdKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.motd.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.motd.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistriesKey() {
  return ['registries', '/registries'] as const
}

export function useGetRegistries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistriesKey() {
  return ['registries', '/registries', 'POST'] as const
}

export function usePostRegistries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.registries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registries.$post> }) =>
        parseResponse(client.registries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistriesIdKey(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
) {
  return ['registries', '/registries/:id', args] as const
}

export function useGetRegistriesId<TError = unknown>(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistriesId<TError = unknown>(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistriesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRegistriesIdKey() {
  return ['registries', '/registries/:id', 'PUT'] as const
}

export function usePutRegistriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registries)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRegistriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registries)[':id']['$put']> },
      ) => parseResponse(client.registries[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRegistriesIdKey() {
  return ['registries', '/registries/:id', 'DELETE'] as const
}

export function useDeleteRegistriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.registries)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegistriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registries)[':id']['$delete']> },
      ) => parseResponse(client.registries[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegistriesIdConfigureKey() {
  return ['registries', '/registries/:id/configure', 'POST'] as const
}

export function usePostRegistriesIdConfigure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registries)[':id']['configure']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.registries)[':id']['configure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistriesIdConfigureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registries)[':id']['configure']['$post']> },
      ) => parseResponse(client.registries[':id'].configure.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegistriesPingKey() {
  return ['registries', '/registries/ping', 'POST'] as const
}

export function usePostRegistriesPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.ping.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registries.ping.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistriesPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registries.ping.$post> }) =>
        parseResponse(client.registries.ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourceControlsKey() {
  return ['resource_controls', '/resource_controls', 'POST'] as const
}

export function usePostResourceControls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource_controls.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.resource_controls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceControlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resource_controls.$post> }) =>
        parseResponse(client.resource_controls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutResourceControlsIdKey() {
  return ['resource_controls', '/resource_controls/:id', 'PUT'] as const
}

export function usePutResourceControlsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resource_controls)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resource_controls)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResourceControlsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resource_controls)[':id']['$put']> },
      ) => parseResponse(client.resource_controls[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteResourceControlsIdKey() {
  return ['resource_controls', '/resource_controls/:id', 'DELETE'] as const
}

export function useDeleteResourceControlsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resource_controls)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.resource_controls)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResourceControlsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.resource_controls)[':id']['$delete']> },
      ) => parseResponse(client.resource_controls[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestoreKey() {
  return ['restore', '/restore', 'POST'] as const
}

export function usePostRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.restore.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restore.$post> }) =>
        parseResponse(client.restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRolesKey() {
  return ['roles', '/roles'] as const
}

export function useGetRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsKey() {
  return ['settings', '/settings'] as const
}

export function useGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSettingsKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function usePutSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.$put> }) =>
        parseResponse(client.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsPublicKey() {
  return ['settings', '/settings/public'] as const
}

export function useGetSettingsPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSslKey() {
  return ['ssl', '/ssl'] as const
}

export function useGetSsl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSslKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ssl.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSsl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetSslKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ssl.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPutSslKey() {
  return ['ssl', '/ssl', 'PUT'] as const
}

export function usePutSsl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssl.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.ssl.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSslKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ssl.$put> }) =>
        parseResponse(client.ssl.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStacksKey(args: InferRequestType<typeof client.stacks.$get>) {
  return ['stacks', '/stacks', args] as const
}

export function useGetStacks<TError = unknown>(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stacks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStacks<TError = unknown>(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stacks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStacksIdKey(args: InferRequestType<(typeof client.stacks)[':id']['$get']>) {
  return ['stacks', '/stacks/:id', args] as const
}

export function useGetStacksId<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStacksId<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStacksIdKey() {
  return ['stacks', '/stacks/:id', 'PUT'] as const
}

export function usePutStacksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStacksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['$put']> }) =>
        parseResponse(client.stacks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStacksIdKey() {
  return ['stacks', '/stacks/:id', 'DELETE'] as const
}

export function useDeleteStacksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStacksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['$delete']> },
      ) => parseResponse(client.stacks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutStacksIdAssociateKey() {
  return ['stacks', '/stacks/:id/associate', 'PUT'] as const
}

export function usePutStacksIdAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':id']['associate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['associate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStacksIdAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['associate']['$put']> },
      ) => parseResponse(client.stacks[':id'].associate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStacksIdFileKey(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
) {
  return ['stacks', '/stacks/:id/file', args] as const
}

export function useGetStacksIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStacksIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStacksIdFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stacks[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStacksIdGitKey() {
  return ['stacks', '/stacks/:id/git', 'POST'] as const
}

export function usePostStacksIdGit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['git']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['git']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksIdGitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['git']['$post']> },
      ) => parseResponse(client.stacks[':id'].git.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutStacksIdGitRedeployKey() {
  return ['stacks', '/stacks/:id/git/redeploy', 'PUT'] as const
}

export function usePutStacksIdGitRedeploy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStacksIdGitRedeployKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']> },
      ) => parseResponse(client.stacks[':id'].git.redeploy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksIdMigrateKey() {
  return ['stacks', '/stacks/:id/migrate', 'POST'] as const
}

export function usePostStacksIdMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['migrate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksIdMigrateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']> },
      ) => parseResponse(client.stacks[':id'].migrate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksIdStartKey() {
  return ['stacks', '/stacks/:id/start', 'POST'] as const
}

export function usePostStacksIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['start']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['start']['$post']> },
      ) => parseResponse(client.stacks[':id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksIdStopKey() {
  return ['stacks', '/stacks/:id/stop', 'POST'] as const
}

export function usePostStacksIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':id']['stop']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks)[':id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks)[':id']['stop']['$post']> },
      ) => parseResponse(client.stacks[':id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateKubernetesRepositoryKey() {
  return ['stacks', '/stacks/create/kubernetes/repository', 'POST'] as const
}

export function usePostStacksCreateKubernetesRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.kubernetes.repository.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.kubernetes.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateKubernetesRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.kubernetes.repository.$post> },
      ) => parseResponse(client.stacks.create.kubernetes.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateKubernetesStringKey() {
  return ['stacks', '/stacks/create/kubernetes/string', 'POST'] as const
}

export function usePostStacksCreateKubernetesString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.kubernetes.string.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.kubernetes.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateKubernetesStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.kubernetes.string.$post> },
      ) => parseResponse(client.stacks.create.kubernetes.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateKubernetesUrlKey() {
  return ['stacks', '/stacks/create/kubernetes/url', 'POST'] as const
}

export function usePostStacksCreateKubernetesUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.kubernetes.url.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.kubernetes.url.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateKubernetesUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.kubernetes.url.$post> },
      ) => parseResponse(client.stacks.create.kubernetes.url.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateStandaloneFileKey() {
  return ['stacks', '/stacks/create/standalone/file', 'POST'] as const
}

export function usePostStacksCreateStandaloneFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.standalone.file.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.standalone.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateStandaloneFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.standalone.file.$post> },
      ) => parseResponse(client.stacks.create.standalone.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateStandaloneRepositoryKey() {
  return ['stacks', '/stacks/create/standalone/repository', 'POST'] as const
}

export function usePostStacksCreateStandaloneRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.standalone.repository.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.standalone.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateStandaloneRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.standalone.repository.$post> },
      ) => parseResponse(client.stacks.create.standalone.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateStandaloneStringKey() {
  return ['stacks', '/stacks/create/standalone/string', 'POST'] as const
}

export function usePostStacksCreateStandaloneString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.standalone.string.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.standalone.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateStandaloneStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.standalone.string.$post> },
      ) => parseResponse(client.stacks.create.standalone.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateSwarmFileKey() {
  return ['stacks', '/stacks/create/swarm/file', 'POST'] as const
}

export function usePostStacksCreateSwarmFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.swarm.file.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.swarm.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateSwarmFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.swarm.file.$post> },
      ) => parseResponse(client.stacks.create.swarm.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateSwarmRepositoryKey() {
  return ['stacks', '/stacks/create/swarm/repository', 'POST'] as const
}

export function usePostStacksCreateSwarmRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.stacks.create.swarm.repository.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.swarm.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateSwarmRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.swarm.repository.$post> },
      ) => parseResponse(client.stacks.create.swarm.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksCreateSwarmStringKey() {
  return ['stacks', '/stacks/create/swarm/string', 'POST'] as const
}

export function usePostStacksCreateSwarmString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.stacks.create.swarm.string.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.stacks.create.swarm.string.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksCreateSwarmStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.stacks.create.swarm.string.$post> },
      ) => parseResponse(client.stacks.create.swarm.string.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStacksNameNameKey() {
  return ['stacks', '/stacks/name/:name', 'DELETE'] as const
}

export function useDeleteStacksNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks.name)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.stacks.name)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStacksNameNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks.name)[':name']['$delete']> },
      ) => parseResponse(client.stacks.name[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStacksWebhooksWebhookIDKey() {
  return ['stacks', '/stacks/webhooks/:webhookID', 'POST'] as const
}

export function usePostStacksWebhooksWebhookID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks.webhooks)[':webhookID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStacksWebhooksWebhookIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']> },
      ) => parseResponse(client.stacks.webhooks[':webhookID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemInfoKey() {
  return ['system', '/system/info'] as const
}

export function useGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemNodesKey() {
  return ['system', '/system/nodes'] as const
}

export function useGetSystemNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemNodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemNodes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemNodesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.nodes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemStatusKey() {
  return ['system', '/system/status'] as const
}

export function useGetSystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemUpgradeKey() {
  return ['system', '/system/upgrade', 'POST'] as const
}

export function usePostSystemUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.upgrade.$post>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.upgrade.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemVersionKey() {
  return ['system', '/system/version'] as const
}

export function useGetSystemVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsKey() {
  return ['tags', '/tags'] as const
}

export function useGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsIdKey() {
  return ['tags', '/tags/:id', 'DELETE'] as const
}

export function useDeleteTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tags)[':id']['$delete']> }) =>
        parseResponse(client.tags[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamMembershipsKey() {
  return ['team_memberships', '/team_memberships'] as const
}

export function useGetTeamMemberships<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamMembershipsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team_memberships.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMemberships<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamMembershipsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team_memberships.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamMembershipsKey() {
  return ['team_memberships', '/team_memberships', 'POST'] as const
}

export function usePostTeamMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team_memberships.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.team_memberships.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team_memberships.$post> }) =>
        parseResponse(client.team_memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTeamMembershipsIdKey() {
  return ['team_memberships', '/team_memberships/:id', 'PUT'] as const
}

export function usePutTeamMembershipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team_memberships)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.team_memberships)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamMembershipsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team_memberships)[':id']['$put']> },
      ) => parseResponse(client.team_memberships[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamMembershipsIdKey() {
  return ['team_memberships', '/team_memberships/:id', 'DELETE'] as const
}

export function useDeleteTeamMembershipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team_memberships)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.team_memberships)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamMembershipsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.team_memberships)[':id']['$delete']> },
      ) => parseResponse(client.team_memberships[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function useGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTeams<TError = unknown>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTeamsKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function usePostTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$post> }) =>
        parseResponse(client.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsIdKey(args: InferRequestType<(typeof client.teams)[':id']['$get']>) {
  return ['teams', '/teams/:id', args] as const
}

export function useGetTeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsIdKey() {
  return ['teams', '/teams/:id', 'PUT'] as const
}

export function usePutTeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.teams)[':id']['$put']> }) =>
        parseResponse(client.teams[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsIdKey() {
  return ['teams', '/teams/:id', 'DELETE'] as const
}

export function useDeleteTeamsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.teams)[':id']['$delete']> }) =>
        parseResponse(client.teams[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsIdMembershipsKey(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
) {
  return ['teams', '/teams/:id/memberships', args] as const
}

export function useGetTeamsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesKey() {
  return ['templates', '/templates'] as const
}

export function useGetTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesIdFileKey() {
  return ['templates', '/templates/:id/file', 'POST'] as const
}

export function usePostTemplatesIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['file']['$post']> },
      ) => parseResponse(client.templates[':id'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesHelmKey(args: InferRequestType<typeof client.templates.helm.$get>) {
  return ['templates', '/templates/helm', args] as const
}

export function useGetTemplatesHelm<TError = unknown>(
  args: InferRequestType<typeof client.templates.helm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesHelmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.helm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesHelm<TError = unknown>(
  args: InferRequestType<typeof client.templates.helm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesHelmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.helm.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.helm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesHelmCommandKey(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
) {
  return ['templates', '/templates/helm/:command', args] as const
}

export function useGetTemplatesHelmCommand<TError = unknown>(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesHelmCommandKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.helm[':command'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesHelmCommand<TError = unknown>(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesHelmCommandKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates.helm)[':command']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.helm[':command'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUploadTlsCertificateKey() {
  return ['upload', '/upload/tls/:certificate', 'POST'] as const
}

export function usePostUploadTlsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.upload.tls)[':certificate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.upload.tls)[':certificate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadTlsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.upload.tls)[':certificate']['$post']> },
      ) => parseResponse(client.upload.tls[':certificate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdKey() {
  return ['users', '/users/:id', 'PUT'] as const
}

export function usePutUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$put']> }) =>
        parseResponse(client.users[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdKey() {
  return ['users', '/users/:id', 'DELETE'] as const
}

export function useDeleteUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)[':id']['$delete']> }) =>
        parseResponse(client.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdEffectiveAccessKey(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
) {
  return ['users', '/users/:id/effective-access', args] as const
}

export function useGetUsersIdEffectiveAccess<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdEffectiveAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['effective-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdEffectiveAccess<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdEffectiveAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['effective-access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id']['effective-access'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdHelmRepositoriesKey(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
) {
  return ['users', '/users/:id/helm/repositories', args] as const
}

export function useGetUsersIdHelmRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdHelmRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].helm.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdHelmRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdHelmRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].helm.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdHelmRepositoriesKey() {
  return ['users', '/users/:id/helm/repositories', 'POST'] as const
}

export function usePostUsersIdHelmRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['helm']['repositories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdHelmRepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']> },
      ) => parseResponse(client.users[':id'].helm.repositories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdHelmRepositoriesRepositoryIDKey() {
  return ['users', '/users/:id/helm/repositories/:repositoryID', 'DELETE'] as const
}

export function useDeleteUsersIdHelmRepositoriesRepositoryID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdHelmRepositoriesRepositoryIDKey()
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
            (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].helm.repositories[':repositoryID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdMembershipsKey(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
) {
  return ['users', '/users/:id/memberships', args] as const
}

export function useGetUsersIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdPasswdKey() {
  return ['users', '/users/:id/passwd', 'PUT'] as const
}

export function usePutUsersIdPasswd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['passwd']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['passwd']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdPasswdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['passwd']['$put']> },
      ) => parseResponse(client.users[':id'].passwd.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdTokensKey(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
) {
  return ['users', '/users/:id/tokens', args] as const
}

export function useGetUsersIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdTokensKey() {
  return ['users', '/users/:id/tokens', 'POST'] as const
}

export function usePostUsersIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['tokens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['tokens']['$post']> },
      ) => parseResponse(client.users[':id'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdTokensKeyIDKey() {
  return ['users', '/users/:id/tokens/:keyID', 'DELETE'] as const
}

export function useDeleteUsersIdTokensKeyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdTokensKeyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']> },
      ) => parseResponse(client.users[':id'].tokens[':keyID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersAdminCheckKey() {
  return ['users', '/users/admin/check'] as const
}

export function useGetUsersAdminCheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersAdminCheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.admin.check.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersAdminCheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersAdminCheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.admin.check.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersAdminInitKey() {
  return ['users', '/users/admin/init', 'POST'] as const
}

export function usePostUsersAdminInit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.admin.init.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.admin.init.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersAdminInitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.admin.init.$post> }) =>
        parseResponse(client.users.admin.init.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function usePutWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$put']> }) =>
        parseResponse(client.webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'POST'] as const
}

export function usePostWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$post']> },
      ) => parseResponse(client.webhooks[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function useDeleteWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebsocketAttachKey(
  args: InferRequestType<typeof client.websocket.attach.$get>,
) {
  return ['websocket', '/websocket/attach', args] as const
}

export function useGetWebsocketAttach<TError = unknown>(
  args: InferRequestType<typeof client.websocket.attach.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebsocketAttachKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.attach.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebsocketAttach<TError = unknown>(
  args: InferRequestType<typeof client.websocket.attach.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebsocketAttachKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.attach.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.attach.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebsocketExecKey(args: InferRequestType<typeof client.websocket.exec.$get>) {
  return ['websocket', '/websocket/exec', args] as const
}

export function useGetWebsocketExec<TError = unknown>(
  args: InferRequestType<typeof client.websocket.exec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebsocketExecKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.exec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebsocketExec<TError = unknown>(
  args: InferRequestType<typeof client.websocket.exec.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebsocketExecKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.exec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.exec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebsocketKubernetesShellKey(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
) {
  return ['websocket', '/websocket/kubernetes-shell', args] as const
}

export function useGetWebsocketKubernetesShell<TError = unknown>(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebsocketKubernetesShellKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket['kubernetes-shell'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebsocketKubernetesShell<TError = unknown>(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebsocketKubernetesShellKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.websocket)['kubernetes-shell']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket['kubernetes-shell'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebsocketPodKey(args: InferRequestType<typeof client.websocket.pod.$get>) {
  return ['websocket', '/websocket/pod', args] as const
}

export function useGetWebsocketPod<TError = unknown>(
  args: InferRequestType<typeof client.websocket.pod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebsocketPodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.pod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebsocketPod<TError = unknown>(
  args: InferRequestType<typeof client.websocket.pod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebsocketPodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.websocket.pod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.websocket.pod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
