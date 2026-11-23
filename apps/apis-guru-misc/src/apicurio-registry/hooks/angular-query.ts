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

export function getAdminArtifactTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminArtifactTypesQueryKey>
  >({
    queryKey: getAdminArtifactTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.artifactTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminArtifactTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.artifactTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminArtifactTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminArtifactTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAdminConfigPropertiesQueryKey() {
  return ['admin', '/admin/config/properties'] as const
}

export function getAdminConfigPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminConfigPropertiesQueryKey>
  >({
    queryKey: getAdminConfigPropertiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.config.properties.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminConfigProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.config.properties.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminConfigPropertiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminConfigPropertiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAdminConfigPropertiesPropertyNameQueryKey(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
) {
  return ['admin', '/admin/config/properties/:propertyName', args] as const
}

export function getAdminConfigPropertiesPropertyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminConfigPropertiesPropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.config.properties[':propertyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminConfigPropertiesPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.config.properties)[':propertyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminConfigPropertiesPropertyNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminConfigPropertiesPropertyName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminConfigPropertiesPropertyNameMutationOptions<
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

export function injectDeleteAdminConfigPropertiesPropertyName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminConfigPropertiesPropertyNameMutationOptions<
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

export function getAdminExportQueryKey(args: InferRequestType<typeof client.admin.export.$get>) {
  return ['admin', '/admin/export', args] as const
}

export function getAdminExportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.export.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminExportQueryKey>
  >({
    queryKey: getAdminExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.export.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.export.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdminImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.import.$post>,
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
    const mutationDefaults = getPostAdminImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminLoggersQueryKey() {
  return ['admin', '/admin/loggers'] as const
}

export function getAdminLoggersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLoggersQueryKey>
  >({
    queryKey: getAdminLoggersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.loggers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminLoggers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.loggers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLoggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminLoggersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAdminLoggersLoggerQueryKey(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
) {
  return ['admin', '/admin/loggers/:logger', args] as const
}

export function getAdminLoggersLoggerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLoggersLoggerQueryKey>
  >({
    queryKey: getAdminLoggersLoggerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.loggers[':logger'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminLoggersLogger<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.loggers)[':logger']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLoggersLoggerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminLoggersLoggerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAdminLoggersLogger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminLoggersLoggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAdminLoggersLogger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminLoggersLoggerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRoleMappingsQueryKey() {
  return ['admin', '/admin/roleMappings'] as const
}

export function getAdminRoleMappingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRoleMappingsQueryKey>
  >({
    queryKey: getAdminRoleMappingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.roleMappings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRoleMappings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.roleMappings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRoleMappingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRoleMappingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdminRoleMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRoleMappingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRoleMappingsPrincipalIdQueryKey(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
) {
  return ['admin', '/admin/roleMappings/:principalId', args] as const
}

export function getAdminRoleMappingsPrincipalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAdminRoleMappingsPrincipalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.roleMappings[':principalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminRoleMappingsPrincipalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.roleMappings)[':principalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAdminRoleMappingsPrincipalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAdminRoleMappingsPrincipalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminRoleMappingsPrincipalIdMutationOptions<
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

export function injectDeleteAdminRoleMappingsPrincipalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRoleMappingsPrincipalIdMutationOptions<
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

export function getAdminRulesQueryKey() {
  return ['admin', '/admin/rules'] as const
}

export function getAdminRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminRulesQueryKey>
  >({
    queryKey: getAdminRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAdminRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.admin.rules.$post>,
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
    const mutationDefaults = getPostAdminRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAdminRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.rules.$delete>>>>
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
    const mutationDefaults = getDeleteAdminRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminRulesRuleQueryKey(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
) {
  return ['admin', '/admin/rules/:rule', args] as const
}

export function getAdminRulesRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRulesRuleQueryKey>
  >({
    queryKey: getAdminRulesRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.rules[':rule'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminRulesRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminRulesRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRulesRuleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutAdminRulesRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin.rules)[':rule']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.rules)[':rule']['$put']>,
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
    const mutationDefaults = getPutAdminRulesRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAdminRulesRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRulesRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
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
    const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGroupsGroupIdArtifactsQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
) {
  return ['groups', '/groups/:groupId/artifacts', args] as const
}

export function getGroupsGroupIdArtifactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGroupsGroupIdArtifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdArtifactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteGroupsGroupIdArtifacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsGroupIdArtifactsMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactId<
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
                ReturnType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>,
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
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdMutationOptions<
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

export function injectDeleteGroupsGroupIdArtifactsArtifactId<
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
                    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdMetaQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/meta', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdMetaQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdMeta<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdMetaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactIdMeta<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
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

export function injectPostGroupsGroupIdArtifactsArtifactIdMeta<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdMetaMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/owner', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdOwnerQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdOwnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].owner.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdOwner<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdOwnerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactIdOwner<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdOwnerMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdRulesQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdRules<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGroupsGroupIdArtifactsArtifactIdRules<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
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

export function injectDeleteGroupsGroupIdArtifactsArtifactIdRules<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdRulesMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/rules/:rule', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdRulesRule<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdRulesRuleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactIdRulesRule<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
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

export function injectDeleteGroupsGroupIdArtifactsArtifactIdRulesRule<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGroupsGroupIdArtifactsArtifactIdRulesRuleMutationOptions<
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

export function injectPutGroupsGroupIdArtifactsArtifactIdState<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdStateMutationOptions<
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

export function injectPutGroupsGroupIdArtifactsArtifactIdTest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsGroupIdArtifactsArtifactIdTestMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdVersions<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostGroupsGroupIdArtifactsArtifactIdVersions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsGroupIdArtifactsArtifactIdVersionsMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdVersionsVersion<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdVersionsVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
) {
  return ['groups', '/groups/:groupId/artifacts/:artifactId/versions/:version/meta', args] as const
}

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
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

export function injectDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaMutationOptions<
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey(
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

export function getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryOptions<
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
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectGroupsGroupIdArtifactsArtifactIdVersionsVersionReferences<
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
  args: () => InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsGroupIdArtifactsArtifactIdVersionsVersionState<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutGroupsGroupIdArtifactsArtifactIdVersionsVersionStateMutationOptions<
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

export function getIdsContentHashesContentHashIndexQueryKey(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
) {
  return ['ids', '/ids/contentHashes/:contentHash/', args] as const
}

export function getIdsContentHashesContentHashIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsContentHashesContentHashIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.contentHashes[':contentHash'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsContentHashesContentHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getIdsContentHashesContentHashIndexQueryKey>
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
      ...getIdsContentHashesContentHashIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIdsContentHashesContentHashReferencesQueryKey(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
) {
  return ['ids', '/ids/contentHashes/:contentHash/references', args] as const
}

export function getIdsContentHashesContentHashReferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsContentHashesContentHashReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.contentHashes[':contentHash'].references.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsContentHashesContentHashReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ids.contentHashes)[':contentHash']['references']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIdsContentHashesContentHashReferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIdsContentIdsContentIdIndexQueryKey(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
) {
  return ['ids', '/ids/contentIds/:contentId/', args] as const
}

export function getIdsContentIdsContentIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsContentIdsContentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.contentIds[':contentId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsContentIdsContentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIdsContentIdsContentIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIdsContentIdsContentIdReferencesQueryKey(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
) {
  return ['ids', '/ids/contentIds/:contentId/references', args] as const
}

export function getIdsContentIdsContentIdReferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsContentIdsContentIdReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.contentIds[':contentId'].references.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsContentIdsContentIdReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getIdsContentIdsContentIdReferencesQueryKey>
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
      ...getIdsContentIdsContentIdReferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIdsGlobalIdsGlobalIdQueryKey(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
) {
  return ['ids', '/ids/globalIds/:globalId', args] as const
}

export function getIdsGlobalIdsGlobalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsGlobalIdsGlobalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.globalIds[':globalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsGlobalIdsGlobalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIdsGlobalIdsGlobalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getIdsGlobalIdsGlobalIdReferencesQueryKey(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
) {
  return ['ids', '/ids/globalIds/:globalId/references', args] as const
}

export function getIdsGlobalIdsGlobalIdReferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIdsGlobalIdsGlobalIdReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.globalIds[':globalId'].references.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIdsGlobalIdsGlobalIdReferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIdsGlobalIdsGlobalIdReferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchArtifactsQueryKey(
  args: InferRequestType<typeof client.search.artifacts.$get>,
) {
  return ['search', '/search/artifacts', args] as const
}

export function getSearchArtifactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.artifacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchArtifactsQueryKey>
  >({
    queryKey: getSearchArtifactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.artifacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchArtifacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.artifacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchArtifactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchArtifactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSearchArtifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.artifacts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.search.artifacts.$post>,
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
    const mutationDefaults = getPostSearchArtifactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
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

export function getSystemLimitsQueryKey() {
  return ['system', '/system/limits'] as const
}

export function getSystemLimitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemLimitsQueryKey>
  >({
    queryKey: getSystemLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.limits.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.limits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemLimitsQueryOptions<TData, TError>(clientOptions), ...query }
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
