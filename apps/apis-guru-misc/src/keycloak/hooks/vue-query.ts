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

export function getIdKey() {
  return ['{id}'] as const
}

export function getRealmKey() {
  return ['{realm}'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
          TError,
          InferRequestType<typeof client.index.$post>,
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
  const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['name']['$get']>>,
) {
  return [':id', '/:id/name', toValue(args)] as const
}

export function getIdNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].name.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIdName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>
            >
          >,
          ReturnType<typeof getIdNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIdNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['$get']>>,
) {
  return [':realm', '/:realm', toValue(args)] as const
}

export function getRealmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
          >,
          ReturnType<typeof getRealmQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$put']>>>>
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['$put']>,
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
  const mutationDefaults = getPutRealmMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteRealm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['$delete']>,
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
  const mutationDefaults = getDeleteRealmMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRealmAdminEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['admin-events']['$get']>>,
) {
  return [':realm', '/:realm/admin-events', toValue(args)] as const
}

export function getRealmAdminEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['admin-events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAdminEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['admin-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAdminEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['admin-events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmAdminEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['admin-events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAdminEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAdminEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['admin-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmAdminEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmAdminEventsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmAttackDetectionBruteForceUsers<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmAttackDetectionBruteForceUsersMutationOptions<
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

export function getRealmAttackDetectionBruteForceUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
    >
  >,
) {
  return [':realm', '/:realm/attack-detection/brute-force/users/:userId', toValue(args)] as const
}

export function getRealmAttackDetectionBruteForceUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAttackDetectionBruteForceUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAttackDetectionBruteForceUsersUserId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
                    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
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
                    (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAttackDetectionBruteForceUsersUserIdQueryKey>
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
              (typeof client)[':realm']['attack-detection']['brute-force']['users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAttackDetectionBruteForceUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAttackDetectionBruteForceUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['attack-detection']['brute-force'].users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmAttackDetectionBruteForceUsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmAttackDetectionBruteForceUsersUserIdMutationOptions<
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

export function getRealmAuthenticationAuthenticatorProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['authenticator-providers']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/authenticator-providers', toValue(args)] as const
}

export function getRealmAuthenticationAuthenticatorProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['authenticator-providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationAuthenticatorProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['authenticator-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationAuthenticatorProviders<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['authenticator-providers']['$get']>
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
                    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
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
                    (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationAuthenticatorProvidersQueryKey>
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
              (typeof client)[':realm']['authentication']['authenticator-providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationAuthenticatorProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationAuthenticatorProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['authenticator-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationClientAuthenticatorProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/client-authenticator-providers', toValue(args)] as const
}

export function getRealmAuthenticationClientAuthenticatorProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationClientAuthenticatorProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['client-authenticator-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationClientAuthenticatorProviders<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
                    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
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
                    (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationClientAuthenticatorProvidersQueryKey>
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
              (typeof client)[':realm']['authentication']['client-authenticator-providers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationClientAuthenticatorProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationClientAuthenticatorProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['client-authenticator-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationConfigDescriptionProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/config-description/:providerId', toValue(args)] as const
}

export function getRealmAuthenticationConfigDescriptionProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationConfigDescriptionProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['config-description'][':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationConfigDescriptionProviderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
                    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
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
                    (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationConfigDescriptionProviderIdQueryKey>
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
              (typeof client)[':realm']['authentication']['config-description'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationConfigDescriptionProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationConfigDescriptionProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['config-description'][':providerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/config/:id', toValue(args)] as const
}

export function getRealmAuthenticationConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication.config[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationConfigIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['config'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication.config[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmAuthenticationConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmAuthenticationConfigIdMutationOptions<
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

export function useDeleteRealmAuthenticationConfigId<
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
                    (typeof client)[':realm']['authentication']['config'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['authentication']['config'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmAuthenticationConfigIdMutationOptions<
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

export function usePostRealmAuthenticationExecutions<
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
                  ReturnType<(typeof client)[':realm']['authentication']['executions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['authentication']['executions']['$post']>,
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
  const mutationDefaults = getPostRealmAuthenticationExecutionsMutationOptions<
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

export function getRealmAuthenticationExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/executions/:executionId', toValue(args)] as const
}

export function getRealmAuthenticationExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication.executions[':executionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationExecutionsExecutionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
                    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
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
                    (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationExecutionsExecutionIdQueryKey>
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
              (typeof client)[':realm']['authentication']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication.executions[':executionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmAuthenticationExecutionsExecutionId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmAuthenticationExecutionsExecutionIdMutationOptions<
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

export function usePostRealmAuthenticationExecutionsExecutionIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmAuthenticationExecutionsExecutionIdConfigMutationOptions<
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

export function usePostRealmAuthenticationExecutionsExecutionIdLowerPriority<
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
    getPostRealmAuthenticationExecutionsExecutionIdLowerPriorityMutationOptions<
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

export function usePostRealmAuthenticationExecutionsExecutionIdRaisePriority<
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
    getPostRealmAuthenticationExecutionsExecutionIdRaisePriorityMutationOptions<
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

export function getRealmAuthenticationFlowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/flows', toValue(args)] as const
}

export function getRealmAuthenticationFlowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication.flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmAuthenticationFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmAuthenticationFlowsMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmAuthenticationFlowsFlowAliasCopy<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmAuthenticationFlowsFlowAliasCopyMutationOptions<
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

export function getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/flows/:flowAlias/executions', toValue(args)] as const
}

export function getRealmAuthenticationFlowsFlowAliasExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication.flows[':flowAlias'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationFlowsFlowAliasExecutions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
                    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
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
                    (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey>
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
              (typeof client)[':realm']['authentication']['flows'][':flowAlias']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationFlowsFlowAliasExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication.flows[':flowAlias'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmAuthenticationFlowsFlowAliasExecutions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmAuthenticationFlowsFlowAliasExecutionsMutationOptions<
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

export function usePostRealmAuthenticationFlowsFlowAliasExecutionsExecution<
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
    getPostRealmAuthenticationFlowsFlowAliasExecutionsExecutionMutationOptions<
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

export function usePostRealmAuthenticationFlowsFlowAliasExecutionsFlow<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmAuthenticationFlowsFlowAliasExecutionsFlowMutationOptions<
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

export function getRealmAuthenticationFlowsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/flows/:id', toValue(args)] as const
}

export function getRealmAuthenticationFlowsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationFlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication.flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationFlowsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationFlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication.flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmAuthenticationFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmAuthenticationFlowsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmAuthenticationFlowsId<
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
                  ReturnType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['authentication']['flows'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmAuthenticationFlowsIdMutationOptions<
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

export function getRealmAuthenticationFormActionProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/form-action-providers', toValue(args)] as const
}

export function getRealmAuthenticationFormActionProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationFormActionProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['form-action-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationFormActionProviders<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
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
                    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
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
                    (typeof client)[':realm']['authentication']['form-action-providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationFormActionProvidersQueryKey>
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
            ReturnType<(typeof client)[':realm']['authentication']['form-action-providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFormActionProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationFormActionProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['form-action-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationFormProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/form-providers', toValue(args)] as const
}

export function getRealmAuthenticationFormProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationFormProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['form-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationFormProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationFormProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['authentication']['form-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationFormProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationFormProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['form-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationPerClientConfigDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/per-client-config-description', toValue(args)] as const
}

export function getRealmAuthenticationPerClientConfigDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationPerClientConfigDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['per-client-config-description'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationPerClientConfigDescription<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
                    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
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
                    (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationPerClientConfigDescriptionQueryKey>
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
              (typeof client)[':realm']['authentication']['per-client-config-description']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationPerClientConfigDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationPerClientConfigDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['per-client-config-description'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmAuthenticationRegisterRequiredAction<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmAuthenticationRegisterRequiredActionMutationOptions<
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

export function getRealmAuthenticationRequiredActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
  >,
) {
  return [':realm', '/:realm/authentication/required-actions', toValue(args)] as const
}

export function getRealmAuthenticationRequiredActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationRequiredActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['required-actions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationRequiredActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
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
                    (typeof client)[':realm']['authentication']['required-actions']['$get']
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
                    (typeof client)[':realm']['authentication']['required-actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationRequiredActionsQueryKey>
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
            ReturnType<(typeof client)[':realm']['authentication']['required-actions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationRequiredActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationRequiredActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['required-actions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmAuthenticationRequiredActionsAliasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/required-actions/:alias', toValue(args)] as const
}

export function getRealmAuthenticationRequiredActionsAliasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationRequiredActionsAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['required-actions'][':alias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationRequiredActionsAlias<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
                    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
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
                    (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationRequiredActionsAliasQueryKey>
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
              (typeof client)[':realm']['authentication']['required-actions'][':alias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationRequiredActionsAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationRequiredActionsAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['required-actions'][':alias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmAuthenticationRequiredActionsAlias<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmAuthenticationRequiredActionsAliasMutationOptions<
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

export function useDeleteRealmAuthenticationRequiredActionsAlias<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmAuthenticationRequiredActionsAliasMutationOptions<
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

export function usePostRealmAuthenticationRequiredActionsAliasLowerPriority<
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
    getPostRealmAuthenticationRequiredActionsAliasLowerPriorityMutationOptions<
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

export function usePostRealmAuthenticationRequiredActionsAliasRaisePriority<
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
    getPostRealmAuthenticationRequiredActionsAliasRaisePriorityMutationOptions<
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

export function getRealmAuthenticationUnregisteredRequiredActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/authentication/unregistered-required-actions', toValue(args)] as const
}

export function getRealmAuthenticationUnregisteredRequiredActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmAuthenticationUnregisteredRequiredActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].authentication['unregistered-required-actions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmAuthenticationUnregisteredRequiredActions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
                    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
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
                    (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmAuthenticationUnregisteredRequiredActionsQueryKey>
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
              (typeof client)[':realm']['authentication']['unregistered-required-actions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmAuthenticationUnregisteredRequiredActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmAuthenticationUnregisteredRequiredActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].authentication['unregistered-required-actions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClearKeysCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClearKeysCacheMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmClearRealmCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClearRealmCacheMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmClearUserCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClearUserCacheMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmClientDescriptionConverter<
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
                  ReturnType<(typeof client)[':realm']['client-description-converter']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['client-description-converter']['$post']>,
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
  const mutationDefaults = getPostRealmClientDescriptionConverterMutationOptions<
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

export function getRealmClientRegistrationPolicyProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
  >,
) {
  return [':realm', '/:realm/client-registration-policy/providers', toValue(args)] as const
}

export function getRealmClientRegistrationPolicyProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientRegistrationPolicyProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-registration-policy'].providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientRegistrationPolicyProviders<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
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
                    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
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
                    (typeof client)[':realm']['client-registration-policy']['providers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientRegistrationPolicyProvidersQueryKey>
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
            ReturnType<(typeof client)[':realm']['client-registration-policy']['providers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientRegistrationPolicyProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientRegistrationPolicyProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-registration-policy'].providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>>,
) {
  return [':realm', '/:realm/client-scopes', toValue(args)] as const
}

export function getRealmClientScopesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['client-scopes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientScopes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientScopesMutationOptions<TError, TOnMutateResult>(
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

export function getRealmClientScopesId1ProtocolMappersModelsId2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id1/protocol-mappers/models/:id2',
    toValue(args),
  ] as const
}

export function getRealmClientScopesId1ProtocolMappersModelsId2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesId1ProtocolMappersModelsId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientScopesId1ProtocolMappersModelsId2<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesId1ProtocolMappersModelsId2QueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id1']['protocol-mappers']['models'][':id2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesId1ProtocolMappersModelsId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesId1ProtocolMappersModelsId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id1']['protocol-mappers'].models[':id2'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientScopesId1ProtocolMappersModelsId2<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
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

export function useDeleteRealmClientScopesId1ProtocolMappersModelsId2<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientScopesId1ProtocolMappersModelsId2MutationOptions<
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

export function getRealmClientScopesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>
  >,
) {
  return [':realm', '/:realm/client-scopes/:id', toValue(args)] as const
}

export function getRealmClientScopesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientScopesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['client-scopes'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientScopesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmClientScopesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientScopesIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmClientScopesIdProtocolMappersAddModels<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientScopesIdProtocolMappersAddModelsMutationOptions<
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

export function getRealmClientScopesIdProtocolMappersModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
    >
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/protocol-mappers/models', toValue(args)] as const
}

export function getRealmClientScopesIdProtocolMappersModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdProtocolMappersModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientScopesIdProtocolMappersModels<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdProtocolMappersModelsQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdProtocolMappersModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdProtocolMappersModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['protocol-mappers'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientScopesIdProtocolMappersModels<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientScopesIdProtocolMappersModelsMutationOptions<
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

export function getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/protocol-mappers/protocol/:protocol',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdProtocolMappersProtocolProtocolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientScopesIdProtocolMappersProtocolProtocol<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdProtocolMappersProtocolProtocolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['protocol-mappers'].protocol[':protocol'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesIdScopeMappingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings', toValue(args)] as const
}

export function getRealmClientScopesIdScopeMappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdScopeMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappings<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsQueryKey>
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
            ReturnType<(typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdScopeMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesIdScopeMappingsClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdScopeMappingsClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdScopeMappingsClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[':client'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientScopesIdScopeMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
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

export function useDeleteRealmClientScopesIdScopeMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientScopesIdScopeMappingsClientsClientMutationOptions<
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

export function getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/available',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
          ':client'
        ].available.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsClientsClientAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmClientScopesIdScopeMappingsClientsClientAvailableQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/composite',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
          ':client'
        ].composite.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsClientsClientComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmClientScopesIdScopeMappingsClientsClientCompositeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].clients[
            ':client'
          ].composite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesIdScopeMappingsRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
    >
  >,
) {
  return [':realm', '/:realm/client-scopes/:id/scope-mappings/realm', toValue(args)] as const
}

export function getRealmClientScopesIdScopeMappingsRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientScopesIdScopeMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientScopesIdScopeMappingsRealmMutationOptions<
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

export function useDeleteRealmClientScopesIdScopeMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientScopesIdScopeMappingsRealmMutationOptions<
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

export function getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/realm/available',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdScopeMappingsRealmAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsRealmAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.available.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/client-scopes/:id/scope-mappings/realm/composite',
    toValue(args),
  ] as const
}

export function getRealmClientScopesIdScopeMappingsRealmCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientScopesIdScopeMappingsRealmComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey>
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
              (typeof client)[':realm']['client-scopes'][':id']['scope-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientScopesIdScopeMappingsRealmCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-scopes'][':id']['scope-mappings'].realm.composite.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientSessionStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>
  >,
) {
  return [':realm', '/:realm/client-session-stats', toValue(args)] as const
}

export function getRealmClientSessionStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientSessionStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['client-session-stats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientSessionStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['client-session-stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientSessionStatsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['client-session-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientSessionStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientSessionStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['client-session-stats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients']['$get']>>,
) {
  return [':realm', '/:realm/clients', toValue(args)] as const
}

export function getRealmClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['clients']['$post']>,
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
  const mutationDefaults = getPostRealmClientsMutationOptions<TError, TOnMutateResult>(
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

export function getRealmClientsInitialAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>
  >,
) {
  return [':realm', '/:realm/clients-initial-access', toValue(args)] as const
}

export function getRealmClientsInitialAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsInitialAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['clients-initial-access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsInitialAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients-initial-access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientsInitialAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients-initial-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsInitialAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsInitialAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['clients-initial-access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsInitialAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsInitialAccessMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmClientsInitialAccessId<
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
                  ReturnType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['clients-initial-access'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteRealmClientsInitialAccessIdMutationOptions<
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

export function getRealmClientsId1ProtocolMappersModelsId2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id1/protocol-mappers/models/:id2', toValue(args)] as const
}

export function getRealmClientsId1ProtocolMappersModelsId2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsId1ProtocolMappersModelsId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsId1ProtocolMappersModelsId2<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
                    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
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
                    (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsId1ProtocolMappersModelsId2QueryKey>
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
              (typeof client)[':realm']['clients'][':id1']['protocol-mappers']['models'][':id2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsId1ProtocolMappersModelsId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsId1ProtocolMappersModelsId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id1']['protocol-mappers'].models[':id2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsId1ProtocolMappersModelsId2<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsId1ProtocolMappersModelsId2MutationOptions<
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

export function useDeleteRealmClientsId1ProtocolMappersModelsId2<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsId1ProtocolMappersModelsId2MutationOptions<
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

export function getRealmClientsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>>,
) {
  return [':realm', '/:realm/clients/:id', toValue(args)] as const
}

export function getRealmClientsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['clients'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdMutationOptions<TError, TOnMutateResult>(
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

export function getRealmClientsIdCertificatesAttrQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/certificates/:attr', toValue(args)] as const
}

export function getRealmClientsIdCertificatesAttrQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdCertificatesAttrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].certificates[':attr'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdCertificatesAttr<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdCertificatesAttrQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['certificates'][':attr']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdCertificatesAttrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdCertificatesAttrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].certificates[':attr'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdCertificatesAttrDownload<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdCertificatesAttrDownloadMutationOptions<
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

export function usePostRealmClientsIdCertificatesAttrGenerate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdCertificatesAttrGenerateMutationOptions<
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

export function usePostRealmClientsIdCertificatesAttrGenerateAndDownload<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdCertificatesAttrGenerateAndDownloadMutationOptions<
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

export function usePostRealmClientsIdCertificatesAttrUpload<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdCertificatesAttrUploadMutationOptions<
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

export function usePostRealmClientsIdCertificatesAttrUploadCertificate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdCertificatesAttrUploadCertificateMutationOptions<
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

export function getRealmClientsIdClientSecretQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/client-secret', toValue(args)] as const
}

export function getRealmClientsIdClientSecretQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdClientSecretQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['client-secret'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdClientSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdClientSecretQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['client-secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdClientSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdClientSecretQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['client-secret'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdClientSecret<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdClientSecretMutationOptions<
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

export function getRealmClientsIdDefaultClientScopesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/default-client-scopes', toValue(args)] as const
}

export function getRealmClientsIdDefaultClientScopesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdDefaultClientScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['default-client-scopes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdDefaultClientScopes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdDefaultClientScopesQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['default-client-scopes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdDefaultClientScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdDefaultClientScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['default-client-scopes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsIdDefaultClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
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

export function useDeleteRealmClientsIdDefaultClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdDefaultClientScopesClientScopeIdMutationOptions<
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

export function getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/generate-example-access-token',
    toValue(args),
  ] as const
}

export function getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdEvaluateScopesGenerateExampleAccessToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['generate-example-access-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['evaluate-scopes']['generate-example-access-token'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdEvaluateScopesProtocolMappersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/evaluate-scopes/protocol-mappers', toValue(args)] as const
}

export function getRealmClientsIdEvaluateScopesProtocolMappersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdEvaluateScopesProtocolMappersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdEvaluateScopesProtocolMappers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdEvaluateScopesProtocolMappersQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['protocol-mappers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesProtocolMappersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdEvaluateScopesProtocolMappersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['evaluate-scopes']['protocol-mappers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/granted',
    toValue(args),
  ] as const
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
          ':roleContainerId'
        ].granted.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey
          >
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
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['granted']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][
            ':roleContainerId'
          ].granted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/not-granted',
    toValue(args),
  ] as const
}

export function getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
          'not-granted'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey
          >
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
              (typeof client)[':realm']['clients'][':id']['evaluate-scopes']['scope-mappings'][':roleContainerId']['not-granted']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['evaluate-scopes']['scope-mappings'][':roleContainerId'][
            'not-granted'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdInstallationProvidersProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/installation/providers/:providerId',
    toValue(args),
  ] as const
}

export function getRealmClientsIdInstallationProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdInstallationProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].installation.providers[':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdInstallationProvidersProviderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdInstallationProvidersProviderIdQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['installation']['providers'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdInstallationProvidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdInstallationProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].installation.providers[':providerId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/management/permissions', toValue(args)] as const
}

export function getRealmClientsIdManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].management.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].management.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsIdManagementPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdManagementPermissionsMutationOptions<
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

export function usePostRealmClientsIdNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdNodesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmClientsIdNodesNode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':realm']['clients'][':id']['nodes'][':node']['$delete']
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
  const mutationDefaults = getDeleteRealmClientsIdNodesNodeMutationOptions<TError, TOnMutateResult>(
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

export function getRealmClientsIdOfflineSessionCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/offline-session-count', toValue(args)] as const
}

export function getRealmClientsIdOfflineSessionCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdOfflineSessionCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['offline-session-count'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdOfflineSessionCount<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdOfflineSessionCountQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['offline-session-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOfflineSessionCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdOfflineSessionCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['offline-session-count'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdOfflineSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/offline-sessions', toValue(args)] as const
}

export function getRealmClientsIdOfflineSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdOfflineSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['offline-sessions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdOfflineSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdOfflineSessionsQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['offline-sessions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOfflineSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdOfflineSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['offline-sessions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdOptionalClientScopesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/optional-client-scopes', toValue(args)] as const
}

export function getRealmClientsIdOptionalClientScopesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdOptionalClientScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['optional-client-scopes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdOptionalClientScopes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdOptionalClientScopesQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['optional-client-scopes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdOptionalClientScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdOptionalClientScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['optional-client-scopes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsIdOptionalClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
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

export function useDeleteRealmClientsIdOptionalClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdOptionalClientScopesClientScopeIdMutationOptions<
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

export function usePostRealmClientsIdProtocolMappersAddModels<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdProtocolMappersAddModelsMutationOptions<
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

export function getRealmClientsIdProtocolMappersModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/protocol-mappers/models', toValue(args)] as const
}

export function getRealmClientsIdProtocolMappersModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdProtocolMappersModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdProtocolMappersModels<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdProtocolMappersModelsQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdProtocolMappersModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdProtocolMappersModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['protocol-mappers'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdProtocolMappersModels<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdProtocolMappersModelsMutationOptions<
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

export function getRealmClientsIdProtocolMappersProtocolProtocolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/protocol-mappers/protocol/:protocol',
    toValue(args),
  ] as const
}

export function getRealmClientsIdProtocolMappersProtocolProtocolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdProtocolMappersProtocolProtocolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdProtocolMappersProtocolProtocol<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdProtocolMappersProtocolProtocolQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['protocol-mappers']['protocol'][':protocol']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdProtocolMappersProtocolProtocolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdProtocolMappersProtocolProtocolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['protocol-mappers'].protocol[':protocol'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdPushRevocation<
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
                    (typeof client)[':realm']['clients'][':id']['push-revocation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['clients'][':id']['push-revocation']['$post']>,
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
  const mutationDefaults = getPostRealmClientsIdPushRevocationMutationOptions<
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

export function usePostRealmClientsIdRegistrationAccessToken<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdRegistrationAccessTokenMutationOptions<
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

export function getRealmClientsIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/roles', toValue(args)] as const
}

export function getRealmClientsIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getRealmClientsIdRolesRoleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name', toValue(args)] as const
}

export function getRealmClientsIdRolesRoleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['roles'][':role-name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsIdRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdRolesRoleNameMutationOptions<
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

export function useDeleteRealmClientsIdRolesRoleName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdRolesRoleNameMutationOptions<
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

export function getRealmClientsIdRolesRoleNameCompositesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites', toValue(args)] as const
}

export function getRealmClientsIdRolesRoleNameCompositesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameComposites<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].composites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdRolesRoleNameComposites<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdRolesRoleNameCompositesMutationOptions<
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

export function useDeleteRealmClientsIdRolesRoleNameComposites<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdRolesRoleNameCompositesMutationOptions<
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

export function getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/roles/:role-name/composites/clients/:client',
    toValue(args),
  ] as const
}

export function getRealmClientsIdRolesRoleNameCompositesClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameCompositesClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].composites.clients[':client'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdRolesRoleNameCompositesRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/composites/realm', toValue(args)] as const
}

export function getRealmClientsIdRolesRoleNameCompositesRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameCompositesRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesRealmQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameCompositesRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameCompositesRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].composites.realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdRolesRoleNameGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/groups', toValue(args)] as const
}

export function getRealmClientsIdRolesRoleNameGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameGroups<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameGroupsQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/roles/:role-name/management/permissions',
    toValue(args),
  ] as const
}

export function getRealmClientsIdRolesRoleNameManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].management.permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmClientsIdRolesRoleNameManagementPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmClientsIdRolesRoleNameManagementPermissionsMutationOptions<
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

export function getRealmClientsIdRolesRoleNameUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/roles/:role-name/users', toValue(args)] as const
}

export function getRealmClientsIdRolesRoleNameUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdRolesRoleNameUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id'].roles[':role-name'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdRolesRoleNameUsers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdRolesRoleNameUsersQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['roles'][':role-name']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdRolesRoleNameUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdRolesRoleNameUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id'].roles[':role-name'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdScopeMappingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings', toValue(args)] as const
}

export function getRealmClientsIdScopeMappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdScopeMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdScopeMappingsClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/clients/:client', toValue(args)] as const
}

export function getRealmClientsIdScopeMappingsClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdScopeMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdScopeMappingsClientsClientMutationOptions<
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

export function useDeleteRealmClientsIdScopeMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdScopeMappingsClientsClientMutationOptions<
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

export function getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/scope-mappings/clients/:client/available',
    toValue(args),
  ] as const
}

export function getRealmClientsIdScopeMappingsClientsClientAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsClientsClientAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].available.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/clients/:id/scope-mappings/clients/:client/composite',
    toValue(args),
  ] as const
}

export function getRealmClientsIdScopeMappingsClientsClientCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsClientsClientComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsClientsClientCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].clients[':client'].composite.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdScopeMappingsRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm', toValue(args)] as const
}

export function getRealmClientsIdScopeMappingsRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsRealmQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmClientsIdScopeMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmClientsIdScopeMappingsRealmMutationOptions<
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

export function useDeleteRealmClientsIdScopeMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmClientsIdScopeMappingsRealmMutationOptions<
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

export function getRealmClientsIdScopeMappingsRealmAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/available', toValue(args)] as const
}

export function getRealmClientsIdScopeMappingsRealmAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsRealmAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsRealmAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsRealmAvailableQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsRealmAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].realm.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdScopeMappingsRealmCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
    >
  >,
) {
  return [':realm', '/:realm/clients/:id/scope-mappings/realm/composite', toValue(args)] as const
}

