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

export function getCatalogsQueryKey(args: InferRequestType<typeof client.catalogs.$get>) {
  return ['catalogs', '/catalogs', args] as const
}

export function getCatalogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catalogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogsQueryKey>
  >({
    queryKey: getCatalogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.catalogs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCatalogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCatalogsMutationKey() {
  return ['catalogs', '/catalogs', 'POST'] as const
}

export function getPostCatalogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>>,
    TError,
    InferRequestType<typeof client.catalogs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCatalogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.catalogs.$post>) {
      return parseResponse(client.catalogs.$post(args, options))
    },
  })
}

export function injectPostCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.catalogs.$post>,
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
    const mutationDefaults = getPostCatalogsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCatalogsNameQueryKey(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
) {
  return ['catalogs', '/catalogs/:name', args] as const
}

export function getCatalogsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogs)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsNameQueryKey>
  >({
    queryKey: getCatalogsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogs[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCatalogsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogs)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCatalogsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteCatalogsNameMutationKey() {
  return ['catalogs', '/catalogs/:name', 'DELETE'] as const
}

export function getDeleteCatalogsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCatalogsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs)[':name']['$delete']>) {
      return parseResponse(client.catalogs[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteCatalogsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteCatalogsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCatalogsNameMutationKey() {
  return ['catalogs', '/catalogs/:name', 'PATCH'] as const
}

export function getPatchCatalogsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.catalogs)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCatalogsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.catalogs)[':name']['$patch']>) {
      return parseResponse(client.catalogs[':name'].$patch(args, options))
    },
  })
}

export function injectPatchCatalogsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.catalogs)[':name']['$patch']>,
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
    const mutationDefaults = getPatchCatalogsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemasQueryKey(args: InferRequestType<typeof client.schemas.$get>) {
  return ['schemas', '/schemas', args] as const
}

export function getSchemasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schemas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemasQueryKey>
  >({
    queryKey: getSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schemas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSchemasMutationKey() {
  return ['schemas', '/schemas', 'POST'] as const
}

export function getPostSchemasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$post>>>>>,
    TError,
    InferRequestType<typeof client.schemas.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schemas.$post>) {
      return parseResponse(client.schemas.$post(args, options))
    },
  })
}

export function injectPostSchemas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$post>>>>>,
        TError,
        InferRequestType<typeof client.schemas.$post>,
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
    const mutationDefaults = getPostSchemasMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemasFullNameQueryKey(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
) {
  return ['schemas', '/schemas/:full_name', args] as const
}

export function getSchemasFullNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasFullNameQueryKey>
  >({
    queryKey: getSchemasFullNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas[':full_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchemasFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schemas)[':full_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasFullNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasFullNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSchemasFullNameMutationKey() {
  return ['schemas', '/schemas/:full_name', 'DELETE'] as const
}

export function getDeleteSchemasFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.schemas)[':full_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSchemasFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schemas)[':full_name']['$delete']>) {
      return parseResponse(client.schemas[':full_name'].$delete(args, options))
    },
  })
}

export function injectDeleteSchemasFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schemas)[':full_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.schemas)[':full_name']['$delete']>,
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
    const mutationDefaults = getDeleteSchemasFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchSchemasFullNameMutationKey() {
  return ['schemas', '/schemas/:full_name', 'PATCH'] as const
}

export function getPatchSchemasFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.schemas)[':full_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSchemasFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schemas)[':full_name']['$patch']>) {
      return parseResponse(client.schemas[':full_name'].$patch(args, options))
    },
  })
}

export function injectPatchSchemasFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schemas)[':full_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.schemas)[':full_name']['$patch']>,
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
    const mutationDefaults = getPatchSchemasFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStagingTablesMutationKey() {
  return ['staging-tables', '/staging-tables', 'POST'] as const
}

export function getPostStagingTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['staging-tables']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['staging-tables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStagingTablesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['staging-tables']['$post']>) {
      return parseResponse(client['staging-tables'].$post(args, options))
    },
  })
}

export function injectPostStagingTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['staging-tables']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['staging-tables']['$post']>,
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
    const mutationDefaults = getPostStagingTablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTablesQueryKey(args: InferRequestType<typeof client.tables.$get>) {
  return ['tables', '/tables', args] as const
}

