import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetBKey(args: InferRequestType<typeof client.b.$get>) {
  return ['b', '/b', args] as const
}

export function useGetB<TError = unknown>(
  args: InferRequestType<typeof client.b.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.b.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetB<TError = unknown>(
  args: InferRequestType<typeof client.b.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.b.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBKey() {
  return ['b', '/b', 'POST'] as const
}

export function usePostB<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.b.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.b.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.b.$post> }) =>
        parseResponse(client.b.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketKey(args: InferRequestType<(typeof client.b)[':bucket']['$get']>) {
  return ['b', '/b/:bucket', args] as const
}

export function useGetBBucket<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucket<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketKey() {
  return ['b', '/b/:bucket', 'PUT'] as const
}

export function usePutBBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['$put']> }) =>
        parseResponse(client.b[':bucket'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBBucketKey() {
  return ['b', '/b/:bucket', 'DELETE'] as const
}

export function useDeleteBBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['$delete']> }) =>
        parseResponse(client.b[':bucket'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBBucketKey() {
  return ['b', '/b/:bucket', 'PATCH'] as const
}

export function usePatchBBucket<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBBucketKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['$patch']> }) =>
        parseResponse(client.b[':bucket'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketAclKey(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
) {
  return ['b', '/b/:bucket/acl', args] as const
}

export function useGetBBucketAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketAclKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketAclKey() {
  return ['b', '/b/:bucket/acl', 'POST'] as const
}

export function usePostBBucketAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['acl']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['acl']['$post']> },
      ) => parseResponse(client.b[':bucket'].acl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketAclEntityKey(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/acl/:entity', args] as const
}

export function useGetBBucketAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].acl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].acl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketAclEntityKey() {
  return ['b', '/b/:bucket/acl/:entity', 'PUT'] as const
}

export function usePutBBucketAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']> },
      ) => parseResponse(client.b[':bucket'].acl[':entity'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBBucketAclEntityKey() {
  return ['b', '/b/:bucket/acl/:entity', 'DELETE'] as const
}

export function useDeleteBBucketAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']> },
      ) => parseResponse(client.b[':bucket'].acl[':entity'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBBucketAclEntityKey() {
  return ['b', '/b/:bucket/acl/:entity', 'PATCH'] as const
}

export function usePatchBBucketAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBBucketAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']> },
      ) => parseResponse(client.b[':bucket'].acl[':entity'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketDefaultObjectAclKey(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
) {
  return ['b', '/b/:bucket/defaultObjectAcl', args] as const
}

export function useGetBBucketDefaultObjectAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketDefaultObjectAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].defaultObjectAcl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketDefaultObjectAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketDefaultObjectAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].defaultObjectAcl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketDefaultObjectAclKey() {
  return ['b', '/b/:bucket/defaultObjectAcl', 'POST'] as const
}

export function usePostBBucketDefaultObjectAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketDefaultObjectAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']> },
      ) => parseResponse(client.b[':bucket'].defaultObjectAcl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketDefaultObjectAclEntityKey(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', args] as const
}

export function useGetBBucketDefaultObjectAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketDefaultObjectAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketDefaultObjectAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketDefaultObjectAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketDefaultObjectAclEntityKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'PUT'] as const
}

export function usePutBBucketDefaultObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketDefaultObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>
        },
      ) => parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBBucketDefaultObjectAclEntityKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'DELETE'] as const
}

export function useDeleteBBucketDefaultObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketDefaultObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']
          >
        },
      ) =>
        parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBBucketDefaultObjectAclEntityKey() {
  return ['b', '/b/:bucket/defaultObjectAcl/:entity', 'PATCH'] as const
}

export function usePatchBBucketDefaultObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBBucketDefaultObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']
          >
        },
      ) =>
        parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketIamKey(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
) {
  return ['b', '/b/:bucket/iam', args] as const
}

export function useGetBBucketIam<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketIamKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].iam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketIam<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketIamKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].iam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketIamKey() {
  return ['b', '/b/:bucket/iam', 'PUT'] as const
}

