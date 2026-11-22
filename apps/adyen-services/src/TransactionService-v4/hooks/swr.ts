import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getGetDisputesKey(args: InferRequestType<typeof client.disputes.$get>) {
  return ['disputes', '/disputes', args] as const
}

export function useGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDisputesKey() {
  return ['disputes', '/disputes', 'POST'] as const
}

export function usePostDisputes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.disputes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisputesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disputes.$post> }) =>
        parseResponse(client.disputes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesDisputeIdAttachmentsKey(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
) {
  return ['disputes', '/disputes/:disputeId/attachments', args] as const
}

export function useGetDisputesDisputeIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
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
        ? getGetDisputesDisputeIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.disputes[':disputeId'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesDisputeIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
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
        ? getGetDisputesDisputeIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.disputes[':disputeId'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDisputesDisputeIdAttachmentsKey() {
  return ['disputes', '/disputes/:disputeId/attachments', 'POST'] as const
}

export function usePostDisputesDisputeIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes)[':disputeId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisputesDisputeIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.disputes)[':disputeId']['attachments']['$post']>
        },
      ) => parseResponse(client.disputes[':disputeId'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesDisputeIdAttachmentsAttachmentIdKey(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
) {
  return ['disputes', '/disputes/:disputeId/attachments/:attachmentId', args] as const
}

export function useGetDisputesDisputeIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDisputesDisputeIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
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
          client.disputes[':disputeId'].attachments[':attachmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesDisputeIdAttachmentsAttachmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDisputesDisputeIdAttachmentsAttachmentIdKey(args)
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
                (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$get']
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
          client.disputes[':disputeId'].attachments[':attachmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDisputesDisputeIdAttachmentsAttachmentIdKey() {
  return ['disputes', '/disputes/:disputeId/attachments/:attachmentId', 'DELETE'] as const
}

export function useDeleteDisputesDisputeIdAttachmentsAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDisputesDisputeIdAttachmentsAttachmentIdKey()
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
            (typeof client.disputes)[':disputeId']['attachments'][':attachmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.disputes[':disputeId'].attachments[':attachmentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesIdKey(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
) {
  return ['disputes', '/disputes/:id', args] as const
}

export function useGetDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDisputesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDisputesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchDisputesIdKey() {
  return ['disputes', '/disputes/:id', 'PATCH'] as const
}

export function usePatchDisputesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disputes)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDisputesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.disputes)[':id']['$patch']> },
      ) => parseResponse(client.disputes[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
