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

export function getActivityKey() {
  return ['activity'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getExtensionsKey() {
  return ['extensions'] as const
}

export function getFieldsKey() {
  return ['fields'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getFlowsKey() {
  return ['flows'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getOperationsKey() {
  return ['operations'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getPresetsKey() {
  return ['presets'] as const
}

export function getRelationsKey() {
  return ['relations'] as const
}

export function getRevisionsKey() {
  return ['revisions'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getServerKey() {
  return ['server'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUtilsKey() {
  return ['utils'] as const
}

export function getVersionsKey() {
  return ['versions'] as const
}

export function getActivityQueryKey(args: InferRequestType<typeof client.activity.$get>) {
  return ['activity', '/activity', args] as const
}

export function getActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivityQueryKey>
  >({
    queryKey: getActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.activity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getActivityIdQueryKey(
  args: InferRequestType<(typeof client.activity)[':id']['$get']>,
) {
  return ['activity', '/activity/:id', args] as const
}

export function getActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.activity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.activity)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.activity)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActivityIdQueryKey>
  >({
    queryKey: getActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActivityId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.activity)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.activity)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.activity)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActivityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActivityIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAssetsIdQueryKey(args: InferRequestType<(typeof client.assets)[':id']['$get']>) {
  return ['assets', '/assets/:id', args] as const
}

export function getAssetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.assets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdQueryKey>
  >({
    queryKey: getAssetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAuthLoginMutationKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function getPostAuthLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.login.$post>) {
      return parseResponse(client.auth.login.$post(args, options))
    },
  })
}

export function injectPostAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.login.$post>,
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
    const mutationDefaults = getPostAuthLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthRefreshMutationKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function getPostAuthRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.refresh.$post>) {
      return parseResponse(client.auth.refresh.$post(args, options))
    },
  })
}

export function injectPostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.refresh.$post>,
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
    const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.logout.$post>) {
      return parseResponse(client.auth.logout.$post(args, options))
    },
  })
}

export function injectPostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.logout.$post>,
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

export function getPostAuthPasswordRequestMutationKey() {
  return ['auth', '/auth/password/request', 'POST'] as const
}

export function getPostAuthPasswordRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.password.request.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.auth.password.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPasswordRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.password.request.$post>) {
      return parseResponse(client.auth.password.request.$post(args, options))
    },
  })
}

export function injectPostAuthPasswordRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.password.request.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.password.request.$post>,
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
    const mutationDefaults = getPostAuthPasswordRequestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthPasswordResetMutationKey() {
  return ['auth', '/auth/password/reset', 'POST'] as const
}

export function getPostAuthPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.password.reset.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.password.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.password.reset.$post>) {
      return parseResponse(client.auth.password.reset.$post(args, options))
    },
  })
}

export function injectPostAuthPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.password.reset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.password.reset.$post>,
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
    const mutationDefaults = getPostAuthPasswordResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAuthOauthQueryKey() {
  return ['auth', '/auth/oauth'] as const
}

export function getAuthOauthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthOauthQueryKey>
  >({
    queryKey: getAuthOauthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.oauth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthOauth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthOauthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAuthOauthProviderQueryKey(
  args: InferRequestType<(typeof client.auth.oauth)[':provider']['$get']>,
) {
  return ['auth', '/auth/oauth/:provider', args] as const
}

export function getAuthOauthProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.oauth)[':provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth.oauth)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth.oauth)[':provider']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthOauthProviderQueryKey>
  >({
    queryKey: getAuthOauthProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.oauth[':provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAuthOauthProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.auth.oauth)[':provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth.oauth)[':provider']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth.oauth)[':provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthOauthProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthOauthProviderQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getItemsCollectionQueryKey(
  args: InferRequestType<(typeof client.items)[':collection']['$get']>,
) {
  return ['items', '/items/:collection', args] as const
}

export function getItemsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsCollectionQueryKey>
  >({
    queryKey: getItemsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':collection'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectItemsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':collection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostItemsCollectionMutationKey() {
  return ['items', '/items/:collection', 'POST'] as const
}

export function getPostItemsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.items)[':collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.items)[':collection']['$post']>) {
      return parseResponse(client.items[':collection'].$post(args, options))
    },
  })
}

export function injectPostItemsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':collection']['$post']>,
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
    const mutationDefaults = getPostItemsCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteItemsCollectionMutationKey() {
  return ['items', '/items/:collection', 'DELETE'] as const
}

export function getDeleteItemsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.items)[':collection']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.items)[':collection']['$delete']>) {
      return parseResponse(client.items[':collection'].$delete(args, options))
    },
  })
}

export function injectDeleteItemsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.items)[':collection']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':collection']['$delete']>,
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
    const mutationDefaults = getDeleteItemsCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchItemsCollectionMutationKey() {
  return ['items', '/items/:collection', 'PATCH'] as const
}

export function getPatchItemsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.items)[':collection']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchItemsCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.items)[':collection']['$patch']>) {
      return parseResponse(client.items[':collection'].$patch(args, options))
    },
  })
}

export function injectPatchItemsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.items)[':collection']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':collection']['$patch']>,
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
    const mutationDefaults = getPatchItemsCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getItemsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.items)[':collection'][':id']['$get']>,
) {
  return ['items', '/items/:collection/:id', args] as const
}

