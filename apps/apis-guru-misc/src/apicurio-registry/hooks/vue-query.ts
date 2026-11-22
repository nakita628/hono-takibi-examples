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

export function getAdminArtifactTypesQueryKey() {
  return ['admin', '/admin/artifactTypes'] as const
}

export function getAdminArtifactTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminArtifactTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.artifactTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminArtifactTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>
            >
          >,
          ReturnType<typeof getAdminArtifactTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminArtifactTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminArtifactTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.artifactTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminConfigPropertiesQueryKey() {
  return ['admin', '/admin/config/properties'] as const
}

export function getAdminConfigPropertiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminConfigPropertiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.config.properties.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConfigProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
            >
          >,
          ReturnType<typeof getAdminConfigPropertiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminConfigPropertiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.config.properties.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminConfigPropertiesPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>
  >,
) {
  return ['admin', '/admin/config/properties/:propertyName', toValue(args)] as const
}

export function getAdminConfigPropertiesPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminConfigPropertiesPropertyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.config.properties[':propertyName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminConfigPropertiesPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>
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
                  ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminConfigPropertiesPropertyNameQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigPropertiesPropertyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminConfigPropertiesPropertyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.config.properties[':propertyName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminConfigPropertiesPropertyNameMutationKey() {
  return ['admin', '/admin/config/properties/:propertyName', 'PUT'] as const
}

export function getPutAdminConfigPropertiesPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminConfigPropertiesPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>,
    ) {
      return parseResponse(client.admin.config.properties[':propertyName'].$put(args, options))
    },
  })
}

export function usePutAdminConfigPropertiesPropertyName<
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
                    ReturnType<(typeof client.admin.config.properties)[':propertyName']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>,
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
  const mutationDefaults = getPutAdminConfigPropertiesPropertyNameMutationOptions<
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

export function getDeleteAdminConfigPropertiesPropertyNameMutationKey() {
  return ['admin', '/admin/config/properties/:propertyName', 'DELETE'] as const
}

export function getDeleteAdminConfigPropertiesPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminConfigPropertiesPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>,
    ) {
      return parseResponse(client.admin.config.properties[':propertyName'].$delete(args, options))
    },
  })
}

export function useDeleteAdminConfigPropertiesPropertyName<
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
                    ReturnType<(typeof client.admin.config.properties)[':propertyName']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>,
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
  const mutationDefaults = getDeleteAdminConfigPropertiesPropertyNameMutationOptions<
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

export function getAdminExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.export.$get>>,
) {
  return ['admin', '/admin/export', toValue(args)] as const
}

export function getAdminExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.export.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
          >,
          ReturnType<typeof getAdminExportQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminImportMutationKey() {
  return ['admin', '/admin/import', 'POST'] as const
}

export function getPostAdminImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.import.$post>) {
      return parseResponse(client.admin.import.$post(args, options))
    },
  })
}

export function usePostAdminImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.import.$post>,
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
  const mutationDefaults = getPostAdminImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminLoggersQueryKey() {
  return ['admin', '/admin/loggers'] as const
}

export function getAdminLoggersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminLoggersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.loggers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminLoggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
          >,
          ReturnType<typeof getAdminLoggersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLoggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminLoggersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.loggers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminLoggersLoggerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>>,
) {
  return ['admin', '/admin/loggers/:logger', toValue(args)] as const
}

export function getAdminLoggersLoggerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLoggersLoggerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.loggers[':logger'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLoggersLogger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminLoggersLoggerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLoggersLoggerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLoggersLoggerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.loggers[':logger'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminLoggersLoggerMutationKey() {
  return ['admin', '/admin/loggers/:logger', 'PUT'] as const
}

export function getPutAdminLoggersLoggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.loggers)[':logger']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminLoggersLoggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.loggers)[':logger']['$put']>) {
      return parseResponse(client.admin.loggers[':logger'].$put(args, options))
    },
  })
}

export function usePutAdminLoggersLogger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.loggers)[':logger']['$put']>,
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
  const mutationDefaults = getPutAdminLoggersLoggerMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminLoggersLoggerMutationKey() {
  return ['admin', '/admin/loggers/:logger', 'DELETE'] as const
}

export function getDeleteAdminLoggersLoggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminLoggersLoggerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']>) {
      return parseResponse(client.admin.loggers[':logger'].$delete(args, options))
    },
  })
}

export function useDeleteAdminLoggersLogger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']>,
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
  const mutationDefaults = getDeleteAdminLoggersLoggerMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRoleMappingsQueryKey() {
  return ['admin', '/admin/roleMappings'] as const
}

export function getAdminRoleMappingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminRoleMappingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.roleMappings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRoleMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>
            >
          >,
          ReturnType<typeof getAdminRoleMappingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRoleMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminRoleMappingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.roleMappings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRoleMappingsMutationKey() {
  return ['admin', '/admin/roleMappings', 'POST'] as const
}

export function getPostAdminRoleMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.roleMappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRoleMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.roleMappings.$post>) {
      return parseResponse(client.admin.roleMappings.$post(args, options))
    },
  })
}

export function usePostAdminRoleMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.admin.roleMappings.$post>,
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
  const mutationDefaults = getPostAdminRoleMappingsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRoleMappingsPrincipalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>
  >,
) {
  return ['admin', '/admin/roleMappings/:principalId', toValue(args)] as const
}

export function getAdminRoleMappingsPrincipalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRoleMappingsPrincipalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.roleMappings[':principalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRoleMappingsPrincipalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRoleMappingsPrincipalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRoleMappingsPrincipalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRoleMappingsPrincipalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.roleMappings[':principalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminRoleMappingsPrincipalIdMutationKey() {
  return ['admin', '/admin/roleMappings/:principalId', 'PUT'] as const
}

export function getPutAdminRoleMappingsPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminRoleMappingsPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']>,
    ) {
      return parseResponse(client.admin.roleMappings[':principalId'].$put(args, options))
    },
  })
}

export function usePutAdminRoleMappingsPrincipalId<
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
                  Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']>,
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
  const mutationDefaults = getPutAdminRoleMappingsPrincipalIdMutationOptions<
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

export function getDeleteAdminRoleMappingsPrincipalIdMutationKey() {
  return ['admin', '/admin/roleMappings/:principalId', 'DELETE'] as const
}

export function getDeleteAdminRoleMappingsPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRoleMappingsPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']>,
    ) {
      return parseResponse(client.admin.roleMappings[':principalId'].$delete(args, options))
    },
  })
}

export function useDeleteAdminRoleMappingsPrincipalId<
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
                  Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']>,
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
  const mutationDefaults = getDeleteAdminRoleMappingsPrincipalIdMutationOptions<
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

export function getAdminRulesQueryKey() {
  return ['admin', '/admin/rules'] as const
}

export function getAdminRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
          >,
          ReturnType<typeof getAdminRulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRulesMutationKey() {
  return ['admin', '/admin/rules', 'POST'] as const
}

export function getPostAdminRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.admin.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.rules.$post>) {
      return parseResponse(client.admin.rules.$post(args, options))
    },
  })
}

export function usePostAdminRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.admin.rules.$post>,
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
  const mutationDefaults = getPostAdminRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAdminRulesMutationKey() {
  return ['admin', '/admin/rules', 'DELETE'] as const
}

export function getDeleteAdminRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRulesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.rules.$delete(undefined, options))
    },
  })
}

export function useDeleteAdminRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$delete>>>
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
  const mutationDefaults = getDeleteAdminRulesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRulesRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.rules)[':rule']['$get']>>,
) {
  return ['admin', '/admin/rules/:rule', toValue(args)] as const
}

export function getAdminRulesRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.rules)[':rule']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRulesRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.rules[':rule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRulesRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.rules)[':rule']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRulesRuleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRulesRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRulesRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.rules[':rule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminRulesRuleMutationKey() {
  return ['admin', '/admin/rules/:rule', 'PUT'] as const
}

export function getPutAdminRulesRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.rules)[':rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminRulesRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.rules)[':rule']['$put']>) {
      return parseResponse(client.admin.rules[':rule'].$put(args, options))
    },
  })
}

