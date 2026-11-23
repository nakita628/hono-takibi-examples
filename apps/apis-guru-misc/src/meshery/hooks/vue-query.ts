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

export function getProviderKey() {
  return ['provider'] as const
}

export function getApiApplicationIndexQueryKey() {
  return ['api', '/api/application/'] as const
}

export function getApiApplicationIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiApplicationIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.application.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiApplicationIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>
            >
          >,
          ReturnType<typeof getApiApplicationIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiApplicationIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.application.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiApplicationIndexMutationKey() {
  return ['api', '/api/application/', 'POST'] as const
}

export function getPostApiApplicationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.application.index.$post(undefined, options))
    },
  })
}

export function usePostApiApplicationIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$post>>>
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
  const mutationDefaults = getPostApiApplicationIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiApplicationDeployMutationKey() {
  return ['api', '/api/application/deploy', 'POST'] as const
}

export function getPostApiApplicationDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.application.deploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationDeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.application.deploy.$post>) {
      return parseResponse(client.api.application.deploy.$post(args, options))
    },
  })
}

export function usePostApiApplicationDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.application.deploy.$post>,
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
  const mutationDefaults = getPostApiApplicationDeployMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiApplicationDeployMutationKey() {
  return ['api', '/api/application/deploy', 'DELETE'] as const
}

export function getDeleteApiApplicationDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationDeployMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.application.deploy.$delete(undefined, options))
    },
  })
}

export function useDeleteApiApplicationDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.application.deploy.$delete>>
              >
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
  const mutationDefaults = getDeleteApiApplicationDeployMutationOptions<TError, TOnMutateResult>(
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

export function getApiApplicationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.application)[':id']['$get']>>,
) {
  return ['api', '/api/application/:id', toValue(args)] as const
}

export function getApiApplicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.application)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.application[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.application)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiApplicationIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.application[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiApplicationIdMutationKey() {
  return ['api', '/api/application/:id', 'DELETE'] as const
}

export function getDeleteApiApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.application)[':id']['$delete']>) {
      return parseResponse(client.api.application[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.application)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.application)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiApplicationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiFilterQueryKey() {
  return ['api', '/api/filter'] as const
}

export function getApiFilterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiFilterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.filter.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiFilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
          >,
          ReturnType<typeof getApiFilterQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiFilterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.filter.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiFilterMutationKey() {
  return ['api', '/api/filter', 'POST'] as const
}

export function getPostApiFilterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiFilterMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.filter.$post(undefined, options))
    },
  })
}

export function usePostApiFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$post>>>>
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
  const mutationDefaults = getPostApiFilterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiFilterFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter.file)[':id']['$get']>>,
) {
  return ['api', '/api/filter/file/:id', toValue(args)] as const
}

export function getApiFilterFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter.file)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFilterFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.filter.file[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFilterFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter.file)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiFilterFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilterFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFilterFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.filter.file[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiFilterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter)[':id']['$get']>>,
) {
  return ['api', '/api/filter/:id', toValue(args)] as const
}

export function getApiFilterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.filter[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFilterId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.filter)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiFilterIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.filter[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiFilterIdMutationKey() {
  return ['api', '/api/filter/:id', 'DELETE'] as const
}

export function getDeleteApiFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.filter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.filter)[':id']['$delete']>) {
      return parseResponse(client.api.filter[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiFilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.filter)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.filter)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiFilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiOamTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oam)[':type']['$get']>>,
) {
  return ['api', '/api/oam/:type', toValue(args)] as const
}

export function getApiOamTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oam)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOamTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oam[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOamType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oam)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getApiOamTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOamTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOamTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oam[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOamTypeMutationKey() {
  return ['api', '/api/oam/:type', 'POST'] as const
}

export function getPostApiOamTypeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oam)[':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOamTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.oam)[':type']['$post']>) {
      return parseResponse(client.api.oam[':type'].$post(args, options))
    },
  })
}

export function usePostApiOamType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.oam)[':type']['$post']>,
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
  const mutationDefaults = getPostApiOamTypeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPatternQueryKey() {
  return ['api', '/api/pattern'] as const
}

export function getApiPatternQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPatternQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pattern.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPattern<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
          >,
          ReturnType<typeof getApiPatternQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPatternQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPatternQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pattern.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPatternMutationKey() {
  return ['api', '/api/pattern', 'POST'] as const
}