export function getItemsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsCollectionIdQueryKey>
  >({
    queryKey: getItemsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':collection'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectItemsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':collection'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemsCollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsCollectionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteItemsCollectionIdMutationKey() {
  return ['items', '/items/:collection/:id', 'DELETE'] as const
}

export function getDeleteItemsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.items)[':collection'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.items)[':collection'][':id']['$delete']>,
    ) {
      return parseResponse(client.items[':collection'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteItemsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':collection'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteItemsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchItemsCollectionIdMutationKey() {
  return ['items', '/items/:collection/:id', 'PATCH'] as const
}

export function getPatchItemsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.items)[':collection'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchItemsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.items)[':collection'][':id']['$patch']>,
    ) {
      return parseResponse(client.items[':collection'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchItemsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.items)[':collection'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.items)[':collection'][':id']['$patch']>,
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
    const mutationDefaults = getPatchItemsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPresetsQueryKey(args: InferRequestType<typeof client.presets.$get>) {
  return ['presets', '/presets', args] as const
}

export function getPresetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.presets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPresetsQueryKey>
  >({
    queryKey: getPresetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.presets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPresetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPresetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPresetsMutationKey() {
  return ['presets', '/presets', 'POST'] as const
}

export function getPostPresetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$post>>>>>,
    TError,
    InferRequestType<typeof client.presets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPresetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.presets.$post>) {
      return parseResponse(client.presets.$post(args, options))
    },
  })
}

export function injectPostPresets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$post>>>>>,
        TError,
        InferRequestType<typeof client.presets.$post>,
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
    const mutationDefaults = getPostPresetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePresetsMutationKey() {
  return ['presets', '/presets', 'DELETE'] as const
}

export function getDeletePresetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeletePresetsMutationKey(),
    async mutationFn() {
      return parseResponse(client.presets.$delete(undefined, options))
    },
  })
}

export function injectDeletePresets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$delete>>>>
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
    const mutationDefaults = getDeletePresetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPresetsMutationKey() {
  return ['presets', '/presets', 'PATCH'] as const
}

export function getPatchPresetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$patch>>>>>,
    TError,
    InferRequestType<typeof client.presets.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPresetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.presets.$patch>) {
      return parseResponse(client.presets.$patch(args, options))
    },
  })
}

export function injectPatchPresets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.presets.$patch>,
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
    const mutationDefaults = getPatchPresetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPresetsIdQueryKey(
  args: InferRequestType<(typeof client.presets)[':id']['$get']>,
) {
  return ['presets', '/presets/:id', args] as const
}

export function getPresetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.presets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPresetsIdQueryKey>
  >({
    queryKey: getPresetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.presets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPresetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.presets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPresetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPresetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePresetsIdMutationKey() {
  return ['presets', '/presets/:id', 'DELETE'] as const
}

export function getDeletePresetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.presets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePresetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.presets)[':id']['$delete']>) {
      return parseResponse(client.presets[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePresetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.presets)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePresetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPresetsIdMutationKey() {
  return ['presets', '/presets/:id', 'PATCH'] as const
}

export function getPatchPresetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.presets)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPresetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.presets)[':id']['$patch']>) {
      return parseResponse(client.presets[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPresetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.presets)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.presets)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPresetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function injectPostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collections.$post>,
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
    const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.collections)[':id']['$get']>,
) {
  return ['collections', '/collections/:id', args] as const
}

export function getCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsIdQueryKey>
  >({
    queryKey: getCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteCollectionsIdMutationKey() {
  return ['collections', '/collections/:id', 'DELETE'] as const
}

export function getDeleteCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.collections)[':id']['$delete']>) {
      return parseResponse(client.collections[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCollectionsIdMutationKey() {
  return ['collections', '/collections/:id', 'PATCH'] as const
}

export function getPatchCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.collections)[':id']['$patch']>) {
      return parseResponse(client.collections[':id'].$patch(args, options))
    },
  })
}

export function injectPatchCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.collections)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':id']['$patch']>,
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
    const mutationDefaults = getPatchCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCommentsQueryKey(args: InferRequestType<typeof client.comments.$get>) {
  return ['comments', '/comments', args] as const
}

export function getCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommentsQueryKey>
  >({
    queryKey: getCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCommentsMutationKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function getPostCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    InferRequestType<typeof client.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comments.$post>) {
      return parseResponse(client.comments.$post(args, options))
    },
  })
}

export function injectPostComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comments.$post>,
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
    const mutationDefaults = getPostCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCommentsMutationKey() {
  return ['comments', '/comments', 'DELETE'] as const
}

export function getDeleteCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsMutationKey(),
    async mutationFn() {
      return parseResponse(client.comments.$delete(undefined, options))
    },
  })
}

export function injectDeleteComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$delete>>>>
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
    const mutationDefaults = getDeleteCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCommentsMutationKey() {
  return ['comments', '/comments', 'PATCH'] as const
}

export function getPatchCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$patch>>>>>,
    TError,
    InferRequestType<typeof client.comments.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comments.$patch>) {
      return parseResponse(client.comments.$patch(args, options))
    },
  })
}

export function injectPatchComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.comments.$patch>,
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
    const mutationDefaults = getPatchCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCommentsIdQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
) {
  return ['comments', '/comments/:id', args] as const
}

export function getCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.comments)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdQueryKey>
  >({
    queryKey: getCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteCommentsIdMutationKey() {
  return ['comments', '/comments/:id', 'DELETE'] as const
}

export function getDeleteCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['$delete']>) {
      return parseResponse(client.comments[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchCommentsIdMutationKey() {
  return ['comments', '/comments/:id', 'PATCH'] as const
}

export function getPatchCommentsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['$patch']>) {
      return parseResponse(client.comments[':id'].$patch(args, options))
    },
  })
}

