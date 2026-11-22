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

export function getIdKey() {
  return ['{id}'] as const
}

export function getRealmKey() {
  return ['{realm}'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function injectPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIdNameQueryKey(args: InferRequestType<(typeof client)[':id']['name']['$get']>) {
  return [':id', '/:id/name', args] as const
}

export function getIdNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':id']['name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIdNameQueryKey>
  >({
    queryKey: getIdNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIdName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRealmQueryKey(args: InferRequestType<(typeof client)[':realm']['$get']>) {
  return [':realm', '/:realm', args] as const
}

export function getRealmQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':realm']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmQueryKey>
  >({
    queryKey: getRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRealmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmMutationKey() {
  return [':realm', '/:realm', 'PUT'] as const
}

export function getPutRealmMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['$put']>) {
      return parseResponse(client[':realm'].$put(args, options))
    },
  })
}

export function injectPutRealm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmMutationKey() {
  return [':realm', '/:realm', 'DELETE'] as const
}

export function getDeleteRealmMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['$delete']>) {
      return parseResponse(client[':realm'].$delete(args, options))
    },
  })
}

export function injectDeleteRealm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmAdminEventsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
) {
  return [':realm', '/:realm/admin-events', args] as const
}

export function getRealmAdminEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAdminEventsQueryKey>
  >({
    queryKey: getRealmAdminEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['admin-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAdminEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['admin-events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAdminEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmAdminEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteRealmAdminEventsMutationKey() {
  return [':realm', '/:realm/admin-events', 'DELETE'] as const
}

export function getDeleteRealmAdminEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['admin-events']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAdminEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['admin-events']['$delete']>) {
      return parseResponse(client[':realm']['admin-events'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmAdminEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['admin-events']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmAdminEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmAttackDetectionBruteForceUsersMutationKey() {
  return [':realm', '/:realm/attack-detection/brute-force/users', 'DELETE'] as const
}

export function getDeleteRealmAttackDetectionBruteForceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAttackDetectionBruteForceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['attack-detection']['brute-force'].users.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmAttackDetectionBruteForceUsers<
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
                  (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['attack-detection']['brute-force']['users']['$delete']
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
    const mutationDefaults = getDeleteRealmAttackDetectionBruteForceUsersMutationOptions<
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

export function getRealmAttackDetectionBruteForceUsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
) {
  return [':realm', '/:realm/attack-detection/brute-force/users/:userId', args] as const
}

export function getRealmAttackDetectionBruteForceUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAttackDetectionBruteForceUsersUserIdQueryKey>
  >({
    queryKey: getRealmAttackDetectionBruteForceUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAttackDetectionBruteForceUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAttackDetectionBruteForceUsersUserIdQueryKey>
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
      ...getRealmAttackDetectionBruteForceUsersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRealmAttackDetectionBruteForceUsersUserIdMutationKey() {
  return [':realm', '/:realm/attack-detection/brute-force/users/:userId', 'DELETE'] as const
}

export function getDeleteRealmAttackDetectionBruteForceUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAttackDetectionBruteForceUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['attack-detection']['brute-force'].users[':userId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmAttackDetectionBruteForceUsersUserId<
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
                  (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$delete']
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
    const mutationDefaults = getDeleteRealmAttackDetectionBruteForceUsersUserIdMutationOptions<
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

export function getRealmAuthenticationAuthenticatorProvidersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/authenticator-providers', args] as const
}

export function getRealmAuthenticationAuthenticatorProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['authentication']['authenticator-providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationAuthenticatorProvidersQueryKey>
  >({
    queryKey: getRealmAuthenticationAuthenticatorProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['authenticator-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationAuthenticatorProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['authentication']['authenticator-providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationAuthenticatorProvidersQueryKey>
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
      ...getRealmAuthenticationAuthenticatorProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationClientAuthenticatorProvidersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/client-authenticator-providers', args] as const
}

export function getRealmAuthenticationClientAuthenticatorProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationClientAuthenticatorProvidersQueryKey>
  >({
    queryKey: getRealmAuthenticationClientAuthenticatorProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['client-authenticator-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationClientAuthenticatorProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationClientAuthenticatorProvidersQueryKey>
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
      ...getRealmAuthenticationClientAuthenticatorProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationConfigDescriptionProviderIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/config-description/:providerId', args] as const
}

export function getRealmAuthenticationConfigDescriptionProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationConfigDescriptionProviderIdQueryKey>
  >({
    queryKey: getRealmAuthenticationConfigDescriptionProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['config-description'][':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationConfigDescriptionProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationConfigDescriptionProviderIdQueryKey>
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
      ...getRealmAuthenticationConfigDescriptionProviderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationConfigIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
) {
  return [':realm', '/:realm/authentication/config/:id', args] as const
}

export function getRealmAuthenticationConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationConfigIdQueryKey>
  >({
    queryKey: getRealmAuthenticationConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication.config[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['config'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationConfigIdQueryKey>
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
      ...getRealmAuthenticationConfigIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmAuthenticationConfigIdMutationKey() {
  return [':realm', '/:realm/authentication/config/:id', 'PUT'] as const
}

export function getPutRealmAuthenticationConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmAuthenticationConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>,
    ) {
      return parseResponse(client[':realm'].authentication.config[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmAuthenticationConfigId<
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
                ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmAuthenticationConfigIdMutationOptions<
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

export function getDeleteRealmAuthenticationConfigIdMutationKey() {
  return [':realm', '/:realm/authentication/config/:id', 'DELETE'] as const
}

export function getDeleteRealmAuthenticationConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAuthenticationConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['config'][':id']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].authentication.config[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmAuthenticationConfigId<
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
                ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmAuthenticationConfigIdMutationOptions<
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

export function getPostRealmAuthenticationExecutionsMutationKey() {
  return [':realm', '/:realm/authentication/executions', 'POST'] as const
}

export function getPostRealmAuthenticationExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['executions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>,
    ) {
      return parseResponse(client[':realm'].authentication.executions.$post(args, options))
    },
  })
}

export function injectPostRealmAuthenticationExecutions<
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
                ReturnType<(typeof client)[':realm']['authentication']['executions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmAuthenticationExecutionsMutationOptions<
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

export function getRealmAuthenticationExecutionsExecutionIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/executions/:executionId', args] as const
}

export function getRealmAuthenticationExecutionsExecutionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationExecutionsExecutionIdQueryKey>
  >({
    queryKey: getRealmAuthenticationExecutionsExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationExecutionsExecutionIdQueryKey>
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
      ...getRealmAuthenticationExecutionsExecutionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRealmAuthenticationExecutionsExecutionIdMutationKey() {
  return [':realm', '/:realm/authentication/executions/:executionId', 'DELETE'] as const
}

export function getDeleteRealmAuthenticationExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAuthenticationExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmAuthenticationExecutionsExecutionId<
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
                  (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['executions'][':executionId']['$delete']
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
    const mutationDefaults = getDeleteRealmAuthenticationExecutionsExecutionIdMutationOptions<
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

export function getPostRealmAuthenticationExecutionsExecutionIdConfigMutationKey() {
  return [':realm', '/:realm/authentication/executions/:executionId/config', 'POST'] as const
}

export function getPostRealmAuthenticationExecutionsExecutionIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationExecutionsExecutionIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId'].config.$post(args, options),
      )
    },
  })
}

export function injectPostRealmAuthenticationExecutionsExecutionIdConfig<
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
                  (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['executions'][':executionId']['config']['$post']
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
    const mutationDefaults = getPostRealmAuthenticationExecutionsExecutionIdConfigMutationOptions<
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

export function getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityMutationKey() {
  return [
    ':realm',
    '/:realm/authentication/executions/:executionId/lower-priority',
    'POST',
  ] as const
}

export function getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId']['lower-priority'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmAuthenticationExecutionsExecutionIdLowerPriority<
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
                  (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['executions'][':executionId']['lower-priority']['$post']
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
      getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityMutationOptions<
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

export function getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityMutationKey() {
  return [
    ':realm',
    '/:realm/authentication/executions/:executionId/raise-priority',
    'POST',
  ] as const
}

export function getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId']['raise-priority'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmAuthenticationExecutionsExecutionIdRaisePriority<
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
                  (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['executions'][':executionId']['raise-priority']['$post']
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
      getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityMutationOptions<
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

export function getRealmAuthenticationFlowsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
) {
  return [':realm', '/:realm/authentication/flows', args] as const
}

export function getRealmAuthenticationFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsQueryKey>
  >({
    queryKey: getRealmAuthenticationFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication.flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationFlowsQueryKey>
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
      ...getRealmAuthenticationFlowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmAuthenticationFlowsMutationKey() {
  return [':realm', '/:realm/authentication/flows', 'POST'] as const
}

export function getPostRealmAuthenticationFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationFlowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']>,
    ) {
      return parseResponse(client[':realm'].authentication.flows.$post(args, options))
    },
  })
}

export function injectPostRealmAuthenticationFlows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['flows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmAuthenticationFlowsMutationOptions<
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

export function getPostRealmAuthenticationFlowsFlowAliasCopyMutationKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/copy', 'POST'] as const
}

export function getPostRealmAuthenticationFlowsFlowAliasCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationFlowsFlowAliasCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].copy.$post(args, options),
      )
    },
  })
}

export function injectPostRealmAuthenticationFlowsFlowAliasCopy<
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
                  (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['flows'][':flowAlias']['copy']['$post']
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
    const mutationDefaults = getPostRealmAuthenticationFlowsFlowAliasCopyMutationOptions<
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

export function getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions', args] as const
}

export function getRealmAuthenticationFlowsFlowAliasExecutionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey>
  >({
    queryKey: getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationFlowsFlowAliasExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey>
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
      ...getRealmAuthenticationFlowsFlowAliasExecutionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmAuthenticationFlowsFlowAliasExecutionsMutationKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions', 'PUT'] as const
}

export function getPutRealmAuthenticationFlowsFlowAliasExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmAuthenticationFlowsFlowAliasExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].executions.$put(args, options),
      )
    },
  })
}

export function injectPutRealmAuthenticationFlowsFlowAliasExecutions<
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
                  (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$put']
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
    const mutationDefaults = getPutRealmAuthenticationFlowsFlowAliasExecutionsMutationOptions<
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

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionMutationKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions/execution', 'POST'] as const
}

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].executions.execution.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmAuthenticationFlowsFlowAliasExecutionsExecution<
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
                  (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['execution']['$post']
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
      getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionMutationOptions<
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

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowMutationKey() {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions/flow', 'POST'] as const
}

export function getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].executions.flow.$post(args, options),
      )
    },
  })
}

export function injectPostRealmAuthenticationFlowsFlowAliasExecutionsFlow<
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
                  (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['flow']['$post']
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
    const mutationDefaults = getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowMutationOptions<
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

export function getRealmAuthenticationFlowsIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
) {
  return [':realm', '/:realm/authentication/flows/:id', args] as const
}

