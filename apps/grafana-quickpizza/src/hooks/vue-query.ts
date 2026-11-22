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

export function usePostApiPizza<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pizza.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pizza.$post>,
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
  const mutationDefaults = getPostApiPizzaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPizzaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pizza)[':id']['$get']>>,
) {
  return ['api', '/api/pizza/:id', toValue(args)] as const
}

export function getApiPizzaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pizza)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPizzaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pizza[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPizzaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pizza)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPizzaIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pizza)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPizzaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPizzaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pizza[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiIngredientsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ingredients)[':type']['$get']>>,
) {
  return ['api', '/api/ingredients/:type', toValue(args)] as const
}

export function getApiIngredientsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ingredients)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIngredientsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ingredients[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIngredientsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ingredients)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiIngredientsTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ingredients)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIngredientsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIngredientsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ingredients[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDoughsQueryKey() {
  return ['api', '/api/doughs'] as const
}

export function getApiDoughsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDoughsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.doughs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiDoughs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>
          >,
          ReturnType<typeof getApiDoughsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.doughs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDoughsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDoughsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.doughs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiToolsQueryKey() {
  return ['api', '/api/tools'] as const
}

export function getApiToolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiToolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>
          >,
          ReturnType<typeof getApiToolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiToolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRatingsQueryKey() {
  return ['api', '/api/ratings'] as const
}

export function getApiRatingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiRatingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ratings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiRatings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>
          >,
          ReturnType<typeof getApiRatingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiRatingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ratings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.ratings.$post>,
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
  const mutationDefaults = getPostApiRatingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.ratings.$delete>>>
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
  const mutationDefaults = getDeleteApiRatingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiRatingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ratings)[':id']['$get']>>,
) {
  return ['api', '/api/ratings/:id', toValue(args)] as const
}

export function getApiRatingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ratings)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRatingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ratings[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRatingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ratings)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiRatingsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRatingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRatingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ratings[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ratings)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ratings)[':id']['$put']>,
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
  const mutationDefaults = getPutApiRatingsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiRatingsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchApiRatingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ratings)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ratings)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiRatingsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.users.$post>,
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
  const mutationDefaults = getPostApiUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiUsersTokenLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.users.token.login.$post>,
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
  const mutationDefaults = getPostApiUsersTokenLoginMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiUsersTokenLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.token.logout.$post>>>
            >
          >,
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
  const mutationDefaults = getPostApiUsersTokenLogoutMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiAdminLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.admin.login.$post>,
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
  const mutationDefaults = getPostApiAdminLoginMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiCsrfToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['csrf-token']['$post']>>>
            >
          >,
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
  const mutationDefaults = getPostApiCsrfTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiQuotesQueryKey() {
  return ['api', '/api/quotes'] as const
}

export function getApiQuotesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiQuotesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quotes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>
          >,
          ReturnType<typeof getApiQuotesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiQuotesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quotes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNamesQueryKey() {
  return ['api', '/api/names'] as const
}

export function getApiNamesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiNamesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.names.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>
          >,
          ReturnType<typeof getApiNamesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.names.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiNamesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.names.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAdjectivesQueryKey() {
  return ['api', '/api/adjectives'] as const
}

export function getApiAdjectivesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAdjectivesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.adjectives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAdjectives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
          >,
          ReturnType<typeof getApiAdjectivesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.adjectives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAdjectivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAdjectivesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.adjectives.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiConfigQueryKey() {
  return ['api', '/api/config'] as const
}

export function getApiConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>
          >,
          ReturnType<typeof getApiConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          ReturnType<typeof getReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          ReturnType<typeof getHealthzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.healthz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStatusStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.status)[':status']['$get']>>,
) {
  return ['api', '/api/status/:status', toValue(args)] as const
}

export function getApiStatusStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.status)[':status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStatusStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.status[':status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStatusStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.status)[':status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStatusStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.status)[':status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStatusStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStatusStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.status[':status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBytesNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bytes)[':n']['$get']>>,
) {
  return ['api', '/api/bytes/:n', toValue(args)] as const
}

export function getApiBytesNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bytes)[':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBytesNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bytes[':n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBytesN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bytes)[':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>
            >
          >,
          ReturnType<typeof getApiBytesNQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.bytes)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBytesNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBytesNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bytes[':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDelayDelayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.delay)[':delay']['$get']>>,
) {
  return ['api', '/api/delay/:delay', toValue(args)] as const
}

export function getApiDelayDelayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.delay)[':delay']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDelayDelayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.delay[':delay'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDelayDelay<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.delay)[':delay']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
            >
          >,
          ReturnType<typeof getApiDelayDelayQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.delay)[':delay']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDelayDelayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDelayDelayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.delay[':delay'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGetQueryKey() {
  return ['api', '/api/get'] as const
}

export function getApiGetQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGetQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.get.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiGet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>
          >,
          ReturnType<typeof getApiGetQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGetQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.get.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete.$delete>>>>
          >,
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
  const mutationDefaults = getDeleteApiDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.post.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.post.$post>,
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
  const mutationDefaults = getPostApiPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutApiPut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.put.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.api.put.$put>,
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
  const mutationDefaults = getPutApiPutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.patch.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.api.patch.$patch>,
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
  const mutationDefaults = getPatchApiPatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCookiesQueryKey() {
  return ['api', '/api/cookies'] as const
}

export function getApiCookiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiCookiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cookies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>
          >,
          ReturnType<typeof getApiCookiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCookiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiCookiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cookies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCookies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cookies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.cookies.$post>,
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
  const mutationDefaults = getPostApiCookiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiHeadersQueryKey() {
  return ['api', '/api/headers'] as const
}

export function getApiHeadersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiHeadersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.headers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>
          >,
          ReturnType<typeof getApiHeadersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.headers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiHeadersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.headers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBasicAuthUsernamePasswordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>
  >,
) {
  return ['api', '/api/basic-auth/:username/:password', toValue(args)] as const
}

export function getApiBasicAuthUsernamePasswordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBasicAuthUsernamePasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['basic-auth'][':username'][':password'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBasicAuthUsernamePassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiBasicAuthUsernamePasswordQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['basic-auth'][':username'][':password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBasicAuthUsernamePasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBasicAuthUsernamePasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['basic-auth'][':username'][':password'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.json.$get>>,
) {
  return ['api', '/api/json', toValue(args)] as const
}

export function getApiJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.json.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.json.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.json.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>
          >,
          ReturnType<typeof getApiJsonQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.json.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.json.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiXmlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.xml.$get>>,
) {
  return ['api', '/api/xml', toValue(args)] as const
}

export function getApiXmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.xml.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiXmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.xml.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiXml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.xml.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>
          >,
          ReturnType<typeof getApiXmlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.xml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiXmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiXmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.xml.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
