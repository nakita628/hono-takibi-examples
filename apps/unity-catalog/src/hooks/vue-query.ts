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

export function getCatalogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
) {
  return ['catalogs', '/catalogs', toValue(args)] as const
}

export function getCatalogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
          >,
          ReturnType<typeof getCatalogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.catalogs.$post>,
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
  const mutationDefaults = getPostCatalogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs)[':name']['$get']>>,
) {
  return ['catalogs', '/catalogs/:name', toValue(args)] as const
}

export function getCatalogsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getCatalogsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCatalogsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.catalogs)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteCatalogsNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchCatalogsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.catalogs)[':name']['$patch']>,
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
  const mutationDefaults = getPatchCatalogsNameMutationOptions<TError, TOnMutateResult>(
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

export function getSchemasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
) {
  return ['schemas', '/schemas', toValue(args)] as const
}

export function getSchemasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schemas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>
          >,
          ReturnType<typeof getSchemasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSchemas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schemas.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.schemas.$post>,
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
  const mutationDefaults = getPostSchemasMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSchemasFullNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':full_name']['$get']>>,
) {
  return ['schemas', '/schemas/:full_name', toValue(args)] as const
}

export function getSchemasFullNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':full_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasFullNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas[':full_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemasFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schemas)[':full_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchemasFullNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.schemas)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasFullNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasFullNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas[':full_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSchemasFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSchemasFullNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchSchemasFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSchemasFullNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostStagingTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['staging-tables']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['staging-tables']['$post']>,
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
  const mutationDefaults = getPostStagingTablesMutationOptions<TError, TOnMutateResult>(
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

export function getTablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tables.$get>>,
) {
  return ['tables', '/tables', toValue(args)] as const
}

export function getTablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTables<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
          ReturnType<typeof getTablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tables.$post>,
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
  const mutationDefaults = getPostTablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesFullNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tables)[':full_name']['$get']>>,
) {
  return ['tables', '/tables/:full_name', toValue(args)] as const
}

export function getTablesFullNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tables)[':full_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesFullNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tables[':full_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tables)[':full_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesFullNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesFullNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesFullNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tables[':full_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTablesFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTablesFullNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchTablesFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTablesFullNameMutationOptions<TError, TOnMutateResult>(
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

export function getVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
) {
  return ['volumes', '/volumes', toValue(args)] as const
}

export function getVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          ReturnType<typeof getVolumesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.volumes.$post>,
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
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':name']['$get']>>,
) {
  return ['volumes', '/volumes/:name', toValue(args)] as const
}

export function getVolumesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getVolumesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteVolumesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteVolumesNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchVolumesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':name']['$patch']>,
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
  const mutationDefaults = getPatchVolumesNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostTemporaryModelVersionCredentials<
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
                Awaited<ReturnType<(typeof client)['temporary-model-version-credentials']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['temporary-model-version-credentials']['$post']>,
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
  const mutationDefaults = getPostTemporaryModelVersionCredentialsMutationOptions<
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

export function usePostTemporaryTableCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemporaryTableCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function usePostTemporaryVolumeCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemporaryVolumeCredentialsMutationOptions<
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

export function getFunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
) {
  return ['functions', '/functions', toValue(args)] as const
}

export function getFunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
          >,
          ReturnType<typeof getFunctionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.functions.$post>,
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
  const mutationDefaults = getPostFunctionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFunctionsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':name']['$get']>>,
) {
  return ['functions', '/functions/:name', toValue(args)] as const
}

export function getFunctionsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getFunctionsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFunctionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteFunctionsNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFunctionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':name']['$patch']>,
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
  const mutationDefaults = getPatchFunctionsNameMutationOptions<TError, TOnMutateResult>(
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

export function getModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
) {
  return ['models', '/models', toValue(args)] as const
}

export function getModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          ReturnType<typeof getModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.models.$post>,
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
  const mutationDefaults = getPostModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getModelsFullNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':full_name']['$get']>>,
) {
  return ['models', '/models/:full_name', toValue(args)] as const
}

export function getModelsFullNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':full_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsFullNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':full_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':full_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModelsFullNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':full_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsFullNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':full_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteModelsFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteModelsFullNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchModelsFullName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchModelsFullNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostModelsVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.models.versions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.models.versions.$post>,
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
  const mutationDefaults = getPostModelsVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getModelsFullNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>
  >,
) {
  return ['models', '/models/:full_name/versions', toValue(args)] as const
}