export function getPostApiPatternMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatternMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.pattern.$post(undefined, options))
    },
  })
}

export function usePostApiPattern<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$post>>>>
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
  const mutationDefaults = getPostApiPatternMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiPatternDeployMutationKey() {
  return ['api', '/api/pattern/deploy', 'POST'] as const
}

export function getPostApiPatternDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pattern.deploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatternDeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pattern.deploy.$post>) {
      return parseResponse(client.api.pattern.deploy.$post(args, options))
    },
  })
}

export function usePostApiPatternDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pattern.deploy.$post>,
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
  const mutationDefaults = getPostApiPatternDeployMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPatternDeployMutationKey() {
  return ['api', '/api/pattern/deploy', 'DELETE'] as const
}

export function getDeleteApiPatternDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatternDeployMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.pattern.deploy.$delete(undefined, options))
    },
  })
}

export function useDeleteApiPatternDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$delete>>>
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
  const mutationDefaults = getDeleteApiPatternDeployMutationOptions<TError, TOnMutateResult>(
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

export function getApiPatternIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pattern)[':id']['$get']>>,
) {
  return ['api', '/api/pattern/:id', toValue(args)] as const
}

export function getApiPatternIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pattern)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPatternIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pattern[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPatternId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pattern)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPatternIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatternIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPatternIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pattern[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiPatternIdMutationKey() {
  return ['api', '/api/pattern/:id', 'DELETE'] as const
}

export function getDeleteApiPatternIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pattern)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatternIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pattern)[':id']['$delete']>) {
      return parseResponse(client.api.pattern[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPatternId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pattern)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pattern)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiPatternIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPerfProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.perf.profile.$get>>,
) {
  return ['api', '/api/perf/profile', toValue(args)] as const
}

export function getApiPerfProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.perf.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPerfProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.perf.profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPerfProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.perf.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>
            >
          >,
          ReturnType<typeof getApiPerfProfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPerfProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.perf.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPerfProfileResultQueryKey() {
  return ['api', '/api/perf/profile/result'] as const
}

export function getApiPerfProfileResultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPerfProfileResultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.perf.profile.result.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPerfProfileResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
            >
          >,
          ReturnType<typeof getApiPerfProfileResultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPerfProfileResultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.perf.profile.result.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPerfProfileResultIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>>,
) {
  return ['api', '/api/perf/profile/result/:id', toValue(args)] as const
}

export function getApiPerfProfileResultIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPerfProfileResultIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.perf.profile.result[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPerfProfileResultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPerfProfileResultIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileResultIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPerfProfileResultIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.perf.profile.result[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProviderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.provider.$get>>,
) {
  return ['api', '/api/provider', toValue(args)] as const
}

export function getApiProviderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.provider.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.provider.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.provider.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
          >,
          ReturnType<typeof getApiProviderQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.provider.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProviderCapabilitiesQueryKey() {
  return ['api', '/api/provider/capabilities'] as const
}

export function getApiProviderCapabilitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProviderCapabilitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.provider.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProviderCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>
              >
            >
          >,
          ReturnType<typeof getApiProviderCapabilitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProviderCapabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProviderCapabilitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.provider.capabilities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProviderExtensionQueryKey() {
  return ['api', '/api/provider/extension'] as const
}

export function getApiProviderExtensionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProviderExtensionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.provider.extension.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiProviderExtension<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>
            >
          >,
          ReturnType<typeof getApiProviderExtensionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProviderExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProviderExtensionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.provider.extension.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProvidersQueryKey() {
  return ['api', '/api/providers'] as const
}

export function getApiProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
          >,
          ReturnType<typeof getApiProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSystemAdapterManageMutationKey() {
  return ['api', '/api/system/adapter/manage', 'POST'] as const
}

export function getPostApiSystemAdapterManageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.manage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.manage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAdapterManageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.manage.$post>) {
      return parseResponse(client.api.system.adapter.manage.$post(args, options))
    },
  })
}

export function usePostApiSystemAdapterManage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.adapter.manage.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.system.adapter.manage.$post>,
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
  const mutationDefaults = getPostApiSystemAdapterManageMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiSystemAdapterManageMutationKey() {
  return ['api', '/api/system/adapter/manage', 'DELETE'] as const
}

export function getDeleteApiSystemAdapterManageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.manage.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.manage.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSystemAdapterManageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.manage.$delete>) {
      return parseResponse(client.api.system.adapter.manage.$delete(args, options))
    },
  })
}

export function useDeleteApiSystemAdapterManage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.adapter.manage.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.system.adapter.manage.$delete>,
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
  const mutationDefaults = getDeleteApiSystemAdapterManageMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiSystemAdapterOperationMutationKey() {
  return ['api', '/api/system/adapter/operation', 'POST'] as const
}

export function getPostApiSystemAdapterOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.operation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.operation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAdapterOperationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.operation.$post>) {
      return parseResponse(client.api.system.adapter.operation.$post(args, options))
    },
  })
}

export function usePostApiSystemAdapterOperation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.adapter.operation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.system.adapter.operation.$post>,
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
  const mutationDefaults = getPostApiSystemAdapterOperationMutationOptions<TError, TOnMutateResult>(
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

export function getApiSystemAdaptersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.system.adapters.$get>>,
) {
  return ['api', '/api/system/adapters', toValue(args)] as const
}

export function getApiSystemAdaptersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.system.adapters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSystemAdaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.adapters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSystemAdapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.system.adapters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>
            >
          >,
          ReturnType<typeof getApiSystemAdaptersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemAdaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSystemAdaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.adapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSystemKubernetesMutationKey() {
  return ['api', '/api/system/kubernetes', 'POST'] as const
}

export function getPostApiSystemKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemKubernetesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.$post(undefined, options))
    },
  })
}

export function usePostApiSystemKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$post>>>
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
  const mutationDefaults = getPostApiSystemKubernetesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiSystemKubernetesMutationKey() {
  return ['api', '/api/system/kubernetes', 'DELETE'] as const
}

export function getDeleteApiSystemKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSystemKubernetesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.$delete(undefined, options))
    },
  })
}

export function useDeleteApiSystemKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$delete>>>
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
  const mutationDefaults = getDeleteApiSystemKubernetesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiSystemKubernetesContextsMutationKey() {
  return ['api', '/api/system/kubernetes/contexts', 'POST'] as const
}

export function getPostApiSystemKubernetesContextsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.system.kubernetes.contexts.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemKubernetesContextsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.contexts.$post(undefined, options))
    },
  })
}

export function usePostApiSystemKubernetesContexts<
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
                Awaited<ReturnType<typeof client.api.system.kubernetes.contexts.$post>>
              >
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
  const mutationDefaults = getPostApiSystemKubernetesContextsMutationOptions<
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

export function getApiSystemKubernetesPingQueryKey() {
  return ['api', '/api/system/kubernetes/ping'] as const
}

export function getApiSystemKubernetesPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemKubernetesPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.kubernetes.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSystemKubernetesPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSystemKubernetesPingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemKubernetesPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemKubernetesPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.kubernetes.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSystemMeshsyncGrafanaQueryKey() {
  return ['api', '/api/system/meshsync/grafana'] as const
}

export function getApiSystemMeshsyncGrafanaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemMeshsyncGrafanaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.meshsync.grafana.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSystemMeshsyncGrafana<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSystemMeshsyncGrafanaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemMeshsyncGrafanaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemMeshsyncGrafanaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.meshsync.grafana.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSystemMeshsyncPrometheusQueryKey() {
  return ['api', '/api/system/meshsync/prometheus'] as const
}

export function getApiSystemMeshsyncPrometheusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemMeshsyncPrometheusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.meshsync.prometheus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSystemMeshsyncPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSystemMeshsyncPrometheusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemMeshsyncPrometheusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemMeshsyncPrometheusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.meshsync.prometheus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSystemSyncQueryKey() {
  return ['api', '/api/system/sync'] as const
}

export function getApiSystemSyncQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemSyncQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSystemSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>
            >
          >,
          ReturnType<typeof getApiSystemSyncQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemSyncQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.sync.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSystemVersionQueryKey() {
  return ['api', '/api/system/version'] as const
}

export function getApiSystemVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSystemVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.system.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>
            >
          >,
          ReturnType<typeof getApiSystemVersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSystemVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.system.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTelemetryMetricsBoardImportMutationKey() {
  return ['api', '/api/telemetry/metrics/board_import', 'POST'] as const
}

export function getPostApiTelemetryMetricsBoardImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.board_import.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsBoardImportMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.board_import.$post(undefined, options))
    },
  })
}

export function usePostApiTelemetryMetricsBoardImport<
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
                Awaited<ReturnType<typeof client.api.telemetry.metrics.board_import.$post>>
              >
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
  const mutationDefaults = getPostApiTelemetryMetricsBoardImportMutationOptions<
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

export function getPostApiTelemetryMetricsBoardsMutationKey() {
  return ['api', '/api/telemetry/metrics/boards', 'POST'] as const
}

export function getPostApiTelemetryMetricsBoardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.boards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.boards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsBoardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.telemetry.metrics.boards.$post>) {
      return parseResponse(client.api.telemetry.metrics.boards.$post(args, options))
    },
  })
}

export function usePostApiTelemetryMetricsBoards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.boards.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.telemetry.metrics.boards.$post>,
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
  const mutationDefaults = getPostApiTelemetryMetricsBoardsMutationOptions<TError, TOnMutateResult>(
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

export function getApiTelemetryMetricsConfigQueryKey() {
  return ['api', '/api/telemetry/metrics/config'] as const
}

export function getApiTelemetryMetricsConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTelemetryMetricsConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/config', 'POST'] as const
}

export function getPostApiTelemetryMetricsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.telemetry.metrics.config.$post>) {
      return parseResponse(client.api.telemetry.metrics.config.$post(args, options))
    },
  })
}

export function usePostApiTelemetryMetricsConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.telemetry.metrics.config.$post>,
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
  const mutationDefaults = getPostApiTelemetryMetricsConfigMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiTelemetryMetricsConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/config', 'DELETE'] as const
}

export function getDeleteApiTelemetryMetricsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTelemetryMetricsConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.config.$delete(undefined, options))
    },
  })
}

export function useDeleteApiTelemetryMetricsConfig<
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
                Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$delete>>
              >
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
  const mutationDefaults = getDeleteApiTelemetryMetricsConfigMutationOptions<
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

export function getApiTelemetryMetricsGrafanaBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>>,
) {
  return ['api', '/api/telemetry/metrics/grafana/boards', toValue(args)] as const
}

export function getApiTelemetryMetricsGrafanaBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTelemetryMetricsGrafanaBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsGrafanaBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsGrafanaBoardsQueryKey>
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
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTelemetryMetricsGrafanaBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.grafana.boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTelemetryMetricsGrafanaBoardsMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/boards', 'POST'] as const
}

export function getPostApiTelemetryMetricsGrafanaBoardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsGrafanaBoardsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.grafana.boards.$post(undefined, options))
    },
  })
}

export function usePostApiTelemetryMetricsGrafanaBoards<
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
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$post>>
              >
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
  const mutationDefaults = getPostApiTelemetryMetricsGrafanaBoardsMutationOptions<
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

export function getApiTelemetryMetricsGrafanaConfigQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/config'] as const
}

export function getApiTelemetryMetricsGrafanaConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsGrafanaConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsGrafanaConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsGrafanaConfigQueryKey>
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
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsGrafanaConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.grafana.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTelemetryMetricsGrafanaConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/config', 'POST'] as const
}

export function getPostApiTelemetryMetricsGrafanaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsGrafanaConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
    ) {
      return parseResponse(client.api.telemetry.metrics.grafana.config.$post(args, options))
    },
  })
}

export function usePostApiTelemetryMetricsGrafanaConfig<
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
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
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
  const mutationDefaults = getPostApiTelemetryMetricsGrafanaConfigMutationOptions<
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

export function getDeleteApiTelemetryMetricsGrafanaConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/config', 'DELETE'] as const
}

export function getDeleteApiTelemetryMetricsGrafanaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTelemetryMetricsGrafanaConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.grafana.config.$delete(undefined, options))
    },
  })
}

export function useDeleteApiTelemetryMetricsGrafanaConfig<
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
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$delete>>
              >
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
  const mutationDefaults = getDeleteApiTelemetryMetricsGrafanaConfigMutationOptions<
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

export function getApiTelemetryMetricsGrafanaPingQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/ping'] as const
}

export function getApiTelemetryMetricsGrafanaPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsGrafanaPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsGrafanaPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsGrafanaPingQueryKey>
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
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsGrafanaPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.grafana.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTelemetryMetricsGrafanaQueryQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/query'] as const
}

export function getApiTelemetryMetricsGrafanaQueryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsGrafanaQueryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsGrafanaQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsGrafanaQueryQueryKey>
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
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsGrafanaQueryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.grafana.query.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTelemetryMetricsGrafanaScanQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/scan'] as const
}

export function getApiTelemetryMetricsGrafanaScanQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsGrafanaScanQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.scan.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsGrafanaScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsGrafanaScanQueryKey>
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
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaScanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsGrafanaScanQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.grafana.scan.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTelemetryMetricsPingQueryKey() {
  return ['api', '/api/telemetry/metrics/ping'] as const
}

export function getApiTelemetryMetricsPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsPingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTelemetryMetricsQueryQueryKey() {
  return ['api', '/api/telemetry/metrics/query'] as const
}

export function getApiTelemetryMetricsQueryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsQueryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics.query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsQueryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsQueryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics.query.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTelemetryMetricsStaticBoardQueryKey() {
  return ['api', '/api/telemetry/metrics/static-board'] as const
}

export function getApiTelemetryMetricsStaticBoardQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiTelemetryMetricsStaticBoardQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.telemetry.metrics['static-board'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTelemetryMetricsStaticBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTelemetryMetricsStaticBoardQueryKey>
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
          Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsStaticBoardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiTelemetryMetricsStaticBoardQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.telemetry.metrics['static-board'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserLoginQueryKey() {
  return ['api', '/api/user/login'] as const
}

export function getApiUserLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUserLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
          >,
          ReturnType<typeof getApiUserLoginQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserLogoutQueryKey() {
  return ['api', '/api/user/logout'] as const
}

export function getApiUserLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUserLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>
            >
          >,
          ReturnType<typeof getApiUserLogoutQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserPerformanceProfilesQueryKey() {
  return ['api', '/api/user/performance/profiles'] as const
}

export function getApiUserPerformanceProfilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserPerformanceProfilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.performance.profiles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPerformanceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>
              >
            >
          >,
          ReturnType<typeof getApiUserPerformanceProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserPerformanceProfilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.performance.profiles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserPerformanceProfilesMutationKey() {
  return ['api', '/api/user/performance/profiles', 'POST'] as const
}

export function getPostApiUserPerformanceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.performance.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPerformanceProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.performance.profiles.$post>) {
      return parseResponse(client.api.user.performance.profiles.$post(args, options))
    },
  })
}

export function usePostApiUserPerformanceProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.user.performance.profiles.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.user.performance.profiles.$post>,
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
  const mutationDefaults = getPostApiUserPerformanceProfilesMutationOptions<
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

export function getApiUserPerformanceProfilesResultsQueryKey() {
  return ['api', '/api/user/performance/profiles/results'] as const
}

export function getApiUserPerformanceProfilesResultsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserPerformanceProfilesResultsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.performance.profiles.results.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPerformanceProfilesResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
              >
            >
          >,
          ReturnType<typeof getApiUserPerformanceProfilesResultsQueryKey>
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
          Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserPerformanceProfilesResultsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.performance.profiles.results.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserPerformanceProfilesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>
  >,
) {
  return ['api', '/api/user/performance/profiles/:id', toValue(args)] as const
}

export function getApiUserPerformanceProfilesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserPerformanceProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPerformanceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserPerformanceProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserPerformanceProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.performance.profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUserPerformanceProfilesIdMutationKey() {
  return ['api', '/api/user/performance/profiles/:id', 'DELETE'] as const
}

export function getDeleteApiUserPerformanceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserPerformanceProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.user.performance.profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserPerformanceProfilesId<
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
                Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiUserPerformanceProfilesIdMutationOptions<
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

export function getApiUserPerformanceProfilesIdResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
  >,
) {
  return ['api', '/api/user/performance/profiles/:id/results', toValue(args)] as const
}

export function getApiUserPerformanceProfilesIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserPerformanceProfilesIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPerformanceProfilesIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
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
                    (typeof client.api.user.performance.profiles)[':id']['results']['$get']
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
                    (typeof client.api.user.performance.profiles)[':id']['results']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUserPerformanceProfilesIdResultsQueryKey>
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
            ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserPerformanceProfilesIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.performance.profiles[':id'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserPerformanceProfilesIdRunQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
  >,
) {
  return ['api', '/api/user/performance/profiles/:id/run', toValue(args)] as const
}

export function getApiUserPerformanceProfilesIdRunQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserPerformanceProfilesIdRunQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].run.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPerformanceProfilesIdRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
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
                  ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUserPerformanceProfilesIdRunQueryKey>
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
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdRunQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserPerformanceProfilesIdRunQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.performance.profiles[':id'].run.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUserPrefsQueryKey() {
  return ['api', '/api/user/prefs'] as const
}

export function getApiUserPrefsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserPrefsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.prefs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUserPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
          >,
          ReturnType<typeof getApiUserPrefsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserPrefsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.prefs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserPrefsMutationKey() {
  return ['api', '/api/user/prefs', 'POST'] as const
}

export function getPostApiUserPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPrefsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.prefs.$post(undefined, options))
    },
  })
}

export function usePostApiUserPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$post>>>
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
  const mutationDefaults = getPostApiUserPrefsMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserPrefsPerfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user.prefs.perf.$get>>,
) {
  return ['api', '/api/user/prefs/perf', toValue(args)] as const
}

export function getApiUserPrefsPerfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user.prefs.perf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserPrefsPerfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.prefs.perf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserPrefsPerf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.user.prefs.perf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>
            >
          >,
          ReturnType<typeof getApiUserPrefsPerfQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPrefsPerfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserPrefsPerfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.prefs.perf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserPrefsPerfMutationKey() {
  return ['api', '/api/user/prefs/perf', 'POST'] as const
}

export function getPostApiUserPrefsPerfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.prefs.perf.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPrefsPerfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.prefs.perf.$post>) {
      return parseResponse(client.api.user.prefs.perf.$post(args, options))
    },
  })
}

export function usePostApiUserPrefsPerf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.user.prefs.perf.$post>,
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
  const mutationDefaults = getPostApiUserPrefsPerfMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiUserPrefsPerfMutationKey() {
  return ['api', '/api/user/prefs/perf', 'DELETE'] as const
}

export function getDeleteApiUserPrefsPerfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.prefs.perf.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserPrefsPerfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.prefs.perf.$delete>) {
      return parseResponse(client.api.user.prefs.perf.$delete(args, options))
    },
  })
}

export function useDeleteApiUserPrefsPerf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.user.prefs.perf.$delete>,
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
  const mutationDefaults = getDeleteApiUserPrefsPerfMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserSchedulesQueryKey() {
  return ['api', '/api/user/schedules'] as const
}

export function getApiUserSchedulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserSchedulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.schedules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>
            >
          >,
          ReturnType<typeof getApiUserSchedulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserSchedulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.schedules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserSchedulesMutationKey() {
  return ['api', '/api/user/schedules', 'POST'] as const
}

export function getPostApiUserSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserSchedulesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.schedules.$post(undefined, options))
    },
  })
}

export function usePostApiUserSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$post>>>
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
  const mutationDefaults = getPostApiUserSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserSchedulesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>>,
) {
  return ['api', '/api/user/schedules/:id', toValue(args)] as const
}

export function getApiUserSchedulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUserSchedulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.schedules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUserSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUserSchedulesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserSchedulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUserSchedulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.schedules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiUserSchedulesIdMutationKey() {
  return ['api', '/api/user/schedules/:id', 'DELETE'] as const
}

export function getDeleteApiUserSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserSchedulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>) {
      return parseResponse(client.api.user.schedules[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiUserSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiUserSchedulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiUserTokenQueryKey() {
  return ['api', '/api/user/token'] as const
}

export function getApiUserTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiUserTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.user.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUserToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
          >,
          ReturnType<typeof getApiUserTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiUserTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.user.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUserTokenMutationKey() {
  return ['api', '/api/user/token', 'POST'] as const
}

export function getPostApiUserTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.token.$post(undefined, options))
    },
  })
}

export function usePostApiUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$post>>>
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
  const mutationDefaults = getPostApiUserTokenMutationOptions<TError, TOnMutateResult>(
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

export function getProviderQueryKey() {
  return ['provider', '/provider'] as const
}

export function getProviderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProviderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.provider.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>
          >,
          ReturnType<typeof getProviderQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProviderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.provider.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