export function getRealmClientsIdScopeMappingsRealmCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdScopeMappingsRealmCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdScopeMappingsRealmComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdScopeMappingsRealmCompositeQueryKey>
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
              (typeof client)[':realm']['clients'][':id']['scope-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdScopeMappingsRealmCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdScopeMappingsRealmCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['scope-mappings'].realm.composite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdServiceAccountUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/service-account-user', toValue(args)] as const
}

export function getRealmClientsIdServiceAccountUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdServiceAccountUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['service-account-user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdServiceAccountUser<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['service-account-user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdServiceAccountUserQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['service-account-user']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdServiceAccountUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdServiceAccountUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['service-account-user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdSessionCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/session-count', toValue(args)] as const
}

export function getRealmClientsIdSessionCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdSessionCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['session-count'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdSessionCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdSessionCountQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['session-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdSessionCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdSessionCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['session-count'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdTestNodesAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/test-nodes-available', toValue(args)] as const
}

export function getRealmClientsIdTestNodesAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdTestNodesAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['test-nodes-available'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdTestNodesAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
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
                    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
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
                    (typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdTestNodesAvailableQueryKey>
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
            ReturnType<(typeof client)[':realm']['clients'][':id']['test-nodes-available']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdTestNodesAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdTestNodesAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['test-nodes-available'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmClientsIdUserSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
  >,
) {
  return [':realm', '/:realm/clients/:id/user-sessions', toValue(args)] as const
}

export function getRealmClientsIdUserSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmClientsIdUserSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].clients[':id']['user-sessions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmClientsIdUserSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmClientsIdUserSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['clients'][':id']['user-sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmClientsIdUserSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmClientsIdUserSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].clients[':id']['user-sessions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmComponentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components']['$get']>>,
) {
  return [':realm', '/:realm/components', toValue(args)] as const
}