export function getModelsFullNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsFullNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':full_name'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsFullNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModelsFullNameVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.models)[':full_name']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsFullNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':full_name'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsFullNameVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
  >,
) {
  return ['models', '/models/:full_name/versions/:version', toValue(args)] as const
}

export function getModelsFullNameVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsFullNameVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':full_name'].versions[':version'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsFullNameVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getModelsFullNameVersionsVersionQueryKey>
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
          Awaited<ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsFullNameVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsFullNameVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':full_name'].versions[':version'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteModelsFullNameVersionsVersion<
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
                    (typeof client.models)[':full_name']['versions'][':version']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$delete']>,
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
  const mutationDefaults = getDeleteModelsFullNameVersionsVersionMutationOptions<
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

export function usePatchModelsFullNameVersionsVersion<
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
                  ReturnType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':full_name']['versions'][':version']['$patch']>,
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
  const mutationDefaults = getPatchModelsFullNameVersionsVersionMutationOptions<
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

export function usePatchModelsFullNameVersionsVersionFinalize<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchModelsFullNameVersionsVersionFinalizeMutationOptions<
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

export function usePostTemporaryPathCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemporaryPathCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getPermissionsSecurableTypeFullNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
  >,
) {
  return ['permissions', '/permissions/:securable_type/:full_name', toValue(args)] as const
}

export function getPermissionsSecurableTypeFullNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionsSecurableTypeFullNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.permissions[':securable_type'][':full_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePermissionsSecurableTypeFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPermissionsSecurableTypeFullNameQueryKey>
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
          Awaited<ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsSecurableTypeFullNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionsSecurableTypeFullNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.permissions[':securable_type'][':full_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPermissionsSecurableTypeFullName<
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
                  ReturnType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.permissions)[':securable_type'][':full_name']['$patch']>,
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
  const mutationDefaults = getPatchPermissionsSecurableTypeFullNameMutationOptions<
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

export function getMetastoreSummaryQueryKey() {
  return ['metastore_summary', '/metastore_summary'] as const
}

export function getMetastoreSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetastoreSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metastore_summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetastoreSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>
            >
          >,
          ReturnType<typeof getMetastoreSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metastore_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetastoreSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetastoreSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metastore_summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
) {
  return ['credentials', '/credentials', toValue(args)] as const
}

export function getCredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credentials.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
          >,
          ReturnType<typeof getCredentialsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.credentials.$post>,
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
  const mutationDefaults = getPostCredentialsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCredentialsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':name']['$get']>>,
) {
  return ['credentials', '/credentials/:name', toValue(args)] as const
}

export function getCredentialsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCredentialsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credentials[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCredentialsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCredentialsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCredentialsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credentials[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCredentialsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCredentialsNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchCredentialsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCredentialsNameMutationOptions<TError, TOnMutateResult>(
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

export function getExternalLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations']['$get']>>,
) {
  return ['external-locations', '/external-locations', toValue(args)] as const
}

export function getExternalLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExternalLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['external-locations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExternalLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['external-locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['external-locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExternalLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['external-locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExternalLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['external-locations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostExternalLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExternalLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getExternalLocationsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations'][':name']['$get']>>,
) {
  return ['external-locations', '/external-locations/:name', toValue(args)] as const
}

export function getExternalLocationsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExternalLocationsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['external-locations'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExternalLocationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['external-locations'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExternalLocationsNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['external-locations'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExternalLocationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExternalLocationsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['external-locations'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteExternalLocationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteExternalLocationsNameMutationOptions<TError, TOnMutateResult>(
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

export function usePatchExternalLocationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchExternalLocationsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeltaPreviewCommitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delta.preview.commits.$get>>,
) {
  return ['delta', '/delta/preview/commits', toValue(args)] as const
}

export function getDeltaPreviewCommitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delta.preview.commits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeltaPreviewCommitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delta.preview.commits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeltaPreviewCommits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delta.preview.commits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
            >
          >,
          ReturnType<typeof getDeltaPreviewCommitsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeltaPreviewCommitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeltaPreviewCommitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delta.preview.commits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeltaPreviewCommits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.delta.preview.commits.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.delta.preview.commits.$post>,
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
  const mutationDefaults = getPostDeltaPreviewCommitsMutationOptions<TError, TOnMutateResult>(
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
