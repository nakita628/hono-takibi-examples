import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getHealthzKey() {
  return ['healthz'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getPostApiPizzaMutationKey() {
  return ['api', '/api/pizza', 'POST'] as const
}

export function getPostApiPizzaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pizza.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.pizza.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPizzaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pizza.$post>) {
      return parseResponse(client.api.pizza.$post(args, options))
    },
  })
}

export function createPostApiPizza<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pizza.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.pizza.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPizzaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPizzaIdQueryKey(
  args: InferRequestType<(typeof client.api.pizza)[':id']['$get']>,
) {
  return ['api', '/api/pizza/:id', args] as const
}

export function getApiPizzaIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pizza)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPizzaIdQueryKey>
  >({
    queryKey: getApiPizzaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pizza[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPizzaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pizza)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPizzaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPizzaIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiIngredientsTypeQueryKey(
  args: InferRequestType<(typeof client.api.ingredients)[':type']['$get']>,
) {
  return ['api', '/api/ingredients/:type', args] as const
}

export function getApiIngredientsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ingredients)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIngredientsTypeQueryKey>
  >({
    queryKey: getApiIngredientsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ingredients[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiIngredientsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ingredients)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIngredientsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiIngredientsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDoughsQueryKey() {
  return ['api', '/api/doughs'] as const
}

export function getApiDoughsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDoughsQueryKey>
  >({
    queryKey: getApiDoughsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.doughs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDoughs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDoughsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDoughsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiToolsQueryKey() {
  return ['api', '/api/tools'] as const
}

export function getApiToolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiToolsQueryKey>
  >({
    queryKey: getApiToolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiToolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiRatingsQueryKey() {
  return ['api', '/api/ratings'] as const
}

export function getApiRatingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRatingsQueryKey>
  >({
    queryKey: getApiRatingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ratings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRatings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRatingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiRatingsMutationKey() {
  return ['api', '/api/ratings', 'POST'] as const
}

export function getPostApiRatingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.ratings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRatingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ratings.$post>) {
      return parseResponse(client.api.ratings.$post(args, options))
    },
  })
}

export function createPostApiRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.ratings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRatingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiRatingsMutationKey() {
  return ['api', '/api/ratings', 'DELETE'] as const
}

export function getDeleteApiRatingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiRatingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.ratings.$delete(undefined, options))
    },
  })
}

export function createDeleteApiRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$delete>>>>
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiRatingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiRatingsIdQueryKey(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$get']>,
) {
  return ['api', '/api/ratings/:id', args] as const
}

export function getApiRatingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ratings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRatingsIdQueryKey>
  >({
    queryKey: getApiRatingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ratings[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRatingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ratings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRatingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRatingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiRatingsIdMutationKey() {
  return ['api', '/api/ratings/:id', 'PUT'] as const
}

export function getPutApiRatingsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ratings)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiRatingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ratings)[':id']['$put']>) {
      return parseResponse(client.api.ratings[':id'].$put(args, options))
    },
  })
}

export function createPutApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ratings)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiRatingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiRatingsIdMutationKey() {
  return ['api', '/api/ratings/:id', 'DELETE'] as const
}

export function getDeleteApiRatingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.ratings)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiRatingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ratings)[':id']['$delete']>) {
      return parseResponse(client.api.ratings[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ratings)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.ratings)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiRatingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiRatingsIdMutationKey() {
  return ['api', '/api/ratings/:id', 'PATCH'] as const
}

export function getPatchApiRatingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ratings)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiRatingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ratings)[':id']['$patch']>) {
      return parseResponse(client.api.ratings[':id'].$patch(args, options))
    },
  })
}

export function createPatchApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ratings)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiRatingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiUsersMutationKey() {
  return ['api', '/api/users', 'POST'] as const
}

export function getPostApiUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.users.$post>) {
      return parseResponse(client.api.users.$post(args, options))
    },
  })
}

export function createPostApiUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiUsersTokenLoginMutationKey() {
  return ['api', '/api/users/token/login', 'POST'] as const
}

export function getPostApiUsersTokenLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.users.token.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersTokenLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.users.token.login.$post>) {
      return parseResponse(client.api.users.token.login.$post(args, options))
    },
  })
}

export function createPostApiUsersTokenLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.users.token.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersTokenLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiUsersTokenLogoutMutationKey() {
  return ['api', '/api/users/token/logout', 'POST'] as const
}

export function getPostApiUsersTokenLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.logout.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersTokenLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.users.token.logout.$post(undefined, options))
    },
  })
}

export function createPostApiUsersTokenLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.logout.$post>>>
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersTokenLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAdminLoginMutationKey() {
  return ['api', '/api/admin/login', 'POST'] as const
}

export function getPostApiAdminLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.admin.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAdminLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.admin.login.$post>) {
      return parseResponse(client.api.admin.login.$post(args, options))
    },
  })
}

export function createPostApiAdminLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.admin.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAdminLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiCsrfTokenMutationKey() {
  return ['api', '/api/csrf-token', 'POST'] as const
}

export function getPostApiCsrfTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['csrf-token']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiCsrfTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api['csrf-token'].$post(undefined, options))
    },
  })
}

export function createPostApiCsrfToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['csrf-token']['$post']>>>
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCsrfTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQuotesQueryKey() {
  return ['api', '/api/quotes'] as const
}

