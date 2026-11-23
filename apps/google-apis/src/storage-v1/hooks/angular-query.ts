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

export function getBKey() {
  return ['b'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getBQueryKey(args: InferRequestType<typeof client.b.$get>) {
  return ['b', '/b', args] as const
}

export function getBQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.b.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBQueryKey>
  >({
    queryKey: getBQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.b.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectB<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.b.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostB<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$post>>>>>,
        TError,
        InferRequestType<typeof client.b.$post>,
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
    const mutationDefaults = getPostBMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketQueryKey(args: InferRequestType<(typeof client.b)[':bucket']['$get']>) {
  return ['b', '/b/:bucket', args] as const
}

export function getBBucketQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.b)[':bucket']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketQueryKey>
  >({
    queryKey: getBBucketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBBucket<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['$put']>,
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
    const mutationDefaults = getPutBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['$delete']>,
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
    const mutationDefaults = getDeleteBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBBucket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['$patch']>,
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
    const mutationDefaults = getPatchBBucketMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketAclQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
) {
  return ['b', '/b/:bucket/acl', args] as const
}

export function getBBucketAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketAclQueryKey>
  >({
    queryKey: getBBucketAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].acl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBBucketAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketAclQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketAclQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBBucketAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>,
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
    const mutationDefaults = getPostBBucketAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketAclEntityQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/acl/:entity', args] as const
}

export function getBBucketAclEntityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketAclEntityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].acl[':entity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketAclEntityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBBucketAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBBucketAclEntityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketAnywhereCachesQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>,
) {
  return ['b', '/b/:bucket/anywhereCaches', args] as const
}

export function getBBucketAnywhereCachesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketAnywhereCachesQueryKey>
  >({
    queryKey: getBBucketAnywhereCachesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketAnywhereCaches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketAnywhereCachesQueryKey>
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
      ...getBBucketAnywhereCachesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBBucketAnywhereCachesMutationKey() {
  return ['b', '/b/:bucket/anywhereCaches', 'POST'] as const
}

export function getPostBBucketAnywhereCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketAnywhereCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].anywhereCaches.$post(args, options))
    },
  })
}

export function injectPostBBucketAnywhereCaches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['anywhereCaches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['anywhereCaches']['$post']>,
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
    const mutationDefaults = getPostBBucketAnywhereCachesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketAnywhereCachesAnywhereCacheIdQueryKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']
  >,
) {
  return ['b', '/b/:bucket/anywhereCaches/:anywhereCacheId', args] as const
}

export function getBBucketAnywhereCachesAnywhereCacheIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketAnywhereCachesAnywhereCacheIdQueryKey>
  >({
    queryKey: getBBucketAnywhereCachesAnywhereCacheIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches[':anywhereCacheId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketAnywhereCachesAnywhereCacheId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketAnywhereCachesAnywhereCacheIdQueryKey>
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
      ...getBBucketAnywhereCachesAnywhereCacheIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchBBucketAnywhereCachesAnywhereCacheIdMutationKey() {
  return ['b', '/b/:bucket/anywhereCaches/:anywhereCacheId', 'PATCH'] as const
}

export function getPatchBBucketAnywhereCachesAnywhereCacheIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBBucketAnywhereCachesAnywhereCacheIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$patch']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches[':anywhereCacheId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchBBucketAnywhereCachesAnywhereCacheId<
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
                  (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['$patch']
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
    const mutationDefaults = getPatchBBucketAnywhereCachesAnywhereCacheIdMutationOptions<
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

export function getPostBBucketAnywhereCachesAnywhereCacheIdDisableMutationKey() {
  return ['b', '/b/:bucket/anywhereCaches/:anywhereCacheId/disable', 'POST'] as const
}

export function getPostBBucketAnywhereCachesAnywhereCacheIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketAnywhereCachesAnywhereCacheIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['disable']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches[':anywhereCacheId'].disable.$post(args, options),
      )
    },
  })
}

