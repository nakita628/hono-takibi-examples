import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCancelChangeSetCatalogChangeSetIdKey() {
  return ['CancelChangeSet#catalog&changeSetId'] as const
}

export function getDeleteResourcePolicyResourceArnKey() {
  return ['DeleteResourcePolicy#resourceArn'] as const
}

export function getDescribeChangeSetCatalogChangeSetIdKey() {
  return ['DescribeChangeSet#catalog&changeSetId'] as const
}

export function getDescribeEntityCatalogEntityIdKey() {
  return ['DescribeEntity#catalog&entityId'] as const
}

export function getGetResourcePolicyResourceArnKey() {
  return ['GetResourcePolicy#resourceArn'] as const
}

export function getListChangeSetsKey() {
  return ['ListChangeSets'] as const
}

export function getListEntitiesKey() {
  return ['ListEntities'] as const
}

export function getListTagsForResourceKey() {
  return ['ListTagsForResource'] as const
}

export function getPutResourcePolicyKey() {
  return ['PutResourcePolicy'] as const
}

export function getStartChangeSetKey() {
  return ['StartChangeSet'] as const
}

export function getTagResourceKey() {
  return ['TagResource'] as const
}

export function getUntagResourceKey() {
  return ['UntagResource'] as const
}

export function getPatchCancelChangeSetCatalogChangeSetIdKey() {
  return [
    'CancelChangeSet#catalog&changeSetId',
    '/CancelChangeSet#catalog&changeSetId',
    'PATCH',
  ] as const
}

export function usePatchCancelChangeSetCatalogChangeSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCancelChangeSetCatalogChangeSetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>
        },
      ) => parseResponse(client['CancelChangeSet#catalog&changeSetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteResourcePolicyResourceArnKey() {
  return [
    'DeleteResourcePolicy#resourceArn',
    '/DeleteResourcePolicy#resourceArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteResourcePolicyResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteResourcePolicyResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>
        },
      ) => parseResponse(client['DeleteResourcePolicy#resourceArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDescribeChangeSetCatalogChangeSetIdKey(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'DescribeChangeSet#catalog&changeSetId',
    '/DescribeChangeSet#catalog&changeSetId',
    keyArgs,
  ] as const
}

export function useGetDescribeChangeSetCatalogChangeSetId<TError = unknown>(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
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
        ? getGetDescribeChangeSetCatalogChangeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['DescribeChangeSet#catalog&changeSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDescribeChangeSetCatalogChangeSetId<TError = unknown>(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
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
        ? getGetDescribeChangeSetCatalogChangeSetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['DescribeChangeSet#catalog&changeSetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDescribeEntityCatalogEntityIdKey(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['DescribeEntity#catalog&entityId', '/DescribeEntity#catalog&entityId', keyArgs] as const
}

export function useGetDescribeEntityCatalogEntityId<TError = unknown>(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
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
        ? getGetDescribeEntityCatalogEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['DescribeEntity#catalog&entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDescribeEntityCatalogEntityId<TError = unknown>(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
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
        ? getGetDescribeEntityCatalogEntityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['DescribeEntity#catalog&entityId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetResourcePolicyResourceArnKey(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetResourcePolicy#resourceArn', '/GetResourcePolicy#resourceArn', keyArgs] as const
}

export function useGetGetResourcePolicyResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
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
        ? getGetGetResourcePolicyResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetResourcePolicy#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetResourcePolicyResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
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
        ? getGetGetResourcePolicyResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetResourcePolicy#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListChangeSetsKey() {
  return ['ListChangeSets', '/ListChangeSets', 'POST'] as const
}

export function usePostListChangeSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChangeSets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListChangeSets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListChangeSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListChangeSets.$post> }) =>
        parseResponse(client.ListChangeSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListEntitiesKey() {
  return ['ListEntities', '/ListEntities', 'POST'] as const
}

export function usePostListEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListEntities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListEntities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListEntities.$post> }) =>
        parseResponse(client.ListEntities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTagsForResourceKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function usePostListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTagsForResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTagsForResource.$post> }) =>
        parseResponse(client.ListTagsForResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutResourcePolicyKey() {
  return ['PutResourcePolicy', '/PutResourcePolicy', 'POST'] as const
}

export function usePostPutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutResourcePolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutResourcePolicy.$post> }) =>
        parseResponse(client.PutResourcePolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartChangeSetKey() {
  return ['StartChangeSet', '/StartChangeSet', 'POST'] as const
}

export function usePostStartChangeSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartChangeSet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartChangeSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartChangeSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartChangeSet.$post> }) =>
        parseResponse(client.StartChangeSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagResourceKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function usePostTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TagResource.$post> }) =>
        parseResponse(client.TagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function usePostUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UntagResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UntagResource.$post> }) =>
        parseResponse(client.UntagResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