export function injectPatchCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':id']['$patch']>,
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
    const mutationDefaults = getPatchCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExtensionsQueryKey() {
  return ['extensions', '/extensions'] as const
}

export function getExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExtensionsQueryKey>
  >({
    queryKey: getExtensionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.extensions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExtensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPatchExtensionsNameMutationKey() {
  return ['extensions', '/extensions/:name', 'PATCH'] as const
}

export function getPatchExtensionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.extensions)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtensionsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.extensions)[':name']['$patch']>) {
      return parseResponse(client.extensions[':name'].$patch(args, options))
    },
  })
}

export function injectPatchExtensionsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.extensions)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.extensions)[':name']['$patch']>,
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
    const mutationDefaults = getPatchExtensionsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchExtensionsBundleNameMutationKey() {
  return ['extensions', '/extensions/:bundle/:name', 'PATCH'] as const
}

export function getPatchExtensionsBundleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extensions)[':bundle'][':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.extensions)[':bundle'][':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExtensionsBundleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.extensions)[':bundle'][':name']['$patch']>,
    ) {
      return parseResponse(client.extensions[':bundle'][':name'].$patch(args, options))
    },
  })
}

export function injectPatchExtensionsBundleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.extensions)[':bundle'][':name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.extensions)[':bundle'][':name']['$patch']>,
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
    const mutationDefaults = getPatchExtensionsBundleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFieldsQueryKey() {
  return ['fields', '/fields'] as const
}

export function getFieldsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fields.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fields.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFieldsQueryKey>
  >({
    queryKey: getFieldsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.fields.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFields<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fields.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fields.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFieldsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getFieldsCollectionQueryKey(
  args: InferRequestType<(typeof client.fields)[':collection']['$get']>,
) {
  return ['fields', '/fields/:collection', args] as const
}

export function getFieldsCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fields)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fields)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fields)[':collection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFieldsCollectionQueryKey>
  >({
    queryKey: getFieldsCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fields[':collection'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFieldsCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.fields)[':collection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fields)[':collection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.fields)[':collection']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFieldsCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFieldsCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFieldsCollectionMutationKey() {
  return ['fields', '/fields/:collection', 'POST'] as const
}

export function getPostFieldsCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.fields)[':collection']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.fields)[':collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFieldsCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.fields)[':collection']['$post']>) {
      return parseResponse(client.fields[':collection'].$post(args, options))
    },
  })
}

export function injectPostFieldsCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fields)[':collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fields)[':collection']['$post']>,
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
    const mutationDefaults = getPostFieldsCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFieldsCollectionIdQueryKey(
  args: InferRequestType<(typeof client.fields)[':collection'][':id']['$get']>,
) {
  return ['fields', '/fields/:collection/:id', args] as const
}

export function getFieldsCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fields)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFieldsCollectionIdQueryKey>
  >({
    queryKey: getFieldsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fields[':collection'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFieldsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.fields)[':collection'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFieldsCollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFieldsCollectionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFieldsCollectionIdMutationKey() {
  return ['fields', '/fields/:collection/:id', 'DELETE'] as const
}

export function getDeleteFieldsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fields)[':collection'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFieldsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fields)[':collection'][':id']['$delete']>,
    ) {
      return parseResponse(client.fields[':collection'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFieldsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fields)[':collection'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteFieldsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFieldsCollectionIdMutationKey() {
  return ['fields', '/fields/:collection/:id', 'PATCH'] as const
}

export function getPatchFieldsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fields)[':collection'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFieldsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fields)[':collection'][':id']['$patch']>,
    ) {
      return parseResponse(client.fields[':collection'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchFieldsCollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.fields)[':collection'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fields)[':collection'][':id']['$patch']>,
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
    const mutationDefaults = getPatchFieldsCollectionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function injectPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
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
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFilesMutationKey() {
  return ['files', '/files', 'DELETE'] as const
}

export function getDeleteFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesMutationKey(),
    async mutationFn() {
      return parseResponse(client.files.$delete(undefined, options))
    },
  })
}

export function injectDeleteFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$delete>>>>>,
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
    const mutationDefaults = getDeleteFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFilesMutationKey() {
  return ['files', '/files', 'PATCH'] as const
}

export function getPatchFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$patch>>>>>,
    TError,
    InferRequestType<typeof client.files.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$patch>) {
      return parseResponse(client.files.$patch(args, options))
    },
  })
}

export function injectPatchFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$patch>>>>>,
        TError,
        InferRequestType<typeof client.files.$patch>,
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
    const mutationDefaults = getPatchFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFilesIdQueryKey(args: InferRequestType<(typeof client.files)[':id']['$get']>) {
  return ['files', '/files/:id', args] as const
}

export function getFilesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.files)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdQueryKey>
  >({
    queryKey: getFilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFilesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFilesIdMutationKey() {
  return ['files', '/files/:id', 'DELETE'] as const
}

export function getDeleteFilesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.files)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':id']['$delete']>) {
      return parseResponse(client.files[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFilesIdMutationKey() {
  return ['files', '/files/:id', 'PATCH'] as const
}

export function getPatchFilesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.files)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':id']['$patch']>) {
      return parseResponse(client.files[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':id']['$patch']>,
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
    const mutationDefaults = getPatchFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFlowsQueryKey(args: InferRequestType<typeof client.flows.$get>) {
  return ['flows', '/flows', args] as const
}

export function getFlowsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFlowsQueryKey>
  >({
    queryKey: getFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFlows<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFlowsMutationKey() {
  return ['flows', '/flows', 'POST'] as const
}

export function getPostFlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$post>>>>>,
    TError,
    InferRequestType<typeof client.flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.flows.$post>) {
      return parseResponse(client.flows.$post(args, options))
    },
  })
}