export function getRealmComponentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmComponentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].components.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmComponents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmComponentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['components']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmComponentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].components.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmComponents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmComponentsMutationOptions<TError, TOnMutateResult>(
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

export function getRealmComponentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>>,
) {
  return [':realm', '/:realm/components/:id', toValue(args)] as const
}

export function getRealmComponentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmComponentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].components[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmComponentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['components'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmComponentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['components'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmComponentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].components[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmComponentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmComponentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmComponentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmComponentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getRealmComponentsIdSubComponentTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['components'][':id']['sub-component-types']['$get']>
  >,
) {
  return [':realm', '/:realm/components/:id/sub-component-types', toValue(args)] as const
}

export function getRealmComponentsIdSubComponentTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['components'][':id']['sub-component-types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmComponentsIdSubComponentTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].components[':id']['sub-component-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmComponentsIdSubComponentTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['components'][':id']['sub-component-types']['$get']>
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
                    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
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
                    (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmComponentsIdSubComponentTypesQueryKey>
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
              (typeof client)[':realm']['components'][':id']['sub-component-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmComponentsIdSubComponentTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmComponentsIdSubComponentTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].components[':id']['sub-component-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmCredentialRegistratorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>
  >,
) {
  return [':realm', '/:realm/credential-registrators', toValue(args)] as const
}

export function getRealmCredentialRegistratorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmCredentialRegistratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['credential-registrators'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmCredentialRegistrators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['credential-registrators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmCredentialRegistratorsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['credential-registrators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmCredentialRegistratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmCredentialRegistratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['credential-registrators'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmDefaultDefaultClientScopesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>
  >,
) {
  return [':realm', '/:realm/default-default-client-scopes', toValue(args)] as const
}

export function getRealmDefaultDefaultClientScopesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmDefaultDefaultClientScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['default-default-client-scopes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmDefaultDefaultClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-default-client-scopes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmDefaultDefaultClientScopesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['default-default-client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultDefaultClientScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmDefaultDefaultClientScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['default-default-client-scopes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmDefaultDefaultClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
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

export function useDeleteRealmDefaultDefaultClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmDefaultDefaultClientScopesClientScopeIdMutationOptions<
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

export function getRealmDefaultGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['default-groups']['$get']>>,
) {
  return [':realm', '/:realm/default-groups', toValue(args)] as const
}

export function getRealmDefaultGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['default-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmDefaultGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['default-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmDefaultGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['default-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmDefaultGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['default-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmDefaultGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['default-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmDefaultGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmDefaultGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmDefaultGroupsGroupId<
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
                  ReturnType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['default-groups'][':groupId']['$delete']>,
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
  const mutationDefaults = getDeleteRealmDefaultGroupsGroupIdMutationOptions<
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

export function getRealmDefaultOptionalClientScopesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>
  >,
) {
  return [':realm', '/:realm/default-optional-client-scopes', toValue(args)] as const
}

export function getRealmDefaultOptionalClientScopesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmDefaultOptionalClientScopesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['default-optional-client-scopes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmDefaultOptionalClientScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmDefaultOptionalClientScopesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['default-optional-client-scopes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmDefaultOptionalClientScopesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmDefaultOptionalClientScopesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['default-optional-client-scopes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmDefaultOptionalClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
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

export function useDeleteRealmDefaultOptionalClientScopesClientScopeId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmDefaultOptionalClientScopesClientScopeIdMutationOptions<
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

export function getRealmEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['$get']>>,
) {
  return [':realm', '/:realm/events', toValue(args)] as const
}

export function getRealmEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
            >
          >,
          ReturnType<typeof getRealmEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmEventsMutationOptions<TError, TOnMutateResult>(
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

export function getRealmEventsConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['config']['$get']>>,
) {
  return [':realm', '/:realm/events/config', toValue(args)] as const
}

export function getRealmEventsConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmEventsConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].events.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmEventsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['events']['config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmEventsConfigQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['events']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmEventsConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmEventsConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].events.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmEventsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmEventsConfigMutationOptions<TError, TOnMutateResult>(
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

export function getRealmGroupByPathPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>
  >,
) {
  return [':realm', '/:realm/group-by-path/:path', toValue(args)] as const
}

export function getRealmGroupByPathPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupByPathPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['group-by-path'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupByPathPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['group-by-path'][':path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmGroupByPathPathQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['group-by-path'][':path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupByPathPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupByPathPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['group-by-path'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['$get']>>,
) {
  return [':realm', '/:realm/groups', toValue(args)] as const
}

export function getRealmGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
            >
          >,
          ReturnType<typeof getRealmGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['groups']['$post']>,
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
  const mutationDefaults = getPostRealmGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRealmGroupsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>>,
) {
  return [':realm', '/:realm/groups/count', toValue(args)] as const
}

export function getRealmGroupsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups']['count']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmGroupsCountQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['groups']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>>,
) {
  return [':realm', '/:realm/groups/:id', toValue(args)] as const
}

export function getRealmGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['groups'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmGroupsIdChildren<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmGroupsIdChildrenMutationOptions<TError, TOnMutateResult>(
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

export function getRealmGroupsIdManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/groups/:id/management/permissions', toValue(args)] as const
}

export function getRealmGroupsIdManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id'].management.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id'].management.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmGroupsIdManagementPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmGroupsIdManagementPermissionsMutationOptions<
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

export function getRealmGroupsIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>
  >,
) {
  return [':realm', '/:realm/groups/:id/members', toValue(args)] as const
}

export function getRealmGroupsIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdRoleMappingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings', toValue(args)] as const
}

export function getRealmGroupsIdRoleMappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdRoleMappingsClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
    >
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/clients/:client', toValue(args)] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmGroupsIdRoleMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmGroupsIdRoleMappingsClientsClientMutationOptions<
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

export function useDeleteRealmGroupsIdRoleMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmGroupsIdRoleMappingsClientsClientMutationOptions<
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

export function getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/groups/:id/role-mappings/clients/:client/available',
    toValue(args),
  ] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsClientsClientAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].available.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/groups/:id/role-mappings/clients/:client/composite',
    toValue(args),
  ] as const
}

export function getRealmGroupsIdRoleMappingsClientsClientCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsClientsClientComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['role-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsClientsClientCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].clients[':client'].composite.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdRoleMappingsRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm', toValue(args)] as const
}

export function getRealmGroupsIdRoleMappingsRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsRealmQueryKey>
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
            ReturnType<(typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmGroupsIdRoleMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmGroupsIdRoleMappingsRealmMutationOptions<
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

export function useDeleteRealmGroupsIdRoleMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmGroupsIdRoleMappingsRealmMutationOptions<
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

export function getRealmGroupsIdRoleMappingsRealmAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
    >
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/available', toValue(args)] as const
}

export function getRealmGroupsIdRoleMappingsRealmAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsRealmAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsRealmAvailableQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].realm.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmGroupsIdRoleMappingsRealmCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
    >
  >,
) {
  return [':realm', '/:realm/groups/:id/role-mappings/realm/composite', toValue(args)] as const
}

