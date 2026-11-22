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

export function getPatchCancelChangeSetCatalogChangeSetIdMutationKey() {
  return [
    'CancelChangeSet#catalog&changeSetId',
    '/CancelChangeSet#catalog&changeSetId',
    'PATCH',
  ] as const
}

export function getPatchCancelChangeSetCatalogChangeSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCancelChangeSetCatalogChangeSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>,
    ) {
      return parseResponse(client['CancelChangeSet#catalog&changeSetId'].$patch(args, options))
    },
  })
}

export function injectPatchCancelChangeSetCatalogChangeSetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>,
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
    const mutationDefaults = getPatchCancelChangeSetCatalogChangeSetIdMutationOptions<
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

export function getDeleteDeleteResourcePolicyResourceArnMutationKey() {
  return [
    'DeleteResourcePolicy#resourceArn',
    '/DeleteResourcePolicy#resourceArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteResourcePolicyResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteResourcePolicyResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>,
    ) {
      return parseResponse(client['DeleteResourcePolicy#resourceArn'].$delete(args, options))
    },
  })
}

export function injectDeleteDeleteResourcePolicyResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>,
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
    const mutationDefaults = getDeleteDeleteResourcePolicyResourceArnMutationOptions<
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

export function getDescribeChangeSetCatalogChangeSetIdQueryKey(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'DescribeChangeSet#catalog&changeSetId',
    '/DescribeChangeSet#catalog&changeSetId',
    keyArgs,
  ] as const
}

export function getDescribeChangeSetCatalogChangeSetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDescribeChangeSetCatalogChangeSetIdQueryKey>
  >({
    queryKey: getDescribeChangeSetCatalogChangeSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['DescribeChangeSet#catalog&changeSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDescribeChangeSetCatalogChangeSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDescribeChangeSetCatalogChangeSetIdQueryKey>
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
      ...getDescribeChangeSetCatalogChangeSetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDescribeEntityCatalogEntityIdQueryKey(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['DescribeEntity#catalog&entityId', '/DescribeEntity#catalog&entityId', keyArgs] as const
}

export function getDescribeEntityCatalogEntityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDescribeEntityCatalogEntityIdQueryKey>
  >({
    queryKey: getDescribeEntityCatalogEntityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['DescribeEntity#catalog&entityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDescribeEntityCatalogEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDescribeEntityCatalogEntityIdQueryKey>
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
      ...getDescribeEntityCatalogEntityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGetResourcePolicyResourceArnQueryKey(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetResourcePolicy#resourceArn', '/GetResourcePolicy#resourceArn', keyArgs] as const
}

export function getGetResourcePolicyResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetResourcePolicyResourceArnQueryKey>
  >({
    queryKey: getGetResourcePolicyResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetResourcePolicy#resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetResourcePolicyResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetResourcePolicyResourceArnQueryKey>
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
      ...getGetResourcePolicyResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostListChangeSetsMutationKey() {
  return ['ListChangeSets', '/ListChangeSets', 'POST'] as const
}

export function getPostListChangeSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChangeSets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListChangeSets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListChangeSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListChangeSets.$post>) {
      return parseResponse(client.ListChangeSets.$post(args, options))
    },
  })
}

export function injectPostListChangeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListChangeSets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListChangeSets.$post>,
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
    const mutationDefaults = getPostListChangeSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListEntitiesMutationKey() {
  return ['ListEntities', '/ListEntities', 'POST'] as const
}

export function getPostListEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListEntities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListEntities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListEntities.$post>) {
      return parseResponse(client.ListEntities.$post(args, options))
    },
  })
}

export function injectPostListEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListEntities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListEntities.$post>,
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
    const mutationDefaults = getPostListEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListTagsForResourceMutationKey() {
  return ['ListTagsForResource', '/ListTagsForResource', 'POST'] as const
}

export function getPostListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTagsForResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTagsForResource.$post>) {
      return parseResponse(client.ListTagsForResource.$post(args, options))
    },
  })
}

export function injectPostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListTagsForResource.$post>,
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
    const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPutResourcePolicyMutationKey() {
  return ['PutResourcePolicy', '/PutResourcePolicy', 'POST'] as const
}

export function getPostPutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PutResourcePolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutResourcePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutResourcePolicy.$post>) {
      return parseResponse(client.PutResourcePolicy.$post(args, options))
    },
  })
}

export function injectPostPutResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutResourcePolicy.$post>,
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
    const mutationDefaults = getPostPutResourcePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartChangeSetMutationKey() {
  return ['StartChangeSet', '/StartChangeSet', 'POST'] as const
}

export function getPostStartChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartChangeSet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StartChangeSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartChangeSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartChangeSet.$post>) {
      return parseResponse(client.StartChangeSet.$post(args, options))
    },
  })
}

export function injectPostStartChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartChangeSet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StartChangeSet.$post>,
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
    const mutationDefaults = getPostStartChangeSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTagResourceMutationKey() {
  return ['TagResource', '/TagResource', 'POST'] as const
}

export function getPostTagResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.TagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TagResource.$post>) {
      return parseResponse(client.TagResource.$post(args, options))
    },
  })
}

export function injectPostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.TagResource.$post>,
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
    const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUntagResourceMutationKey() {
  return ['UntagResource', '/UntagResource', 'POST'] as const
}

export function getPostUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UntagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UntagResource.$post>) {
      return parseResponse(client.UntagResource.$post(args, options))
    },
  })
}

export function injectPostUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UntagResource.$post>,
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
    const mutationDefaults = getPostUntagResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