export function usePutBBucketIam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketIamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['iam']['$put']> },
      ) => parseResponse(client.b[':bucket'].iam.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketIamTestPermissionsKey(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
) {
  return ['b', '/b/:bucket/iam/testPermissions', args] as const
}

export function useGetBBucketIamTestPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketIamTestPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].iam.testPermissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketIamTestPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketIamTestPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].iam.testPermissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketLockRetentionPolicyKey() {
  return ['b', '/b/:bucket/lockRetentionPolicy', 'POST'] as const
}

export function usePostBBucketLockRetentionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketLockRetentionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']> },
      ) => parseResponse(client.b[':bucket'].lockRetentionPolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketNotificationConfigsKey(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
) {
  return ['b', '/b/:bucket/notificationConfigs', args] as const
}

export function useGetBBucketNotificationConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketNotificationConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].notificationConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketNotificationConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketNotificationConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].notificationConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketNotificationConfigsKey() {
  return ['b', '/b/:bucket/notificationConfigs', 'POST'] as const
}

export function usePostBBucketNotificationConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketNotificationConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']> },
      ) => parseResponse(client.b[':bucket'].notificationConfigs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketNotificationConfigsNotificationKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
) {
  return ['b', '/b/:bucket/notificationConfigs/:notification', args] as const
}

export function useGetBBucketNotificationConfigsNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketNotificationConfigsNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.b[':bucket'].notificationConfigs[':notification'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketNotificationConfigsNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketNotificationConfigsNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.b[':bucket'].notificationConfigs[':notification'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBBucketNotificationConfigsNotificationKey() {
  return ['b', '/b/:bucket/notificationConfigs/:notification', 'DELETE'] as const
}

export function useDeleteBBucketNotificationConfigsNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketNotificationConfigsNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.b[':bucket'].notificationConfigs[':notification'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
) {
  return ['b', '/b/:bucket/o', args] as const
}

export function useGetBBucketO<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketOKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketO<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketOKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketOKey() {
  return ['b', '/b/:bucket/o', 'POST'] as const
}

export function usePostBBucketO<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.b)[':bucket']['o']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketOKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['o']['$post']> },
      ) => parseResponse(client.b[':bucket'].o.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBBucketOWatchKey() {
  return ['b', '/b/:bucket/o/watch', 'POST'] as const
}

export function usePostBBucketOWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketOWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']> },
      ) => parseResponse(client.b[':bucket'].o.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOObjectKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object', args] as const
}

export function useGetBBucketOObject<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketOObjectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketOObject<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBBucketOObjectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketOObjectKey() {
  return ['b', '/b/:bucket/o/:object', 'PUT'] as const
}

export function usePutBBucketOObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketOObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']> },
      ) => parseResponse(client.b[':bucket'].o[':object'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBBucketOObjectKey() {
  return ['b', '/b/:bucket/o/:object', 'DELETE'] as const
}

export function useDeleteBBucketOObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketOObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']> },
      ) => parseResponse(client.b[':bucket'].o[':object'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBBucketOObjectKey() {
  return ['b', '/b/:bucket/o/:object', 'PATCH'] as const
}

export function usePatchBBucketOObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBBucketOObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']> },
      ) => parseResponse(client.b[':bucket'].o[':object'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOObjectAclKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/acl', args] as const
}

export function useGetBBucketOObjectAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketOObjectAcl<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBBucketOObjectAclKey() {
  return ['b', '/b/:bucket/o/:object/acl', 'POST'] as const
}

export function usePostBBucketOObjectAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBBucketOObjectAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']> },
      ) => parseResponse(client.b[':bucket'].o[':object'].acl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOObjectAclEntityKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/acl/:entity', args] as const
}

export function useGetBBucketOObjectAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketOObjectAclEntity<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectAclEntityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketOObjectAclEntityKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'PUT'] as const
}

export function usePutBBucketOObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketOObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']
          >
        },
      ) => parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBBucketOObjectAclEntityKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'DELETE'] as const
}