export function injectPostBBucketAnywhereCachesAnywhereCacheIdDisable<
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
                  (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['disable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['disable']['$post']
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
    const mutationDefaults = getPostBBucketAnywhereCachesAnywhereCacheIdDisableMutationOptions<
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

export function getPostBBucketAnywhereCachesAnywhereCacheIdPauseMutationKey() {
  return ['b', '/b/:bucket/anywhereCaches/:anywhereCacheId/pause', 'POST'] as const
}

export function getPostBBucketAnywhereCachesAnywhereCacheIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketAnywhereCachesAnywhereCacheIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches[':anywhereCacheId'].pause.$post(args, options),
      )
    },
  })
}

export function injectPostBBucketAnywhereCachesAnywhereCacheIdPause<
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
                  (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['pause']['$post']
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
    const mutationDefaults = getPostBBucketAnywhereCachesAnywhereCacheIdPauseMutationOptions<
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

export function getPostBBucketAnywhereCachesAnywhereCacheIdResumeMutationKey() {
  return ['b', '/b/:bucket/anywhereCaches/:anywhereCacheId/resume', 'POST'] as const
}

export function getPostBBucketAnywhereCachesAnywhereCacheIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['resume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['resume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketAnywhereCachesAnywhereCacheIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['resume']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].anywhereCaches[':anywhereCacheId'].resume.$post(args, options),
      )
    },
  })
}

export function injectPostBBucketAnywhereCachesAnywhereCacheIdResume<
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
                  (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['resume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['anywhereCaches'][':anywhereCacheId']['resume']['$post']
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
    const mutationDefaults = getPostBBucketAnywhereCachesAnywhereCacheIdResumeMutationOptions<
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

export function getBBucketDefaultObjectAclQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
) {
  return ['b', '/b/:bucket/defaultObjectAcl', args] as const
}

export function getBBucketDefaultObjectAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketDefaultObjectAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].defaultObjectAcl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketDefaultObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBBucketDefaultObjectAclQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBBucketDefaultObjectAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBBucketDefaultObjectAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketDefaultObjectAclEntityQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', args] as const
}

export function getBBucketDefaultObjectAclEntityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketDefaultObjectAclEntityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].defaultObjectAcl[':entity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketDefaultObjectAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBBucketDefaultObjectAclEntityQueryKey>
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
      ...getBBucketDefaultObjectAclEntityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBBucketDefaultObjectAclEntity<
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
                ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>,
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
    const mutationDefaults = getPutBBucketDefaultObjectAclEntityMutationOptions<
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

export function injectDeleteBBucketDefaultObjectAclEntity<
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
                ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>,
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
    const mutationDefaults = getDeleteBBucketDefaultObjectAclEntityMutationOptions<
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

export function injectPatchBBucketDefaultObjectAclEntity<
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
                ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>,
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
    const mutationDefaults = getPatchBBucketDefaultObjectAclEntityMutationOptions<
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

export function getBBucketFoldersQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['folders']['$get']>,
) {
  return ['b', '/b/:bucket/folders', args] as const
}

export function getBBucketFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketFoldersQueryKey>
  >({
    queryKey: getBBucketFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBBucketFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['folders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostBBucketFoldersMutationKey() {
  return ['b', '/b/:bucket/folders', 'POST'] as const
}

export function getPostBBucketFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketFoldersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.b)[':bucket']['folders']['$post']>) {
      return parseResponse(client.b[':bucket'].folders.$post(args, options))
    },
  })
}

export function injectPostBBucketFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['folders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['folders']['$post']>,
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
    const mutationDefaults = getPostBBucketFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketFoldersFolderQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>,
) {
  return ['b', '/b/:bucket/folders/:folder', args] as const
}

export function getBBucketFoldersFolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketFoldersFolderQueryKey>
  >({
    queryKey: getBBucketFoldersFolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].folders[':folder'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketFoldersFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketFoldersFolderQueryKey>
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
      ...getBBucketFoldersFolderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteBBucketFoldersFolderMutationKey() {
  return ['b', '/b/:bucket/folders/:folder', 'DELETE'] as const
}

export function getDeleteBBucketFoldersFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketFoldersFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$delete']>,
    ) {
      return parseResponse(client.b[':bucket'].folders[':folder'].$delete(args, options))
    },
  })
}

export function injectDeleteBBucketFoldersFolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['folders'][':folder']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['folders'][':folder']['$delete']>,
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
    const mutationDefaults = getDeleteBBucketFoldersFolderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBBucketFoldersSourceFolderRenameToFoldersDestinationFolderMutationKey() {
  return [
    'b',
    '/b/:bucket/folders/:sourceFolder/renameTo/folders/:destinationFolder',
    'POST',
  ] as const
}

export function getPostBBucketFoldersSourceFolderRenameToFoldersDestinationFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['folders'][':sourceFolder']['renameTo']['folders'][':destinationFolder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['folders'][':sourceFolder']['renameTo']['folders'][':destinationFolder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketFoldersSourceFolderRenameToFoldersDestinationFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['folders'][':sourceFolder']['renameTo']['folders'][':destinationFolder']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].folders[':sourceFolder'].renameTo.folders[':destinationFolder'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostBBucketFoldersSourceFolderRenameToFoldersDestinationFolder<
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
                  (typeof client.b)[':bucket']['folders'][':sourceFolder']['renameTo']['folders'][':destinationFolder']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['folders'][':sourceFolder']['renameTo']['folders'][':destinationFolder']['$post']
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
      getPostBBucketFoldersSourceFolderRenameToFoldersDestinationFolderMutationOptions<
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

export function getBBucketIamQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
) {
  return ['b', '/b/:bucket/iam', args] as const
}

export function getBBucketIamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketIamQueryKey>
  >({
    queryKey: getBBucketIamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].iam.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBBucketIam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketIamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketIamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBBucketIam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>,
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
    const mutationDefaults = getPutBBucketIamMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketIamTestPermissionsQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
) {
  return ['b', '/b/:bucket/iam/testPermissions', args] as const
}

export function getBBucketIamTestPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketIamTestPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].iam.testPermissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketIamTestPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBBucketIamTestPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBBucketLockRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBBucketLockRetentionPolicyMutationOptions<
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

export function getBBucketManagedFoldersQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$get']>,
) {
  return ['b', '/b/:bucket/managedFolders', args] as const
}

export function getBBucketManagedFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketManagedFoldersQueryKey>
  >({
    queryKey: getBBucketManagedFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].managedFolders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketManagedFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketManagedFoldersQueryKey>
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
      ...getBBucketManagedFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBBucketManagedFoldersMutationKey() {
  return ['b', '/b/:bucket/managedFolders', 'POST'] as const
}

export function getPostBBucketManagedFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketManagedFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].managedFolders.$post(args, options))
    },
  })
}

export function injectPostBBucketManagedFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['managedFolders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['managedFolders']['$post']>,
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
    const mutationDefaults = getPostBBucketManagedFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketManagedFoldersManagedFolderQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>,
) {
  return ['b', '/b/:bucket/managedFolders/:managedFolder', args] as const
}

export function getBBucketManagedFoldersManagedFolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketManagedFoldersManagedFolderQueryKey>
  >({
    queryKey: getBBucketManagedFoldersManagedFolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].managedFolders[':managedFolder'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketManagedFoldersManagedFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketManagedFoldersManagedFolderQueryKey>
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
      ...getBBucketManagedFoldersManagedFolderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteBBucketManagedFoldersManagedFolderMutationKey() {
  return ['b', '/b/:bucket/managedFolders/:managedFolder', 'DELETE'] as const
}

export function getDeleteBBucketManagedFoldersManagedFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBBucketManagedFoldersManagedFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$delete']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].managedFolders[':managedFolder'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteBBucketManagedFoldersManagedFolder<
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
                  (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['$delete']
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
    const mutationDefaults = getDeleteBBucketManagedFoldersManagedFolderMutationOptions<
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

export function getBBucketManagedFoldersManagedFolderIamQueryKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
  >,
) {
  return ['b', '/b/:bucket/managedFolders/:managedFolder/iam', args] as const
}

export function getBBucketManagedFoldersManagedFolderIamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketManagedFoldersManagedFolderIamQueryKey>
  >({
    queryKey: getBBucketManagedFoldersManagedFolderIamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].managedFolders[':managedFolder'].iam.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketManagedFoldersManagedFolderIam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketManagedFoldersManagedFolderIamQueryKey>
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
      ...getBBucketManagedFoldersManagedFolderIamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutBBucketManagedFoldersManagedFolderIamMutationKey() {
  return ['b', '/b/:bucket/managedFolders/:managedFolder/iam', 'PUT'] as const
}

export function getPutBBucketManagedFoldersManagedFolderIamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBBucketManagedFoldersManagedFolderIamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$put']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].managedFolders[':managedFolder'].iam.$put(args, options),
      )
    },
  })
}

