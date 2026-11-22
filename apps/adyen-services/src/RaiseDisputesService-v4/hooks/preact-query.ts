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

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getDisputesQueryKey(args: InferRequestType<typeof client.disputes.$get>) {
  return ['disputes', '/disputes', args] as const
}

export function getDisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisputesQueryKey>
  >({
    queryKey: getDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDisputesMutationKey() {
  return ['disputes', '/disputes', 'POST'] as const
}

export function getPostDisputesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>>,
    TError,
    InferRequestType<typeof client.disputes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisputesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disputes.$post>) {
      return parseResponse(client.disputes.$post(args, options))
    },
  })
}

export function usePostDisputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.disputes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisputesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDisputesDisputeIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
) {
  return ['disputes', '/disputes/:disputeId/attachments', args] as const
}

export function getDisputesDisputeIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesDisputeIdAttachmentsQueryKey>
  >({
    queryKey: getDisputesDisputeIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes[':disputeId'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDisputesDisputeIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesDisputeIdAttachmentsQueryKey>
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
      ...getDisputesDisputeIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDisputesDisputeIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesDisputeIdAttachmentsQueryKey>
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
      ...getDisputesDisputeIdAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDisputesDisputeIdAttachmentsMutationKey() {
  return ['disputes', '/disputes/:disputeId/attachments', 'POST'] as const
}

export function getPostDisputesDisputeIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDisputesDisputeIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>,
    ) {
      return parseResponse(client.disputes[':disputeId'].attachments.$post(args, options))
    },
  })
}

export function usePostDisputesDisputeIdAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisputesDisputeIdAttachmentsMutationOptions<
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

export function getDisputesDisputeIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
) {
  return ['disputes', '/disputes/:disputeId/attachments/:attachmentId', args] as const
}

export function getDisputesDisputeIdAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesDisputeIdAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getDisputesDisputeIdAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes[':disputeId'].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDisputesDisputeIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesDisputeIdAttachmentsAttachmentIdQueryKey>
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
      ...getDisputesDisputeIdAttachmentsAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDisputesDisputeIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesDisputeIdAttachmentsAttachmentIdQueryKey>
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
      ...getDisputesDisputeIdAttachmentsAttachmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDisputesDisputeIdAttachmentsAttachmentIdMutationKey() {
  return ['disputes', '/disputes/:disputeId/attachments/:attachmentId', 'DELETE'] as const
}

export function getDeleteDisputesDisputeIdAttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDisputesDisputeIdAttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.disputes[':disputeId'].attachments[':attachmentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDisputesDisputeIdAttachmentsAttachmentId<
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
                    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
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
  const mutationDefaults = getDeleteDisputesDisputeIdAttachmentsAttachmentIdMutationOptions<
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

export function getDisputesIdQueryKey(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
) {
  return ['disputes', '/disputes/:id', args] as const
}

export function getDisputesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.disputes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesIdQueryKey>
  >({
    queryKey: getDisputesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDisputesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDisputesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDisputesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDisputesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDisputesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchDisputesIdMutationKey() {
  return ['disputes', '/disputes/:id', 'PATCH'] as const
}

export function getPatchDisputesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.disputes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDisputesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.disputes)[':id']['$patch']>) {
      return parseResponse(client.disputes[':id'].$patch(args, options))
    },
  })
}

export function usePatchDisputesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.disputes)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDisputesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
