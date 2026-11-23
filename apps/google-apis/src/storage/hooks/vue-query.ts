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

export function getBKey() {
  return ['b'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getBQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.b.$get>>) {
  return ['b', '/b', toValue(args)] as const
}

export function getBQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.b.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useB<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.b.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
          ReturnType<typeof getBQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBMutationKey() {
  return ['b', '/b', 'POST'] as const
}

export function getPostBMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$post>>>>>,
    TError,
    InferRequestType<typeof client.b.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.b.$post>) {
      return parseResponse(client.b.$post(args, options))
    },
  })
}

export function usePostB<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$post>>>>>,
          TError,
          InferRequestType<typeof client.b.$post>,
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
  const mutationDefaults = getPostBMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBBucketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['$get']>>,
) {
  return ['b', '/b/:bucket', toValue(args)] as const
}

export function getBBucketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBBucket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>
            >
          >,
          ReturnType<typeof getBBucketQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketMutationKey() {
  return ['b', '/b/:bucket', 'PUT'] as const
}

export function getPutBBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['$put']>) {
      return parseResponse(client.b[':bucket'].$put(args, options))
    },
  })
}

export function usePutBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['$put']>,
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
  const mutationDefaults = getPutBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBBucketMutationKey() {
  return ['b', '/b/:bucket', 'DELETE'] as const
}

export function getDeleteBBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['$delete']>) {
      return parseResponse(client.b[':bucket'].$delete(args, options))
    },
  })
}

export function useDeleteBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['$delete']>,
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
  const mutationDefaults = getDeleteBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBBucketMutationKey() {
  return ['b', '/b/:bucket', 'PATCH'] as const
}

export function getPatchBBucketMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['$patch']>) {
      return parseResponse(client.b[':bucket'].$patch(args, options))
    },
  })
}

export function usePatchBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['$patch']>,
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
  const mutationDefaults = getPatchBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBBucketAclQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>>,
) {
  return ['b', '/b/:bucket/acl', toValue(args)] as const
}

export function getBBucketAclQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].acl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
            >
          >,
          ReturnType<typeof getBBucketAclQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].acl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketAclMutationKey() {
  return ['b', '/b/:bucket/acl', 'POST'] as const
}

export function getPostBBucketAclMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketAclMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>) {
      return parseResponse(client.b[':bucket'].acl.$post(args, options))
    },
  })
}

export function usePostBBucketAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>,
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
  const mutationDefaults = getPostBBucketAclMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBBucketAclEntityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>,
) {
  return ['b', '/b/:bucket/acl/:entity', toValue(args)] as const
}

export function getBBucketAclEntityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketAclEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].acl[':entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketAclEntityQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketAclEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketAclEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].acl[':entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketAclEntityMutationKey() {
  return ['b', '/b/:bucket/acl/:entity', 'PUT'] as const
}

export function getPutBBucketAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>,
    ) {
      return parseResponse(client.b[':bucket'].acl[':entity'].$put(args, options))
    },
  })
}

export function usePutBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>,
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
  const mutationDefaults = getPutBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBBucketAclEntityMutationKey() {
  return ['b', '/b/:bucket/acl/:entity', 'DELETE'] as const
}

export function getDeleteBBucketAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>,
    ) {
      return parseResponse(client.b[':bucket'].acl[':entity'].$delete(args, options))
    },
  })
}

export function useDeleteBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>,
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
  const mutationDefaults = getDeleteBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBBucketAclEntityMutationKey() {
  return ['b', '/b/:bucket/acl/:entity', 'PATCH'] as const
}

export function getPatchBBucketAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>,
    ) {
      return parseResponse(client.b[':bucket'].acl[':entity'].$patch(args, options))
    },
  })
}

export function usePatchBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>,
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
  const mutationDefaults = getPatchBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketDefaultObjectAclQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>
  >,
) {
  return ['b', '/b/:bucket/defaultObjectAcl', toValue(args)] as const
}

export function getBBucketDefaultObjectAclQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketDefaultObjectAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].defaultObjectAcl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketDefaultObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketDefaultObjectAclQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketDefaultObjectAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketDefaultObjectAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].defaultObjectAcl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketDefaultObjectAclMutationKey() {
  return ['b', '/b/:bucket/defaultObjectAcl', 'POST'] as const
}

export function getPostBBucketDefaultObjectAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketDefaultObjectAclMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].defaultObjectAcl.$post(args, options))
    },
  })
}

export function usePostBBucketDefaultObjectAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>,
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
  const mutationDefaults = getPostBBucketDefaultObjectAclMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketDefaultObjectAclEntityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>
  >,
) {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', toValue(args)] as const
}

export function getBBucketDefaultObjectAclEntityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketDefaultObjectAclEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].defaultObjectAcl[':entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketDefaultObjectAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>
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
                  ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBBucketDefaultObjectAclEntityQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketDefaultObjectAclEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketDefaultObjectAclEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].defaultObjectAcl[':entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketDefaultObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'PUT'] as const
}

export function getPutBBucketDefaultObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketDefaultObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>,
    ) {
      return parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$put(args, options))
    },
  })
}

export function usePutBBucketDefaultObjectAclEntity<
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
                  ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>,
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
  const mutationDefaults = getPutBBucketDefaultObjectAclEntityMutationOptions<
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

export function getDeleteBBucketDefaultObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'DELETE'] as const
}

export function getDeleteBBucketDefaultObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketDefaultObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']
      >,
    ) {
      return parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$delete(args, options))
    },
  })
}

export function useDeleteBBucketDefaultObjectAclEntity<
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
                  ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>,
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
  const mutationDefaults = getDeleteBBucketDefaultObjectAclEntityMutationOptions<
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

export function getPatchBBucketDefaultObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'PATCH'] as const
}

export function getPatchBBucketDefaultObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketDefaultObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>,
    ) {
      return parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$patch(args, options))
    },
  })
}

export function usePatchBBucketDefaultObjectAclEntity<
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
                  ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>,
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
  const mutationDefaults = getPatchBBucketDefaultObjectAclEntityMutationOptions<
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

export function getBBucketIamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>>,
) {
  return ['b', '/b/:bucket/iam', toValue(args)] as const
}

export function getBBucketIamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketIamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].iam.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketIam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
            >
          >,
          ReturnType<typeof getBBucketIamQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketIamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketIamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].iam.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketIamMutationKey() {
  return ['b', '/b/:bucket/iam', 'PUT'] as const
}

export function getPutBBucketIamMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketIamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>) {
      return parseResponse(client.b[':bucket'].iam.$put(args, options))
    },
  })
}

export function usePutBBucketIam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>,
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
  const mutationDefaults = getPutBBucketIamMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBBucketIamTestPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>
  >,
) {
  return ['b', '/b/:bucket/iam/testPermissions', toValue(args)] as const
}

export function getBBucketIamTestPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketIamTestPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].iam.testPermissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketIamTestPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketIamTestPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketIamTestPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketIamTestPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].iam.testPermissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketLockRetentionPolicyMutationKey() {
  return ['b', '/b/:bucket/lockRetentionPolicy', 'POST'] as const
}

export function getPostBBucketLockRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketLockRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].lockRetentionPolicy.$post(args, options))
    },
  })
}

export function usePostBBucketLockRetentionPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>,
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
  const mutationDefaults = getPostBBucketLockRetentionPolicyMutationOptions<
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

export function getBBucketNotificationConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>
  >,
) {
  return ['b', '/b/:bucket/notificationConfigs', toValue(args)] as const
}

export function getBBucketNotificationConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketNotificationConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].notificationConfigs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketNotificationConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketNotificationConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketNotificationConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketNotificationConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].notificationConfigs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketNotificationConfigsMutationKey() {
  return ['b', '/b/:bucket/notificationConfigs', 'POST'] as const
}

export function getPostBBucketNotificationConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketNotificationConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].notificationConfigs.$post(args, options))
    },
  })
}

export function usePostBBucketNotificationConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>,
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
  const mutationDefaults = getPostBBucketNotificationConfigsMutationOptions<
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

export function getBBucketNotificationConfigsNotificationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']>
  >,
) {
  return ['b', '/b/:bucket/notificationConfigs/:notification', toValue(args)] as const
}

export function getBBucketNotificationConfigsNotificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketNotificationConfigsNotificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].notificationConfigs[':notification'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketNotificationConfigsNotification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']>
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
                    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
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
                    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBBucketNotificationConfigsNotificationQueryKey>
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
            ReturnType<(typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketNotificationConfigsNotificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketNotificationConfigsNotificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].notificationConfigs[':notification'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBBucketNotificationConfigsNotificationMutationKey() {
  return ['b', '/b/:bucket/notificationConfigs/:notification', 'DELETE'] as const
}

export function getDeleteBBucketNotificationConfigsNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketNotificationConfigsNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].notificationConfigs[':notification'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBBucketNotificationConfigsNotification<
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
                    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
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
  const mutationDefaults = getDeleteBBucketNotificationConfigsNotificationMutationOptions<
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

export function getBBucketOQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o']['$get']>>,
) {
  return ['b', '/b/:bucket/o', toValue(args)] as const
}

export function getBBucketOQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketO<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
            >
          >,
          ReturnType<typeof getBBucketOQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketOMutationKey() {
  return ['b', '/b/:bucket/o', 'POST'] as const
}

export function getPostBBucketOMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['o']['$post']>) {
      return parseResponse(client.b[':bucket'].o.$post(args, options))
    },
  })
}

export function usePostBBucketO<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o']['$post']>,
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
  const mutationDefaults = getPostBBucketOMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBBucketOWatchMutationKey() {
  return ['b', '/b/:bucket/o/watch', 'POST'] as const
}

export function getPostBBucketOWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOWatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']>) {
      return parseResponse(client.b[':bucket'].o.watch.$post(args, options))
    },
  })
}

export function usePostBBucketOWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o']['watch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']>,
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
  const mutationDefaults = getPostBBucketOWatchMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketOObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>>,
) {
  return ['b', '/b/:bucket/o/:object', toValue(args)] as const
}

export function getBBucketOObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o[':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketOObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketOObjectQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o[':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketOObjectMutationKey() {
  return ['b', '/b/:bucket/o/:object', 'PUT'] as const
}

export function getPutBBucketOObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketOObjectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']>) {
      return parseResponse(client.b[':bucket'].o[':object'].$put(args, options))
    },
  })
}

export function usePutBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']>,
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
  const mutationDefaults = getPutBBucketOObjectMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBBucketOObjectMutationKey() {
  return ['b', '/b/:bucket/o/:object', 'DELETE'] as const
}

export function getDeleteBBucketOObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketOObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']>,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].$delete(args, options))
    },
  })
}

export function useDeleteBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']>,
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
  const mutationDefaults = getDeleteBBucketOObjectMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBBucketOObjectMutationKey() {
  return ['b', '/b/:bucket/o/:object', 'PATCH'] as const
}

export function getPatchBBucketOObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketOObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']>,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].$patch(args, options))
    },
  })
}

export function usePatchBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']>,
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
  const mutationDefaults = getPatchBBucketOObjectMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketOObjectAclQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>
  >,
) {
  return ['b', '/b/:bucket/o/:object/acl', toValue(args)] as const
}

export function getBBucketOObjectAclQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOObjectAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o[':object'].acl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketOObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketOObjectAclQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOObjectAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOObjectAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o[':object'].acl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBBucketOObjectAclMutationKey() {
  return ['b', '/b/:bucket/o/:object/acl', 'POST'] as const
}

export function getPostBBucketOObjectAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOObjectAclMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].acl.$post(args, options))
    },
  })
}

export function usePostBBucketOObjectAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>,
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
  const mutationDefaults = getPostBBucketOObjectAclMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketOObjectAclEntityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
  >,
) {
  return ['b', '/b/:bucket/o/:object/acl/:entity', toValue(args)] as const
}

export function getBBucketOObjectAclEntityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOObjectAclEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o[':object'].acl[':entity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketOObjectAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
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
                  ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBBucketOObjectAclEntityQueryKey>
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
            ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOObjectAclEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOObjectAclEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o[':object'].acl[':entity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketOObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'PUT'] as const
}

export function getPutBBucketOObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketOObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']
      >,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$put(args, options))
    },
  })
}

export function usePutBBucketOObjectAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>,
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
  const mutationDefaults = getPutBBucketOObjectAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBBucketOObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'DELETE'] as const
}

export function getDeleteBBucketOObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketOObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']
      >,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$delete(args, options))
    },
  })
}

export function useDeleteBBucketOObjectAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']
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
  const mutationDefaults = getDeleteBBucketOObjectAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBBucketOObjectAclEntityMutationKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'PATCH'] as const
}

export function getPatchBBucketOObjectAclEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketOObjectAclEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']
      >,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$patch(args, options))
    },
  })
}

export function usePatchBBucketOObjectAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']
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
  const mutationDefaults = getPatchBBucketOObjectAclEntityMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketOObjectIamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>
  >,
) {
  return ['b', '/b/:bucket/o/:object/iam', toValue(args)] as const
}

