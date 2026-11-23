import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
          TError,
          InferRequestType<typeof client.index.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthQueryKey(args: InferRequestType<typeof client.health.$get>) {
  return ['health', '/health', args] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHealthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV0DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v0.data)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v0.data)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV0DataPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1Compile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.compile.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.compile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CompileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConfigQueryKey(args: InferRequestType<typeof client.v1.config.$get>) {
  return ['v1', '/v1/config', args] as const
}

export function getV1ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ConfigQueryKey>
  >({
    queryKey: getV1ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.config.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1DataPathQueryKey(
  args: InferRequestType<(typeof client.v1.data)[':path']['$get']>,
) {
  return ['v1', '/v1/data/:path', args] as const
}

export function getV1DataPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.data)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DataPathQueryKey>
  >({
    queryKey: getV1DataPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.data[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DataPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.data)[':path']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DataPathQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DataPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1DataPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.data)[':path']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.data)[':path']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1DataPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DataPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV1DataPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1DataPathMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PoliciesQueryKey(args: InferRequestType<typeof client.v1.policies.$get>) {
  return ['v1', '/v1/policies', args] as const
}

export function getV1PoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PoliciesQueryKey>
  >({
    queryKey: getV1PoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Policies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.policies.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.policies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1PoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PoliciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PoliciesIdQueryKey(
  args: InferRequestType<(typeof client.v1.policies)[':id']['$get']>,
) {
  return ['v1', '/v1/policies/:id', args] as const
}

export function getV1PoliciesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.policies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PoliciesIdQueryKey>
  >({
    queryKey: getV1PoliciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.policies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PoliciesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.policies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PoliciesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PoliciesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutV1PoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.policies)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.policies)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PoliciesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1PoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PoliciesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1QueryQueryKey(args: InferRequestType<typeof client.v1.query.$get>) {
  return ['v1', '/v1/query', args] as const
}

export function getV1QueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1QueryQueryKey>
  >({
    queryKey: getV1QueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Query<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.query.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1QueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1QueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Query<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.query.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1QueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