export function getTablesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTablesQueryKey>
  >({
    queryKey: getTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTables<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTablesMutationKey() {
  return ['tables', '/tables', 'POST'] as const
}

export function getPostTablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
    TError,
    InferRequestType<typeof client.tables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tables.$post>) {
      return parseResponse(client.tables.$post(args, options))
    },
  })
}

export function injectPostTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
        TError,
        InferRequestType<typeof client.tables.$post>,
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
    const mutationDefaults = getPostTablesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTablesFullNameQueryKey(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
) {
  return ['tables', '/tables/:full_name', args] as const
}

export function getTablesFullNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesFullNameQueryKey>
  >({
    queryKey: getTablesFullNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':full_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTablesFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tables)[':full_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesFullNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesFullNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteTablesFullNameMutationKey() {
  return ['tables', '/tables/:full_name', 'DELETE'] as const
}

export function getDeleteTablesFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':full_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTablesFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':full_name']['$delete']>) {
      return parseResponse(client.tables[':full_name'].$delete(args, options))
    },
  })
}

export function injectDeleteTablesFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':full_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':full_name']['$delete']>,
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
    const mutationDefaults = getDeleteTablesFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchTablesFullNameMutationKey() {
  return ['tables', '/tables/:full_name', 'PATCH'] as const
}

export function getPatchTablesFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':full_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTablesFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':full_name']['$patch']>) {
      return parseResponse(client.tables[':full_name'].$patch(args, options))
    },
  })
}

export function injectPatchTablesFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':full_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':full_name']['$patch']>,
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
    const mutationDefaults = getPatchTablesFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVolumesQueryKey(args: InferRequestType<typeof client.volumes.$get>) {
  return ['volumes', '/volumes', args] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.volumes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVolumesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function injectPostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
        TError,
        InferRequestType<typeof client.volumes.$post>,
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
    const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVolumesNameQueryKey(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
) {
  return ['volumes', '/volumes/:name', args] as const
}

export function getVolumesNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesNameQueryKey>
  >({
    queryKey: getVolumesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVolumesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.volumes)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVolumesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteVolumesNameMutationKey() {
  return ['volumes', '/volumes/:name', 'DELETE'] as const
}

export function getDeleteVolumesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':name']['$delete']>) {
      return parseResponse(client.volumes[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteVolumesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteVolumesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchVolumesNameMutationKey() {
  return ['volumes', '/volumes/:name', 'PATCH'] as const
}

export function getPatchVolumesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVolumesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':name']['$patch']>) {
      return parseResponse(client.volumes[':name'].$patch(args, options))
    },
  })
}

export function injectPatchVolumesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':name']['$patch']>,
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
    const mutationDefaults = getPatchVolumesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTemporaryModelVersionCredentialsMutationKey() {
  return [
    'temporary-model-version-credentials',
    '/temporary-model-version-credentials',
    'POST',
  ] as const
}

export function getPostTemporaryModelVersionCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-model-version-credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemporaryModelVersionCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>,
    ) {
      return parseResponse(client['temporary-model-version-credentials'].$post(args, options))
    },
  })
}

export function injectPostTemporaryModelVersionCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['temporary-model-version-credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>,
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
    const mutationDefaults = getPostTemporaryModelVersionCredentialsMutationOptions<
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

export function getPostTemporaryTableCredentialsMutationKey() {
  return ['temporary-table-credentials', '/temporary-table-credentials', 'POST'] as const
}

export function getPostTemporaryTableCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-table-credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['temporary-table-credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemporaryTableCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['temporary-table-credentials']['$post']>,
    ) {
      return parseResponse(client['temporary-table-credentials'].$post(args, options))
    },
  })
}

export function injectPostTemporaryTableCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['temporary-table-credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['temporary-table-credentials']['$post']>,
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
    const mutationDefaults = getPostTemporaryTableCredentialsMutationOptions<
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

export function getPostTemporaryVolumeCredentialsMutationKey() {
  return ['temporary-volume-credentials', '/temporary-volume-credentials', 'POST'] as const
}

export function getPostTemporaryVolumeCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-volume-credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['temporary-volume-credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemporaryVolumeCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['temporary-volume-credentials']['$post']>,
    ) {
      return parseResponse(client['temporary-volume-credentials'].$post(args, options))
    },
  })
}

export function injectPostTemporaryVolumeCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['temporary-volume-credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['temporary-volume-credentials']['$post']>,
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
    const mutationDefaults = getPostTemporaryVolumeCredentialsMutationOptions<
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

export function getFunctionsQueryKey(args: InferRequestType<typeof client.functions.$get>) {
  return ['functions', '/functions', args] as const
}

export function getFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFunctionsQueryKey>
  >({
    queryKey: getFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.functions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFunctionsMutationKey() {
  return ['functions', '/functions', 'POST'] as const
}

export function getPostFunctionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>>,
    TError,
    InferRequestType<typeof client.functions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.functions.$post>) {
      return parseResponse(client.functions.$post(args, options))
    },
  })
}

export function injectPostFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.functions.$post>,
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
    const mutationDefaults = getPostFunctionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFunctionsNameQueryKey(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
) {
  return ['functions', '/functions/:name', args] as const
}

export function getFunctionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsNameQueryKey>
  >({
    queryKey: getFunctionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFunctionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFunctionsNameMutationKey() {
  return ['functions', '/functions/:name', 'DELETE'] as const
}

export function getDeleteFunctionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFunctionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.functions)[':name']['$delete']>) {
      return parseResponse(client.functions[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteFunctionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.functions)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteFunctionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFunctionsNameMutationKey() {
  return ['functions', '/functions/:name', 'PATCH'] as const
}

export function getPatchFunctionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFunctionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.functions)[':name']['$patch']>) {
      return parseResponse(client.functions[':name'].$patch(args, options))
    },
  })
}

export function injectPatchFunctionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.functions)[':name']['$patch']>,
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
    const mutationDefaults = getPatchFunctionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModelsQueryKey(args: InferRequestType<typeof client.models.$get>) {
  return ['models', '/models', args] as const
}

export function getModelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >({
    queryKey: getModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.models.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostModelsMutationKey() {
  return ['models', '/models', 'POST'] as const
}

export function getPostModelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
    TError,
    InferRequestType<typeof client.models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.models.$post>) {
      return parseResponse(client.models.$post(args, options))
    },
  })
}

export function injectPostModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
        TError,
        InferRequestType<typeof client.models.$post>,
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
    const mutationDefaults = getPostModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModelsFullNameQueryKey(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
) {
  return ['models', '/models/:full_name', args] as const
}

export function getModelsFullNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameQueryKey>
  >({
    queryKey: getModelsFullNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':full_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectModelsFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.models)[':full_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsFullNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsFullNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteModelsFullNameMutationKey() {
  return ['models', '/models/:full_name', 'DELETE'] as const
}

export function getDeleteModelsFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':full_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':full_name']['$delete']>) {
      return parseResponse(client.models[':full_name'].$delete(args, options))
    },
  })
}

export function injectDeleteModelsFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':full_name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':full_name']['$delete']>,
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
    const mutationDefaults = getDeleteModelsFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchModelsFullNameMutationKey() {
  return ['models', '/models/:full_name', 'PATCH'] as const
}

export function getPatchModelsFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':full_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsFullNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':full_name']['$patch']>) {
      return parseResponse(client.models[':full_name'].$patch(args, options))
    },
  })
}

export function injectPatchModelsFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':full_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':full_name']['$patch']>,
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
    const mutationDefaults = getPatchModelsFullNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostModelsVersionsMutationKey() {
  return ['models', '/models/versions', 'POST'] as const
}

export function getPostModelsVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.versions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.models.versions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.models.versions.$post>) {
      return parseResponse(client.models.versions.$post(args, options))
    },
  })
}

export function injectPostModelsVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.versions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.models.versions.$post>,
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
    const mutationDefaults = getPostModelsVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getModelsFullNameVersionsQueryKey(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
) {
  return ['models', '/models/:full_name/versions', args] as const
}