export function injectPostFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$post>>>>>,
        TError,
        InferRequestType<typeof client.flows.$post>,
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
    const mutationDefaults = getPostFlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFlowsMutationKey() {
  return ['flows', '/flows', 'DELETE'] as const
}

export function getDeleteFlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteFlowsMutationKey(),
    async mutationFn() {
      return parseResponse(client.flows.$delete(undefined, options))
    },
  })
}

export function injectDeleteFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$delete>>>>>,
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
    const mutationDefaults = getDeleteFlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFlowsMutationKey() {
  return ['flows', '/flows', 'PATCH'] as const
}

export function getPatchFlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$patch>>>>>,
    TError,
    InferRequestType<typeof client.flows.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.flows.$patch>) {
      return parseResponse(client.flows.$patch(args, options))
    },
  })
}

export function injectPatchFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flows.$patch>>>>>,
        TError,
        InferRequestType<typeof client.flows.$patch>,
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
    const mutationDefaults = getPatchFlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFlowsIdQueryKey(args: InferRequestType<(typeof client.flows)[':id']['$get']>) {
  return ['flows', '/flows/:id', args] as const
}

export function getFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.flows)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFlowsIdQueryKey>
  >({
    queryKey: getFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.flows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFlowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFlowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFlowsIdMutationKey() {
  return ['flows', '/flows/:id', 'DELETE'] as const
}

export function getDeleteFlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.flows)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.flows)[':id']['$delete']>) {
      return parseResponse(client.flows[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.flows)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFlowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFlowsIdMutationKey() {
  return ['flows', '/flows/:id', 'PATCH'] as const
}

export function getPatchFlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.flows)[':id']['$patch']>) {
      return parseResponse(client.flows[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.flows)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.flows)[':id']['$patch']>,
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
    const mutationDefaults = getPatchFlowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersQueryKey(args: InferRequestType<typeof client.folders.$get>) {
  return ['folders', '/folders', args] as const
}

export function getFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >({
    queryKey: getFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFoldersMutationKey() {
  return ['folders', '/folders', 'POST'] as const
}

export function getPostFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folders.$post>) {
      return parseResponse(client.folders.$post(args, options))
    },
  })
}

export function injectPostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
        TError,
        InferRequestType<typeof client.folders.$post>,
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
    const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFoldersMutationKey() {
  return ['folders', '/folders', 'DELETE'] as const
}

export function getDeleteFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersMutationKey(),
    async mutationFn() {
      return parseResponse(client.folders.$delete(undefined, options))
    },
  })
}

export function injectDeleteFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$delete>>>>
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
    const mutationDefaults = getDeleteFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFoldersMutationKey() {
  return ['folders', '/folders', 'PATCH'] as const
}

export function getPatchFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$patch>>>>>,
    TError,
    InferRequestType<typeof client.folders.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folders.$patch>) {
      return parseResponse(client.folders.$patch(args, options))
    },
  })
}

export function injectPatchFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.folders.$patch>,
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
    const mutationDefaults = getPatchFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersIdQueryKey(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
) {
  return ['folders', '/folders/:id', args] as const
}

export function getFoldersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.folders)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersIdQueryKey>
  >({
    queryKey: getFoldersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteFoldersIdMutationKey() {
  return ['folders', '/folders/:id', 'DELETE'] as const
}

export function getDeleteFoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':id']['$delete']>) {
      return parseResponse(client.folders[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchFoldersIdMutationKey() {
  return ['folders', '/folders/:id', 'PATCH'] as const
}

export function getPatchFoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':id']['$patch']>) {
      return parseResponse(client.folders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchFoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':id']['$patch']>,
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
    const mutationDefaults = getPatchFoldersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOperationsQueryKey(args: InferRequestType<typeof client.operations.$get>) {
  return ['operations', '/operations', args] as const
}

export function getOperationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.operations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOperationsQueryKey>
  >({
    queryKey: getOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOperations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.operations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOperationsMutationKey() {
  return ['operations', '/operations', 'POST'] as const
}

export function getPostOperationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$post>>>>>,
    TError,
    InferRequestType<typeof client.operations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operations.$post>) {
      return parseResponse(client.operations.$post(args, options))
    },
  })
}

export function injectPostOperations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.operations.$post>,
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
    const mutationDefaults = getPostOperationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOperationsMutationKey() {
  return ['operations', '/operations', 'DELETE'] as const
}

export function getDeleteOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteOperationsMutationKey(),
    async mutationFn() {
      return parseResponse(client.operations.$delete(undefined, options))
    },
  })
}

export function injectDeleteOperations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$delete>>>>
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
    const mutationDefaults = getDeleteOperationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOperationsMutationKey() {
  return ['operations', '/operations', 'PATCH'] as const
}

export function getPatchOperationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$patch>>>>>,
    TError,
    InferRequestType<typeof client.operations.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchOperationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.operations.$patch>) {
      return parseResponse(client.operations.$patch(args, options))
    },
  })
}

export function injectPatchOperations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.operations.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.operations.$patch>,
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
    const mutationDefaults = getPatchOperationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOperationsIdQueryKey(
  args: InferRequestType<(typeof client.operations)[':id']['$get']>,
) {
  return ['operations', '/operations/:id', args] as const
}

