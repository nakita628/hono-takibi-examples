import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIdsKey() {
  return ['ids'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetAdminArtifactTypesKey() {
  return ['admin', '/admin/artifactTypes'] as const
}

export function useGetAdminArtifactTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminArtifactTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.artifactTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminArtifactTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminArtifactTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.artifactTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminConfigPropertiesKey() {
  return ['admin', '/admin/config/properties'] as const
}

export function useGetAdminConfigProperties<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
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
        ? getGetAdminConfigPropertiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.config.properties.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConfigProperties<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
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
        ? getGetAdminConfigPropertiesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.config.properties.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminConfigPropertiesPropertyNameKey(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
) {
  return ['admin', '/admin/config/properties/:propertyName', args] as const
}

export function useGetAdminConfigPropertiesPropertyName<TError = unknown>(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminConfigPropertiesPropertyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.config.properties[':propertyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminConfigPropertiesPropertyName<TError = unknown>(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminConfigPropertiesPropertyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.config.properties[':propertyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminConfigPropertiesPropertyNameKey() {
  return ['admin', '/admin/config/properties/:propertyName', 'PUT'] as const
}

export function usePutAdminConfigPropertiesPropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminConfigPropertiesPropertyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>
        },
      ) => parseResponse(client.admin.config.properties[':propertyName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminConfigPropertiesPropertyNameKey() {
  return ['admin', '/admin/config/properties/:propertyName', 'DELETE'] as const
}

export function useDeleteAdminConfigPropertiesPropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminConfigPropertiesPropertyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>
        },
      ) =>
        parseResponse(client.admin.config.properties[':propertyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminExportKey(args: InferRequestType<typeof client.admin.export.$get>) {
  return ['admin', '/admin/export', args] as const
}

export function useGetAdminExport<TError = unknown>(
  args: InferRequestType<typeof client.admin.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminExport<TError = unknown>(
  args: InferRequestType<typeof client.admin.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminImportKey() {
  return ['admin', '/admin/import', 'POST'] as const
}

export function usePostAdminImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.import.$post> }) =>
        parseResponse(client.admin.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLoggersKey() {
  return ['admin', '/admin/loggers'] as const
}

export function useGetAdminLoggers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLoggersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.loggers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLoggers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLoggersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.loggers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminLoggersLoggerKey(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
) {
  return ['admin', '/admin/loggers/:logger', args] as const
}

export function useGetAdminLoggersLogger<TError = unknown>(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminLoggersLoggerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.loggers[':logger'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLoggersLogger<TError = unknown>(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminLoggersLoggerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.loggers[':logger'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminLoggersLoggerKey() {
  return ['admin', '/admin/loggers/:logger', 'PUT'] as const
}

export function usePutAdminLoggersLogger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.loggers)[':logger']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminLoggersLoggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.loggers)[':logger']['$put']> },
      ) => parseResponse(client.admin.loggers[':logger'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminLoggersLoggerKey() {
  return ['admin', '/admin/loggers/:logger', 'DELETE'] as const
}

export function useDeleteAdminLoggersLogger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminLoggersLoggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']> },
      ) => parseResponse(client.admin.loggers[':logger'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRoleMappingsKey() {
  return ['admin', '/admin/roleMappings'] as const
}

export function useGetAdminRoleMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRoleMappingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.roleMappings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRoleMappings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRoleMappingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.roleMappings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRoleMappingsKey() {
  return ['admin', '/admin/roleMappings', 'POST'] as const
}

export function usePostAdminRoleMappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.roleMappings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRoleMappingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.roleMappings.$post> }) =>
        parseResponse(client.admin.roleMappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRoleMappingsPrincipalIdKey(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
) {
  return ['admin', '/admin/roleMappings/:principalId', args] as const
}

export function useGetAdminRoleMappingsPrincipalId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminRoleMappingsPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.roleMappings[':principalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRoleMappingsPrincipalId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminRoleMappingsPrincipalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.roleMappings[':principalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminRoleMappingsPrincipalIdKey() {
  return ['admin', '/admin/roleMappings/:principalId', 'PUT'] as const
}

export function usePutAdminRoleMappingsPrincipalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminRoleMappingsPrincipalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']> },
      ) => parseResponse(client.admin.roleMappings[':principalId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminRoleMappingsPrincipalIdKey() {
  return ['admin', '/admin/roleMappings/:principalId', 'DELETE'] as const
}

export function useDeleteAdminRoleMappingsPrincipalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRoleMappingsPrincipalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']> },
      ) => parseResponse(client.admin.roleMappings[':principalId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRulesKey() {
  return ['admin', '/admin/rules'] as const
}

export function useGetAdminRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRulesKey() {
  return ['admin', '/admin/rules', 'POST'] as const
}

export function usePostAdminRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.admin.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.rules.$post> }) =>
        parseResponse(client.admin.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminRulesKey() {
  return ['admin', '/admin/rules', 'DELETE'] as const
}

export function useDeleteAdminRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$delete>>>>
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
  const swrKey = customKey ?? getDeleteAdminRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.rules.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRulesRuleKey(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
) {
  return ['admin', '/admin/rules/:rule', args] as const
}

export function useGetAdminRulesRule<TError = unknown>(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRulesRuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.rules[':rule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRulesRule<TError = unknown>(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRulesRuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.rules[':rule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminRulesRuleKey() {
  return ['admin', '/admin/rules/:rule', 'PUT'] as const
}

export function usePutAdminRulesRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.rules)[':rule']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminRulesRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.rules)[':rule']['$put']> },
      ) => parseResponse(client.admin.rules[':rule'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminRulesRuleKey() {
  return ['admin', '/admin/rules/:rule', 'DELETE'] as const
}

export function useDeleteAdminRulesRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.admin.rules)[':rule']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRulesRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.rules)[':rule']['$delete']> },
      ) => parseResponse(client.admin.rules[':rule'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function useDeleteGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['$delete']> },
      ) => parseResponse(client.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
) {
  return ['groups', '/groups/:groupId/artifacts', args] as const
}

export function useGetGroupsGroupIdArtifacts<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifacts<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsGroupIdArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdArtifactsKey() {
  return ['groups', '/groups/:groupId/artifacts', 'POST'] as const
}

export function usePostGroupsGroupIdArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']> },
      ) => parseResponse(client.groups[':groupId'].artifacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdArtifactsKey() {
  return ['groups', '/groups/:groupId/artifacts', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']> },
      ) => parseResponse(client.groups[':groupId'].artifacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
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
        ? getGetGroupsGroupIdArtifactsArtifactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
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
        ? getGetGroupsGroupIdArtifactsArtifactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']
          >
        },
      ) =>
        parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdArtifactsArtifactId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdArtifactsArtifactIdKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdMetaKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdMetaKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdMetaKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].meta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdMetaKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdMetaKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].meta.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsGroupIdArtifactsArtifactIdMetaKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', 'POST'] as const
}