export function getBBucketOObjectIamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOObjectIamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o[':object'].iam.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketOObjectIam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBBucketOObjectIamQueryKey>
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
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOObjectIamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOObjectIamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o[':object'].iam.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBBucketOObjectIamMutationKey() {
  return ['b', '/b/:bucket/o/:object/iam', 'PUT'] as const
}

export function getPutBBucketOObjectIamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketOObjectIamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].iam.$put(args, options))
    },
  })
}

export function usePutBBucketOObjectIam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>,
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
  const mutationDefaults = getPutBBucketOObjectIamMutationOptions<TError, TOnMutateResult>(
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

export function getBBucketOObjectIamTestPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']>
  >,
) {
  return ['b', '/b/:bucket/o/:object/iam/testPermissions', toValue(args)] as const
}

export function getBBucketOObjectIamTestPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBBucketOObjectIamTestPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.b[':bucket'].o[':object'].iam.testPermissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBBucketOObjectIamTestPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']>
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
                    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
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
                    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBBucketOObjectIamTestPermissionsQueryKey>
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
              (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOObjectIamTestPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBBucketOObjectIamTestPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.b[':bucket'].o[':object'].iam.testPermissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBDestinationBucketODestinationObjectComposeMutationKey() {
  return ['b', '/b/:destinationBucket/o/:destinationObject/compose', 'POST'] as const
}

export function getPostBDestinationBucketODestinationObjectComposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBDestinationBucketODestinationObjectComposeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':destinationBucket'].o[':destinationObject'].compose.$post(args, options),
      )
    },
  })
}

export function usePostBDestinationBucketODestinationObjectCompose<
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
                    (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
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
  const mutationDefaults = getPostBDestinationBucketODestinationObjectComposeMutationOptions<
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

export function getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectMutationKey() {
  return [
    'b',
    '/b/:sourceBucket/o/:sourceObject/copyTo/b/:destinationBucket/o/:destinationObject',
    'POST',
  ] as const
}

export function getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':sourceBucket'].o[':sourceObject'].copyTo.b[':destinationBucket'].o[
          ':destinationObject'
        ].$post(args, options),
      )
    },
  })
}

export function usePostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObject<
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
                    (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
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
    getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectMutationOptions<
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

export function getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectMutationKey() {
  return [
    'b',
    '/b/:sourceBucket/o/:sourceObject/rewriteTo/b/:destinationBucket/o/:destinationObject',
    'POST',
  ] as const
}

export function getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':sourceBucket'].o[':sourceObject'].rewriteTo.b[':destinationBucket'].o[
          ':destinationObject'
        ].$post(args, options),
      )
    },
  })
}

export function usePostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObject<
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
                    (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
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
    getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectMutationOptions<
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

export function getPostChannelsStopMutationKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function getPostChannelsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.stop.$post>) {
      return parseResponse(client.channels.stop.$post(args, options))
    },
  })
}

export function usePostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.stop.$post>,
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
  const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdHmacKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/hmacKeys', toValue(args)] as const
}

export function getProjectsProjectIdHmacKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdHmacKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].hmacKeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdHmacKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdHmacKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdHmacKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdHmacKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].hmacKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdHmacKeysMutationKey() {
  return ['projects', '/projects/:projectId/hmacKeys', 'POST'] as const
}

export function getPostProjectsProjectIdHmacKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdHmacKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].hmacKeys.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdHmacKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdHmacKeysMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdHmacKeysAccessIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', toValue(args)] as const
}

export function getProjectsProjectIdHmacKeysAccessIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdHmacKeysAccessIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].hmacKeys[':accessId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdHmacKeysAccessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
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
                    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']
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
                    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdHmacKeysAccessIdQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdHmacKeysAccessIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdHmacKeysAccessIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].hmacKeys[':accessId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdHmacKeysAccessIdMutationKey() {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', 'PUT'] as const
}

export function getPutProjectsProjectIdHmacKeysAccessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdHmacKeysAccessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].hmacKeys[':accessId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectIdHmacKeysAccessId<
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
                    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdHmacKeysAccessIdMutationOptions<
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

export function getDeleteProjectsProjectIdHmacKeysAccessIdMutationKey() {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdHmacKeysAccessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdHmacKeysAccessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].hmacKeys[':accessId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdHmacKeysAccessId<
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
                    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdHmacKeysAccessIdMutationOptions<
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

export function getProjectsProjectIdServiceAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/serviceAccount', toValue(args)] as const
}

export function getProjectsProjectIdServiceAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdServiceAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].serviceAccount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdServiceAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
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
                  ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdServiceAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdServiceAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdServiceAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].serviceAccount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
