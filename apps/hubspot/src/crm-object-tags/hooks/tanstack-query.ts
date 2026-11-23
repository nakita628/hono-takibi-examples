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

export function getCrmObjectTags202609ObjectTypeIdQueryKey(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
) {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId', args] as const
}

export function getCrmObjectTags202609ObjectTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectTags202609ObjectTypeIdQueryKey>
  >({
    queryKey: getCrmObjectTags202609ObjectTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjectTags202609ObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectTags202609ObjectTypeIdQueryKey>
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
      ...getCrmObjectTags202609ObjectTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjectTags202609ObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectTags202609ObjectTypeIdQueryKey>
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
      ...getCrmObjectTags202609ObjectTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmObjectTags202609ObjectTypeIdMutationKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId', 'POST'] as const
}

export function getPostCrmObjectTags202609ObjectTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjectTags202609ObjectTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']
      >,
    ) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'].$post(args, options),
      )
    },
  })
}

export function usePostCrmObjectTags202609ObjectTypeId<
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
                ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjectTags202609ObjectTypeIdMutationOptions<
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

export function getCrmObjectTags202609ObjectTypeIdTagIdQueryKey(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
) {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', args] as const
}

export function getCrmObjectTags202609ObjectTypeIdTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjectTags202609ObjectTypeIdTagIdQueryKey>
  >({
    queryKey: getCrmObjectTags202609ObjectTypeIdTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjectTags202609ObjectTypeIdTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectTags202609ObjectTypeIdTagIdQueryKey>
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
      ...getCrmObjectTags202609ObjectTypeIdTagIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjectTags202609ObjectTypeIdTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjectTags202609ObjectTypeIdTagIdQueryKey>
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
      ...getCrmObjectTags202609ObjectTypeIdTagIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmObjectTags202609ObjectTypeIdTagIdMutationKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'PUT'] as const
}

export function getPutCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCrmObjectTags202609ObjectTypeIdTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjectTags202609ObjectTypeIdTagId<
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
                  (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
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
  const mutationDefaults = getPutCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
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

export function getDeleteCrmObjectTags202609ObjectTypeIdTagIdMutationKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'DELETE'] as const
}

export function getDeleteCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjectTags202609ObjectTypeIdTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjectTags202609ObjectTypeIdTagId<
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
                    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
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
  const mutationDefaults = getDeleteCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
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

export function getPatchCrmObjectTags202609ObjectTypeIdTagIdMutationKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'PATCH'] as const
}

export function getPatchCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjectTags202609ObjectTypeIdTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCrmObjectTags202609ObjectTypeIdTagId<
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
                  (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
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
  const mutationDefaults = getPatchCrmObjectTags202609ObjectTypeIdTagIdMutationOptions<
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
