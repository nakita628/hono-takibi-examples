import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmProperties202609ObjectTypeQueryKey(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/properties/2026-09/:objectType', args] as const
}

export function getCrmProperties202609ObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmProperties202609ObjectTypeQueryKey>
  >({
    queryKey: getCrmProperties202609ObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmProperties202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmProperties202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmProperties202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmProperties202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmProperties202609ObjectTypeMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType', 'POST'] as const
}

export function getPostCrmProperties202609ObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmProperties202609ObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>,
    ) {
      return parseResponse(client.crm.properties['2026-09'][':objectType'].$post(args, options))
    },
  })
}

export function usePostCrmProperties202609ObjectType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmProperties202609ObjectTypeMutationOptions<
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

export function getPostCrmProperties202609ObjectTypeBatchArchiveMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function getPostCrmProperties202609ObjectTypeBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmProperties202609ObjectTypeBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCrmProperties202609ObjectTypeBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmProperties202609ObjectTypeBatchArchiveMutationOptions<
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

export function getPostCrmProperties202609ObjectTypeBatchCreateMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/create', 'POST'] as const
}

export function getPostCrmProperties202609ObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmProperties202609ObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCrmProperties202609ObjectTypeBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmProperties202609ObjectTypeBatchCreateMutationOptions<
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

export function getPostCrmProperties202609ObjectTypeBatchReadMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/read', 'POST'] as const
}

export function getPostCrmProperties202609ObjectTypeBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmProperties202609ObjectTypeBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCrmProperties202609ObjectTypeBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmProperties202609ObjectTypeBatchReadMutationOptions<
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

export function getCrmProperties202609ObjectTypeGroupsQueryKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/groups', args] as const
}

export function getCrmProperties202609ObjectTypeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmProperties202609ObjectTypeGroupsQueryKey>
  >({
    queryKey: getCrmProperties202609ObjectTypeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmProperties202609ObjectTypeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmProperties202609ObjectTypeGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmProperties202609ObjectTypeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmProperties202609ObjectTypeGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmProperties202609ObjectTypeGroupsMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups', 'POST'] as const
}

export function getPostCrmProperties202609ObjectTypeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmProperties202609ObjectTypeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].groups.$post(args, options),
      )
    },
  })
}

export function usePostCrmProperties202609ObjectTypeGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmProperties202609ObjectTypeGroupsMutationOptions<
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

export function getCrmProperties202609ObjectTypeGroupsGroupNameQueryKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', args] as const
}

export function getCrmProperties202609ObjectTypeGroupsGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmProperties202609ObjectTypeGroupsGroupNameQueryKey>
  >({
    queryKey: getCrmProperties202609ObjectTypeGroupsGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmProperties202609ObjectTypeGroupsGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeGroupsGroupNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmProperties202609ObjectTypeGroupsGroupNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmProperties202609ObjectTypeGroupsGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypeGroupsGroupNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmProperties202609ObjectTypeGroupsGroupNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmProperties202609ObjectTypeGroupsGroupNameMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', 'DELETE'] as const
}

export function getDeleteCrmProperties202609ObjectTypeGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmProperties202609ObjectTypeGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmProperties202609ObjectTypeGroupsGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmProperties202609ObjectTypeGroupsGroupNameMutationOptions<
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

export function getPatchCrmProperties202609ObjectTypeGroupsGroupNameMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', 'PATCH'] as const
}

export function getPatchCrmProperties202609ObjectTypeGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmProperties202609ObjectTypeGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmProperties202609ObjectTypeGroupsGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmProperties202609ObjectTypeGroupsGroupNameMutationOptions<
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

export function getCrmProperties202609ObjectTypePropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', args] as const
}

export function getCrmProperties202609ObjectTypePropertyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmProperties202609ObjectTypePropertyNameQueryKey>
  >({
    queryKey: getCrmProperties202609ObjectTypePropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'][':propertyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmProperties202609ObjectTypePropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypePropertyNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmProperties202609ObjectTypePropertyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmProperties202609ObjectTypePropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmProperties202609ObjectTypePropertyNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmProperties202609ObjectTypePropertyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmProperties202609ObjectTypePropertyNameMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', 'DELETE'] as const
}

export function getDeleteCrmProperties202609ObjectTypePropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmProperties202609ObjectTypePropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'][':propertyName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmProperties202609ObjectTypePropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmProperties202609ObjectTypePropertyNameMutationOptions<
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

export function getPatchCrmProperties202609ObjectTypePropertyNameMutationKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', 'PATCH'] as const
}

export function getPatchCrmProperties202609ObjectTypePropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmProperties202609ObjectTypePropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.properties['2026-09'][':objectType'][':propertyName'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmProperties202609ObjectTypePropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmProperties202609ObjectTypePropertyNameMutationOptions<
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