export function usePostGroupsGroupIdArtifactsArtifactIdMeta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdArtifactsArtifactIdMetaKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].meta.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdOwnerKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/owner', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdOwner<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdOwnerKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].owner.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdOwner<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdOwnerKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].owner.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdOwnerKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/owner', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdOwnerKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].owner.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdRulesKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdRulesKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdRulesKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdArtifactsArtifactIdRulesKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', 'POST'] as const
}

export function usePostGroupsGroupIdArtifactsArtifactIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdArtifactsArtifactIdRulesKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdArtifactsArtifactIdRulesKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdRulesRuleKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdRulesRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdRulesRuleKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdRulesRule<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdRulesRuleKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdRulesRuleKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdRulesRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdRulesRuleKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', 'DELETE'] as const
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdRulesRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdStateKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/state', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdStateKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdTestKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/test', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdTestKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].test.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdVersionsKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdArtifactsArtifactIdVersionsKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions', 'POST'] as const
}

export function usePostGroupsGroupIdArtifactsArtifactIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdArtifactsArtifactIdVersionsKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version/meta', args] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version/meta', 'PUT'] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey() {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/meta',
    'DELETE',
  ] as const
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
) {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/references',
    args,
  ] as const
}

export function useGetGroupsGroupIdArtifactsArtifactIdVersionsVersionReferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupIdArtifactsArtifactIdVersionsVersionReferences<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
        ? getGetGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesKey(args)
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
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateKey() {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/state',
    'PUT',
  ] as const
}

export function usePutGroupsGroupIdArtifactsArtifactIdVersionsVersionState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateKey()
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
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].state.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdsContentHashesContentHashIndexKey(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
) {
  return ['ids', '/ids/contentHashes/:contentHash/', args] as const
}

export function useGetIdsContentHashesContentHashIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentHashesContentHashIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentHashes[':contentHash'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsContentHashesContentHashIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentHashesContentHashIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentHashes[':contentHash'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdsContentHashesContentHashReferencesKey(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
) {
  return ['ids', '/ids/contentHashes/:contentHash/references', args] as const
}

export function useGetIdsContentHashesContentHashReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
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
        ? getGetIdsContentHashesContentHashReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ids.contentHashes[':contentHash'].references.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsContentHashesContentHashReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
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
        ? getGetIdsContentHashesContentHashReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ids.contentHashes[':contentHash'].references.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIdsContentIdsContentIdIndexKey(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
) {
  return ['ids', '/ids/contentIds/:contentId/', args] as const
}

export function useGetIdsContentIdsContentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentIdsContentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentIds[':contentId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsContentIdsContentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentIdsContentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentIds[':contentId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdsContentIdsContentIdReferencesKey(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
) {
  return ['ids', '/ids/contentIds/:contentId/references', args] as const
}

export function useGetIdsContentIdsContentIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentIdsContentIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentIds[':contentId'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsContentIdsContentIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsContentIdsContentIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.contentIds[':contentId'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdsGlobalIdsGlobalIdKey(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
) {
  return ['ids', '/ids/globalIds/:globalId', args] as const
}

export function useGetIdsGlobalIdsGlobalId<TError = unknown>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsGlobalIdsGlobalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ids.globalIds[':globalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsGlobalIdsGlobalId<TError = unknown>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsGlobalIdsGlobalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ids.globalIds[':globalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdsGlobalIdsGlobalIdReferencesKey(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
) {
  return ['ids', '/ids/globalIds/:globalId/references', args] as const
}

export function useGetIdsGlobalIdsGlobalIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsGlobalIdsGlobalIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.globalIds[':globalId'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdsGlobalIdsGlobalIdReferences<TError = unknown>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIdsGlobalIdsGlobalIdReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ids.globalIds[':globalId'].references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchArtifactsKey(
  args: InferRequestType<typeof client.search.artifacts.$get>,
) {
  return ['search', '/search/artifacts', args] as const
}

export function useGetSearchArtifacts<TError = unknown>(
  args: InferRequestType<typeof client.search.artifacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchArtifacts<TError = unknown>(
  args: InferRequestType<typeof client.search.artifacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchArtifactsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.artifacts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSearchArtifactsKey() {
  return ['search', '/search/artifacts', 'POST'] as const
}

export function usePostSearchArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.search.artifacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.search.artifacts.$post> }) =>
        parseResponse(client.search.artifacts.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getGetSystemLimitsKey() {
  return ['system', '/system/limits'] as const
}

export function useGetSystemLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLimitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.limits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemLimits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLimitsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.limits.$get(undefined, clientOptions)),
      restSwrOptions,
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