export function getRealmAuthenticationFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsIdQueryKey>
  >({
    queryKey: getRealmAuthenticationFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication.flows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationFlowsIdQueryKey>
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
      ...getRealmAuthenticationFlowsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmAuthenticationFlowsIdMutationKey() {
  return [':realm', '/:realm/authentication/flows/:id', 'PUT'] as const
}

export function getPutRealmAuthenticationFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmAuthenticationFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>,
    ) {
      return parseResponse(client[':realm'].authentication.flows[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmAuthenticationFlowsId<
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
                ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmAuthenticationFlowsIdMutationOptions<
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

export function getDeleteRealmAuthenticationFlowsIdMutationKey() {
  return [':realm', '/:realm/authentication/flows/:id', 'DELETE'] as const
}

export function getDeleteRealmAuthenticationFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAuthenticationFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['flows'][':id']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].authentication.flows[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmAuthenticationFlowsId<
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
                ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmAuthenticationFlowsIdMutationOptions<
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

export function getRealmAuthenticationFormActionProvidersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/form-action-providers', args] as const
}

export function getRealmAuthenticationFormActionProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFormActionProvidersQueryKey>
  >({
    queryKey: getRealmAuthenticationFormActionProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['form-action-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationFormActionProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['form-action-providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationFormActionProvidersQueryKey>
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
      ...getRealmAuthenticationFormActionProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationFormProvidersQueryKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
) {
  return [':realm', '/:realm/authentication/form-providers', args] as const
}

export function getRealmAuthenticationFormProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFormProvidersQueryKey>
  >({
    queryKey: getRealmAuthenticationFormProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['form-providers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationFormProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['form-providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationFormProvidersQueryKey>
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
      ...getRealmAuthenticationFormProvidersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationPerClientConfigDescriptionQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/per-client-config-description', args] as const
}

export function getRealmAuthenticationPerClientConfigDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationPerClientConfigDescriptionQueryKey>
  >({
    queryKey: getRealmAuthenticationPerClientConfigDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['per-client-config-description'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationPerClientConfigDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationPerClientConfigDescriptionQueryKey>
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
      ...getRealmAuthenticationPerClientConfigDescriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmAuthenticationRegisterRequiredActionMutationKey() {
  return [':realm', '/:realm/authentication/register-required-action', 'POST'] as const
}

export function getPostRealmAuthenticationRegisterRequiredActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['register-required-action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['register-required-action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationRegisterRequiredActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['register-required-action']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication['register-required-action'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmAuthenticationRegisterRequiredAction<
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
                  (typeof client)[':realm']['authentication']['register-required-action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['register-required-action']['$post']
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
    const mutationDefaults = getPostRealmAuthenticationRegisterRequiredActionMutationOptions<
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

export function getRealmAuthenticationRequiredActionsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
) {
  return [':realm', '/:realm/authentication/required-actions', args] as const
}

export function getRealmAuthenticationRequiredActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationRequiredActionsQueryKey>
  >({
    queryKey: getRealmAuthenticationRequiredActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['required-actions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationRequiredActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationRequiredActionsQueryKey>
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
      ...getRealmAuthenticationRequiredActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmAuthenticationRequiredActionsAliasQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/required-actions/:alias', args] as const
}

export function getRealmAuthenticationRequiredActionsAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationRequiredActionsAliasQueryKey>
  >({
    queryKey: getRealmAuthenticationRequiredActionsAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationRequiredActionsAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationRequiredActionsAliasQueryKey>
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
      ...getRealmAuthenticationRequiredActionsAliasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmAuthenticationRequiredActionsAliasMutationKey() {
  return [':realm', '/:realm/authentication/required-actions/:alias', 'PUT'] as const
}

export function getPutRealmAuthenticationRequiredActionsAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmAuthenticationRequiredActionsAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmAuthenticationRequiredActionsAlias<
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
                  (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['required-actions'][':alias']['$put']
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
    const mutationDefaults = getPutRealmAuthenticationRequiredActionsAliasMutationOptions<
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

export function getDeleteRealmAuthenticationRequiredActionsAliasMutationKey() {
  return [':realm', '/:realm/authentication/required-actions/:alias', 'DELETE'] as const
}

export function getDeleteRealmAuthenticationRequiredActionsAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmAuthenticationRequiredActionsAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmAuthenticationRequiredActionsAlias<
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
                  (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['required-actions'][':alias']['$delete']
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
    const mutationDefaults = getDeleteRealmAuthenticationRequiredActionsAliasMutationOptions<
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

export function getPostRealmAuthenticationRequiredActionsAliasLowerPriorityMutationKey() {
  return [
    ':realm',
    '/:realm/authentication/required-actions/:alias/lower-priority',
    'POST',
  ] as const
}

export function getPostRealmAuthenticationRequiredActionsAliasLowerPriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationRequiredActionsAliasLowerPriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias']['lower-priority'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmAuthenticationRequiredActionsAliasLowerPriority<
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
                  (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['required-actions'][':alias']['lower-priority']['$post']
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
      getPostRealmAuthenticationRequiredActionsAliasLowerPriorityMutationOptions<
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

export function getPostRealmAuthenticationRequiredActionsAliasRaisePriorityMutationKey() {
  return [
    ':realm',
    '/:realm/authentication/required-actions/:alias/raise-priority',
    'POST',
  ] as const
}

export function getPostRealmAuthenticationRequiredActionsAliasRaisePriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmAuthenticationRequiredActionsAliasRaisePriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias']['raise-priority'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmAuthenticationRequiredActionsAliasRaisePriority<
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
                  (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['authentication']['required-actions'][':alias']['raise-priority']['$post']
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
      getPostRealmAuthenticationRequiredActionsAliasRaisePriorityMutationOptions<
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

export function getRealmAuthenticationUnregisteredRequiredActionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
) {
  return [':realm', '/:realm/authentication/unregistered-required-actions', args] as const
}

export function getRealmAuthenticationUnregisteredRequiredActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationUnregisteredRequiredActionsQueryKey>
  >({
    queryKey: getRealmAuthenticationUnregisteredRequiredActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].authentication['unregistered-required-actions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmAuthenticationUnregisteredRequiredActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmAuthenticationUnregisteredRequiredActionsQueryKey>
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
      ...getRealmAuthenticationUnregisteredRequiredActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClearKeysCacheMutationKey() {
  return [':realm', '/:realm/clear-keys-cache', 'POST'] as const
}

export function getPostRealmClearKeysCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-keys-cache']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClearKeysCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']>,
    ) {
      return parseResponse(client[':realm']['clear-keys-cache'].$post(args, options))
    },
  })
}

export function injectPostRealmClearKeysCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clear-keys-cache']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clear-keys-cache']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClearKeysCacheMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmClearRealmCacheMutationKey() {
  return [':realm', '/:realm/clear-realm-cache', 'POST'] as const
}

export function getPostRealmClearRealmCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-realm-cache']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClearRealmCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']>,
    ) {
      return parseResponse(client[':realm']['clear-realm-cache'].$post(args, options))
    },
  })
}

export function injectPostRealmClearRealmCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clear-realm-cache']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clear-realm-cache']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClearRealmCacheMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmClearUserCacheMutationKey() {
  return [':realm', '/:realm/clear-user-cache', 'POST'] as const
}

export function getPostRealmClearUserCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clear-user-cache']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClearUserCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']>,
    ) {
      return parseResponse(client[':realm']['clear-user-cache'].$post(args, options))
    },
  })
}

export function injectPostRealmClearUserCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clear-user-cache']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clear-user-cache']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClearUserCacheMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmClientDescriptionConverterMutationKey() {
  return [':realm', '/:realm/client-description-converter', 'POST'] as const
}

export function getPostRealmClientDescriptionConverterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-description-converter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientDescriptionConverterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>,
    ) {
      return parseResponse(client[':realm']['client-description-converter'].$post(args, options))
    },
  })
}

export function injectPostRealmClientDescriptionConverter<
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
                ReturnType<(typeof client)[':realm']['client-description-converter']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientDescriptionConverterMutationOptions<
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

export function getRealmClientRegistrationPolicyProvidersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
) {
  return [':realm', '/:realm/client-registration-policy/providers', args] as const
}

export function getRealmClientRegistrationPolicyProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientRegistrationPolicyProvidersQueryKey>
  >({
    queryKey: getRealmClientRegistrationPolicyProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-registration-policy'].providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientRegistrationPolicyProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-registration-policy']['providers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientRegistrationPolicyProvidersQueryKey>
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
      ...getRealmClientRegistrationPolicyProvidersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
) {
  return [':realm', '/:realm/client-scopes', args] as const
}

export function getRealmClientScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesQueryKey>
  >({
    queryKey: getRealmClientScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmClientScopesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmClientScopesMutationKey() {
  return [':realm', '/:realm/client-scopes', 'POST'] as const
}

export function getPostRealmClientScopesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['client-scopes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientScopesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['client-scopes']['$post']>) {
      return parseResponse(client[':realm']['client-scopes'].$post(args, options))
    },
  })
}

export function injectPostRealmClientScopes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['client-scopes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientScopesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmClientScopesId1ProtocolMappersModelsId2QueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', args] as const
}

export function getRealmClientScopesId1ProtocolMappersModelsId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesId1ProtocolMappersModelsId2QueryKey>
  >({
    queryKey: getRealmClientScopesId1ProtocolMappersModelsId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesId1ProtocolMappersModelsId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesId1ProtocolMappersModelsId2QueryKey>
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
      ...getRealmClientScopesId1ProtocolMappersModelsId2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientScopesId1ProtocolMappersModelsId2MutationKey() {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', 'PUT'] as const
}

export function getPutRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientScopesId1ProtocolMappersModelsId2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmClientScopesId1ProtocolMappersModelsId2<
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
                  (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$put']
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
    const mutationDefaults = getPutRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
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

export function getDeleteRealmClientScopesId1ProtocolMappersModelsId2MutationKey() {
  return [':realm', '/:realm/client-scopes/:id1/protocol-mappers/models/:id2', 'DELETE'] as const
}

export function getDeleteRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientScopesId1ProtocolMappersModelsId2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteRealmClientScopesId1ProtocolMappersModelsId2<
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
                  (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$delete']
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
    const mutationDefaults = getDeleteRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
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

export function getRealmClientScopesIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
) {
  return [':realm', '/:realm/client-scopes/:id', args] as const
}

export function getRealmClientScopesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdQueryKey>
  >({
    queryKey: getRealmClientScopesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmClientScopesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmClientScopesIdMutationKey() {
  return [':realm', '/:realm/client-scopes/:id', 'PUT'] as const
}

export function getPutRealmClientScopesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientScopesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']>,
    ) {
      return parseResponse(client[':realm']['client-scopes'][':id'].$put(args, options))
    },
  })
}

export function injectPutRealmClientScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmClientScopesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmClientScopesIdMutationKey() {
  return [':realm', '/:realm/client-scopes/:id', 'DELETE'] as const
}

export function getDeleteRealmClientScopesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientScopesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>,
    ) {
      return parseResponse(client[':realm']['client-scopes'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmClientScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmClientScopesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmClientScopesIdProtocolMappersAddModelsMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/add-models', 'POST'] as const
}

export function getPostRealmClientScopesIdProtocolMappersAddModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientScopesIdProtocolMappersAddModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers']['add-models'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmClientScopesIdProtocolMappersAddModels<
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
                  (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['add-models']['$post']
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
    const mutationDefaults = getPostRealmClientScopesIdProtocolMappersAddModelsMutationOptions<
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

export function getRealmClientScopesIdProtocolMappersModelsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/models', args] as const
}

export function getRealmClientScopesIdProtocolMappersModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdProtocolMappersModelsQueryKey>
  >({
    queryKey: getRealmClientScopesIdProtocolMappersModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdProtocolMappersModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdProtocolMappersModelsQueryKey>
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
      ...getRealmClientScopesIdProtocolMappersModelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientScopesIdProtocolMappersModelsMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/models', 'POST'] as const
}

export function getPostRealmClientScopesIdProtocolMappersModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientScopesIdProtocolMappersModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientScopesIdProtocolMappersModels<
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
                  (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$post']
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
    const mutationDefaults = getPostRealmClientScopesIdProtocolMappersModelsMutationOptions<
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

export function getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/protocol/:protocol', args] as const
}

export function getRealmClientScopesIdProtocolMappersProtocolProtocolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey>
  >({
    queryKey: getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectRealmClientScopesIdProtocolMappersProtocolProtocol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey>
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
      ...getRealmClientScopesIdProtocolMappersProtocolProtocolQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesIdScopeMappingsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings', args] as const
}

export function getRealmClientScopesIdScopeMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesIdScopeMappingsClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', args] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientScopesIdScopeMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', 'POST'] as const
}

export function getPostRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientScopesIdScopeMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmClientScopesIdScopeMappingsClientsClient<
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
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$post']
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
    const mutationDefaults = getPostRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
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

export function getDeleteRealmClientScopesIdScopeMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/clients/:client', 'DELETE'] as const
}

export function getDeleteRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientScopesIdScopeMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteRealmClientScopesIdScopeMappingsClientsClient<
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
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$delete']
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
    const mutationDefaults = getDeleteRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
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

export function getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/available',
    args,
  ] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
          ':client'
        ].available.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsClientsClientAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/composite',
    args,
  ] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
          ':client'
        ].composite.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsClientsClientComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesIdScopeMappingsRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', args] as const
}

export function getRealmClientScopesIdScopeMappingsRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientScopesIdScopeMappingsRealmMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', 'POST'] as const
}

export function getPostRealmClientScopesIdScopeMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientScopesIdScopeMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientScopesIdScopeMappingsRealm<
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
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$post']
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
    const mutationDefaults = getPostRealmClientScopesIdScopeMappingsRealmMutationOptions<
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

export function getDeleteRealmClientScopesIdScopeMappingsRealmMutationKey() {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', 'DELETE'] as const
}

export function getDeleteRealmClientScopesIdScopeMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientScopesIdScopeMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientScopesIdScopeMappingsRealm<
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
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$delete']
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
    const mutationDefaults = getDeleteRealmClientScopesIdScopeMappingsRealmMutationOptions<
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

export function getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm/available', args] as const
}

export function getRealmClientScopesIdScopeMappingsRealmAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsRealmAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsRealmAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm/composite', args] as const
}

export function getRealmClientScopesIdScopeMappingsRealmCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey>
  >({
    queryKey: getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientScopesIdScopeMappingsRealmComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey>
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
      ...getRealmClientScopesIdScopeMappingsRealmCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientSessionStatsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
) {
  return [':realm', '/:realm/client-session-stats', args] as const
}

export function getRealmClientSessionStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientSessionStatsQueryKey>
  >({
    queryKey: getRealmClientSessionStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['client-session-stats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientSessionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientSessionStatsQueryKey>
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
      ...getRealmClientSessionStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
) {
  return [':realm', '/:realm/clients', args] as const
}

export function getRealmClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsQueryKey>
  >({
    queryKey: getRealmClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['clients']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmClientsMutationKey() {
  return [':realm', '/:realm/clients', 'POST'] as const
}

export function getPostRealmClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['clients']['$post']>) {
      return parseResponse(client[':realm'].clients.$post(args, options))
    },
  })
}

export function injectPostRealmClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmClientsInitialAccessQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
) {
  return [':realm', '/:realm/clients-initial-access', args] as const
}

export function getRealmClientsInitialAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsInitialAccessQueryKey>
  >({
    queryKey: getRealmClientsInitialAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['clients-initial-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsInitialAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsInitialAccessQueryKey>
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
      ...getRealmClientsInitialAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsInitialAccessMutationKey() {
  return [':realm', '/:realm/clients-initial-access', 'POST'] as const
}

export function getPostRealmClientsInitialAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsInitialAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']>,
    ) {
      return parseResponse(client[':realm']['clients-initial-access'].$post(args, options))
    },
  })
}

export function injectPostRealmClientsInitialAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients-initial-access']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsInitialAccessMutationOptions<
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

export function getDeleteRealmClientsInitialAccessIdMutationKey() {
  return [':realm', '/:realm/clients-initial-access/:id', 'DELETE'] as const
}

export function getDeleteRealmClientsInitialAccessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsInitialAccessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>,
    ) {
      return parseResponse(client[':realm']['clients-initial-access'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmClientsInitialAccessId<
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
                ReturnType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmClientsInitialAccessIdMutationOptions<
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

export function getRealmClientsId1ProtocolMappersModelsId2QueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', args] as const
}

export function getRealmClientsId1ProtocolMappersModelsId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsId1ProtocolMappersModelsId2QueryKey>
  >({
    queryKey: getRealmClientsId1ProtocolMappersModelsId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsId1ProtocolMappersModelsId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsId1ProtocolMappersModelsId2QueryKey>
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
      ...getRealmClientsId1ProtocolMappersModelsId2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsId1ProtocolMappersModelsId2MutationKey() {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', 'PUT'] as const
}

export function getPutRealmClientsId1ProtocolMappersModelsId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsId1ProtocolMappersModelsId2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmClientsId1ProtocolMappersModelsId2<
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
                  (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$put']
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
    const mutationDefaults = getPutRealmClientsId1ProtocolMappersModelsId2MutationOptions<
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

export function getDeleteRealmClientsId1ProtocolMappersModelsId2MutationKey() {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', 'DELETE'] as const
}

export function getDeleteRealmClientsId1ProtocolMappersModelsId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsId1ProtocolMappersModelsId2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientsId1ProtocolMappersModelsId2<
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
                  (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsId1ProtocolMappersModelsId2MutationOptions<
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

export function getRealmClientsIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
) {
  return [':realm', '/:realm/clients/:id', args] as const
}

export function getRealmClientsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdQueryKey>
  >({
    queryKey: getRealmClientsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmClientsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmClientsIdMutationKey() {
  return [':realm', '/:realm/clients/:id', 'PUT'] as const
}

export function getPutRealmClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']>) {
      return parseResponse(client[':realm'].clients[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmClientsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmClientsIdMutationKey() {
  return [':realm', '/:realm/clients/:id', 'DELETE'] as const
}

export function getDeleteRealmClientsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']>,
    ) {
      return parseResponse(client[':realm'].clients[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmClientsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmClientsIdCertificatesAttrQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/certificates/:attr', args] as const
}

export function getRealmClientsIdCertificatesAttrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdCertificatesAttrQueryKey>
  >({
    queryKey: getRealmClientsIdCertificatesAttrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdCertificatesAttr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdCertificatesAttrQueryKey>
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
      ...getRealmClientsIdCertificatesAttrQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdCertificatesAttrDownloadMutationKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/download', 'POST'] as const
}

export function getPostRealmClientsIdCertificatesAttrDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdCertificatesAttrDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr'].download.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdCertificatesAttrDownload<
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
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['download']['$post']
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
    const mutationDefaults = getPostRealmClientsIdCertificatesAttrDownloadMutationOptions<
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

export function getPostRealmClientsIdCertificatesAttrGenerateMutationKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/generate', 'POST'] as const
}

export function getPostRealmClientsIdCertificatesAttrGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdCertificatesAttrGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr'].generate.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdCertificatesAttrGenerate<
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
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate']['$post']
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
    const mutationDefaults = getPostRealmClientsIdCertificatesAttrGenerateMutationOptions<
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

export function getPostRealmClientsIdCertificatesAttrGenerateAndDownloadMutationKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/generate-and-download', 'POST'] as const
}

export function getPostRealmClientsIdCertificatesAttrGenerateAndDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdCertificatesAttrGenerateAndDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr']['generate-and-download'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmClientsIdCertificatesAttrGenerateAndDownload<
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
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['generate-and-download']['$post']
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
      getPostRealmClientsIdCertificatesAttrGenerateAndDownloadMutationOptions<
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

export function getPostRealmClientsIdCertificatesAttrUploadMutationKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/upload', 'POST'] as const
}

export function getPostRealmClientsIdCertificatesAttrUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdCertificatesAttrUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr'].upload.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdCertificatesAttrUpload<
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
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload']['$post']
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
    const mutationDefaults = getPostRealmClientsIdCertificatesAttrUploadMutationOptions<
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

export function getPostRealmClientsIdCertificatesAttrUploadCertificateMutationKey() {
  return [':realm', '/:realm/clients/:id/certificates/:attr/upload-certificate', 'POST'] as const
}

export function getPostRealmClientsIdCertificatesAttrUploadCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdCertificatesAttrUploadCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr']['upload-certificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostRealmClientsIdCertificatesAttrUploadCertificate<
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
                  (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['upload-certificate']['$post']
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
    const mutationDefaults = getPostRealmClientsIdCertificatesAttrUploadCertificateMutationOptions<
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

export function getRealmClientsIdClientSecretQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/client-secret', args] as const
}

export function getRealmClientsIdClientSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdClientSecretQueryKey>
  >({
    queryKey: getRealmClientsIdClientSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['client-secret'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdClientSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['client-secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdClientSecretQueryKey>
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
      ...getRealmClientsIdClientSecretQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdClientSecretMutationKey() {
  return [':realm', '/:realm/clients/:id/client-secret', 'POST'] as const
}

export function getPostRealmClientsIdClientSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdClientSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>,
    ) {
      return parseResponse(client[':realm'].clients[':id']['client-secret'].$post(args, options))
    },
  })
}

export function injectPostRealmClientsIdClientSecret<
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
                ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsIdClientSecretMutationOptions<
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

export function getRealmClientsIdDefaultClientScopesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/default-client-scopes', args] as const
}

export function getRealmClientsIdDefaultClientScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdDefaultClientScopesQueryKey>
  >({
    queryKey: getRealmClientsIdDefaultClientScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['default-client-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdDefaultClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdDefaultClientScopesQueryKey>
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
      ...getRealmClientsIdDefaultClientScopesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsIdDefaultClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/clients/:id/default-client-scopes/:clientScopeId', 'PUT'] as const
}

export function getPutRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdDefaultClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmClientsIdDefaultClientScopesClientScopeId<
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
                  (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$put']
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
    const mutationDefaults = getPutRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
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

export function getDeleteRealmClientsIdDefaultClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/clients/:id/default-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function getDeleteRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdDefaultClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['default-client-scopes'][':clientScopeId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteRealmClientsIdDefaultClientScopesClientScopeId<
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
                  (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['default-client-scopes'][':clientScopeId']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
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

export function getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/generate-example-access-token',
    args,
  ] as const
}

export function getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey>
  >({
    queryKey: getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectRealmClientsIdEvaluateScopesGenerateExampleAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey>
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
      ...getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdEvaluateScopesProtocolMappersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/evaluate-scopes/protocol-mappers', args] as const
}

export function getRealmClientsIdEvaluateScopesProtocolMappersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesProtocolMappersQueryKey>
  >({
    queryKey: getRealmClientsIdEvaluateScopesProtocolMappersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdEvaluateScopesProtocolMappers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdEvaluateScopesProtocolMappersQueryKey>
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
      ...getRealmClientsIdEvaluateScopesProtocolMappersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/granted',
    args,
  ] as const
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey>
  >({
    queryKey: getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
          ':roleContainerId'
        ].granted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey
        >
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
      ...getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/not-granted',
    args,
  ] as const
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey>
  >({
    queryKey: getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
          'not-granted'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey
        >
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
      ...getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdInstallationProvidersProviderIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/installation/providers/:providerId', args] as const
}

export function getRealmClientsIdInstallationProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdInstallationProvidersProviderIdQueryKey>
  >({
    queryKey: getRealmClientsIdInstallationProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].installation.providers[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdInstallationProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdInstallationProvidersProviderIdQueryKey>
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
      ...getRealmClientsIdInstallationProvidersProviderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/management/permissions', args] as const
}

export function getRealmClientsIdManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdManagementPermissionsQueryKey>
  >({
    queryKey: getRealmClientsIdManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].management.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdManagementPermissionsQueryKey>
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
      ...getRealmClientsIdManagementPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsIdManagementPermissionsMutationKey() {
  return [':realm', '/:realm/clients/:id/management/permissions', 'PUT'] as const
}

export function getPutRealmClientsIdManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].management.permissions.$put(args, options),
      )
    },
  })
}

export function injectPutRealmClientsIdManagementPermissions<
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
                  (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['management']['permissions']['$put']
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
    const mutationDefaults = getPutRealmClientsIdManagementPermissionsMutationOptions<
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

export function getPostRealmClientsIdNodesMutationKey() {
  return [':realm', '/:realm/clients/:id/nodes', 'POST'] as const
}

export function getPostRealmClientsIdNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>,
    ) {
      return parseResponse(client[':realm'].clients[':id'].nodes.$post(args, options))
    },
  })
}

export function injectPostRealmClientsIdNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsIdNodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmClientsIdNodesNodeMutationKey() {
  return [':realm', '/:realm/clients/:id/nodes/:node', 'DELETE'] as const
}

export function getDeleteRealmClientsIdNodesNodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdNodesNodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].clients[':id'].nodes[':node'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmClientsIdNodesNode<
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
                ReturnType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmClientsIdNodesNodeMutationOptions<
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

export function getRealmClientsIdOfflineSessionCountQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/offline-session-count', args] as const
}

export function getRealmClientsIdOfflineSessionCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOfflineSessionCountQueryKey>
  >({
    queryKey: getRealmClientsIdOfflineSessionCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['offline-session-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdOfflineSessionCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdOfflineSessionCountQueryKey>
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
      ...getRealmClientsIdOfflineSessionCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdOfflineSessionsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/offline-sessions', args] as const
}

export function getRealmClientsIdOfflineSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOfflineSessionsQueryKey>
  >({
    queryKey: getRealmClientsIdOfflineSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['offline-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdOfflineSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdOfflineSessionsQueryKey>
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
      ...getRealmClientsIdOfflineSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdOptionalClientScopesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/optional-client-scopes', args] as const
}

export function getRealmClientsIdOptionalClientScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOptionalClientScopesQueryKey>
  >({
    queryKey: getRealmClientsIdOptionalClientScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['optional-client-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdOptionalClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdOptionalClientScopesQueryKey>
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
      ...getRealmClientsIdOptionalClientScopesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsIdOptionalClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/clients/:id/optional-client-scopes/:clientScopeId', 'PUT'] as const
}

export function getPutRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdOptionalClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmClientsIdOptionalClientScopesClientScopeId<
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
                  (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$put']
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
    const mutationDefaults = getPutRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
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

export function getDeleteRealmClientsIdOptionalClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/clients/:id/optional-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function getDeleteRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdOptionalClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['optional-client-scopes'][':clientScopeId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteRealmClientsIdOptionalClientScopesClientScopeId<
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
                  (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['optional-client-scopes'][':clientScopeId']['$delete']
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
      getDeleteRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
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

export function getPostRealmClientsIdProtocolMappersAddModelsMutationKey() {
  return [':realm', '/:realm/clients/:id/protocol-mappers/add-models', 'POST'] as const
}

export function getPostRealmClientsIdProtocolMappersAddModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdProtocolMappersAddModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers']['add-models'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdProtocolMappersAddModels<
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
                  (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['protocol-mappers']['add-models']['$post']
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
    const mutationDefaults = getPostRealmClientsIdProtocolMappersAddModelsMutationOptions<
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

export function getRealmClientsIdProtocolMappersModelsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/protocol-mappers/models', args] as const
}

export function getRealmClientsIdProtocolMappersModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdProtocolMappersModelsQueryKey>
  >({
    queryKey: getRealmClientsIdProtocolMappersModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdProtocolMappersModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdProtocolMappersModelsQueryKey>
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
      ...getRealmClientsIdProtocolMappersModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdProtocolMappersModelsMutationKey() {
  return [':realm', '/:realm/clients/:id/protocol-mappers/models', 'POST'] as const
}

export function getPostRealmClientsIdProtocolMappersModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdProtocolMappersModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers'].models.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdProtocolMappersModels<
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
                  (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$post']
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
    const mutationDefaults = getPostRealmClientsIdProtocolMappersModelsMutationOptions<
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

export function getRealmClientsIdProtocolMappersProtocolProtocolQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/protocol-mappers/protocol/:protocol', args] as const
}

export function getRealmClientsIdProtocolMappersProtocolProtocolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdProtocolMappersProtocolProtocolQueryKey>
  >({
    queryKey: getRealmClientsIdProtocolMappersProtocolProtocolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdProtocolMappersProtocolProtocol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdProtocolMappersProtocolProtocolQueryKey>
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
      ...getRealmClientsIdProtocolMappersProtocolProtocolQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdPushRevocationMutationKey() {
  return [':realm', '/:realm/clients/:id/push-revocation', 'POST'] as const
}

export function getPostRealmClientsIdPushRevocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdPushRevocationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['push-revocation']['$post']
      >,
    ) {
      return parseResponse(client[':realm'].clients[':id']['push-revocation'].$post(args, options))
    },
  })
}

export function injectPostRealmClientsIdPushRevocation<
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
                ReturnType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsIdPushRevocationMutationOptions<
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

export function getPostRealmClientsIdRegistrationAccessTokenMutationKey() {
  return [':realm', '/:realm/clients/:id/registration-access-token', 'POST'] as const
}

export function getPostRealmClientsIdRegistrationAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdRegistrationAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['registration-access-token'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdRegistrationAccessToken<
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
                  (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['registration-access-token']['$post']
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
    const mutationDefaults = getPostRealmClientsIdRegistrationAccessTokenMutationOptions<
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

export function getRealmClientsIdRolesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/roles', args] as const
}

export function getRealmClientsIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesQueryKey>
  >({
    queryKey: getRealmClientsIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmClientsIdRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmClientsIdRolesMutationKey() {
  return [':realm', '/:realm/clients/:id/roles', 'POST'] as const
}

export function getPostRealmClientsIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>,
    ) {
      return parseResponse(client[':realm'].clients[':id'].roles.$post(args, options))
    },
  })
}

export function injectPostRealmClientsIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmClientsIdRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmClientsIdRolesRoleNameQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name', args] as const
}

export function getRealmClientsIdRolesRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameQueryKey>
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
      ...getRealmClientsIdRolesRoleNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsIdRolesRoleNameMutationKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name', 'PUT'] as const
}

export function getPutRealmClientsIdRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdRolesRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']
      >,
    ) {
      return parseResponse(client[':realm'].clients[':id'].roles[':role-name'].$put(args, options))
    },
  })
}

export function injectPutRealmClientsIdRolesRoleName<
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
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$put']
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
    const mutationDefaults = getPutRealmClientsIdRolesRoleNameMutationOptions<
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

export function getDeleteRealmClientsIdRolesRoleNameMutationKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name', 'DELETE'] as const
}

export function getDeleteRealmClientsIdRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdRolesRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientsIdRolesRoleName<
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
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsIdRolesRoleNameMutationOptions<
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

export function getRealmClientsIdRolesRoleNameCompositesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', args] as const
}

export function getRealmClientsIdRolesRoleNameCompositesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameCompositesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameComposites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesQueryKey>
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
      ...getRealmClientsIdRolesRoleNameCompositesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdRolesRoleNameCompositesMutationKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', 'POST'] as const
}

export function getPostRealmClientsIdRolesRoleNameCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdRolesRoleNameCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdRolesRoleNameComposites<
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
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$post']
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
    const mutationDefaults = getPostRealmClientsIdRolesRoleNameCompositesMutationOptions<
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

export function getDeleteRealmClientsIdRolesRoleNameCompositesMutationKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', 'DELETE'] as const
}

export function getDeleteRealmClientsIdRolesRoleNameCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdRolesRoleNameCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientsIdRolesRoleNameComposites<
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
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsIdRolesRoleNameCompositesMutationOptions<
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

export function getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/roles/:role-name/composites/clients/:client',
    args,
  ] as const
}

export function getRealmClientsIdRolesRoleNameCompositesClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameCompositesClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey>
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
      ...getRealmClientsIdRolesRoleNameCompositesClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdRolesRoleNameCompositesRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites/realm', args] as const
}

