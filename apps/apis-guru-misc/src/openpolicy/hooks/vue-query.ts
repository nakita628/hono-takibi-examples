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

export function getHealthKey() {
  return ['health'] as const
}

export function getV0Key() {
  return ['v0'] as const
}

export function getV1Key() {
  return ['v1'] as const
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

export function getHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.$get>>,
) {
  return ['health', '/health', toValue(args)] as const
}

export function getHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV0DataPathMutationKey() {
  return ['v0', '/v0/data/:path', 'POST'] as const
}

export function getPostV0DataPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v0.data)[':path']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v0.data)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV0DataPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v0.data)[':path']['$post']>) {
      return parseResponse(client.v0.data[':path'].$post(args, options))
    },
  })
}

export function usePostV0DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.data)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.data)[':path']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV0DataPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1CompileMutationKey() {
  return ['v1', '/v1/compile', 'POST'] as const
}

export function getPostV1CompileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.compile.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.compile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CompileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.compile.$post>) {
      return parseResponse(client.v1.compile.$post(args, options))
    },
  })
}

export function usePostV1Compile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.compile.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.compile.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CompileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
) {
  return ['v1', '/v1/config', toValue(args)] as const
}

export function getV1ConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
          >,
          ReturnType<typeof getV1ConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DataPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.data)[':path']['$get']>>,
) {
  return ['v1', '/v1/data/:path', toValue(args)] as const
}

export function getV1DataPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.data)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DataPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.data[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DataPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.data)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DataPathQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DataPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.data[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DataPathMutationKey() {
  return ['v1', '/v1/data/:path', 'PUT'] as const
}

export function getPutV1DataPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.data)[':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DataPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.data)[':path']['$put']>) {
      return parseResponse(client.v1.data[':path'].$put(args, options))
    },
  })
}

export function usePutV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1DataPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1DataPathMutationKey() {
  return ['v1', '/v1/data/:path', 'POST'] as const
}

export function getPostV1DataPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.data)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.data)[':path']['$post']>) {
      return parseResponse(client.v1.data[':path'].$post(args, options))
    },
  })
}

export function usePostV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DataPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1DataPathMutationKey() {
  return ['v1', '/v1/data/:path', 'DELETE'] as const
}

export function getDeleteV1DataPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.data)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DataPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.data)[':path']['$delete']>) {
      return parseResponse(client.v1.data[':path'].$delete(args, options))
    },
  })
}

export function useDeleteV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.data)[':path']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DataPathMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DataPathMutationKey() {
  return ['v1', '/v1/data/:path', 'PATCH'] as const
}

export function getPatchV1DataPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.data)[':path']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DataPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.data)[':path']['$patch']>) {
      return parseResponse(client.v1.data[':path'].$patch(args, options))
    },
  })
}

export function usePatchV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.data)[':path']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DataPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policies.$get>>,
) {
  return ['v1', '/v1/policies', toValue(args)] as const
}

export function getV1PoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.policies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Policies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
          >,
          ReturnType<typeof getV1PoliciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PoliciesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.policies)[':id']['$get']>>,
) {
  return ['v1', '/v1/policies/:id', toValue(args)] as const
}

export function getV1PoliciesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.policies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.policies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.policies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1PoliciesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PoliciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.policies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1PoliciesIdMutationKey() {
  return ['v1', '/v1/policies/:id', 'PUT'] as const
}

export function getPutV1PoliciesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.policies)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.policies)[':id']['$put']>) {
      return parseResponse(client.v1.policies[':id'].$put(args, options))
    },
  })
}

export function usePutV1PoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.policies)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PoliciesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1PoliciesIdMutationKey() {
  return ['v1', '/v1/policies/:id', 'DELETE'] as const
}

export function getDeleteV1PoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.policies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.policies)[':id']['$delete']>) {
      return parseResponse(client.v1.policies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.policies)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.policies)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1PoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1QueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.query.$get>>,
) {
  return ['v1', '/v1/query', toValue(args)] as const
}

export function getV1QueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1QueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.query.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Query<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
          >,
          ReturnType<typeof getV1QueryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1QueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1QueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1QueryMutationKey() {
  return ['v1', '/v1/query', 'POST'] as const
}

export function getPostV1QueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.query.$post>) {
      return parseResponse(client.v1.query.$post(args, options))
    },
  })
}

export function usePostV1Query<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.query.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