export function useDeleteBBucketOObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBBucketOObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']
          >
        },
      ) =>
        parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBBucketOObjectAclEntityKey() {
  return ['b', '/b/:bucket/o/:object/acl/:entity', 'PATCH'] as const
}

export function usePatchBBucketOObjectAclEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBBucketOObjectAclEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']
          >
        },
      ) =>
        parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOObjectIamKey(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
) {
  return ['b', '/b/:bucket/o/:object/iam', args] as const
}

export function useGetBBucketOObjectIam<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectIamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].iam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketOObjectIam<TError = unknown>(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectIamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.b[':bucket'].o[':object'].iam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBBucketOObjectIamKey() {
  return ['b', '/b/:bucket/o/:object/iam', 'PUT'] as const
}

export function usePutBBucketOObjectIam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBBucketOObjectIamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']> },
      ) => parseResponse(client.b[':bucket'].o[':object'].iam.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBBucketOObjectIamTestPermissionsKey(
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
) {
  return ['b', '/b/:bucket/o/:object/iam/testPermissions', args] as const
}

export function useGetBBucketOObjectIamTestPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectIamTestPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.b[':bucket'].o[':object'].iam.testPermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBBucketOObjectIamTestPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBBucketOObjectIamTestPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.b[':bucket'].o[':object'].iam.testPermissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBDestinationBucketODestinationObjectComposeKey() {
  return ['b', '/b/:destinationBucket/o/:destinationObject/compose', 'POST'] as const
}

export function usePostBDestinationBucketODestinationObjectCompose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBDestinationBucketODestinationObjectComposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
          >
        },
      ) =>
        parseResponse(
          client.b[':destinationBucket'].o[':destinationObject'].compose.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectKey() {
  return [
    'b',
    '/b/:sourceBucket/o/:sourceObject/copyTo/b/:destinationBucket/o/:destinationObject',
    'POST',
  ] as const
}

export function usePostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.b[':sourceBucket'].o[':sourceObject'].copyTo.b[':destinationBucket'].o[
            ':destinationObject'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectKey() {
  return [
    'b',
    '/b/:sourceBucket/o/:sourceObject/rewriteTo/b/:destinationBucket/o/:destinationObject',
    'POST',
  ] as const
}

export function usePostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.b[':sourceBucket'].o[':sourceObject'].rewriteTo.b[':destinationBucket'].o[
            ':destinationObject'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsStopKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function usePostChannelsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.stop.$post> }) =>
        parseResponse(client.channels.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdHmacKeysKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
) {
  return ['projects', '/projects/:projectId/hmacKeys', args] as const
}

export function useGetProjectsProjectIdHmacKeys<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdHmacKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].hmacKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdHmacKeys<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdHmacKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].hmacKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdHmacKeysKey() {
  return ['projects', '/projects/:projectId/hmacKeys', 'POST'] as const
}

export function usePostProjectsProjectIdHmacKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdHmacKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']> },
      ) => parseResponse(client.projects[':projectId'].hmacKeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdHmacKeysAccessIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
) {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', args] as const
}

export function useGetProjectsProjectIdHmacKeysAccessId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdHmacKeysAccessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].hmacKeys[':accessId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdHmacKeysAccessId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdHmacKeysAccessIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].hmacKeys[':accessId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdHmacKeysAccessIdKey() {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', 'PUT'] as const
}

export function usePutProjectsProjectIdHmacKeysAccessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdHmacKeysAccessIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']
          >
        },
      ) =>
        parseResponse(client.projects[':projectId'].hmacKeys[':accessId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdHmacKeysAccessIdKey() {
  return ['projects', '/projects/:projectId/hmacKeys/:accessId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdHmacKeysAccessId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdHmacKeysAccessIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].hmacKeys[':accessId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdServiceAccountKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
) {
  return ['projects', '/projects/:projectId/serviceAccount', args] as const
}

export function useGetProjectsProjectIdServiceAccount<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].serviceAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdServiceAccount<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsProjectIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].serviceAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