export function getOperationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.operations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsIdQueryKey>
  >({
    queryKey: getOperationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOperationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.operations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOperationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteOperationsIdMutationKey() {
  return ['operations', '/operations/:id', 'DELETE'] as const
}

export function getDeleteOperationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.operations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOperationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.operations)[':id']['$delete']>) {
      return parseResponse(client.operations[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteOperationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.operations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteOperationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOperationsIdMutationKey() {
  return ['operations', '/operations/:id', 'PATCH'] as const
}

export function getPatchOperationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.operations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOperationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.operations)[':id']['$patch']>) {
      return parseResponse(client.operations[':id'].$patch(args, options))
    },
  })
}

export function injectPatchOperationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.operations)[':id']['$patch']>,
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
    const mutationDefaults = getPatchOperationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionsQueryKey(args: InferRequestType<typeof client.permissions.$get>) {
  return ['permissions', '/permissions', args] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.permissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPermissionsMutationKey() {
  return ['permissions', '/permissions', 'POST'] as const
}

export function getPostPermissionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$post>>>>>,
    TError,
    InferRequestType<typeof client.permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.permissions.$post>) {
      return parseResponse(client.permissions.$post(args, options))
    },
  })
}

export function injectPostPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.permissions.$post>,
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
    const mutationDefaults = getPostPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePermissionsMutationKey() {
  return ['permissions', '/permissions', 'DELETE'] as const
}

export function getDeletePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.permissions.$delete(undefined, options))
    },
  })
}

export function injectDeletePermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$delete>>>>
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
    const mutationDefaults = getDeletePermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPermissionsMutationKey() {
  return ['permissions', '/permissions', 'PATCH'] as const
}

export function getPatchPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.permissions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.permissions.$patch>) {
      return parseResponse(client.permissions.$patch(args, options))
    },
  })
}

export function injectPatchPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.permissions.$patch>,
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
    const mutationDefaults = getPatchPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionsMeQueryKey() {
  return ['permissions', '/permissions/me'] as const
}

export function getPermissionsMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsMeQueryKey>
  >({
    queryKey: getPermissionsMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissionsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPermissionsIdQueryKey(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
) {
  return ['permissions', '/permissions/:id', args] as const
}

export function getPermissionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsIdQueryKey>
  >({
    queryKey: getPermissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePermissionsIdMutationKey() {
  return ['permissions', '/permissions/:id', 'DELETE'] as const
}

export function getDeletePermissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.permissions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.permissions)[':id']['$delete']>) {
      return parseResponse(client.permissions[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.permissions)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePermissionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPermissionsIdMutationKey() {
  return ['permissions', '/permissions/:id', 'PATCH'] as const
}

export function getPatchPermissionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.permissions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPermissionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.permissions)[':id']['$patch']>) {
      return parseResponse(client.permissions[':id'].$patch(args, options))
    },
  })
}

export function injectPatchPermissionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.permissions)[':id']['$patch']>,
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
    const mutationDefaults = getPatchPermissionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRelationsQueryKey() {
  return ['relations', '/relations'] as const
}

export function getRelationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRelationsQueryKey>
  >({
    queryKey: getRelationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.relations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRelations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRelationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostRelationsMutationKey() {
  return ['relations', '/relations', 'POST'] as const
}

export function getPostRelationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$post>>>>>,
    TError,
    InferRequestType<typeof client.relations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRelationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.relations.$post>) {
      return parseResponse(client.relations.$post(args, options))
    },
  })
}

export function injectPostRelations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.relations.$post>,
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
    const mutationDefaults = getPostRelationsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRelationsIdQueryKey(
  args: InferRequestType<(typeof client.relations)[':id']['$get']>,
) {
  return ['relations', '/relations/:id', args] as const
}

export function getRelationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.relations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelationsIdQueryKey>
  >({
    queryKey: getRelationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRelationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.relations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRelationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteRelationsIdMutationKey() {
  return ['relations', '/relations/:id', 'DELETE'] as const
}

export function getDeleteRelationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.relations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRelationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.relations)[':id']['$delete']>) {
      return parseResponse(client.relations[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRelationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.relations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteRelationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRelationsIdMutationKey() {
  return ['relations', '/relations/:id', 'PATCH'] as const
}

export function getPatchRelationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.relations)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRelationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.relations)[':id']['$patch']>) {
      return parseResponse(client.relations[':id'].$patch(args, options))
    },
  })
}

export function injectPatchRelationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.relations)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.relations)[':id']['$patch']>,
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
    const mutationDefaults = getPatchRelationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRevisionsQueryKey(args: InferRequestType<typeof client.revisions.$get>) {
  return ['revisions', '/revisions', args] as const
}

export function getRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revisions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.revisions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revisions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRevisionsQueryKey>
  >({
    queryKey: getRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.revisions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRevisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.revisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revisions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRevisionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRevisionsIdQueryKey(
  args: InferRequestType<(typeof client.revisions)[':id']['$get']>,
) {
  return ['revisions', '/revisions/:id', args] as const
}

export function getRevisionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.revisions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRevisionsIdQueryKey>
  >({
    queryKey: getRevisionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.revisions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRevisionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.revisions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.revisions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRevisionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRevisionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  return ['roles', '/roles', args] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roles.$get>,
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
    return { ...getRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRolesMutationKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function getPostRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$post>) {
      return parseResponse(client.roles.$post(args, options))
    },
  })
}

export function injectPostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
        TError,
        InferRequestType<typeof client.roles.$post>,
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
    const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRolesMutationKey() {
  return ['roles', '/roles', 'DELETE'] as const
}

export function getDeleteRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesMutationKey(),
    async mutationFn() {
      return parseResponse(client.roles.$delete(undefined, options))
    },
  })
}