export function getRealmGroupsIdRoleMappingsRealmCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmGroupsIdRoleMappingsRealmComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmGroupsIdRoleMappingsRealmCompositeQueryKey>
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
              (typeof client)[':realm']['groups'][':id']['role-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmGroupsIdRoleMappingsRealmCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmGroupsIdRoleMappingsRealmCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].groups[':id']['role-mappings'].realm.composite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmIdentityProviderImportConfig<
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
                    (typeof client)[':realm']['identity-provider']['import-config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':realm']['identity-provider']['import-config']['$post']
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
  const mutationDefaults = getPostRealmIdentityProviderImportConfigMutationOptions<
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

export function getRealmIdentityProviderInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>
  >,
) {
  return [':realm', '/:realm/identity-provider/instances', toValue(args)] as const
}

export function getRealmIdentityProviderInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmIdentityProviderInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmIdentityProviderInstances<
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
                  ReturnType<(typeof client)[':realm']['identity-provider']['instances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['identity-provider']['instances']['$post']>,
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
  const mutationDefaults = getPostRealmIdentityProviderInstancesMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']>
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias', toValue(args)] as const
}

export function getRealmIdentityProviderInstancesAliasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAlias<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']>
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmIdentityProviderInstancesAlias<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmIdentityProviderInstancesAliasMutationOptions<
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

export function useDeleteRealmIdentityProviderInstancesAlias<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmIdentityProviderInstancesAliasMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
    >
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/export', toValue(args)] as const
}

export function getRealmIdentityProviderInstancesAliasExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesAliasExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAliasExport<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasExportQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesAliasExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/management/permissions',
    toValue(args),
  ] as const
}

export function getRealmIdentityProviderInstancesAliasManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAliasManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRealmIdentityProviderInstancesAliasManagementPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].management.permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmIdentityProviderInstancesAliasManagementPermissions<
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
    getPutRealmIdentityProviderInstancesAliasManagementPermissionsMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasMapperTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/mapper-types',
    toValue(args),
  ] as const
}

export function getRealmIdentityProviderInstancesAliasMapperTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesAliasMapperTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAliasMapperTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasMapperTypesQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mapper-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMapperTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesAliasMapperTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias']['mapper-types'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmIdentityProviderInstancesAliasMappersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
    >
  >,
) {
  return [':realm', '/:realm/identity-provider/instances/:alias/mappers', toValue(args)] as const
}

export function getRealmIdentityProviderInstancesAliasMappersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesAliasMappersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAliasMappers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesAliasMappersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].mappers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmIdentityProviderInstancesAliasMappers<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmIdentityProviderInstancesAliasMappersMutationOptions<
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

export function getRealmIdentityProviderInstancesAliasMappersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/identity-provider/instances/:alias/mappers/:id',
    toValue(args),
  ] as const
}

export function getRealmIdentityProviderInstancesAliasMappersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderInstancesAliasMappersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmIdentityProviderInstancesAliasMappersId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
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
                    (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersIdQueryKey>
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
              (typeof client)[':realm']['identity-provider']['instances'][':alias']['mappers'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderInstancesAliasMappersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderInstancesAliasMappersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].instances[':alias'].mappers[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmIdentityProviderInstancesAliasMappersId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
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

export function useDeleteRealmIdentityProviderInstancesAliasMappersId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmIdentityProviderInstancesAliasMappersIdMutationOptions<
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

export function getRealmIdentityProviderProvidersProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
    >
  >,
) {
  return [':realm', '/:realm/identity-provider/providers/:provider_id', toValue(args)] as const
}

export function getRealmIdentityProviderProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmIdentityProviderProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['identity-provider'].providers[':provider_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmIdentityProviderProvidersProviderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
                    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
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
                    (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmIdentityProviderProvidersProviderIdQueryKey>
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
              (typeof client)[':realm']['identity-provider']['providers'][':provider_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmIdentityProviderProvidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmIdentityProviderProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['identity-provider'].providers[':provider_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['keys']['$get']>>,
) {
  return [':realm', '/:realm/keys', toValue(args)] as const
}

export function getRealmKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
            >
          >,
          ReturnType<typeof getRealmKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmLogoutAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmLogoutAllMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmPartialExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmPartialExportMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmPartialImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmPartialImportMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmPushRevocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmPushRevocationMutationOptions<TError, TOnMutateResult>(
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

export function getRealmRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['roles']['$get']>>,
) {
  return [':realm', '/:realm/roles', toValue(args)] as const
}

export function getRealmRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
            >
          >,
          ReturnType<typeof getRealmRolesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['roles']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['roles']['$post']>,
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
  const mutationDefaults = getPostRealmRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRealmRolesByIdRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id', toValue(args)] as const
}

export function getRealmRolesByIdRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesByIdRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesByIdRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmRolesByIdRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesByIdRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['roles-by-id'][':role-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmRolesByIdRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmRolesByIdRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmRolesByIdRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmRolesByIdRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getRealmRolesByIdRoleIdCompositesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites', toValue(args)] as const
}

export function getRealmRolesByIdRoleIdCompositesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesByIdRoleIdCompositesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesByIdRoleIdComposites<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesByIdRoleIdCompositesQueryKey>
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
            ReturnType<(typeof client)[':realm']['roles-by-id'][':role-id']['composites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesByIdRoleIdCompositesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmRolesByIdRoleIdComposites<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmRolesByIdRoleIdCompositesMutationOptions<
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

export function useDeleteRealmRolesByIdRoleIdComposites<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmRolesByIdRoleIdCompositesMutationOptions<
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

export function getRealmRolesByIdRoleIdCompositesClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/roles-by-id/:role-id/composites/clients/:client',
    toValue(args),
  ] as const
}

