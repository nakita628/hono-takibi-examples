import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIssueTrackingKey() {
  return ['issue-tracking'] as const
}

export function getIssueTrackingCollectionsQueryKey(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections', keyArgs] as const
}

export function getIssueTrackingCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionId<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getIssueTrackingCollectionsCollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdTagsQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tags', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdTags<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdTicketsQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tickets', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdTicketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdTickets<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdTicketsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostIssueTrackingCollectionsCollectionIdTickets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIssueTrackingCollectionsCollectionIdTicketsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdTicketsTicketId<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdTicketsTicketIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
          ':id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdUsersQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/users', keyArgs] as const
}

export function getIssueTrackingCollectionsCollectionIdUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdUsers<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getIssueTrackingCollectionsCollectionIdUsersIdQueryKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/users/:id',
    keyArgs,
  ] as const
}

export function getIssueTrackingCollectionsCollectionIdUsersIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssueTrackingCollectionsCollectionIdUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['issue-tracking'].collections[':collection_id'].users[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIssueTrackingCollectionsCollectionIdUsersId<
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
  args: () => InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueTrackingCollectionsCollectionIdUsersIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