export function getModelsFullNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameVersionsQueryKey>
  >({
    queryKey: getModelsFullNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':full_name'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModelsFullNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsFullNameVersionsQueryKey>
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
      ...getModelsFullNameVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getModelsFullNameVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
) {
  return ['models', '/models/:full_name/versions/:version', args] as const
}

export function getModelsFullNameVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameVersionsVersionQueryKey>
  >({
    queryKey: getModelsFullNameVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':full_name'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectModelsFullNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.models)[':full_name']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsFullNameVersionsVersionQueryKey>
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
      ...getModelsFullNameVersionsVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteModelsFullNameVersionsVersionMutationKey() {
  return ['models', '/models/:full_name/versions/:version', 'DELETE'] as const
}

export function getDeleteModelsFullNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsFullNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':full_name']['versions'][':version']['$delete']
      >,
    ) {
      return parseResponse(client.models[':full_name'].versions[':version'].$delete(args, options))
    },
  })
}

export function injectDeleteModelsFullNameVersionsVersion<
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
                ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>,
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
    const mutationDefaults = getDeleteModelsFullNameVersionsVersionMutationOptions<
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

export function getPatchModelsFullNameVersionsVersionMutationKey() {
  return ['models', '/models/:full_name/versions/:version', 'PATCH'] as const
}

export function getPatchModelsFullNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsFullNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':full_name']['versions'][':version']['$patch']
      >,
    ) {
      return parseResponse(client.models[':full_name'].versions[':version'].$patch(args, options))
    },
  })
}

export function injectPatchModelsFullNameVersionsVersion<
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
                ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>,
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
    const mutationDefaults = getPatchModelsFullNameVersionsVersionMutationOptions<
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

export function getPatchModelsFullNameVersionsVersionFinalizeMutationKey() {
  return ['models', '/models/:full_name/versions/:version/finalize', 'PATCH'] as const
}

export function getPatchModelsFullNameVersionsVersionFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsFullNameVersionsVersionFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
      >,
    ) {
      return parseResponse(
        client.models[':full_name'].versions[':version'].finalize.$patch(args, options),
      )
    },
  })
}

export function injectPatchModelsFullNameVersionsVersionFinalize<
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
                  (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.models)[':full_name']['versions'][':version']['finalize']['$patch']
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
    const mutationDefaults = getPatchModelsFullNameVersionsVersionFinalizeMutationOptions<
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

export function getPostTemporaryPathCredentialsMutationKey() {
  return ['temporary-path-credentials', '/temporary-path-credentials', 'POST'] as const
}

export function getPostTemporaryPathCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['temporary-path-credentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['temporary-path-credentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemporaryPathCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['temporary-path-credentials']['$post']>,
    ) {
      return parseResponse(client['temporary-path-credentials'].$post(args, options))
    },
  })
}

export function injectPostTemporaryPathCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['temporary-path-credentials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['temporary-path-credentials']['$post']>,
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
    const mutationDefaults = getPostTemporaryPathCredentialsMutationOptions<
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

export function getPermissionsSecurableTypeFullNameQueryKey(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
) {
  return ['permissions', '/permissions/:securable_type/:full_name', args] as const
}

export function getPermissionsSecurableTypeFullNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsSecurableTypeFullNameQueryKey>
  >({
    queryKey: getPermissionsSecurableTypeFullNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions[':securable_type'][':full_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPermissionsSecurableTypeFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.permissions)[':securable_type'][':full_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsSecurableTypeFullNameQueryKey>
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
      ...getPermissionsSecurableTypeFullNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchPermissionsSecurableTypeFullNameMutationKey() {
  return ['permissions', '/permissions/:securable_type/:full_name', 'PATCH'] as const
}

export function getPatchPermissionsSecurableTypeFullNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPermissionsSecurableTypeFullNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.permissions)[':securable_type'][':full_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.permissions[':securable_type'][':full_name'].$patch(args, options),
      )
    },
  })
}

export function injectPatchPermissionsSecurableTypeFullName<
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
                ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>,
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
    const mutationDefaults = getPatchPermissionsSecurableTypeFullNameMutationOptions<
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

export function getMetastoreSummaryQueryKey() {
  return ['metastore_summary', '/metastore_summary'] as const
}

export function getMetastoreSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetastoreSummaryQueryKey>
  >({
    queryKey: getMetastoreSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metastore_summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMetastoreSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetastoreSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetastoreSummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCredentialsQueryKey(args: InferRequestType<typeof client.credentials.$get>) {
  return ['credentials', '/credentials', args] as const
}

export function getCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCredentialsQueryKey>
  >({
    queryKey: getCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.credentials.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCredentialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCredentialsMutationKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function getPostCredentialsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    InferRequestType<typeof client.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credentials.$post>) {
      return parseResponse(client.credentials.$post(args, options))
    },
  })
}

