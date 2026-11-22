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

export function usePatchCancelChangeSetCatalogChangeSetId<
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
                  ReturnType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['CancelChangeSet#catalog&changeSetId']['$patch']>,
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
  const mutationDefaults = getPatchCancelChangeSetCatalogChangeSetIdMutationOptions<
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

export function useDeleteDeleteResourcePolicyResourceArn<
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
                Awaited<ReturnType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['DeleteResourcePolicy#resourceArn']['$delete']>,
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
  const mutationDefaults = getDeleteDeleteResourcePolicyResourceArnMutationOptions<
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

export function getDescribeChangeSetCatalogChangeSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'DescribeChangeSet#catalog&changeSetId',
    '/DescribeChangeSet#catalog&changeSetId',
    keyArgs,
  ] as const
}

export function getDescribeChangeSetCatalogChangeSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDescribeChangeSetCatalogChangeSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['DescribeChangeSet#catalog&changeSetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDescribeChangeSetCatalogChangeSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>
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
                  ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDescribeChangeSetCatalogChangeSetIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['DescribeChangeSet#catalog&changeSetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDescribeChangeSetCatalogChangeSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDescribeChangeSetCatalogChangeSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['DescribeChangeSet#catalog&changeSetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDescribeEntityCatalogEntityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['DescribeEntity#catalog&entityId', '/DescribeEntity#catalog&entityId', keyArgs] as const
}

export function getDescribeEntityCatalogEntityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDescribeEntityCatalogEntityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['DescribeEntity#catalog&entityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDescribeEntityCatalogEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDescribeEntityCatalogEntityIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['DescribeEntity#catalog&entityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDescribeEntityCatalogEntityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDescribeEntityCatalogEntityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['DescribeEntity#catalog&entityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetResourcePolicyResourceArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['GetResourcePolicy#resourceArn', '/GetResourcePolicy#resourceArn', keyArgs] as const
}

export function getGetResourcePolicyResourceArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetResourcePolicyResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['GetResourcePolicy#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetResourcePolicyResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetResourcePolicyResourceArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['GetResourcePolicy#resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetResourcePolicyResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetResourcePolicyResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['GetResourcePolicy#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListChangeSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListChangeSets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListChangeSets.$post>,
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
  const mutationDefaults = getPostListChangeSetsMutationOptions<TError, TOnMutateResult>(
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

export function usePostListEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListEntities.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ListEntities.$post>,
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
  const mutationDefaults = getPostListEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function usePostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ListTagsForResource.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ListTagsForResource.$post>,
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
  const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
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

export function usePostPutResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.PutResourcePolicy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.PutResourcePolicy.$post>,
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
  const mutationDefaults = getPostPutResourcePolicyMutationOptions<TError, TOnMutateResult>(
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

export function usePostStartChangeSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.StartChangeSet.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.StartChangeSet.$post>,
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
  const mutationDefaults = getPostStartChangeSetMutationOptions<TError, TOnMutateResult>(
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

export function usePostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.TagResource.$post>,
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
  const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UntagResource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.UntagResource.$post>,
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
  const mutationDefaults = getPostUntagResourceMutationOptions<TError, TOnMutateResult>(
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