export function getApiQuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQuotesQueryKey>
  >({
    queryKey: getApiQuotesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quotes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQuotesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiNamesQueryKey() {
  return ['api', '/api/names'] as const
}

export function getApiNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiNamesQueryKey>
  >({
    queryKey: getApiNamesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.names.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNamesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiAdjectivesQueryKey() {
  return ['api', '/api/adjectives'] as const
}

export function getApiAdjectivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdjectivesQueryKey>
  >({
    queryKey: getApiAdjectivesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.adjectives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAdjectives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAdjectivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAdjectivesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiConfigQueryKey() {
  return ['api', '/api/config'] as const
}

export function getApiConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiConfigQueryKey>
  >({
    queryKey: getApiConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >({
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthzQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthzQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiStatusStatusQueryKey(
  args: InferRequestType<(typeof client.api.status)[':status']['$get']>,
) {
  return ['api', '/api/status/:status', args] as const
}

export function getApiStatusStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.status)[':status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStatusStatusQueryKey>
  >({
    queryKey: getApiStatusStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.status[':status'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiStatusStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.status)[':status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiStatusStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiStatusStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiBytesNQueryKey(
  args: InferRequestType<(typeof client.api.bytes)[':n']['$get']>,
) {
  return ['api', '/api/bytes/:n', args] as const
}

export function getApiBytesNQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.bytes)[':n']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBytesNQueryKey>
  >({
    queryKey: getApiBytesNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bytes[':n'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiBytesN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.bytes)[':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBytesNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBytesNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiDelayDelayQueryKey(
  args: InferRequestType<(typeof client.api.delay)[':delay']['$get']>,
) {
  return ['api', '/api/delay/:delay', args] as const
}

export function getApiDelayDelayQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.delay)[':delay']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDelayDelayQueryKey>
  >({
    queryKey: getApiDelayDelayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.delay[':delay'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiDelayDelay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.delay)[':delay']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDelayDelayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDelayDelayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiGetQueryKey() {
  return ['api', '/api/get'] as const
}

export function getApiGetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGetQueryKey>
  >({
    queryKey: getApiGetQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.get.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGetQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiDeleteMutationKey() {
  return ['api', '/api/delete', 'DELETE'] as const
}

export function getDeleteApiDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.delete.$delete(undefined, options))
    },
  })
}

export function createDeleteApiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPostMutationKey() {
  return ['api', '/api/post', 'POST'] as const
}

export function getPostApiPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.post.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.post.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.post.$post>) {
      return parseResponse(client.api.post.$post(args, options))
    },
  })
}

export function createPostApiPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.post.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.post.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiPutMutationKey() {
  return ['api', '/api/put', 'PUT'] as const
}

export function getPutApiPutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.put.$put>>>>>,
    TError,
    InferRequestType<typeof client.api.put.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.put.$put>) {
      return parseResponse(client.api.put.$put(args, options))
    },
  })
}

export function createPutApiPut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.put.$put>>>>>,
        TError,
        InferRequestType<typeof client.api.put.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiPutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiPatchMutationKey() {
  return ['api', '/api/patch', 'PATCH'] as const
}

export function getPatchApiPatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.$patch>>>>>,
    TError,
    InferRequestType<typeof client.api.patch.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.patch.$patch>) {
      return parseResponse(client.api.patch.$patch(args, options))
    },
  })
}

export function createPatchApiPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.api.patch.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCookiesQueryKey() {
  return ['api', '/api/cookies'] as const
}

export function getApiCookiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCookiesQueryKey>
  >({
    queryKey: getApiCookiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cookies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCookiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCookiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiCookiesMutationKey() {
  return ['api', '/api/cookies', 'POST'] as const
}

export function getPostApiCookiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.cookies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCookiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.cookies.$post>) {
      return parseResponse(client.api.cookies.$post(args, options))
    },
  })
}

export function createPostApiCookies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.cookies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCookiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiHeadersQueryKey() {
  return ['api', '/api/headers'] as const
}

export function getApiHeadersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHeadersQueryKey>
  >({
    queryKey: getApiHeadersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.headers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiHeadersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiBasicAuthUsernamePasswordQueryKey(
  args: InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>,
) {
  return ['api', '/api/basic-auth/:username/:password', args] as const
}

export function getApiBasicAuthUsernamePasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBasicAuthUsernamePasswordQueryKey>
  >({
    queryKey: getApiBasicAuthUsernamePasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['basic-auth'][':username'][':password'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiBasicAuthUsernamePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBasicAuthUsernamePasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBasicAuthUsernamePasswordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiJsonQueryKey(args: InferRequestType<typeof client.api.json.$get>) {
  return ['api', '/api/json', args] as const
}

export function getApiJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.json.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJsonQueryKey>
  >({
    queryKey: getApiJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.json.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.json.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiXmlQueryKey(args: InferRequestType<typeof client.api.xml.$get>) {
  return ['api', '/api/xml', args] as const
}

export function getApiXmlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.xml.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiXmlQueryKey>
  >({
    queryKey: getApiXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.xml.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiXml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.xml.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiXmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiXmlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
