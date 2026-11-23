import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogsKey() {
  return ['catalogs'] as const
}

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getDeltaKey() {
  return ['delta'] as const
}

export function getExternalLocationsKey() {
  return ['external-locations'] as const
}

export function getFunctionsKey() {
  return ['functions'] as const
}

export function getMetastoreSummaryKey() {
  return ['metastore_summary'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getStagingTablesKey() {
  return ['staging-tables'] as const
}

export function getTablesKey() {
  return ['tables'] as const
}

export function getTemporaryModelVersionCredentialsKey() {
  return ['temporary-model-version-credentials'] as const
}

export function getTemporaryPathCredentialsKey() {
  return ['temporary-path-credentials'] as const
}

export function getTemporaryTableCredentialsKey() {
  return ['temporary-table-credentials'] as const
}

export function getTemporaryVolumeCredentialsKey() {
  return ['temporary-volume-credentials'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getGetCatalogsKey(args: InferRequestType<typeof client.catalogs.$get>) {
  return ['catalogs', '/catalogs', args] as const
}

export function useGetCatalogs<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.catalogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCatalogs<TError = unknown>(
  args: InferRequestType<typeof client.catalogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.catalogs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCatalogsKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function usePostCatalogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.catalogs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCatalogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.catalogs.$post> }) =>
        parseResponse(client.catalogs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogsNameKey(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
) {
  return ['catalogs', '/catalogs/:name', args] as const
}

export function useGetCatalogsName<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogsName<TError = unknown>(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalogs[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCatalogsNameKey() {
  return ['catalogs', '/catalogs/:name', 'DELETE'] as const
}

export function useDeleteCatalogsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCatalogsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs)[':name']['$delete']> },
      ) => parseResponse(client.catalogs[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCatalogsNameKey() {
  return ['catalogs', '/catalogs/:name', 'PATCH'] as const
}

export function usePatchCatalogsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.catalogs)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCatalogsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.catalogs)[':name']['$patch']> },
      ) => parseResponse(client.catalogs[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasKey(args: InferRequestType<typeof client.schemas.$get>) {
  return ['schemas', '/schemas', args] as const
}

export function useGetSchemas<TError = unknown>(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schemas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSchemas<TError = unknown>(
  args: InferRequestType<typeof client.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.schemas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSchemasKey() {
  return ['schemas', '/schemas', 'POST'] as const
}

export function usePostSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.schemas.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.schemas.$post> }) =>
        parseResponse(client.schemas.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasFullNameKey(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
) {
  return ['schemas', '/schemas/:full_name', args] as const
}

export function useGetSchemasFullName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemasFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasFullName<TError = unknown>(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSchemasFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schemas[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSchemasFullNameKey() {
  return ['schemas', '/schemas/:full_name', 'DELETE'] as const
}

export function useDeleteSchemasFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schemas)[':full_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSchemasFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schemas)[':full_name']['$delete']> },
      ) => parseResponse(client.schemas[':full_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSchemasFullNameKey() {
  return ['schemas', '/schemas/:full_name', 'PATCH'] as const
}

export function usePatchSchemasFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.schemas)[':full_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSchemasFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.schemas)[':full_name']['$patch']> },
      ) => parseResponse(client.schemas[':full_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStagingTablesKey() {
  return ['staging-tables', '/staging-tables', 'POST'] as const
}

export function usePostStagingTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['staging-tables']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['staging-tables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStagingTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['staging-tables']['$post']> },
      ) => parseResponse(client['staging-tables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTablesKey(args: InferRequestType<typeof client.tables.$get>) {
  return ['tables', '/tables', args] as const
}

export function useGetTables<TError = unknown>(
  args: InferRequestType<typeof client.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tables.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTables<TError = unknown>(
  args: InferRequestType<typeof client.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tables.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTablesKey() {
  return ['tables', '/tables', 'POST'] as const
}

export function usePostTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tables.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tables.$post> }) =>
        parseResponse(client.tables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTablesFullNameKey(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
) {
  return ['tables', '/tables/:full_name', args] as const
}

export function useGetTablesFullName<TError = unknown>(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTablesFullNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tables[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTablesFullName<TError = unknown>(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTablesFullNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tables[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTablesFullNameKey() {
  return ['tables', '/tables/:full_name', 'DELETE'] as const
}

export function useDeleteTablesFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tables)[':full_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTablesFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tables)[':full_name']['$delete']> },
      ) => parseResponse(client.tables[':full_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTablesFullNameKey() {
  return ['tables', '/tables/:full_name', 'PATCH'] as const
}

export function usePatchTablesFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tables)[':full_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTablesFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tables)[':full_name']['$patch']> },
      ) => parseResponse(client.tables[':full_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesKey(args: InferRequestType<typeof client.volumes.$get>) {
  return ['volumes', '/volumes', args] as const
}

export function useGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVolumes<TError = unknown>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.volumes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVolumesKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function usePostVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.volumes.$post> }) =>
        parseResponse(client.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVolumesNameKey(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
) {
  return ['volumes', '/volumes/:name', args] as const
}

export function useGetVolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVolumesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.volumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVolumesNameKey() {
  return ['volumes', '/volumes/:name', 'DELETE'] as const
}

export function useDeleteVolumesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVolumesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':name']['$delete']> },
      ) => parseResponse(client.volumes[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVolumesNameKey() {
  return ['volumes', '/volumes/:name', 'PATCH'] as const
}

export function usePatchVolumesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.volumes)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVolumesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.volumes)[':name']['$patch']> },
      ) => parseResponse(client.volumes[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemporaryModelVersionCredentialsKey() {
  return [
    'temporary-model-version-credentials',
    '/temporary-model-version-credentials',
    'POST',
  ] as const
}

export function usePostTemporaryModelVersionCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-model-version-credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemporaryModelVersionCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>
        },
      ) => parseResponse(client['temporary-model-version-credentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemporaryTableCredentialsKey() {
  return ['temporary-table-credentials', '/temporary-table-credentials', 'POST'] as const
}

export function usePostTemporaryTableCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-table-credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['temporary-table-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemporaryTableCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['temporary-table-credentials']['$post']> },
      ) => parseResponse(client['temporary-table-credentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemporaryVolumeCredentialsKey() {
  return ['temporary-volume-credentials', '/temporary-volume-credentials', 'POST'] as const
}

export function usePostTemporaryVolumeCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-volume-credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['temporary-volume-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemporaryVolumeCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['temporary-volume-credentials']['$post']> },
      ) => parseResponse(client['temporary-volume-credentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsKey(args: InferRequestType<typeof client.functions.$get>) {
  return ['functions', '/functions', args] as const
}

export function useGetFunctions<TError = unknown>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctions<TError = unknown>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsKey() {
  return ['functions', '/functions', 'POST'] as const
}

export function usePostFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.functions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.functions.$post> }) =>
        parseResponse(client.functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsNameKey(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
) {
  return ['functions', '/functions/:name', args] as const
}

export function useGetFunctionsName<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsName<TError = unknown>(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFunctionsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFunctionsNameKey() {
  return ['functions', '/functions/:name', 'DELETE'] as const
}

export function useDeleteFunctionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFunctionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.functions)[':name']['$delete']> },
      ) => parseResponse(client.functions[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFunctionsNameKey() {
  return ['functions', '/functions/:name', 'PATCH'] as const
}

export function usePatchFunctionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.functions)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFunctionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.functions)[':name']['$patch']> },
      ) => parseResponse(client.functions[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsKey(args: InferRequestType<typeof client.models.$get>) {
  return ['models', '/models', args] as const
}

export function useGetModels<TError = unknown>(
  args: InferRequestType<typeof client.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.models.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetModels<TError = unknown>(
  args: InferRequestType<typeof client.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.models.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostModelsKey() {
  return ['models', '/models', 'POST'] as const
}

export function usePostModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.models.$post> }) =>
        parseResponse(client.models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsFullNameKey(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
) {
  return ['models', '/models/:full_name', args] as const
}

export function useGetModelsFullName<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsFullNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsFullName<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsFullNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':full_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteModelsFullNameKey() {
  return ['models', '/models/:full_name', 'DELETE'] as const
}

export function useDeleteModelsFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':full_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModelsFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':full_name']['$delete']> },
      ) => parseResponse(client.models[':full_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsFullNameKey() {
  return ['models', '/models/:full_name', 'PATCH'] as const
}

export function usePatchModelsFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':full_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':full_name']['$patch']> },
      ) => parseResponse(client.models[':full_name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostModelsVersionsKey() {
  return ['models', '/models/versions', 'POST'] as const
}

export function usePostModelsVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.versions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.models.versions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.models.versions.$post> }) =>
        parseResponse(client.models.versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsFullNameVersionsKey(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
) {
  return ['models', '/models/:full_name/versions', args] as const
}

export function useGetModelsFullNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsFullNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':full_name'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsFullNameVersions<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsFullNameVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':full_name'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModelsFullNameVersionsVersionKey(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
) {
  return ['models', '/models/:full_name/versions/:version', args] as const
}

export function useGetModelsFullNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
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
        ? getGetModelsFullNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.models[':full_name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsFullNameVersionsVersion<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
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
        ? getGetModelsFullNameVersionsVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.models[':full_name'].versions[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteModelsFullNameVersionsVersionKey() {
  return ['models', '/models/:full_name/versions/:version', 'DELETE'] as const
}

export function useDeleteModelsFullNameVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModelsFullNameVersionsVersionKey()
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
            (typeof client.models)[':full_name']['versions'][':version']['$delete']
          >
        },
      ) =>
        parseResponse(client.models[':full_name'].versions[':version'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsFullNameVersionsVersionKey() {
  return ['models', '/models/:full_name/versions/:version', 'PATCH'] as const
}

export function usePatchModelsFullNameVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsFullNameVersionsVersionKey()
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
            (typeof client.models)[':full_name']['versions'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(client.models[':full_name'].versions[':version'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsFullNameVersionsVersionFinalizeKey() {
  return ['models', '/models/:full_name/versions/:version/finalize', 'PATCH'] as const
}

export function usePatchModelsFullNameVersionsVersionFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsFullNameVersionsVersionFinalizeKey()
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
            (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.models[':full_name'].versions[':version'].finalize.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTemporaryPathCredentialsKey() {
  return ['temporary-path-credentials', '/temporary-path-credentials', 'POST'] as const
}

export function usePostTemporaryPathCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-path-credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['temporary-path-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemporaryPathCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['temporary-path-credentials']['$post']> },
      ) => parseResponse(client['temporary-path-credentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionsSecurableTypeFullNameKey(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
) {
  return ['permissions', '/permissions/:securable_type/:full_name', args] as const
}

export function useGetPermissionsSecurableTypeFullName<TError = unknown>(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
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
        ? getGetPermissionsSecurableTypeFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.permissions[':securable_type'][':full_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionsSecurableTypeFullName<TError = unknown>(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
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
        ? getGetPermissionsSecurableTypeFullNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.permissions[':securable_type'][':full_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchPermissionsSecurableTypeFullNameKey() {
  return ['permissions', '/permissions/:securable_type/:full_name', 'PATCH'] as const
}

export function usePatchPermissionsSecurableTypeFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPermissionsSecurableTypeFullNameKey()
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
            (typeof client.permissions)[':securable_type'][':full_name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.permissions[':securable_type'][':full_name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetastoreSummaryKey() {
  return ['metastore_summary', '/metastore_summary'] as const
}

export function useGetMetastoreSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetastoreSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metastore_summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetastoreSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetastoreSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metastore_summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCredentialsKey(args: InferRequestType<typeof client.credentials.$get>) {
  return ['credentials', '/credentials', args] as const
}

export function useGetCredentials<TError = unknown>(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCredentialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentials<TError = unknown>(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCredentialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCredentialsKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function usePostCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credentials.$post> }) =>
        parseResponse(client.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCredentialsNameKey(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
) {
  return ['credentials', '/credentials/:name', args] as const
}

export function useGetCredentialsName<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentialsName<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCredentialsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCredentialsNameKey() {
  return ['credentials', '/credentials/:name', 'DELETE'] as const
}

export function useDeleteCredentialsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credentials)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCredentialsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credentials)[':name']['$delete']> },
      ) => parseResponse(client.credentials[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCredentialsNameKey() {
  return ['credentials', '/credentials/:name', 'PATCH'] as const
}

export function usePatchCredentialsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credentials)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCredentialsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credentials)[':name']['$patch']> },
      ) => parseResponse(client.credentials[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExternalLocationsKey(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
) {
  return ['external-locations', '/external-locations', args] as const
}

export function useGetExternalLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['external-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['external-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExternalLocationsKey() {
  return ['external-locations', '/external-locations', 'POST'] as const
}

export function usePostExternalLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['external-locations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExternalLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['external-locations']['$post']> },
      ) => parseResponse(client['external-locations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExternalLocationsNameKey(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
) {
  return ['external-locations', '/external-locations/:name', args] as const
}

export function useGetExternalLocationsName<TError = unknown>(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalLocationsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['external-locations'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExternalLocationsName<TError = unknown>(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExternalLocationsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['external-locations'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteExternalLocationsNameKey() {
  return ['external-locations', '/external-locations/:name', 'DELETE'] as const
}

export function useDeleteExternalLocationsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['external-locations'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExternalLocationsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['external-locations'][':name']['$delete']> },
      ) => parseResponse(client['external-locations'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExternalLocationsNameKey() {
  return ['external-locations', '/external-locations/:name', 'PATCH'] as const
}

export function usePatchExternalLocationsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['external-locations'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExternalLocationsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['external-locations'][':name']['$patch']> },
      ) => parseResponse(client['external-locations'][':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeltaPreviewCommitsKey(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
) {
  return ['delta', '/delta/preview/commits', args] as const
}

export function useGetDeltaPreviewCommits<TError = unknown>(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeltaPreviewCommitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delta.preview.commits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeltaPreviewCommits<TError = unknown>(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeltaPreviewCommitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delta.preview.commits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeltaPreviewCommitsKey() {
  return ['delta', '/delta/preview/commits', 'POST'] as const
}

export function usePostDeltaPreviewCommits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.delta.preview.commits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeltaPreviewCommitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.delta.preview.commits.$post> },
      ) => parseResponse(client.delta.preview.commits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