export function getRealmClientsIdRolesRoleNameCompositesRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesRealmQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameCompositesRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameCompositesRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesRealmQueryKey>
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
      ...getRealmClientsIdRolesRoleNameCompositesRealmQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdRolesRoleNameGroupsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/groups', args] as const
}

export function getRealmClientsIdRolesRoleNameGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameGroupsQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameGroupsQueryKey>
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
      ...getRealmClientsIdRolesRoleNameGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/management/permissions', args] as const
}

export function getRealmClientsIdRolesRoleNameManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey>
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
      ...getRealmClientsIdRolesRoleNameManagementPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmClientsIdRolesRoleNameManagementPermissionsMutationKey() {
  return [':realm', '/:realm/clients/:id/roles/:role-name/management/permissions', 'PUT'] as const
}

export function getPutRealmClientsIdRolesRoleNameManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmClientsIdRolesRoleNameManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmClientsIdRolesRoleNameManagementPermissions<
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
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$put']
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
    const mutationDefaults = getPutRealmClientsIdRolesRoleNameManagementPermissionsMutationOptions<
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

export function getRealmClientsIdRolesRoleNameUsersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/users', args] as const
}

export function getRealmClientsIdRolesRoleNameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameUsersQueryKey>
  >({
    queryKey: getRealmClientsIdRolesRoleNameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdRolesRoleNameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdRolesRoleNameUsersQueryKey>
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
      ...getRealmClientsIdRolesRoleNameUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdScopeMappingsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings', args] as const
}

export function getRealmClientsIdScopeMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsQueryKey>
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
      ...getRealmClientsIdScopeMappingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdScopeMappingsClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', args] as const
}

export function getRealmClientsIdScopeMappingsClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientQueryKey>
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
      ...getRealmClientsIdScopeMappingsClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdScopeMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', 'POST'] as const
}

export function getPostRealmClientsIdScopeMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdScopeMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdScopeMappingsClientsClient<
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
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$post']
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
    const mutationDefaults = getPostRealmClientsIdScopeMappingsClientsClientMutationOptions<
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

export function getDeleteRealmClientsIdScopeMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', 'DELETE'] as const
}

export function getDeleteRealmClientsIdScopeMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdScopeMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientsIdScopeMappingsClientsClient<
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
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsIdScopeMappingsClientsClientMutationOptions<
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

export function getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client/available', args] as const
}

export function getRealmClientsIdScopeMappingsClientsClientAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsClientsClientAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey>
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
      ...getRealmClientsIdScopeMappingsClientsClientAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client/composite', args] as const
}

export function getRealmClientsIdScopeMappingsClientsClientCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsClientsClientComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey>
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
      ...getRealmClientsIdScopeMappingsClientsClientCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdScopeMappingsRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', args] as const
}

export function getRealmClientsIdScopeMappingsRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsRealmQueryKey>
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
      ...getRealmClientsIdScopeMappingsRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmClientsIdScopeMappingsRealmMutationKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', 'POST'] as const
}

export function getPostRealmClientsIdScopeMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmClientsIdScopeMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.$post(args, options),
      )
    },
  })
}

export function injectPostRealmClientsIdScopeMappingsRealm<
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
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$post']
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
    const mutationDefaults = getPostRealmClientsIdScopeMappingsRealmMutationOptions<
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

export function getDeleteRealmClientsIdScopeMappingsRealmMutationKey() {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', 'DELETE'] as const
}

export function getDeleteRealmClientsIdScopeMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmClientsIdScopeMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmClientsIdScopeMappingsRealm<
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
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$delete']
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
    const mutationDefaults = getDeleteRealmClientsIdScopeMappingsRealmMutationOptions<
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

export function getRealmClientsIdScopeMappingsRealmAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/available', args] as const
}

export function getRealmClientsIdScopeMappingsRealmAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmAvailableQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsRealmAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsRealmAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsRealmAvailableQueryKey>
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
      ...getRealmClientsIdScopeMappingsRealmAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdScopeMappingsRealmCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/composite', args] as const
}