export function usePutAdminRulesRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.rules)[':rule']['$put']>,
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
  const mutationDefaults = getPutAdminRulesRuleMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminRulesRuleMutationKey() {
  return ['admin', '/admin/rules/:rule', 'DELETE'] as const
}

export function getDeleteAdminRulesRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.rules)[':rule']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRulesRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.rules)[':rule']['$delete']>) {
      return parseResponse(client.admin.rules[':rule'].$delete(args, options))
    },
  })
}

export function useDeleteAdminRulesRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.rules)[':rule']['$delete']>,
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
  const mutationDefaults = getDeleteAdminRulesRuleMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
) {
  return ['groups', '/groups/:groupId', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>) {
      return parseResponse(client.groups[':groupId'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdArtifactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>>,
) {
  return ['groups', '/groups/:groupId/artifacts', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsGroupIdArtifactsMutationKey() {
  return ['groups', '/groups/:groupId/artifacts', 'POST'] as const
}

export function getPostGroupsGroupIdArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']>,
    ) {
      return parseResponse(client.groups[':groupId'].artifacts.$post(args, options))
    },
  })
}

export function usePostGroupsGroupIdArtifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']>,
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
  const mutationDefaults = getPostGroupsGroupIdArtifactsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsGroupIdArtifactsMutationKey() {
  return ['groups', '/groups/:groupId/artifacts', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']>,
    ) {
      return parseResponse(client.groups[':groupId'].artifacts.$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupIdArtifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsGroupIdArtifactsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdArtifactsArtifactIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
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
                  ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdQueryKey>
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
            ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']
      >,
    ) {
      return parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$put(args, options))
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactId<
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
                  ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>,
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdMutationOptions<
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

export function getDeleteGroupsGroupIdArtifactsArtifactIdMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdArtifactsArtifactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGroupsGroupIdArtifactsArtifactId<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']
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
  const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']>
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].meta.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdMeta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']>
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdMetaQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdMetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].meta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdMetaMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].meta.$put(args, options),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdMeta<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
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

export function getPostGroupsGroupIdArtifactsArtifactIdMetaMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', 'POST'] as const
}

export function getPostGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdArtifactsArtifactIdMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].meta.$post(args, options),
      )
    },
  })
}

export function usePostGroupsGroupIdArtifactsArtifactIdMeta<
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
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
  const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
    >
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/owner', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdOwnerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].owner.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdOwner<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].owner.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdOwnerMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/owner', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].owner.$put(args, options),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdOwner<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdOwnerMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
    >
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdRules<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdRulesQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsGroupIdArtifactsArtifactIdRulesMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', 'POST'] as const
}

export function getPostGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdArtifactsArtifactIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules.$post(args, options),
      )
    },
  })
}

export function usePostGroupsGroupIdArtifactsArtifactIdRules<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
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
  const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
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

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdArtifactsArtifactIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules.$delete(args, options),
      )
    },
  })
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdRules<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
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
  const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
    >
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdRulesRule<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdRulesRuleMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdRulesRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$put(args, options),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdRulesRule<
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
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

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdRulesRule<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
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
  const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
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

export function getPutGroupsGroupIdArtifactsArtifactIdStateMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/state', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].state.$put(args, options),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdState<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdStateMutationOptions<
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

export function getPutGroupsGroupIdArtifactsArtifactIdTestMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/test', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].test.$put(args, options),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdTest<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdTestMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
    >
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions', toValue(args)] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsGroupIdArtifactsArtifactIdVersionsMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions', 'POST'] as const
}

export function getPostGroupsGroupIdArtifactsArtifactIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdArtifactsArtifactIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions.$post(args, options),
      )
    },
  })
}

export function usePostGroupsGroupIdArtifactsArtifactIdVersions<
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
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
  const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdVersionsMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
    >
  >,
) {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version',
    toValue(args),
  ] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdVersionsVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
    >
  >,
) {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/meta',
    toValue(args),
  ] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationKey() {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version/meta', 'PUT'] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
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
  const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
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

export function getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationKey() {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/meta',
    'DELETE',
  ] as const
}

