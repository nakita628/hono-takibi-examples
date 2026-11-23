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

export function getKeyKey() {
  return ['key'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getScopeKey() {
  return ['scope'] as const
}

export function getPostKeyMutationKey() {
  return ['key', '/key', 'POST'] as const
}

export function getPostKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
    TError,
    InferRequestType<typeof client.key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.key.$post>) {
      return parseResponse(client.key.$post(args, options))
    },
  })
}

export function createPostKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
          TError,
          InferRequestType<typeof client.key.$post>,
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
    const mutationDefaults = getPostKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteKeyMutationKey() {
  return ['key', '/key', 'DELETE'] as const
}

export function getDeleteKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$delete>>>>>,
    TError,
    InferRequestType<typeof client.key.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.key.$delete>) {
      return parseResponse(client.key.$delete(args, options))
    },
  })
}

export function createDeleteKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$delete>>>>>,
          TError,
          InferRequestType<typeof client.key.$delete>,
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
    const mutationDefaults = getDeleteKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKeyPKQueryKey(args: InferRequestType<(typeof client.key)[':PK']['$get']>) {
  return ['key', '/key/:PK', args] as const
}

export function getKeyPKQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.key)[':PK']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyPKQueryKey>
  >({
    queryKey: getKeyPKQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.key[':PK'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKeyPK<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.key)[':PK']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKeyPKQueryKey>
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
    return { ...getKeyPKQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutKeyPKMutationKey() {
  return ['key', '/key/:PK', 'PUT'] as const
}

export function getPutKeyPKMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':PK']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKeyPKMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':PK']['$put']>) {
      return parseResponse(client.key[':PK'].$put(args, options))
    },
  })
}

export function createPutKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$put']>,
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
    const mutationDefaults = getPutKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostKeyPKMutationKey() {
  return ['key', '/key/:PK', 'POST'] as const
}

export function getPostKeyPKMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':PK']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKeyPKMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':PK']['$post']>) {
      return parseResponse(client.key[':PK'].$post(args, options))
    },
  })
}

export function createPostKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$post']>,
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
    const mutationDefaults = getPostKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteKeyPKMutationKey() {
  return ['key', '/key/:PK', 'DELETE'] as const
}

export function getDeleteKeyPKMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':PK']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKeyPKMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':PK']['$delete']>) {
      return parseResponse(client.key[':PK'].$delete(args, options))
    },
  })
}

export function createDeleteKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$delete']>,
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
    const mutationDefaults = getDeleteKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadKeyPKMutationKey() {
  return ['key', '/key/:PK', 'HEAD'] as const
}

export function getHeadKeyPKMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$head']>>>>
    >,
    TError,
    InferRequestType<(typeof client.key)[':PK']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadKeyPKMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.key)[':PK']['$head']>) {
      return parseResponse(client.key[':PK'].$head(args, options))
    },
  })
}

export function createHeadKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$head']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$head']>,
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
    const mutationDefaults = getHeadKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function createPostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
    const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostScopeMutationKey() {
  return ['scope', '/scope', 'POST'] as const
}

export function getPostScopeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scope.$post>>>>>,
    TError,
    InferRequestType<typeof client.scope.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScopeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scope.$post>) {
      return parseResponse(client.scope.$post(args, options))
    },
  })
}

export function createPostScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scope.$post>>>>>,
          TError,
          InferRequestType<typeof client.scope.$post>,
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
    const mutationDefaults = getPostScopeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScopeJobQueryKey(args: InferRequestType<(typeof client.scope)[':job']['$get']>) {
  return ['scope', '/scope/:job', args] as const
}

export function getScopeJobQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.scope)[':job']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScopeJobQueryKey>
  >({
    queryKey: getScopeJobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scope[':job'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScopeJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scope)[':job']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScopeJobQueryKey>
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
    return { ...getScopeJobQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutScopeJobMutationKey() {
  return ['scope', '/scope/:job', 'PUT'] as const
}

export function getPutScopeJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.scope)[':job']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScopeJobMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scope)[':job']['$put']>) {
      return parseResponse(client.scope[':job'].$put(args, options))
    },
  })
}

export function createPutScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$put']>,
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
    const mutationDefaults = getPutScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostScopeJobMutationKey() {
  return ['scope', '/scope/:job', 'POST'] as const
}

export function getPostScopeJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.scope)[':job']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScopeJobMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scope)[':job']['$post']>) {
      return parseResponse(client.scope[':job'].$post(args, options))
    },
  })
}

export function createPostScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$post']>,
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
    const mutationDefaults = getPostScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteScopeJobMutationKey() {
  return ['scope', '/scope/:job', 'DELETE'] as const
}

export function getDeleteScopeJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.scope)[':job']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScopeJobMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scope)[':job']['$delete']>) {
      return parseResponse(client.scope[':job'].$delete(args, options))
    },
  })
}

export function createDeleteScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$delete']>,
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
    const mutationDefaults = getDeleteScopeJobMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadScopeJobMutationKey() {
  return ['scope', '/scope/:job', 'HEAD'] as const
}

export function getHeadScopeJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$head']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scope)[':job']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadScopeJobMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.scope)[':job']['$head']>) {
      return parseResponse(client.scope[':job'].$head(args, options))
    },
  })
}

export function createHeadScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$head']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$head']>,
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
    const mutationDefaults = getHeadScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