export function getRealmClientsIdScopeMappingsRealmCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmCompositeQueryKey>
  >({
    queryKey: getRealmClientsIdScopeMappingsRealmCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdScopeMappingsRealmComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdScopeMappingsRealmCompositeQueryKey>
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
      ...getRealmClientsIdScopeMappingsRealmCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdServiceAccountUserQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/service-account-user', args] as const
}

export function getRealmClientsIdServiceAccountUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdServiceAccountUserQueryKey>
  >({
    queryKey: getRealmClientsIdServiceAccountUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['service-account-user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdServiceAccountUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdServiceAccountUserQueryKey>
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
      ...getRealmClientsIdServiceAccountUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdSessionCountQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/session-count', args] as const
}

export function getRealmClientsIdSessionCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdSessionCountQueryKey>
  >({
    queryKey: getRealmClientsIdSessionCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['session-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdSessionCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['session-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdSessionCountQueryKey>
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
      ...getRealmClientsIdSessionCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdTestNodesAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
) {
  return [':realm', '/:realm/clients/:id/test-nodes-available', args] as const
}

export function getRealmClientsIdTestNodesAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdTestNodesAvailableQueryKey>
  >({
    queryKey: getRealmClientsIdTestNodesAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['test-nodes-available'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdTestNodesAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdTestNodesAvailableQueryKey>
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
      ...getRealmClientsIdTestNodesAvailableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmClientsIdUserSessionsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
) {
  return [':realm', '/:realm/clients/:id/user-sessions', args] as const
}

export function getRealmClientsIdUserSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdUserSessionsQueryKey>
  >({
    queryKey: getRealmClientsIdUserSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].clients[':id']['user-sessions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmClientsIdUserSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['clients'][':id']['user-sessions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmClientsIdUserSessionsQueryKey>
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
      ...getRealmClientsIdUserSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmComponentsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
) {
  return [':realm', '/:realm/components', args] as const
}

export function getRealmComponentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsQueryKey>
  >({
    queryKey: getRealmComponentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].components.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['components']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmComponentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmComponentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmComponentsMutationKey() {
  return [':realm', '/:realm/components', 'POST'] as const
}

export function getPostRealmComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['components']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmComponentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['components']['$post']>) {
      return parseResponse(client[':realm'].components.$post(args, options))
    },
  })
}

export function injectPostRealmComponents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['components']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['components']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmComponentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmComponentsIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
) {
  return [':realm', '/:realm/components/:id', args] as const
}

export function getRealmComponentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsIdQueryKey>
  >({
    queryKey: getRealmComponentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].components[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmComponentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmComponentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmComponentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmComponentsIdMutationKey() {
  return [':realm', '/:realm/components/:id', 'PUT'] as const
}

export function getPutRealmComponentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['components'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmComponentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['components'][':id']['$put']>,
    ) {
      return parseResponse(client[':realm'].components[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmComponentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['components'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmComponentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmComponentsIdMutationKey() {
  return [':realm', '/:realm/components/:id', 'DELETE'] as const
}

export function getDeleteRealmComponentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmComponentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']>,
    ) {
      return parseResponse(client[':realm'].components[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmComponentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['components'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmComponentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmComponentsIdSubComponentTypesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
) {
  return [':realm', '/:realm/components/:id/sub-component-types', args] as const
}

export function getRealmComponentsIdSubComponentTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['components'][':id']['sub-component-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsIdSubComponentTypesQueryKey>
  >({
    queryKey: getRealmComponentsIdSubComponentTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].components[':id']['sub-component-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmComponentsIdSubComponentTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['components'][':id']['sub-component-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmComponentsIdSubComponentTypesQueryKey>
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
      ...getRealmComponentsIdSubComponentTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmCredentialRegistratorsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
) {
  return [':realm', '/:realm/credential-registrators', args] as const
}

export function getRealmCredentialRegistratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmCredentialRegistratorsQueryKey>
  >({
    queryKey: getRealmCredentialRegistratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['credential-registrators'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmCredentialRegistrators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmCredentialRegistratorsQueryKey>
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
      ...getRealmCredentialRegistratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmDefaultDefaultClientScopesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
) {
  return [':realm', '/:realm/default-default-client-scopes', args] as const
}

export function getRealmDefaultDefaultClientScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultDefaultClientScopesQueryKey>
  >({
    queryKey: getRealmDefaultDefaultClientScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['default-default-client-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmDefaultDefaultClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmDefaultDefaultClientScopesQueryKey>
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
      ...getRealmDefaultDefaultClientScopesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmDefaultDefaultClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/default-default-client-scopes/:clientScopeId', 'PUT'] as const
}

export function getPutRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmDefaultDefaultClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['default-default-client-scopes'][':clientScopeId'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmDefaultDefaultClientScopesClientScopeId<
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
                  (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$put']
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
    const mutationDefaults = getPutRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
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

export function getDeleteRealmDefaultDefaultClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/default-default-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function getDeleteRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmDefaultDefaultClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['default-default-client-scopes'][':clientScopeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmDefaultDefaultClientScopesClientScopeId<
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
                  (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['default-default-client-scopes'][':clientScopeId']['$delete']
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
    const mutationDefaults = getDeleteRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
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

export function getRealmDefaultGroupsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
) {
  return [':realm', '/:realm/default-groups', args] as const
}

export function getRealmDefaultGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultGroupsQueryKey>
  >({
    queryKey: getRealmDefaultGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['default-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmDefaultGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['default-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmDefaultGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmDefaultGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmDefaultGroupsGroupIdMutationKey() {
  return [':realm', '/:realm/default-groups/:groupId', 'PUT'] as const
}

export function getPutRealmDefaultGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmDefaultGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>,
    ) {
      return parseResponse(client[':realm']['default-groups'][':groupId'].$put(args, options))
    },
  })
}

export function injectPutRealmDefaultGroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmDefaultGroupsGroupIdMutationOptions<
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

export function getDeleteRealmDefaultGroupsGroupIdMutationKey() {
  return [':realm', '/:realm/default-groups/:groupId', 'DELETE'] as const
}

export function getDeleteRealmDefaultGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmDefaultGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>,
    ) {
      return parseResponse(client[':realm']['default-groups'][':groupId'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmDefaultGroupsGroupId<
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
                ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmDefaultGroupsGroupIdMutationOptions<
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

export function getRealmDefaultOptionalClientScopesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
) {
  return [':realm', '/:realm/default-optional-client-scopes', args] as const
}

export function getRealmDefaultOptionalClientScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultOptionalClientScopesQueryKey>
  >({
    queryKey: getRealmDefaultOptionalClientScopesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['default-optional-client-scopes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmDefaultOptionalClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmDefaultOptionalClientScopesQueryKey>
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
      ...getRealmDefaultOptionalClientScopesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmDefaultOptionalClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/default-optional-client-scopes/:clientScopeId', 'PUT'] as const
}

export function getPutRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmDefaultOptionalClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['default-optional-client-scopes'][':clientScopeId'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmDefaultOptionalClientScopesClientScopeId<
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
                  (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$put']
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
    const mutationDefaults = getPutRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
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

export function getDeleteRealmDefaultOptionalClientScopesClientScopeIdMutationKey() {
  return [':realm', '/:realm/default-optional-client-scopes/:clientScopeId', 'DELETE'] as const
}

export function getDeleteRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmDefaultOptionalClientScopesClientScopeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['default-optional-client-scopes'][':clientScopeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmDefaultOptionalClientScopesClientScopeId<
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
                  (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['default-optional-client-scopes'][':clientScopeId']['$delete']
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
    const mutationDefaults = getDeleteRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
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

export function getRealmEventsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
) {
  return [':realm', '/:realm/events', args] as const
}

export function getRealmEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmEventsQueryKey>
  >({
    queryKey: getRealmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteRealmEventsMutationKey() {
  return [':realm', '/:realm/events', 'DELETE'] as const
}

export function getDeleteRealmEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['events']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['events']['$delete']>) {
      return parseResponse(client[':realm'].events.$delete(args, options))
    },
  })
}

export function injectDeleteRealmEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['events']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['events']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmEventsConfigQueryKey(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
) {
  return [':realm', '/:realm/events/config', args] as const
}

export function getRealmEventsConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmEventsConfigQueryKey>
  >({
    queryKey: getRealmEventsConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].events.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmEventsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['events']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmEventsConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmEventsConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmEventsConfigMutationKey() {
  return [':realm', '/:realm/events/config', 'PUT'] as const
}

export function getPutRealmEventsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['events']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmEventsConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['events']['config']['$put']>,
    ) {
      return parseResponse(client[':realm'].events.config.$put(args, options))
    },
  })
}

export function injectPutRealmEventsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['events']['config']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmEventsConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmGroupByPathPathQueryKey(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
) {
  return [':realm', '/:realm/group-by-path/:path', args] as const
}

export function getRealmGroupByPathPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupByPathPathQueryKey>
  >({
    queryKey: getRealmGroupByPathPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['group-by-path'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupByPathPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupByPathPathQueryKey>
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
      ...getRealmGroupByPathPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
) {
  return [':realm', '/:realm/groups', args] as const
}

export function getRealmGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsQueryKey>
  >({
    queryKey: getRealmGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmGroupsMutationKey() {
  return [':realm', '/:realm/groups', 'POST'] as const
}

export function getPostRealmGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['groups']['$post']>) {
      return parseResponse(client[':realm'].groups.$post(args, options))
    },
  })
}

export function injectPostRealmGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmGroupsCountQueryKey(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
) {
  return [':realm', '/:realm/groups/count', args] as const
}

export function getRealmGroupsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsCountQueryKey>
  >({
    queryKey: getRealmGroupsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmGroupsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRealmGroupsIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
) {
  return [':realm', '/:realm/groups/:id', args] as const
}

export function getRealmGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdQueryKey>
  >({
    queryKey: getRealmGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmGroupsIdMutationKey() {
  return [':realm', '/:realm/groups/:id', 'PUT'] as const
}

export function getPutRealmGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']>) {
      return parseResponse(client[':realm'].groups[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['groups'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmGroupsIdMutationKey() {
  return [':realm', '/:realm/groups/:id', 'DELETE'] as const
}

export function getDeleteRealmGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']>,
    ) {
      return parseResponse(client[':realm'].groups[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['groups'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmGroupsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmGroupsIdChildrenMutationKey() {
  return [':realm', '/:realm/groups/:id/children', 'POST'] as const
}

export function getPostRealmGroupsIdChildrenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['children']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmGroupsIdChildrenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>,
    ) {
      return parseResponse(client[':realm'].groups[':id'].children.$post(args, options))
    },
  })
}

export function injectPostRealmGroupsIdChildren<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['children']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['groups'][':id']['children']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmGroupsIdChildrenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmGroupsIdManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/management/permissions', args] as const
}

export function getRealmGroupsIdManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdManagementPermissionsQueryKey>
  >({
    queryKey: getRealmGroupsIdManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id'].management.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdManagementPermissionsQueryKey>
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
      ...getRealmGroupsIdManagementPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmGroupsIdManagementPermissionsMutationKey() {
  return [':realm', '/:realm/groups/:id/management/permissions', 'PUT'] as const
}

export function getPutRealmGroupsIdManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmGroupsIdManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].groups[':id'].management.permissions.$put(args, options),
      )
    },
  })
}

export function injectPutRealmGroupsIdManagementPermissions<
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
                  (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['groups'][':id']['management']['permissions']['$put']
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
    const mutationDefaults = getPutRealmGroupsIdManagementPermissionsMutationOptions<
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

export function getRealmGroupsIdMembersQueryKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
) {
  return [':realm', '/:realm/groups/:id/members', args] as const
}

export function getRealmGroupsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdMembersQueryKey>
  >({
    queryKey: getRealmGroupsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdMembersQueryKey>
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
      ...getRealmGroupsIdMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsIdRoleMappingsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
) {
  return [':realm', '/:realm/groups/:id/role-mappings', args] as const
}

export function getRealmGroupsIdRoleMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsQueryKey>
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
      ...getRealmGroupsIdRoleMappingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsIdRoleMappingsClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', args] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientQueryKey>
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
      ...getRealmGroupsIdRoleMappingsClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmGroupsIdRoleMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', 'POST'] as const
}

export function getPostRealmGroupsIdRoleMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmGroupsIdRoleMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmGroupsIdRoleMappingsClientsClient<
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
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$post']
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
    const mutationDefaults = getPostRealmGroupsIdRoleMappingsClientsClientMutationOptions<
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

export function getDeleteRealmGroupsIdRoleMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', 'DELETE'] as const
}

export function getDeleteRealmGroupsIdRoleMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmGroupsIdRoleMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmGroupsIdRoleMappingsClientsClient<
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
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$delete']
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
    const mutationDefaults = getDeleteRealmGroupsIdRoleMappingsClientsClientMutationOptions<
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

export function getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client/available', args] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsClientsClientAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey>
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
      ...getRealmGroupsIdRoleMappingsClientsClientAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client/composite', args] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsClientsClientComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey>
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
      ...getRealmGroupsIdRoleMappingsClientsClientCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsIdRoleMappingsRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', args] as const
}

export function getRealmGroupsIdRoleMappingsRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsRealmQueryKey>
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
      ...getRealmGroupsIdRoleMappingsRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmGroupsIdRoleMappingsRealmMutationKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', 'POST'] as const
}

export function getPostRealmGroupsIdRoleMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmGroupsIdRoleMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.$post(args, options),
      )
    },
  })
}

export function injectPostRealmGroupsIdRoleMappingsRealm<
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
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$post']
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
    const mutationDefaults = getPostRealmGroupsIdRoleMappingsRealmMutationOptions<
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

export function getDeleteRealmGroupsIdRoleMappingsRealmMutationKey() {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', 'DELETE'] as const
}

export function getDeleteRealmGroupsIdRoleMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmGroupsIdRoleMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmGroupsIdRoleMappingsRealm<
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
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$delete']
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
    const mutationDefaults = getDeleteRealmGroupsIdRoleMappingsRealmMutationOptions<
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

export function getRealmGroupsIdRoleMappingsRealmAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/available', args] as const
}

export function getRealmGroupsIdRoleMappingsRealmAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmAvailableQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsRealmAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsRealmAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsRealmAvailableQueryKey>
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
      ...getRealmGroupsIdRoleMappingsRealmAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmGroupsIdRoleMappingsRealmCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/composite', args] as const
}

export function getRealmGroupsIdRoleMappingsRealmCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmCompositeQueryKey>
  >({
    queryKey: getRealmGroupsIdRoleMappingsRealmCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmGroupsIdRoleMappingsRealmComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmGroupsIdRoleMappingsRealmCompositeQueryKey>
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
      ...getRealmGroupsIdRoleMappingsRealmCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmIdentityProviderImportConfigMutationKey() {
  return [':realm', '/:realm/identity-provider/import-config', 'POST'] as const
}

export function getPostRealmIdentityProviderImportConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmIdentityProviderImportConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['import-config']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider']['import-config'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmIdentityProviderImportConfig<
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
                ReturnType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['identity-provider']['import-config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmIdentityProviderImportConfigMutationOptions<
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

export function getRealmIdentityProviderInstancesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
) {
  return [':realm', '/:realm/identity-provider/instances', args] as const
}

export function getRealmIdentityProviderInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesQueryKey>
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
      ...getRealmIdentityProviderInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmIdentityProviderInstancesMutationKey() {
  return [':realm', '/:realm/identity-provider/instances', 'POST'] as const
}

export function getPostRealmIdentityProviderInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmIdentityProviderInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>,
    ) {
      return parseResponse(client[':realm']['identity-provider'].instances.$post(args, options))
    },
  })
}

export function injectPostRealmIdentityProviderInstances<
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
                ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmIdentityProviderInstancesMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias', args] as const
}

export function getRealmIdentityProviderInstancesAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmIdentityProviderInstancesAliasMutationKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias', 'PUT'] as const
}

export function getPutRealmIdentityProviderInstancesAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmIdentityProviderInstancesAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmIdentityProviderInstancesAlias<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['$put']
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
    const mutationDefaults = getPutRealmIdentityProviderInstancesAliasMutationOptions<
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

export function getDeleteRealmIdentityProviderInstancesAliasMutationKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias', 'DELETE'] as const
}

export function getDeleteRealmIdentityProviderInstancesAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmIdentityProviderInstancesAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmIdentityProviderInstancesAlias<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['$delete']
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
    const mutationDefaults = getDeleteRealmIdentityProviderInstancesAliasMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasExportQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/export', args] as const
}

export function getRealmIdentityProviderInstancesAliasExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasExportQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAliasExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasExportQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasExportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
) {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/management/permissions',
    args,
  ] as const
}

export function getRealmIdentityProviderInstancesAliasManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAliasManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasManagementPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmIdentityProviderInstancesAliasManagementPermissionsMutationKey() {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/management/permissions',
    'PUT',
  ] as const
}

export function getPutRealmIdentityProviderInstancesAliasManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmIdentityProviderInstancesAliasManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].management.permissions.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmIdentityProviderInstancesAliasManagementPermissions<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$put']
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
      getPutRealmIdentityProviderInstancesAliasManagementPermissionsMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasMapperTypesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mapper-types', args] as const
}