export function getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
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
    getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
    >
  >,
) {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/references',
    toValue(args),
  ] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGroupsGroupIdArtifactsArtifactIdVersionsVersionReferences<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey>
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
              (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateMutationKey() {
  return [
    'groups',
    '/groups/:groupId/artifacts/:artifactId/versions/:version/state',
    'PUT',
  ] as const
}

export function getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].state.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutGroupsGroupIdArtifactsArtifactIdVersionsVersionState<
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
                      (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
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
    getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateMutationOptions<
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

export function getIdsContentHashesContentHashIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>
  >,
) {
  return ['ids', '/ids/contentHashes/:contentHash/', toValue(args)] as const
}

export function getIdsContentHashesContentHashIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsContentHashesContentHashIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.contentHashes[':contentHash'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsContentHashesContentHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>
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
                  ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIdsContentHashesContentHashIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsContentHashesContentHashIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsContentHashesContentHashIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.contentHashes[':contentHash'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsContentHashesContentHashReferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
  >,
) {
  return ['ids', '/ids/contentHashes/:contentHash/references', toValue(args)] as const
}

export function getIdsContentHashesContentHashReferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsContentHashesContentHashReferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.contentHashes[':contentHash'].references.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsContentHashesContentHashReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
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
                    (typeof client.ids.contentHashes)[':contentHash']['references']['$get']
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
                    (typeof client.ids.contentHashes)[':contentHash']['references']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIdsContentHashesContentHashReferencesQueryKey>
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
            ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsContentHashesContentHashReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsContentHashesContentHashReferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.contentHashes[':contentHash'].references.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsContentIdsContentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>
  >,
) {
  return ['ids', '/ids/contentIds/:contentId/', toValue(args)] as const
}

export function getIdsContentIdsContentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsContentIdsContentIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.contentIds[':contentId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsContentIdsContentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdsContentIdsContentIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsContentIdsContentIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsContentIdsContentIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.contentIds[':contentId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsContentIdsContentIdReferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>
  >,
) {
  return ['ids', '/ids/contentIds/:contentId/references', toValue(args)] as const
}

export function getIdsContentIdsContentIdReferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsContentIdsContentIdReferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.contentIds[':contentId'].references.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsContentIdsContentIdReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>
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
                  ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIdsContentIdsContentIdReferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsContentIdsContentIdReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsContentIdsContentIdReferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.contentIds[':contentId'].references.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsGlobalIdsGlobalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>>,
) {
  return ['ids', '/ids/globalIds/:globalId', toValue(args)] as const
}

export function getIdsGlobalIdsGlobalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsGlobalIdsGlobalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.globalIds[':globalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsGlobalIdsGlobalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdsGlobalIdsGlobalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsGlobalIdsGlobalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsGlobalIdsGlobalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.globalIds[':globalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsGlobalIdsGlobalIdReferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>
  >,
) {
  return ['ids', '/ids/globalIds/:globalId/references', toValue(args)] as const
}

export function getIdsGlobalIdsGlobalIdReferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsGlobalIdsGlobalIdReferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.globalIds[':globalId'].references.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdsGlobalIdsGlobalIdReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>
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
                  ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIdsGlobalIdsGlobalIdReferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdsGlobalIdsGlobalIdReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsGlobalIdsGlobalIdReferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.globalIds[':globalId'].references.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchArtifactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.artifacts.$get>>,
) {
  return ['search', '/search/artifacts', toValue(args)] as const
}

export function getSearchArtifactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.artifacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchArtifacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.artifacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>
            >
          >,
          ReturnType<typeof getSearchArtifactsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.artifacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchArtifactsMutationKey() {
  return ['search', '/search/artifacts', 'POST'] as const
}

export function getPostSearchArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.artifacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchArtifactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.artifacts.$post>) {
      return parseResponse(client.search.artifacts.$post(args, options))
    },
  })
}

export function usePostSearchArtifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.artifacts.$post>,
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
  const mutationDefaults = getPostSearchArtifactsMutationOptions<TError, TOnMutateResult>(
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

export function getSystemLimitsQueryKey() {
  return ['system', '/system/limits'] as const
}

export function getSystemLimitsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemLimitsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.limits.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
          >,
          ReturnType<typeof getSystemLimitsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemLimitsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.limits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
