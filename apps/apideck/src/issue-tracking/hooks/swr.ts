import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIssueTrackingKey() {
  return ['issue-tracking'] as const
}

export function getGetIssueTrackingCollectionsKey(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections', keyArgs] as const
}

export function useGetIssueTrackingCollections<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
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
        ? getGetIssueTrackingCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-tracking'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollections<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-tracking']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
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
        ? getGetIssueTrackingCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-tracking']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-tracking'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id', keyArgs] as const
}

export function useGetIssueTrackingCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
            >
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
        ? getGetIssueTrackingCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
            >
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
        ? getGetIssueTrackingCollectionsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['issue-tracking']['collections'][':collection_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdTagsKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tags', keyArgs] as const
}

export function useGetIssueTrackingCollectionsCollectionIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdTicketsKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tickets', keyArgs] as const
}

export function useGetIssueTrackingCollectionsCollectionIdTickets<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdTickets<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsKey() {
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/tickets', 'POST'] as const
}

export function usePostIssueTrackingCollectionsCollectionIdTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueTrackingCollectionsCollectionIdTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdKey(
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

export function useGetIssueTrackingCollectionsCollectionIdTicketsTicketId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    'DELETE',
  ] as const
}

export function useDeleteIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id',
    'PATCH',
  ] as const
}

export function usePatchIssueTrackingCollectionsCollectionIdTicketsTicketId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsKey(
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

export function useGetIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[
            ':ticket_id'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[
            ':ticket_id'
          ].comments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments',
    'POST',
  ] as const
}

export function usePostIssueTrackingCollectionsCollectionIdTicketsTicketIdComments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[
            ':ticket_id'
          ].comments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey(
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

export function useGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
            ':id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    'DELETE',
  ] as const
}

export function useDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey() {
  return [
    'issue-tracking',
    '/issue-tracking/collections/:collection_id/tickets/:ticket_id/comments/:id',
    'PATCH',
  ] as const
}

export function usePatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchIssueTrackingCollectionsCollectionIdTicketsTicketIdCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['issue-tracking']['collections'][':collection_id']['tickets'][':ticket_id']['comments'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].tickets[':ticket_id'].comments[
            ':id'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdUsersKey(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['issue-tracking', '/issue-tracking/collections/:collection_id/users', keyArgs] as const
}

export function useGetIssueTrackingCollectionsCollectionIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetIssueTrackingCollectionsCollectionIdUsersIdKey(
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

export function useGetIssueTrackingCollectionsCollectionIdUsersId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].users[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTrackingCollectionsCollectionIdUsersId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['issue-tracking']['collections'][':collection_id']['users'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIssueTrackingCollectionsCollectionIdUsersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['issue-tracking'].collections[':collection_id'].users[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
