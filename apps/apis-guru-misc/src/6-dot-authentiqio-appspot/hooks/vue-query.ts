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

export function usePostKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
          TError,
          InferRequestType<typeof client.key.$post>,
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
  const mutationDefaults = getPostKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$delete>>>>>,
          TError,
          InferRequestType<typeof client.key.$delete>,
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
  const mutationDefaults = getDeleteKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeyPKQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.key)[':PK']['$get']>>,
) {
  return ['key', '/key/:PK', toValue(args)] as const
}

export function getKeyPKQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.key)[':PK']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyPKQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.key[':PK'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeyPK<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.key)[':PK']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>
            >
          >,
          ReturnType<typeof getKeyPKQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyPKQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyPKQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.key[':PK'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$put']>,
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
  const mutationDefaults = getPutKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$post']>,
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
  const mutationDefaults = getPostKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$delete']>,
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
  const mutationDefaults = getDeleteKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useHeadKeyPK<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':PK']['$head']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.key)[':PK']['$head']>,
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
  const mutationDefaults = getHeadKeyPKMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostScope<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scope.$post>>>>>,
          TError,
          InferRequestType<typeof client.scope.$post>,
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
  const mutationDefaults = getPostScopeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScopeJobQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scope)[':job']['$get']>>,
) {
  return ['scope', '/scope/:job', toValue(args)] as const
}

export function getScopeJobQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scope)[':job']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScopeJobQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scope[':job'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScopeJob<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scope)[':job']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>
            >
          >,
          ReturnType<typeof getScopeJobQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScopeJobQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScopeJobQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scope[':job'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$put']>,
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
  const mutationDefaults = getPutScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$post']>,
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
  const mutationDefaults = getPostScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$delete']>,
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
  const mutationDefaults = getDeleteScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useHeadScopeJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.scope)[':job']['$head']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.scope)[':job']['$head']>,
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
  const mutationDefaults = getHeadScopeJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
