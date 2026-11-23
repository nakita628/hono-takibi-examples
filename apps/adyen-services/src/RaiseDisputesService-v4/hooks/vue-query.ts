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

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getDisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
) {
  return ['disputes', '/disputes', toValue(args)] as const
}

export function getDisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
          >,
          ReturnType<typeof getDisputesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.disputes.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>
  >,
) {
  return ['disputes', '/disputes/:disputeId/attachments', toValue(args)] as const
}

export function getDisputesDisputeIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesDisputeIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes[':disputeId'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDisputesDisputeIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesDisputeIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesDisputeIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes[':disputeId'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
  >,
) {
  return ['disputes', '/disputes/:disputeId/attachments/:attachmentId', toValue(args)] as const
}

export function getDisputesDisputeIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesDisputeIdAttachmentsAttachmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes[':disputeId'].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']>
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
                    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDisputesDisputeIdAttachmentsAttachmentIdQueryKey>
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
              (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesDisputeIdAttachmentsAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesDisputeIdAttachmentsAttachmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes[':disputeId'].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
) {
  return ['disputes', '/disputes/:id', toValue(args)] as const
}

export function getDisputesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDisputesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDisputesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