export function getRealmRolesByIdRoleIdCompositesClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesByIdRoleIdCompositesClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmRolesByIdRoleIdCompositesClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesByIdRoleIdCompositesClientsClientQueryKey>
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
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesByIdRoleIdCompositesClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.clients[':client'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmRolesByIdRoleIdCompositesRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
    >
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/composites/realm', toValue(args)] as const
}

export function getRealmRolesByIdRoleIdCompositesRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesByIdRoleIdCompositesRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesByIdRoleIdCompositesRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesByIdRoleIdCompositesRealmQueryKey>
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
              (typeof client)[':realm']['roles-by-id'][':role-id']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdCompositesRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesByIdRoleIdCompositesRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['roles-by-id'][':role-id'].composites.realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmRolesByIdRoleIdManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/roles-by-id/:role-id/management/permissions', toValue(args)] as const
}

export function getRealmRolesByIdRoleIdManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesByIdRoleIdManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesByIdRoleIdManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesByIdRoleIdManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['roles-by-id'][':role-id']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesByIdRoleIdManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesByIdRoleIdManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['roles-by-id'][':role-id'].management.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmRolesByIdRoleIdManagementPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmRolesByIdRoleIdManagementPermissionsMutationOptions<
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

export function getRealmRolesRoleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>
  >,
) {
  return [':realm', '/:realm/roles/:role-name', toValue(args)] as const
}

export function getRealmRolesRoleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmRolesRoleNameMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmRolesRoleNameMutationOptions<TError, TOnMutateResult>(
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

export function getRealmRolesRoleNameCompositesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites', toValue(args)] as const
}

export function getRealmRolesRoleNameCompositesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameCompositesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameComposites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameCompositesQueryKey>
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
            ReturnType<(typeof client)[':realm']['roles'][':role-name']['composites']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameCompositesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].composites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmRolesRoleNameComposites<
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['roles'][':role-name']['composites']['$post']>,
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
  const mutationDefaults = getPostRealmRolesRoleNameCompositesMutationOptions<
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

export function useDeleteRealmRolesRoleNameComposites<
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':realm']['roles'][':role-name']['composites']['$delete']
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
  const mutationDefaults = getDeleteRealmRolesRoleNameCompositesMutationOptions<
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

export function getRealmRolesRoleNameCompositesClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
    >
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/clients/:client', toValue(args)] as const
}

export function getRealmRolesRoleNameCompositesClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameCompositesClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.clients[':client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameCompositesClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameCompositesClientsClientQueryKey>
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
              (typeof client)[':realm']['roles'][':role-name']['composites']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameCompositesClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].composites.clients[':client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmRolesRoleNameCompositesRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
    >
  >,
) {
  return [':realm', '/:realm/roles/:role-name/composites/realm', toValue(args)] as const
}

export function getRealmRolesRoleNameCompositesRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameCompositesRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].composites.realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameCompositesRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameCompositesRealmQueryKey>
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
              (typeof client)[':realm']['roles'][':role-name']['composites']['realm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameCompositesRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameCompositesRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].composites.realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmRolesRoleNameGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>
  >,
) {
  return [':realm', '/:realm/roles/:role-name/groups', toValue(args)] as const
}

export function getRealmRolesRoleNameGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmRolesRoleNameManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
    >
  >,
) {
  return [':realm', '/:realm/roles/:role-name/management/permissions', toValue(args)] as const
}

export function getRealmRolesRoleNameManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].management.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameManagementPermissions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
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
                    (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameManagementPermissionsQueryKey>
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
              (typeof client)[':realm']['roles'][':role-name']['management']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].management.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmRolesRoleNameManagementPermissions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmRolesRoleNameManagementPermissionsMutationOptions<
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

export function getRealmRolesRoleNameUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>
  >,
) {
  return [':realm', '/:realm/roles/:role-name/users', toValue(args)] as const
}

export function getRealmRolesRoleNameUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmRolesRoleNameUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].roles[':role-name'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmRolesRoleNameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>
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
                  ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmRolesRoleNameUsersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['roles'][':role-name']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmRolesRoleNameUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmRolesRoleNameUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].roles[':role-name'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmSessionsSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmSessionsSessionMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmTestLDAPConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmTestLDAPConnectionMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmTestSMTPConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmTestSMTPConnectionMutationOptions<TError, TOnMutateResult>(
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

export function getRealmUserStorageIdNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>
  >,
) {
  return [':realm', '/:realm/user-storage/:id/name', toValue(args)] as const
}

export function getRealmUserStorageIdNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUserStorageIdNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['user-storage'][':id'].name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUserStorageIdName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>
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
                  ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmUserStorageIdNameQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['user-storage'][':id']['name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUserStorageIdNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUserStorageIdNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['user-storage'][':id'].name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmUserStorageIdRemoveImportedUsers<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUserStorageIdRemoveImportedUsersMutationOptions<
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

export function usePostRealmUserStorageIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['user-storage'][':id']['sync']['$post']>,
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
  const mutationDefaults = getPostRealmUserStorageIdSyncMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmUserStorageIdUnlinkUsers<
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
                    (typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':realm']['user-storage'][':id']['unlink-users']['$post']
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
  const mutationDefaults = getPostRealmUserStorageIdUnlinkUsersMutationOptions<
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

export function usePostRealmUserStorageParentIdMappersIdSync<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUserStorageParentIdMappersIdSyncMutationOptions<
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

export function getRealmUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['$get']>>,
) {
  return [':realm', '/:realm/users', toValue(args)] as const
}

export function getRealmUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
            >
          >,
          ReturnType<typeof getRealmUsersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['users']['$post']>,
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
  const mutationDefaults = getPostRealmUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRealmUsersManagementPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>
  >,
) {
  return [':realm', '/:realm/users-management-permissions', toValue(args)] as const
}

export function getRealmUsersManagementPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersManagementPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm']['users-management-permissions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersManagementPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users-management-permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>
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
                  ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersManagementPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users-management-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersManagementPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersManagementPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm']['users-management-permissions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmUsersManagementPermissions<
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
                  ReturnType<(typeof client)[':realm']['users-management-permissions']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['users-management-permissions']['$put']>,
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
  const mutationDefaults = getPutRealmUsersManagementPermissionsMutationOptions<
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

export function getRealmUsersCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['count']['$get']>>,
) {
  return [':realm', '/:realm/users/count', toValue(args)] as const
}