export function injectDeleteRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$delete>>>>>,
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
    const mutationDefaults = getDeleteRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRolesMutationKey() {
  return ['roles', '/roles', 'PATCH'] as const
}

export function getPatchRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$patch>>>>>,
    TError,
    InferRequestType<typeof client.roles.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$patch>) {
      return parseResponse(client.roles.$patch(args, options))
    },
  })
}

export function injectPatchRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$patch>>>>>,
        TError,
        InferRequestType<typeof client.roles.$patch>,
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
    const mutationDefaults = getPatchRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRolesIdQueryKey(args: InferRequestType<(typeof client.roles)[':id']['$get']>) {
  return ['roles', '/roles/:id', args] as const
}

export function getRolesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.roles)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRolesIdQueryKey>
  >({
    queryKey: getRolesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRolesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteRolesIdMutationKey() {
  return ['roles', '/roles/:id', 'DELETE'] as const
}

export function getDeleteRolesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.roles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':id']['$delete']>) {
      return parseResponse(client.roles[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteRolesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRolesIdMutationKey() {
  return ['roles', '/roles/:id', 'PATCH'] as const
}

export function getPatchRolesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.roles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRolesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':id']['$patch']>) {
      return parseResponse(client.roles[':id'].$patch(args, options))
    },
  })
}

export function injectPatchRolesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':id']['$patch']>,
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
    const mutationDefaults = getPatchRolesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemaSnapshotQueryKey(
  args: InferRequestType<typeof client.schema.snapshot.$get>,
) {
  return ['schema', '/schema/snapshot', args] as const
}

export function getSchemaSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schema.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaSnapshotQueryKey>
  >({
    queryKey: getSchemaSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchemaSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schema.snapshot.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.snapshot.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemaSnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSchemaApplyMutationKey() {
  return ['schema', '/schema/apply', 'POST'] as const
}

export function getPostSchemaApplyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.apply.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.schema.apply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemaApplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schema.apply.$post>) {
      return parseResponse(client.schema.apply.$post(args, options))
    },
  })
}

export function injectPostSchemaApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.apply.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.schema.apply.$post>,
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
    const mutationDefaults = getPostSchemaApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSchemaDiffMutationKey() {
  return ['schema', '/schema/diff', 'POST'] as const
}

export function getPostSchemaDiffMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.diff.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.schema.diff.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemaDiffMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schema.diff.$post>) {
      return parseResponse(client.schema.diff.$post(args, options))
    },
  })
}

export function injectPostSchemaDiff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.diff.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.schema.diff.$post>,
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
    const mutationDefaults = getPostSchemaDiffMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServerInfoQueryKey() {
  return ['server', '/server/info'] as const
}

export function getServerInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerInfoQueryKey>
  >({
    queryKey: getServerInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.server.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServerInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServerInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getServerPingQueryKey() {
  return ['server', '/server/ping'] as const
}

export function getServerPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerPingQueryKey>
  >({
    queryKey: getServerPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.server.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServerPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server.ping.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServerPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServerPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsQueryKey(args: InferRequestType<typeof client.settings.$get>) {
  return ['settings', '/settings', args] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
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
  args: () => InferRequestType<typeof client.settings.$get>,
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
    return { ...getSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchSettingsMutationKey() {
  return ['settings', '/settings', 'PATCH'] as const
}

export function getPatchSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$patch>>>>>,
    TError,
    InferRequestType<typeof client.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$patch>) {
      return parseResponse(client.settings.$patch(args, options))
    },
  })
}

export function injectPatchSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.$patch>,
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
    const mutationDefaults = getPatchSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getDeleteUsersMutationKey() {
  return ['users', '/users', 'DELETE'] as const
}

export function getDeleteUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.$delete(undefined, options))
    },
  })
}

export function injectDeleteUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$delete>>>>
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
    const mutationDefaults = getDeleteUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUsersMutationKey() {
  return ['users', '/users', 'PATCH'] as const
}

export function getPatchUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$patch>>>>>,
    TError,
    InferRequestType<typeof client.users.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$patch>) {
      return parseResponse(client.users.$patch(args, options))
    },
  })
}

export function injectPatchUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$patch>>>>>,
        TError,
        InferRequestType<typeof client.users.$patch>,
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
    const mutationDefaults = getPatchUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
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

export function getPatchUsersIdMutationKey() {
  return ['users', '/users/:id', 'PATCH'] as const
}

export function getPatchUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['$patch']>) {
      return parseResponse(client.users[':id'].$patch(args, options))
    },
  })
}

export function injectPatchUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['$patch']>,
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
    const mutationDefaults = getPatchUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersIdTfaDisableMutationKey() {
  return ['users', '/users/:id/tfa/disable', 'POST'] as const
}

export function getPostUsersIdTfaDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['tfa']['disable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['tfa']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdTfaDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['tfa']['disable']['$post']>,
    ) {
      return parseResponse(client.users[':id'].tfa.disable.$post(args, options))
    },
  })
}

export function injectPostUsersIdTfaDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['tfa']['disable']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':id']['tfa']['disable']['$post']>,
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
    const mutationDefaults = getPostUsersIdTfaDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersInviteMutationKey() {
  return ['users', '/users/invite', 'POST'] as const
}

