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

export function getIssueTrackingKey() {
  return ['issue-tracking'] as const
}

export function getIssueTrackingCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['issue-tracking', '/issue-tracking/collections', keyArgs] as const
}

export function getIssueTrackingCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueTrackingCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['issue-tracking', '/issue-tracking/collections/:collection_id', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdQueryKey>
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
            ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueTrackingCollectionsCollectionIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tags', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdTagsQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsCollectionIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueTrackingCollectionsCollectionIdTicketsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tickets', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdTicketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdTickets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsCollectionIdTicketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsMutationKey() {
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tickets', 'POST'] as const
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIssueTrackingCollectionsCollectionIdTicketsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets.$post(args, options),
      )
    },
  })
}

export function usePostIssueTrackingCollectionsCollectionIdTickets<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
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
  const mutationDefaults = getPostIssueTrackingCollectionsCollectionIdTicketsMutationOptions<
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

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    'DELETE',
  ] as const
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteIssueTrackingCollectionsCollectionIdTicketsTicketId<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
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
  const mutationDefaults =
    getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
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

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    'PATCH',
  ] as const
}

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchIssueTrackingCollectionsCollectionIdTicketsTicketId<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
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
  const mutationDefaults =
    getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
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

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[
            ':ticket_id'
          ].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsMutationKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments',
    'POST',
  ] as const
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
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
  const mutationDefaults =
    getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsMutationOptions<
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

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
          ':id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey
          >
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
            ':id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    'DELETE',
  ] as const
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
          ':id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
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
  const mutationDefaults =
    getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
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

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    'PATCH',
  ] as const
}

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
          ':id'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
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
                  ReturnType<
                    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
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
  const mutationDefaults =
    getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
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

export function getIssueTrackingCollectionsCollectionIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/users', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdUsersQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsCollectionIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueTrackingCollectionsCollectionIdUsersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/users/:id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdUsersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueTrackingCollectionsCollectionIdUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueTrackingCollectionsCollectionIdUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
    >
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
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
                    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIssueTrackingCollectionsCollectionIdUsersIdQueryKey>
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
              (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueTrackingCollectionsCollectionIdUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueTrackingCollectionsCollectionIdUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['issue-tracking'].collections[':collection_id'].users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