export function injectPostCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.credentials.$post>,
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
    const mutationDefaults = getPostCredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCredentialsNameQueryKey(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
) {
  return ['credentials', '/credentials/:name', args] as const
}

export function getCredentialsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credentials)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialsNameQueryKey>
  >({
    queryKey: getCredentialsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credentials[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCredentialsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.credentials)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCredentialsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCredentialsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteCredentialsNameMutationKey() {
  return ['credentials', '/credentials/:name', 'DELETE'] as const
}

export function getDeleteCredentialsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.credentials)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCredentialsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.credentials)[':name']['$delete']>) {
      return parseResponse(client.credentials[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteCredentialsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credentials)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.credentials)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteCredentialsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCredentialsNameMutationKey() {
  return ['credentials', '/credentials/:name', 'PATCH'] as const
}

export function getPatchCredentialsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.credentials)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCredentialsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.credentials)[':name']['$patch']>) {
      return parseResponse(client.credentials[':name'].$patch(args, options))
    },
  })
}

export function injectPatchCredentialsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.credentials)[':name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.credentials)[':name']['$patch']>,
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
    const mutationDefaults = getPatchCredentialsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExternalLocationsQueryKey(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
) {
  return ['external-locations', '/external-locations', args] as const
}

export function getExternalLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['external-locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalLocationsQueryKey>
  >({
    queryKey: getExternalLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['external-locations'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExternalLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['external-locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExternalLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostExternalLocationsMutationKey() {
  return ['external-locations', '/external-locations', 'POST'] as const
}

export function getPostExternalLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['external-locations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostExternalLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['external-locations']['$post']>) {
      return parseResponse(client['external-locations'].$post(args, options))
    },
  })
}

export function injectPostExternalLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['external-locations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['external-locations']['$post']>,
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
    const mutationDefaults = getPostExternalLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExternalLocationsNameQueryKey(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
) {
  return ['external-locations', '/external-locations/:name', args] as const
}

export function getExternalLocationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalLocationsNameQueryKey>
  >({
    queryKey: getExternalLocationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['external-locations'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExternalLocationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['external-locations'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExternalLocationsNameQueryKey>
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
      ...getExternalLocationsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteExternalLocationsNameMutationKey() {
  return ['external-locations', '/external-locations/:name', 'DELETE'] as const
}

export function getDeleteExternalLocationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['external-locations'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteExternalLocationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['external-locations'][':name']['$delete']>,
    ) {
      return parseResponse(client['external-locations'][':name'].$delete(args, options))
    },
  })
}

export function injectDeleteExternalLocationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['external-locations'][':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['external-locations'][':name']['$delete']>,
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
    const mutationDefaults = getDeleteExternalLocationsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchExternalLocationsNameMutationKey() {
  return ['external-locations', '/external-locations/:name', 'PATCH'] as const
}

export function getPatchExternalLocationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['external-locations'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExternalLocationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['external-locations'][':name']['$patch']>,
    ) {
      return parseResponse(client['external-locations'][':name'].$patch(args, options))
    },
  })
}

export function injectPatchExternalLocationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['external-locations'][':name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['external-locations'][':name']['$patch']>,
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
    const mutationDefaults = getPatchExternalLocationsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeltaPreviewCommitsQueryKey(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
) {
  return ['delta', '/delta/preview/commits', args] as const
}

export function getDeltaPreviewCommitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delta.preview.commits.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeltaPreviewCommitsQueryKey>
  >({
    queryKey: getDeltaPreviewCommitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delta.preview.commits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeltaPreviewCommits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.delta.preview.commits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeltaPreviewCommitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeltaPreviewCommitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDeltaPreviewCommitsMutationKey() {
  return ['delta', '/delta/preview/commits', 'POST'] as const
}

export function getPostDeltaPreviewCommitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.delta.preview.commits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeltaPreviewCommitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delta.preview.commits.$post>) {
      return parseResponse(client.delta.preview.commits.$post(args, options))
    },
  })
}

export function injectPostDeltaPreviewCommits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.delta.preview.commits.$post>,
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
    const mutationDefaults = getPostDeltaPreviewCommitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