export function getPostUsersInviteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invite.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.invite.$post>) {
      return parseResponse(client.users.invite.$post(args, options))
    },
  })
}

export function injectPostUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invite.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.invite.$post>,
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
    const mutationDefaults = getPostUsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersInviteAcceptMutationKey() {
  return ['users', '/users/invite/accept', 'POST'] as const
}

export function getPostUsersInviteAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.invite.accept.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.invite.accept.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInviteAcceptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.invite.accept.$post>) {
      return parseResponse(client.users.invite.accept.$post(args, options))
    },
  })
}

export function injectPostUsersInviteAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.invite.accept.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.invite.accept.$post>,
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
    const mutationDefaults = getPostUsersInviteAcceptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersMeQueryKey(args: InferRequestType<typeof client.users.me.$get>) {
  return ['users', '/users/me', args] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
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
  args: () => InferRequestType<typeof client.users.me.$get>,
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
    return { ...getUsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchUsersMeMutationKey() {
  return ['users', '/users/me', 'PATCH'] as const
}

export function getPatchUsersMeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$patch>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.$patch(undefined, options))
    },
  })
}

export function injectPatchUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$patch>>>>
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
    const mutationDefaults = getPatchUsersMeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersMeTfaDisableMutationKey() {
  return ['users', '/users/me/tfa/disable', 'POST'] as const
}

export function getPostUsersMeTfaDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.disable.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeTfaDisableMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.me.tfa.disable.$post(undefined, options))
    },
  })
}

export function injectPostUsersMeTfaDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.disable.$post>>>
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
    const mutationDefaults = getPostUsersMeTfaDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersMeTfaEnableMutationKey() {
  return ['users', '/users/me/tfa/enable', 'POST'] as const
}

export function getPostUsersMeTfaEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.enable.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.me.tfa.enable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeTfaEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.tfa.enable.$post>) {
      return parseResponse(client.users.me.tfa.enable.$post(args, options))
    },
  })
}

export function injectPostUsersMeTfaEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.enable.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.me.tfa.enable.$post>,
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
    const mutationDefaults = getPostUsersMeTfaEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersMeTfaGenerateMutationKey() {
  return ['users', '/users/me/tfa/generate', 'POST'] as const
}

export function getPostUsersMeTfaGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.generate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.tfa.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeTfaGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.tfa.generate.$post>) {
      return parseResponse(client.users.me.tfa.generate.$post(args, options))
    },
  })
}

export function injectPostUsersMeTfaGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.me.tfa.generate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.users.me.tfa.generate.$post>,
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
    const mutationDefaults = getPostUsersMeTfaGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUsersMeTrackPageMutationKey() {
  return ['users', '/users/me/track/page', 'PATCH'] as const
}

export function getPatchUsersMeTrackPageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.track.page.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.me.track.page.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeTrackPageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.track.page.$patch>) {
      return parseResponse(client.users.me.track.page.$patch(args, options))
    },
  })
}

export function injectPatchUsersMeTrackPage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.track.page.$patch>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.me.track.page.$patch>,
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
    const mutationDefaults = getPatchUsersMeTrackPageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersRegisterMutationKey() {
  return ['users', '/users/register', 'POST'] as const
}

export function getPostUsersRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.register.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.users.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.register.$post>) {
      return parseResponse(client.users.register.$post(args, options))
    },
  })
}

export function injectPostUsersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.register.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.users.register.$post>,
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
    const mutationDefaults = getPostUsersRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersRegisterVerifyEmailQueryKey(
  args: InferRequestType<(typeof client.users.register)['verify-email']['$get']>,
) {
  return ['users', '/users/register/verify-email', args] as const
}

export function getUsersRegisterVerifyEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.register)['verify-email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.register)['verify-email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.register)['verify-email']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersRegisterVerifyEmailQueryKey>
  >({
    queryKey: getUsersRegisterVerifyEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.register['verify-email'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersRegisterVerifyEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.register)['verify-email']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.register)['verify-email']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.register)['verify-email']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersRegisterVerifyEmailQueryKey>
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
      ...getUsersRegisterVerifyEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUtilsSortCollectionMutationKey() {
  return ['utils', '/utils/sort/:collection', 'POST'] as const
}

export function getPostUtilsSortCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.utils.sort)[':collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.utils.sort)[':collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsSortCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.utils.sort)[':collection']['$post']>) {
      return parseResponse(client.utils.sort[':collection'].$post(args, options))
    },
  })
}

export function injectPostUtilsSortCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.utils.sort)[':collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.utils.sort)[':collection']['$post']>,
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
    const mutationDefaults = getPostUtilsSortCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUtilsImportMutationKey() {
  return ['utils', '/utils/import', 'POST'] as const
}

export function getPostUtilsImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.utils.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.utils.import.$post>) {
      return parseResponse(client.utils.import.$post(args, options))
    },
  })
}

export function injectPostUtilsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.utils.import.$post>,
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
    const mutationDefaults = getPostUtilsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUtilsImportCollectionMutationKey() {
  return ['utils', '/utils/import/:collection', 'POST'] as const
}

export function getPostUtilsImportCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.utils.import)[':collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.utils.import)[':collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsImportCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.utils.import)[':collection']['$post']>) {
      return parseResponse(client.utils.import[':collection'].$post(args, options))
    },
  })
}