export function getRealmUsersCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['count']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users']['count']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmUsersCountQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>>,
) {
  return [':realm', '/:realm/users/:id', toValue(args)] as const
}

export function getRealmUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':realm']['users'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteRealmUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/users/:id/configured-user-storage-credential-types',
    toValue(args),
  ] as const
}

export function getRealmUsersIdConfiguredUserStorageCredentialTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmUsersIdConfiguredUserStorageCredentialTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
                    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
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
                    (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey>
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
              (typeof client)[':realm']['users'][':id']['configured-user-storage-credential-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdConfiguredUserStorageCredentialTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['configured-user-storage-credential-types'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdConsentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/consents', toValue(args)] as const
}

export function getRealmUsersIdConsentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdConsentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].consents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdConsents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['consents']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdConsentsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['consents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdConsentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdConsentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].consents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmUsersIdConsentsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdConsentsClientMutationOptions<
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

export function getRealmUsersIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/credentials', toValue(args)] as const
}

export function getRealmUsersIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>
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
                  ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdCredentialsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRealmUsersIdCredentialsCredentialId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdCredentialsCredentialIdMutationOptions<
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

export function usePostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId<
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
    getPostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdMutationOptions<
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

export function usePostRealmUsersIdCredentialsCredentialIdMoveToFirst<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdCredentialsCredentialIdMoveToFirstMutationOptions<
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

export function usePutRealmUsersIdCredentialsCredentialIdUserLabel<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdCredentialsCredentialIdUserLabelMutationOptions<
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

export function usePutRealmUsersIdDisableCredentialTypes<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdDisableCredentialTypesMutationOptions<
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

export function usePutRealmUsersIdExecuteActionsEmail<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdExecuteActionsEmailMutationOptions<
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

export function getRealmUsersIdFederatedIdentityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/federated-identity', toValue(args)] as const
}

export function getRealmUsersIdFederatedIdentityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdFederatedIdentityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['federated-identity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdFederatedIdentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
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
                    (typeof client)[':realm']['users'][':id']['federated-identity']['$get']
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
                    (typeof client)[':realm']['users'][':id']['federated-identity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdFederatedIdentityQueryKey>
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
            ReturnType<(typeof client)[':realm']['users'][':id']['federated-identity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdFederatedIdentityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdFederatedIdentityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['federated-identity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmUsersIdFederatedIdentityProvider<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdFederatedIdentityProviderMutationOptions<
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

export function useDeleteRealmUsersIdFederatedIdentityProvider<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdFederatedIdentityProviderMutationOptions<
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

export function getRealmUsersIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/groups', toValue(args)] as const
}

export function getRealmUsersIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdGroupsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/groups/count', toValue(args)] as const
}

export function getRealmUsersIdGroupsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdGroupsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].groups.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdGroupsCountQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['groups']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdGroupsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdGroupsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].groups.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmUsersIdGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':realm']['users'][':id']['groups'][':groupId']['$put']>,
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
  const mutationDefaults = getPutRealmUsersIdGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRealmUsersIdGroupsGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdGroupsGroupIdMutationOptions<
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

export function usePostRealmUsersIdImpersonation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdImpersonationMutationOptions<TError, TOnMutateResult>(
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

export function usePostRealmUsersIdLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getRealmUsersIdOfflineSessionsClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
    >
  >,
) {
  return [':realm', '/:realm/users/:id/offline-sessions/:clientId', toValue(args)] as const
}

export function getRealmUsersIdOfflineSessionsClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdOfflineSessionsClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdOfflineSessionsClientId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
                    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
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
                    (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdOfflineSessionsClientIdQueryKey>
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
              (typeof client)[':realm']['users'][':id']['offline-sessions'][':clientId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdOfflineSessionsClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdOfflineSessionsClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['offline-sessions'][':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmUsersIdResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getRealmUsersIdRoleMappingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings', toValue(args)] as const
}

export function getRealmUsersIdRoleMappingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdRoleMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdRoleMappingsClientsClientQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
    >
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/clients/:client', toValue(args)] as const
}

export function getRealmUsersIdRoleMappingsClientsClientQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsClientsClient<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientQueryKey>
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
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].clients[':client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmUsersIdRoleMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdRoleMappingsClientsClientMutationOptions<
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

export function useDeleteRealmUsersIdRoleMappingsClientsClient<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdRoleMappingsClientsClientMutationOptions<
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

export function getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/users/:id/role-mappings/clients/:client/available',
    toValue(args),
  ] as const
}

export function getRealmUsersIdRoleMappingsClientsClientAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsClientsClientAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey>
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
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].clients[':client'].available.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
    >
  >,
) {
  return [
    ':realm',
    '/:realm/users/:id/role-mappings/clients/:client/composite',
    toValue(args),
  ] as const
}

export function getRealmUsersIdRoleMappingsClientsClientCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsClientsClientComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey>
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
              (typeof client)[':realm']['users'][':id']['role-mappings']['clients'][':client']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsClientsClientCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].clients[':client'].composite.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdRoleMappingsRealmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm', toValue(args)] as const
}

export function getRealmUsersIdRoleMappingsRealmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsRealmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsRealm<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsRealmQueryKey>
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
            ReturnType<(typeof client)[':realm']['users'][':id']['role-mappings']['realm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsRealmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].realm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRealmUsersIdRoleMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRealmUsersIdRoleMappingsRealmMutationOptions<
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

export function useDeleteRealmUsersIdRoleMappingsRealm<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRealmUsersIdRoleMappingsRealmMutationOptions<
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

export function getRealmUsersIdRoleMappingsRealmAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
    >
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/available', toValue(args)] as const
}

export function getRealmUsersIdRoleMappingsRealmAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsRealmAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsRealmAvailable<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsRealmAvailableQueryKey>
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
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['available']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsRealmAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].realm.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRealmUsersIdRoleMappingsRealmCompositeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
    >
  >,
) {
  return [':realm', '/:realm/users/:id/role-mappings/realm/composite', toValue(args)] as const
}

export function getRealmUsersIdRoleMappingsRealmCompositeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdRoleMappingsRealmCompositeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id']['role-mappings'].realm.composite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdRoleMappingsRealmComposite<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
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
                    (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdRoleMappingsRealmCompositeQueryKey>
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
              (typeof client)[':realm']['users'][':id']['role-mappings']['realm']['composite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdRoleMappingsRealmCompositeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdRoleMappingsRealmCompositeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id']['role-mappings'].realm.composite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRealmUsersIdSendVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRealmUsersIdSendVerifyEmailMutationOptions<
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

export function getRealmUsersIdSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>
  >,
) {
  return [':realm', '/:realm/users/:id/sessions', toValue(args)] as const
}

export function getRealmUsersIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRealmUsersIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':realm'].users[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRealmUsersIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRealmUsersIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':realm']['users'][':id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRealmUsersIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRealmUsersIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':realm'].users[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