export function injectPutBBucketManagedFoldersManagedFolderIam<
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
                  (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['$put']
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
    const mutationDefaults = getPutBBucketManagedFoldersManagedFolderIamMutationOptions<
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

export function getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
  >,
) {
  return ['b', '/b/:bucket/managedFolders/:managedFolder/iam/testPermissions', args] as const
}

export function getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryKey>
  >({
    queryKey: getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].managedFolders[':managedFolder'].iam.testPermissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketManagedFoldersManagedFolderIamTestPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.b)[':bucket']['managedFolders'][':managedFolder']['iam']['testPermissions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryKey>
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
      ...getBBucketManagedFoldersManagedFolderIamTestPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBBucketNotificationConfigsQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
) {
  return ['b', '/b/:bucket/notificationConfigs', args] as const
}

export function getBBucketNotificationConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketNotificationConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].notificationConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketNotificationConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBBucketNotificationConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostBBucketNotificationConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBBucketNotificationConfigsMutationOptions<
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

export function getBBucketNotificationConfigsNotificationQueryKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
) {
  return ['b', '/b/:bucket/notificationConfigs/:notification', args] as const
}

export function getBBucketNotificationConfigsNotificationQueryOptions<
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
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketNotificationConfigsNotificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].notificationConfigs[':notification'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketNotificationConfigsNotification<
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
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getBBucketNotificationConfigsNotificationQueryKey>
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
      ...getBBucketNotificationConfigsNotificationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteBBucketNotificationConfigsNotification<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBBucketNotificationConfigsNotificationMutationOptions<
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

export function getBBucketOQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
) {
  return ['b', '/b/:bucket/o', args] as const
}

export function getBBucketOQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOQueryKey>
  >({
    queryKey: getBBucketOQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBBucketO<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketOQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketOQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBBucketO<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['o']['$post']>,
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
    const mutationDefaults = getPostBBucketOMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBBucketOBulkRestoreMutationKey() {
  return ['b', '/b/:bucket/o/bulkRestore', 'POST'] as const
}

export function getPostBBucketOBulkRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o']['bulkRestore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o']['bulkRestore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOBulkRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o']['bulkRestore']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].o.bulkRestore.$post(args, options))
    },
  })
}

export function injectPostBBucketOBulkRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['o']['bulkRestore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['o']['bulkRestore']['$post']>,
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
    const mutationDefaults = getPostBBucketOBulkRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBBucketOWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBBucketOWatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketOObjectQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object', args] as const
}

export function getBBucketOObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketOObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o[':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketOObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBBucketOObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBBucketOObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchBBucketOObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBBucketOObjectMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketOObjectAclQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/acl', args] as const
}

export function getBBucketOObjectAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketOObjectAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o[':object'].acl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketOObjectAclQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostBBucketOObjectAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBBucketOObjectAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketOObjectAclEntityQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/acl/:entity', args] as const
}

export function getBBucketOObjectAclEntityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketOObjectAclEntityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o[':object'].acl[':entity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOObjectAclEntity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBBucketOObjectAclEntityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutBBucketOObjectAclEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBBucketOObjectAclEntityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteBBucketOObjectAclEntity<
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
                  (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']>,
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
    const mutationDefaults = getDeleteBBucketOObjectAclEntityMutationOptions<
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

export function injectPatchBBucketOObjectAclEntity<
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
                ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>,
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
    const mutationDefaults = getPatchBBucketOObjectAclEntityMutationOptions<
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

export function getBBucketOObjectIamQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/iam', args] as const
}

export function getBBucketOObjectIamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketOObjectIamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o[':object'].iam.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOObjectIam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketOObjectIamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutBBucketOObjectIam<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBBucketOObjectIamMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketOObjectIamTestPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
) {
  return ['b', '/b/:bucket/o/:object/iam/testPermissions', args] as const
}

export function getBBucketOObjectIamTestPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBBucketOObjectIamTestPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].o[':object'].iam.testPermissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOObjectIamTestPermissions<
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
  args: () => InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBBucketOObjectIamTestPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBBucketOObjectRestoreMutationKey() {
  return ['b', '/b/:bucket/o/:object/restore', 'POST'] as const
}

export function getPostBBucketOObjectRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOObjectRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['restore']['$post']>,
    ) {
      return parseResponse(client.b[':bucket'].o[':object'].restore.$post(args, options))
    },
  })
}

export function injectPostBBucketOObjectRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.b)[':bucket']['o'][':object']['restore']['$post']>,
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
    const mutationDefaults = getPostBBucketOObjectRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBBucketOperationsQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['operations']['$get']>,
) {
  return ['b', '/b/:bucket/operations', args] as const
}

export function getBBucketOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOperationsQueryKey>
  >({
    queryKey: getBBucketOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.b)[':bucket']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBBucketOperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBBucketOperationsOperationIdQueryKey(
  args: InferRequestType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>,
) {
  return ['b', '/b/:bucket/operations/:operationId', args] as const
}

export function getBBucketOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBBucketOperationsOperationIdQueryKey>
  >({
    queryKey: getBBucketOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.b[':bucket'].operations[':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBBucketOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.b)[':bucket']['operations'][':operationId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBBucketOperationsOperationIdQueryKey>
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
      ...getBBucketOperationsOperationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBBucketOperationsOperationIdCancelMutationKey() {
  return ['b', '/b/:bucket/operations/:operationId/cancel', 'POST'] as const
}

export function getPostBBucketOperationsOperationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.b)[':bucket']['operations'][':operationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.b)[':bucket']['operations'][':operationId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBBucketOperationsOperationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.b)[':bucket']['operations'][':operationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.b[':bucket'].operations[':operationId'].cancel.$post(args, options),
      )
    },
  })
}

export function injectPostBBucketOperationsOperationIdCancel<
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
                  (typeof client.b)[':bucket']['operations'][':operationId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.b)[':bucket']['operations'][':operationId']['cancel']['$post']
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
    const mutationDefaults = getPostBBucketOperationsOperationIdCancelMutationOptions<
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

export function injectPostBDestinationBucketODestinationObjectCompose<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBDestinationBucketODestinationObjectComposeMutationOptions<
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

export function injectPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObject<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectMutationOptions<
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

export function injectPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObject<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectMutationOptions<
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

export function injectPostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.stop.$post>,
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
    const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdHmacKeysQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
) {
  return ['projects', '/projects/:projectId/hmacKeys', args] as const
}

export function getProjectsProjectIdHmacKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdHmacKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].hmacKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdHmacKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdHmacKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectIdHmacKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdHmacKeysMutationOptions<
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

export function getProjectsProjectIdHmacKeysAccessIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
) {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', args] as const
}

export function getProjectsProjectIdHmacKeysAccessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdHmacKeysAccessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].hmacKeys[':accessId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdHmacKeysAccessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdHmacKeysAccessIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutProjectsProjectIdHmacKeysAccessId<
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
                ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>,
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
    const mutationDefaults = getPutProjectsProjectIdHmacKeysAccessIdMutationOptions<
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

export function injectDeleteProjectsProjectIdHmacKeysAccessId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdHmacKeysAccessIdMutationOptions<
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

export function getProjectsProjectIdServiceAccountQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
) {
  return ['projects', '/projects/:projectId/serviceAccount', args] as const
}

export function getProjectsProjectIdServiceAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdServiceAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].serviceAccount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdServiceAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdServiceAccountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