export function injectPostUtilsImportCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.utils.import)[':collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.utils.import)[':collection']['$post']>,
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
    const mutationDefaults = getPostUtilsImportCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUtilsExportCollectionMutationKey() {
  return ['utils', '/utils/export/:collection', 'POST'] as const
}

export function getPostUtilsExportCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.utils.export)[':collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.utils.export)[':collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsExportCollectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.utils.export)[':collection']['$post']>) {
      return parseResponse(client.utils.export[':collection'].$post(args, options))
    },
  })
}

export function injectPostUtilsExportCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.utils.export)[':collection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.utils.export)[':collection']['$post']>,
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
    const mutationDefaults = getPostUtilsExportCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUtilsCacheClearMutationKey() {
  return ['utils', '/utils/cache/clear', 'POST'] as const
}

export function getPostUtilsCacheClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.cache.clear.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUtilsCacheClearMutationKey(),
    async mutationFn() {
      return parseResponse(client.utils.cache.clear.$post(undefined, options))
    },
  })
}

export function injectPostUtilsCacheClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utils.cache.clear.$post>>>
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
    const mutationDefaults = getPostUtilsCacheClearMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUtilsRandomStringQueryKey(
  args: InferRequestType<typeof client.utils.random.string.$get>,
) {
  return ['utils', '/utils/random/string', args] as const
}

export function getUtilsRandomStringQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.random.string.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.utils.random.string.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.random.string.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUtilsRandomStringQueryKey>
  >({
    queryKey: getUtilsRandomStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.utils.random.string.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUtilsRandomString<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.utils.random.string.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.utils.random.string.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.utils.random.string.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUtilsRandomStringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUtilsRandomStringQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVersionsQueryKey(args: InferRequestType<typeof client.versions.$get>) {
  return ['versions', '/versions', args] as const
}

export function getVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionsQueryKey>
  >({
    queryKey: getVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.versions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostVersionsMutationKey() {
  return ['versions', '/versions', 'POST'] as const
}

export function getPostVersionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$post>>>>>,
    TError,
    InferRequestType<typeof client.versions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.versions.$post>) {
      return parseResponse(client.versions.$post(args, options))
    },
  })
}

export function injectPostVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.versions.$post>,
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
    const mutationDefaults = getPostVersionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteVersionsMutationKey() {
  return ['versions', '/versions', 'DELETE'] as const
}

export function getDeleteVersionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.versions.$delete(undefined, options))
    },
  })
}

export function injectDeleteVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$delete>>>>
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
    const mutationDefaults = getDeleteVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchVersionsMutationKey() {
  return ['versions', '/versions', 'PATCH'] as const
}

export function getPatchVersionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$patch>>>>>,
    TError,
    InferRequestType<typeof client.versions.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.versions.$patch>) {
      return parseResponse(client.versions.$patch(args, options))
    },
  })
}

export function injectPatchVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.versions.$patch>,
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
    const mutationDefaults = getPatchVersionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVersionsIdQueryKey(
  args: InferRequestType<(typeof client.versions)[':id']['$get']>,
) {
  return ['versions', '/versions/:id', args] as const
}

export function getVersionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.versions)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVersionsIdQueryKey>
  >({
    queryKey: getVersionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.versions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVersionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.versions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVersionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteVersionsIdMutationKey() {
  return ['versions', '/versions/:id', 'DELETE'] as const
}

export function getDeleteVersionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVersionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.versions)[':id']['$delete']>) {
      return parseResponse(client.versions[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteVersionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.versions)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteVersionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchVersionsIdMutationKey() {
  return ['versions', '/versions/:id', 'PATCH'] as const
}

export function getPatchVersionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVersionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.versions)[':id']['$patch']>) {
      return parseResponse(client.versions[':id'].$patch(args, options))
    },
  })
}

export function injectPatchVersionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.versions)[':id']['$patch']>,
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
    const mutationDefaults = getPatchVersionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVersionsIdSaveMutationKey() {
  return ['versions', '/versions/:id/save', 'POST'] as const
}

export function getPostVersionsIdSaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['save']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':id']['save']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionsIdSaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.versions)[':id']['save']['$post']>) {
      return parseResponse(client.versions[':id'].save.$post(args, options))
    },
  })
}

export function injectPostVersionsIdSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.versions)[':id']['save']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.versions)[':id']['save']['$post']>,
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
    const mutationDefaults = getPostVersionsIdSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVersionsIdCompareQueryKey(
  args: InferRequestType<(typeof client.versions)[':id']['compare']['$get']>,
) {
  return ['versions', '/versions/:id/compare', args] as const
}

export function getVersionsIdCompareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['compare']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.versions)[':id']['compare']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':id']['compare']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionsIdCompareQueryKey>
  >({
    queryKey: getVersionsIdCompareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.versions[':id'].compare.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVersionsIdCompare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.versions)[':id']['compare']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.versions)[':id']['compare']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.versions)[':id']['compare']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVersionsIdCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionsIdCompareQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostVersionsIdPromoteMutationKey() {
  return ['versions', '/versions/:id/promote', 'POST'] as const
}

export function getPostVersionsIdPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':id']['promote']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':id']['promote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionsIdPromoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.versions)[':id']['promote']['$post']>) {
      return parseResponse(client.versions[':id'].promote.$post(args, options))
    },
  })
}

export function injectPostVersionsIdPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.versions)[':id']['promote']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.versions)[':id']['promote']['$post']>,
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
    const mutationDefaults = getPostVersionsIdPromoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