export function getRealmIdentityProviderInstancesAliasMapperTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMapperTypesQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasMapperTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAliasMapperTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasMapperTypesQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasMapperTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmIdentityProviderInstancesAliasMappersQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers', args] as const
}

export function getRealmIdentityProviderInstancesAliasMappersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasMappersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAliasMappers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasMappersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmIdentityProviderInstancesAliasMappersMutationKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers', 'POST'] as const
}

export function getPostRealmIdentityProviderInstancesAliasMappersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmIdentityProviderInstancesAliasMappersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers.$post(args, options),
      )
    },
  })
}

export function injectPostRealmIdentityProviderInstancesAliasMappers<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$post']
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
    const mutationDefaults = getPostRealmIdentityProviderInstancesAliasMappersMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasMappersIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', args] as const
}

export function getRealmIdentityProviderInstancesAliasMappersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersIdQueryKey>
  >({
    queryKey: getRealmIdentityProviderInstancesAliasMappersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderInstancesAliasMappersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersIdQueryKey>
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
      ...getRealmIdentityProviderInstancesAliasMappersIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmIdentityProviderInstancesAliasMappersIdMutationKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', 'PUT'] as const
}

export function getPutRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmIdentityProviderInstancesAliasMappersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutRealmIdentityProviderInstancesAliasMappersId<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$put']
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
    const mutationDefaults = getPutRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
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

export function getDeleteRealmIdentityProviderInstancesAliasMappersIdMutationKey() {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers/:id', 'DELETE'] as const
}

export function getDeleteRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmIdentityProviderInstancesAliasMappersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteRealmIdentityProviderInstancesAliasMappersId<
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
                  (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$delete']
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
    const mutationDefaults = getDeleteRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
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

export function getRealmIdentityProviderProvidersProviderIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
) {
  return [':realm', '/:realm/identity-provider/providers/:provider_id', args] as const
}

export function getRealmIdentityProviderProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderProvidersProviderIdQueryKey>
  >({
    queryKey: getRealmIdentityProviderProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['identity-provider'].providers[':provider_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmIdentityProviderProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmIdentityProviderProvidersProviderIdQueryKey>
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
      ...getRealmIdentityProviderProvidersProviderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmKeysQueryKey(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
) {
  return [':realm', '/:realm/keys', args] as const
}

export function getRealmKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmKeysQueryKey>
  >({
    queryKey: getRealmKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmLogoutAllMutationKey() {
  return [':realm', '/:realm/logout-all', 'POST'] as const
}

export function getPostRealmLogoutAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['logout-all']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['logout-all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmLogoutAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['logout-all']['$post']>) {
      return parseResponse(client[':realm']['logout-all'].$post(args, options))
    },
  })
}

export function injectPostRealmLogoutAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['logout-all']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['logout-all']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmLogoutAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmPartialExportMutationKey() {
  return [':realm', '/:realm/partial-export', 'POST'] as const
}

export function getPostRealmPartialExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['partial-export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['partial-export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmPartialExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['partial-export']['$post']>) {
      return parseResponse(client[':realm']['partial-export'].$post(args, options))
    },
  })
}

export function injectPostRealmPartialExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['partial-export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['partial-export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmPartialExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmPartialImportMutationKey() {
  return [':realm', '/:realm/partialImport', 'POST'] as const
}

export function getPostRealmPartialImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['partialImport']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['partialImport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmPartialImportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['partialImport']['$post']>) {
      return parseResponse(client[':realm'].partialImport.$post(args, options))
    },
  })
}

export function injectPostRealmPartialImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['partialImport']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['partialImport']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmPartialImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmPushRevocationMutationKey() {
  return [':realm', '/:realm/push-revocation', 'POST'] as const
}

export function getPostRealmPushRevocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['push-revocation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['push-revocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmPushRevocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['push-revocation']['$post']>,
    ) {
      return parseResponse(client[':realm']['push-revocation'].$post(args, options))
    },
  })
}

export function injectPostRealmPushRevocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['push-revocation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['push-revocation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmPushRevocationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmRolesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
) {
  return [':realm', '/:realm/roles', args] as const
}

export function getRealmRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesQueryKey>
  >({
    queryKey: getRealmRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmRolesMutationKey() {
  return [':realm', '/:realm/roles', 'POST'] as const
}

export function getPostRealmRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['roles']['$post']>) {
      return parseResponse(client[':realm'].roles.$post(args, options))
    },
  })
}

export function injectPostRealmRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmRolesByIdRoleIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
) {
  return [':realm', '/:realm/roles-by-id/:role-id', args] as const
}

export function getRealmRolesByIdRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdQueryKey>
  >({
    queryKey: getRealmRolesByIdRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesByIdRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesByIdRoleIdQueryKey>
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
      ...getRealmRolesByIdRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmRolesByIdRoleIdMutationKey() {
  return [':realm', '/:realm/roles-by-id/:role-id', 'PUT'] as const
}

export function getPutRealmRolesByIdRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmRolesByIdRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>,
    ) {
      return parseResponse(client[':realm']['roles-by-id'][':role-id'].$put(args, options))
    },
  })
}

export function injectPutRealmRolesByIdRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmRolesByIdRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmRolesByIdRoleIdMutationKey() {
  return [':realm', '/:realm/roles-by-id/:role-id', 'DELETE'] as const
}

export function getDeleteRealmRolesByIdRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmRolesByIdRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>,
    ) {
      return parseResponse(client[':realm']['roles-by-id'][':role-id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmRolesByIdRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmRolesByIdRoleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmRolesByIdRoleIdCompositesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', args] as const
}

export function getRealmRolesByIdRoleIdCompositesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesQueryKey>
  >({
    queryKey: getRealmRolesByIdRoleIdCompositesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesByIdRoleIdComposites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesByIdRoleIdCompositesQueryKey>
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
      ...getRealmRolesByIdRoleIdCompositesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmRolesByIdRoleIdCompositesMutationKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', 'POST'] as const
}

export function getPostRealmRolesByIdRoleIdCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmRolesByIdRoleIdCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.$post(args, options),
      )
    },
  })
}

export function injectPostRealmRolesByIdRoleIdComposites<
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
                  (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$post']
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
    const mutationDefaults = getPostRealmRolesByIdRoleIdCompositesMutationOptions<
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

export function getDeleteRealmRolesByIdRoleIdCompositesMutationKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', 'DELETE'] as const
}

export function getDeleteRealmRolesByIdRoleIdCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmRolesByIdRoleIdCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmRolesByIdRoleIdComposites<
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
                  (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$delete']
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
    const mutationDefaults = getDeleteRealmRolesByIdRoleIdCompositesMutationOptions<
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

export function getRealmRolesByIdRoleIdCompositesClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites/clients/:client', args] as const
}

export function getRealmRolesByIdRoleIdCompositesClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesClientsClientQueryKey>
  >({
    queryKey: getRealmRolesByIdRoleIdCompositesClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesByIdRoleIdCompositesClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesByIdRoleIdCompositesClientsClientQueryKey>
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
      ...getRealmRolesByIdRoleIdCompositesClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmRolesByIdRoleIdCompositesRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites/realm', args] as const
}

export function getRealmRolesByIdRoleIdCompositesRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesRealmQueryKey>
  >({
    queryKey: getRealmRolesByIdRoleIdCompositesRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesByIdRoleIdCompositesRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesByIdRoleIdCompositesRealmQueryKey>
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
      ...getRealmRolesByIdRoleIdCompositesRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmRolesByIdRoleIdManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/management/permissions', args] as const
}

export function getRealmRolesByIdRoleIdManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdManagementPermissionsQueryKey>
  >({
    queryKey: getRealmRolesByIdRoleIdManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesByIdRoleIdManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesByIdRoleIdManagementPermissionsQueryKey>
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
      ...getRealmRolesByIdRoleIdManagementPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmRolesByIdRoleIdManagementPermissionsMutationKey() {
  return [':realm', '/:realm/roles-by-id/:role-id/management/permissions', 'PUT'] as const
}

export function getPutRealmRolesByIdRoleIdManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmRolesByIdRoleIdManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].management.permissions.$put(args, options),
      )
    },
  })
}

