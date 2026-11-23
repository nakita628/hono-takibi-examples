import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmObjects202609ObjectTypeQueryKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/:objectType', args] as const
}

export function getCrmObjects202609ObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
  >({
    queryKey: getCrmObjects202609ObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
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
      ...getCrmObjects202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609ObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeQueryKey>
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
      ...getCrmObjects202609ObjectTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmObjects202609ObjectTypeMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchArchiveMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchArchive<
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
                    (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
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
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchArchiveMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchCreateMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/create', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchCreate<
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
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
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
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchCreateMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchReadMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/read', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchRead<
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
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
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
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchReadMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchUpdateMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/update', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchUpdate<
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
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
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
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchUpdateMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeBatchUpsertMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/upsert', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609ObjectTypeBatchUpsert<
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
                  (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
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
  const mutationDefaults = getPostCrmObjects202609ObjectTypeBatchUpsertMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeMergeMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/merge', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].merge.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectTypeMerge<
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
                ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeMergeMutationOptions<
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

export function getPostCrmObjects202609ObjectTypeSearchMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/search', 'POST'] as const
}

export function getPostCrmObjects202609ObjectTypeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609ObjectTypeSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'][':objectType'].search.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609ObjectTypeSearch<
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
                ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609ObjectTypeSearchMutationOptions<
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

export function getCrmObjects202609ObjectTypeObjectIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', args] as const
}

export function getCrmObjects202609ObjectTypeObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
  >({
    queryKey: getCrmObjects202609ObjectTypeObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609ObjectTypeObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
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
      ...getCrmObjects202609ObjectTypeObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609ObjectTypeObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609ObjectTypeObjectIdQueryKey>
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
      ...getCrmObjects202609ObjectTypeObjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'DELETE'] as const
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjects202609ObjectTypeObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609ObjectTypeObjectId<
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
                    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
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
  const mutationDefaults = getDeleteCrmObjects202609ObjectTypeObjectIdMutationOptions<
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

export function getPatchCrmObjects202609ObjectTypeObjectIdMutationKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'PATCH'] as const
}

export function getPatchCrmObjects202609ObjectTypeObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjects202609ObjectTypeObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmObjects202609ObjectTypeObjectId<
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
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
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
  const mutationDefaults = getPatchCrmObjects202609ObjectTypeObjectIdMutationOptions<
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