export function injectPutRealmRolesByIdRoleIdManagementPermissions<
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
                  (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$put']
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
    const mutationDefaults = getPutRealmRolesByIdRoleIdManagementPermissionsMutationOptions<
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

export function getRealmRolesRoleNameQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name', args] as const
}

export function getRealmRolesRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameQueryKey>
  >({
    queryKey: getRealmRolesRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmRolesRoleNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmRolesRoleNameMutationKey() {
  return [':realm', '/:realm/roles/:role-name', 'PUT'] as const
}

export function getPutRealmRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmRolesRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']>,
    ) {
      return parseResponse(client[':realm'].roles[':role-name'].$put(args, options))
    },
  })
}

export function injectPutRealmRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmRolesRoleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmRolesRoleNameMutationKey() {
  return [':realm', '/:realm/roles/:role-name', 'DELETE'] as const
}

export function getDeleteRealmRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmRolesRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']>,
    ) {
      return parseResponse(client[':realm'].roles[':role-name'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmRolesRoleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmRolesRoleNameCompositesQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/composites', args] as const
}

export function getRealmRolesRoleNameCompositesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesQueryKey>
  >({
    queryKey: getRealmRolesRoleNameCompositesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameComposites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameCompositesQueryKey>
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
      ...getRealmRolesRoleNameCompositesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmRolesRoleNameCompositesMutationKey() {
  return [':realm', '/:realm/roles/:role-name/composites', 'POST'] as const
}

export function getPostRealmRolesRoleNameCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmRolesRoleNameCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles'][':role-name']['composites']['$post']
      >,
    ) {
      return parseResponse(client[':realm'].roles[':role-name'].composites.$post(args, options))
    },
  })
}

export function injectPostRealmRolesRoleNameComposites<
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
                ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmRolesRoleNameCompositesMutationOptions<
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

export function getDeleteRealmRolesRoleNameCompositesMutationKey() {
  return [':realm', '/:realm/roles/:role-name/composites', 'DELETE'] as const
}

export function getDeleteRealmRolesRoleNameCompositesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmRolesRoleNameCompositesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles'][':role-name']['composites']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].roles[':role-name'].composites.$delete(args, options))
    },
  })
}

export function injectDeleteRealmRolesRoleNameComposites<
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
                  (typeof client)[':realm']['roles'][':role-name']['composites']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmRolesRoleNameCompositesMutationOptions<
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

export function getRealmRolesRoleNameCompositesClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/clients/:client', args] as const
}

export function getRealmRolesRoleNameCompositesClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesClientsClientQueryKey>
  >({
    queryKey: getRealmRolesRoleNameCompositesClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameCompositesClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameCompositesClientsClientQueryKey>
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
      ...getRealmRolesRoleNameCompositesClientsClientQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmRolesRoleNameCompositesRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/realm', args] as const
}

export function getRealmRolesRoleNameCompositesRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesRealmQueryKey>
  >({
    queryKey: getRealmRolesRoleNameCompositesRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameCompositesRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameCompositesRealmQueryKey>
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
      ...getRealmRolesRoleNameCompositesRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmRolesRoleNameGroupsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/groups', args] as const
}

export function getRealmRolesRoleNameGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameGroupsQueryKey>
  >({
    queryKey: getRealmRolesRoleNameGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameGroupsQueryKey>
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
      ...getRealmRolesRoleNameGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmRolesRoleNameManagementPermissionsQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
) {
  return [':realm', '/:realm/roles/:role-name/management/permissions', args] as const
}

export function getRealmRolesRoleNameManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameManagementPermissionsQueryKey>
  >({
    queryKey: getRealmRolesRoleNameManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].management.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameManagementPermissionsQueryKey>
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
      ...getRealmRolesRoleNameManagementPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmRolesRoleNameManagementPermissionsMutationKey() {
  return [':realm', '/:realm/roles/:role-name/management/permissions', 'PUT'] as const
}

export function getPutRealmRolesRoleNameManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmRolesRoleNameManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].roles[':role-name'].management.permissions.$put(args, options),
      )
    },
  })
}

export function injectPutRealmRolesRoleNameManagementPermissions<
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
                  (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$put']
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
    const mutationDefaults = getPutRealmRolesRoleNameManagementPermissionsMutationOptions<
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

export function getRealmRolesRoleNameUsersQueryKey(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
) {
  return [':realm', '/:realm/roles/:role-name/users', args] as const
}

export function getRealmRolesRoleNameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameUsersQueryKey>
  >({
    queryKey: getRealmRolesRoleNameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].roles[':role-name'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmRolesRoleNameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmRolesRoleNameUsersQueryKey>
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
      ...getRealmRolesRoleNameUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRealmSessionsSessionMutationKey() {
  return [':realm', '/:realm/sessions/:session', 'DELETE'] as const
}

export function getDeleteRealmSessionsSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['sessions'][':session']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmSessionsSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']>,
    ) {
      return parseResponse(client[':realm'].sessions[':session'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmSessionsSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['sessions'][':session']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['sessions'][':session']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmSessionsSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmTestLDAPConnectionMutationKey() {
  return [':realm', '/:realm/testLDAPConnection', 'POST'] as const
}

export function getPostRealmTestLDAPConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['testLDAPConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmTestLDAPConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']>,
    ) {
      return parseResponse(client[':realm'].testLDAPConnection.$post(args, options))
    },
  })
}

export function injectPostRealmTestLDAPConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['testLDAPConnection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['testLDAPConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmTestLDAPConnectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmTestSMTPConnectionMutationKey() {
  return [':realm', '/:realm/testSMTPConnection', 'POST'] as const
}

export function getPostRealmTestSMTPConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['testSMTPConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmTestSMTPConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']>,
    ) {
      return parseResponse(client[':realm'].testSMTPConnection.$post(args, options))
    },
  })
}

export function injectPostRealmTestSMTPConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['testSMTPConnection']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['testSMTPConnection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmTestSMTPConnectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmUserStorageIdNameQueryKey(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
) {
  return [':realm', '/:realm/user-storage/:id/name', args] as const
}

export function getRealmUserStorageIdNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUserStorageIdNameQueryKey>
  >({
    queryKey: getRealmUserStorageIdNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['user-storage'][':id'].name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUserStorageIdName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUserStorageIdNameQueryKey>
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
      ...getRealmUserStorageIdNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmUserStorageIdRemoveImportedUsersMutationKey() {
  return [':realm', '/:realm/user-storage/:id/remove-imported-users', 'POST'] as const
}

export function getPostRealmUserStorageIdRemoveImportedUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUserStorageIdRemoveImportedUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['user-storage'][':id']['remove-imported-users'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmUserStorageIdRemoveImportedUsers<
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
                  (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['user-storage'][':id']['remove-imported-users']['$post']
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
    const mutationDefaults = getPostRealmUserStorageIdRemoveImportedUsersMutationOptions<
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

export function getPostRealmUserStorageIdSyncMutationKey() {
  return [':realm', '/:realm/user-storage/:id/sync', 'POST'] as const
}

export function getPostRealmUserStorageIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUserStorageIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>,
    ) {
      return parseResponse(client[':realm']['user-storage'][':id'].sync.$post(args, options))
    },
  })
}

export function injectPostRealmUserStorageIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmUserStorageIdSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRealmUserStorageIdUnlinkUsersMutationKey() {
  return [':realm', '/:realm/user-storage/:id/unlink-users', 'POST'] as const
}

export function getPostRealmUserStorageIdUnlinkUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUserStorageIdUnlinkUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['user-storage'][':id']['unlink-users'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmUserStorageIdUnlinkUsers<
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
                  (typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmUserStorageIdUnlinkUsersMutationOptions<
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

export function getPostRealmUserStorageParentIdMappersIdSyncMutationKey() {
  return [':realm', '/:realm/user-storage/:parentId/mappers/:id/sync', 'POST'] as const
}

export function getPostRealmUserStorageParentIdMappersIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUserStorageParentIdMappersIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm']['user-storage'][':parentId'].mappers[':id'].sync.$post(args, options),
      )
    },
  })
}

export function injectPostRealmUserStorageParentIdMappersIdSync<
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
                  (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['user-storage'][':parentId']['mappers'][':id']['sync']['$post']
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
    const mutationDefaults = getPostRealmUserStorageParentIdMappersIdSyncMutationOptions<
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

export function getRealmUsersQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
) {
  return [':realm', '/:realm/users', args] as const
}

export function getRealmUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersQueryKey>
  >({
    queryKey: getRealmUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRealmUsersMutationKey() {
  return [':realm', '/:realm/users', 'POST'] as const
}

export function getPostRealmUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['users']['$post']>) {
      return parseResponse(client[':realm'].users.$post(args, options))
    },
  })
}

export function injectPostRealmUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmUsersManagementPermissionsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
) {
  return [':realm', '/:realm/users-management-permissions', args] as const
}

export function getRealmUsersManagementPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersManagementPermissionsQueryKey>
  >({
    queryKey: getRealmUsersManagementPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm']['users-management-permissions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersManagementPermissionsQueryKey>
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
      ...getRealmUsersManagementPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmUsersManagementPermissionsMutationKey() {
  return [':realm', '/:realm/users-management-permissions', 'PUT'] as const
}

export function getPutRealmUsersManagementPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersManagementPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>,
    ) {
      return parseResponse(client[':realm']['users-management-permissions'].$put(args, options))
    },
  })
}

export function injectPutRealmUsersManagementPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmUsersManagementPermissionsMutationOptions<
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

export function getRealmUsersCountQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
) {
  return [':realm', '/:realm/users/count', args] as const
}

export function getRealmUsersCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersCountQueryKey>
  >({
    queryKey: getRealmUsersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRealmUsersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmUsersCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRealmUsersIdQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
) {
  return [':realm', '/:realm/users/:id', args] as const
}

export function getRealmUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdQueryKey>
  >({
    queryKey: getRealmUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRealmUsersIdMutationKey() {
  return [':realm', '/:realm/users/:id', 'PUT'] as const
}

export function getPutRealmUsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['users'][':id']['$put']>) {
      return parseResponse(client[':realm'].users[':id'].$put(args, options))
    },
  })
}

export function injectPutRealmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRealmUsersIdMutationKey() {
  return [':realm', '/:realm/users/:id', 'DELETE'] as const
}

export function getDeleteRealmUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']>) {
      return parseResponse(client[':realm'].users[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRealmUsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/configured-user-storage-credential-types', args] as const
}

export function getRealmUsersIdConfiguredUserStorageCredentialTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey>
  >({
    queryKey: getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdConfiguredUserStorageCredentialTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey>
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
      ...getRealmUsersIdConfiguredUserStorageCredentialTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmUsersIdConsentsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
) {
  return [':realm', '/:realm/users/:id/consents', args] as const
}

export function getRealmUsersIdConsentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdConsentsQueryKey>
  >({
    queryKey: getRealmUsersIdConsentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].consents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdConsents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdConsentsQueryKey>
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
      ...getRealmUsersIdConsentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRealmUsersIdConsentsClientMutationKey() {
  return [':realm', '/:realm/users/:id/consents/:client', 'DELETE'] as const
}

export function getDeleteRealmUsersIdConsentsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdConsentsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].users[':id'].consents[':client'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmUsersIdConsentsClient<
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
                  (typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['consents'][':client']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdConsentsClientMutationOptions<
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

export function getRealmUsersIdCredentialsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
) {
  return [':realm', '/:realm/users/:id/credentials', args] as const
}

export function getRealmUsersIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdCredentialsQueryKey>
  >({
    queryKey: getRealmUsersIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdCredentialsQueryKey>
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
      ...getRealmUsersIdCredentialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRealmUsersIdCredentialsCredentialIdMutationKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId', 'DELETE'] as const
}

export function getDeleteRealmUsersIdCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id'].credentials[':credentialId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmUsersIdCredentialsCredentialId<
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
                  (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdCredentialsCredentialIdMutationOptions<
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

export function getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdMutationKey() {
  return [
    ':realm',
    '/:realm/users/:id/credentials/:credentialId/moveAfter/:newPreviousCredentialId',
    'POST',
  ] as const
}

export function getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id'].credentials[':credentialId'].moveAfter[
          ':newPreviousCredentialId'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId<
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
                  (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveAfter'][':newPreviousCredentialId']['$post']
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
      getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdMutationOptions<
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

export function getPostRealmUsersIdCredentialsCredentialIdMoveToFirstMutationKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId/moveToFirst', 'POST'] as const
}

export function getPostRealmUsersIdCredentialsCredentialIdMoveToFirstMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdCredentialsCredentialIdMoveToFirstMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id'].credentials[':credentialId'].moveToFirst.$post(args, options),
      )
    },
  })
}

export function injectPostRealmUsersIdCredentialsCredentialIdMoveToFirst<
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
                  (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['moveToFirst']['$post']
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
    const mutationDefaults = getPostRealmUsersIdCredentialsCredentialIdMoveToFirstMutationOptions<
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

export function getPutRealmUsersIdCredentialsCredentialIdUserLabelMutationKey() {
  return [':realm', '/:realm/users/:id/credentials/:credentialId/userLabel', 'PUT'] as const
}

export function getPutRealmUsersIdCredentialsCredentialIdUserLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdCredentialsCredentialIdUserLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id'].credentials[':credentialId'].userLabel.$put(args, options),
      )
    },
  })
}

export function injectPutRealmUsersIdCredentialsCredentialIdUserLabel<
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
                  (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['credentials'][':credentialId']['userLabel']['$put']
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
    const mutationDefaults = getPutRealmUsersIdCredentialsCredentialIdUserLabelMutationOptions<
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

export function getPutRealmUsersIdDisableCredentialTypesMutationKey() {
  return [':realm', '/:realm/users/:id/disable-credential-types', 'PUT'] as const
}

export function getPutRealmUsersIdDisableCredentialTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdDisableCredentialTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['disable-credential-types'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmUsersIdDisableCredentialTypes<
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
                  (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['disable-credential-types']['$put']
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
    const mutationDefaults = getPutRealmUsersIdDisableCredentialTypesMutationOptions<
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

export function getPutRealmUsersIdExecuteActionsEmailMutationKey() {
  return [':realm', '/:realm/users/:id/execute-actions-email', 'PUT'] as const
}

export function getPutRealmUsersIdExecuteActionsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdExecuteActionsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['execute-actions-email'].$put(args, options),
      )
    },
  })
}

export function injectPutRealmUsersIdExecuteActionsEmail<
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
                  (typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['execute-actions-email']['$put']
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
    const mutationDefaults = getPutRealmUsersIdExecuteActionsEmailMutationOptions<
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

export function getRealmUsersIdFederatedIdentityQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
) {
  return [':realm', '/:realm/users/:id/federated-identity', args] as const
}

export function getRealmUsersIdFederatedIdentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdFederatedIdentityQueryKey>
  >({
    queryKey: getRealmUsersIdFederatedIdentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['federated-identity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdFederatedIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['federated-identity']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdFederatedIdentityQueryKey>
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
      ...getRealmUsersIdFederatedIdentityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmUsersIdFederatedIdentityProviderMutationKey() {
  return [':realm', '/:realm/users/:id/federated-identity/:provider', 'POST'] as const
}

export function getPostRealmUsersIdFederatedIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdFederatedIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['federated-identity'][':provider'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmUsersIdFederatedIdentityProvider<
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
                  (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$post']
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
    const mutationDefaults = getPostRealmUsersIdFederatedIdentityProviderMutationOptions<
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

export function getDeleteRealmUsersIdFederatedIdentityProviderMutationKey() {
  return [':realm', '/:realm/users/:id/federated-identity/:provider', 'DELETE'] as const
}

export function getDeleteRealmUsersIdFederatedIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdFederatedIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['federated-identity'][':provider'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmUsersIdFederatedIdentityProvider<
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
                  (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['federated-identity'][':provider']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdFederatedIdentityProviderMutationOptions<
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

export function getRealmUsersIdGroupsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
) {
  return [':realm', '/:realm/users/:id/groups', args] as const
}

export function getRealmUsersIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdGroupsQueryKey>
  >({
    queryKey: getRealmUsersIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRealmUsersIdGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRealmUsersIdGroupsCountQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
) {
  return [':realm', '/:realm/users/:id/groups/count', args] as const
}

export function getRealmUsersIdGroupsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdGroupsCountQueryKey>
  >({
    queryKey: getRealmUsersIdGroupsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].groups.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['groups']['count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdGroupsCountQueryKey>
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
      ...getRealmUsersIdGroupsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmUsersIdGroupsGroupIdMutationKey() {
  return [':realm', '/:realm/users/:id/groups/:groupId', 'PUT'] as const
}

export function getPutRealmUsersIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']
      >,
    ) {
      return parseResponse(client[':realm'].users[':id'].groups[':groupId'].$put(args, options))
    },
  })
}

export function injectPutRealmUsersIdGroupsGroupId<
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
                ReturnType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmUsersIdGroupsGroupIdMutationOptions<
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

export function getDeleteRealmUsersIdGroupsGroupIdMutationKey() {
  return [':realm', '/:realm/users/:id/groups/:groupId', 'DELETE'] as const
}

export function getDeleteRealmUsersIdGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(client[':realm'].users[':id'].groups[':groupId'].$delete(args, options))
    },
  })
}

export function injectDeleteRealmUsersIdGroupsGroupId<
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
                  (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdGroupsGroupIdMutationOptions<
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

export function getPostRealmUsersIdImpersonationMutationKey() {
  return [':realm', '/:realm/users/:id/impersonation', 'POST'] as const
}

export function getPostRealmUsersIdImpersonationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdImpersonationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>,
    ) {
      return parseResponse(client[':realm'].users[':id'].impersonation.$post(args, options))
    },
  })
}

export function injectPostRealmUsersIdImpersonation<
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
                ReturnType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['impersonation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmUsersIdImpersonationMutationOptions<
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

export function getPostRealmUsersIdLogoutMutationKey() {
  return [':realm', '/:realm/users/:id/logout', 'POST'] as const
}

export function getPostRealmUsersIdLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['logout']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdLogoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']>,
    ) {
      return parseResponse(client[':realm'].users[':id'].logout.$post(args, options))
    },
  })
}

export function injectPostRealmUsersIdLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['logout']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['logout']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRealmUsersIdLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRealmUsersIdOfflineSessionsClientIdQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/offline-sessions/:clientId', args] as const
}

export function getRealmUsersIdOfflineSessionsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdOfflineSessionsClientIdQueryKey>
  >({
    queryKey: getRealmUsersIdOfflineSessionsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdOfflineSessionsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdOfflineSessionsClientIdQueryKey>
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
      ...getRealmUsersIdOfflineSessionsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmUsersIdResetPasswordMutationKey() {
  return [':realm', '/:realm/users/:id/reset-password', 'PUT'] as const
}

export function getPutRealmUsersIdResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>,
    ) {
      return parseResponse(client[':realm'].users[':id']['reset-password'].$put(args, options))
    },
  })
}

export function injectPutRealmUsersIdResetPassword<
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
                ReturnType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['reset-password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmUsersIdResetPasswordMutationOptions<
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

export function getRealmUsersIdRoleMappingsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
) {
  return [':realm', '/:realm/users/:id/role-mappings', args] as const
}

export function getRealmUsersIdRoleMappingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsQueryKey>
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
      ...getRealmUsersIdRoleMappingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRealmUsersIdRoleMappingsClientsClientQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', args] as const
}

export function getRealmUsersIdRoleMappingsClientsClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsClientsClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientQueryKey>
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
      ...getRealmUsersIdRoleMappingsClientsClientQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmUsersIdRoleMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', 'POST'] as const
}

export function getPostRealmUsersIdRoleMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdRoleMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].$post(args, options),
      )
    },
  })
}

export function injectPostRealmUsersIdRoleMappingsClientsClient<
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
                  (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$post']
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
    const mutationDefaults = getPostRealmUsersIdRoleMappingsClientsClientMutationOptions<
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

export function getDeleteRealmUsersIdRoleMappingsClientsClientMutationKey() {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', 'DELETE'] as const
}

export function getDeleteRealmUsersIdRoleMappingsClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdRoleMappingsClientsClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmUsersIdRoleMappingsClientsClient<
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
                  (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdRoleMappingsClientsClientMutationOptions<
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

export function getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client/available', args] as const
}

export function getRealmUsersIdRoleMappingsClientsClientAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsClientsClientAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey>
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
      ...getRealmUsersIdRoleMappingsClientsClientAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client/composite', args] as const
}

export function getRealmUsersIdRoleMappingsClientsClientCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsClientsClientComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey>
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
      ...getRealmUsersIdRoleMappingsClientsClientCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmUsersIdRoleMappingsRealmQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm', args] as const
}

export function getRealmUsersIdRoleMappingsRealmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsRealmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsRealm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsRealmQueryKey>
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
      ...getRealmUsersIdRoleMappingsRealmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostRealmUsersIdRoleMappingsRealmMutationKey() {
  return [':realm', '/:realm/users/:id/role-mappings/realm', 'POST'] as const
}

export function getPostRealmUsersIdRoleMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRealmUsersIdRoleMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.$post(args, options),
      )
    },
  })
}

export function injectPostRealmUsersIdRoleMappingsRealm<
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
                  (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$post']
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
    const mutationDefaults = getPostRealmUsersIdRoleMappingsRealmMutationOptions<
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

export function getDeleteRealmUsersIdRoleMappingsRealmMutationKey() {
  return [':realm', '/:realm/users/:id/role-mappings/realm', 'DELETE'] as const
}

export function getDeleteRealmUsersIdRoleMappingsRealmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRealmUsersIdRoleMappingsRealmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
      >,
    ) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.$delete(args, options),
      )
    },
  })
}

export function injectDeleteRealmUsersIdRoleMappingsRealm<
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
                  (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$delete']
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
    const mutationDefaults = getDeleteRealmUsersIdRoleMappingsRealmMutationOptions<
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

export function getRealmUsersIdRoleMappingsRealmAvailableQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/available', args] as const
}

export function getRealmUsersIdRoleMappingsRealmAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmAvailableQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsRealmAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsRealmAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsRealmAvailableQueryKey>
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
      ...getRealmUsersIdRoleMappingsRealmAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getRealmUsersIdRoleMappingsRealmCompositeQueryKey(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/composite', args] as const
}

export function getRealmUsersIdRoleMappingsRealmCompositeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmCompositeQueryKey>
  >({
    queryKey: getRealmUsersIdRoleMappingsRealmCompositeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.composite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdRoleMappingsRealmComposite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdRoleMappingsRealmCompositeQueryKey>
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
      ...getRealmUsersIdRoleMappingsRealmCompositeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutRealmUsersIdSendVerifyEmailMutationKey() {
  return [':realm', '/:realm/users/:id/send-verify-email', 'PUT'] as const
}

export function getPutRealmUsersIdSendVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRealmUsersIdSendVerifyEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':realm']['users'][':id']['send-verify-email']['$put']
      >,
    ) {
      return parseResponse(client[':realm'].users[':id']['send-verify-email'].$put(args, options))
    },
  })
}

export function injectPutRealmUsersIdSendVerifyEmail<
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
                ReturnType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':realm']['users'][':id']['send-verify-email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRealmUsersIdSendVerifyEmailMutationOptions<
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

export function getRealmUsersIdSessionsQueryKey(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
) {
  return [':realm', '/:realm/users/:id/sessions', args] as const
}

export function getRealmUsersIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdSessionsQueryKey>
  >({
    queryKey: getRealmUsersIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':realm'].users[':id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRealmUsersIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRealmUsersIdSessionsQueryKey>
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
      ...getRealmUsersIdSessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
