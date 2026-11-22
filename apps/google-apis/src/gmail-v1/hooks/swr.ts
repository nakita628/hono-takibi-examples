import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGmailKey() {
  return ['gmail'] as const
}

export function getGetGmailV1UsersUserIdDraftsKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts', args] as const
}

export function useGetGmailV1UsersUserIdDrafts<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
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
        ? getGetGmailV1UsersUserIdDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdDrafts<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
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
        ? getGetGmailV1UsersUserIdDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdDraftsKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts', 'POST'] as const
}

export function usePostGmailV1UsersUserIdDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']> },
      ) => parseResponse(client.gmail.v1.users[':userId'].drafts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdDraftsSendKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/send', 'POST'] as const
}

export function usePostGmailV1UsersUserIdDraftsSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdDraftsSendKey()
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
            (typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']
          >
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].drafts.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdDraftsIdKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', args] as const
}

export function useGetGmailV1UsersUserIdDraftsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdDraftsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdDraftsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdDraftsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdDraftsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdDraftsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdDraftsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdDraftsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdDraftsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdDraftsIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdHistoryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/history', args] as const
}

export function useGetGmailV1UsersUserIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
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
        ? getGetGmailV1UsersUserIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdHistory<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
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
        ? getGetGmailV1UsersUserIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdLabelsKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels', args] as const
}

export function useGetGmailV1UsersUserIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
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
        ? getGetGmailV1UsersUserIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
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
        ? getGetGmailV1UsersUserIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdLabelsKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels', 'POST'] as const
}

export function usePostGmailV1UsersUserIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']> },
      ) => parseResponse(client.gmail.v1.users[':userId'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdLabelsIdKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', args] as const
}

export function useGetGmailV1UsersUserIdLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdLabelsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdLabelsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdLabelsIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGmailV1UsersUserIdLabelsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PATCH'] as const
}

export function usePatchGmailV1UsersUserIdLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGmailV1UsersUserIdLabelsIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']
          >
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdMessagesKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages', args] as const
}

export function useGetGmailV1UsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
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
        ? getGetGmailV1UsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
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
        ? getGetGmailV1UsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesBatchDeleteKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchDelete', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesBatchDeleteKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].messages.batchDelete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesBatchModifyKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchModify', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesBatchModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesBatchModifyKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].messages.batchModify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesImportKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/import', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesImportKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].messages.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesSendKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/send', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesSendKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']
          >
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].messages.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdMessagesIdKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', args] as const
}

export function useGetGmailV1UsersUserIdMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
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
        ? getGetGmailV1UsersUserIdMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdMessagesId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
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
        ? getGetGmailV1UsersUserIdMessagesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdMessagesIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdMessagesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdMessagesIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesIdModifyKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/modify', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesIdModifyKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].messages[':id'].modify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesIdTrashKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/trash', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesIdTrashKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].messages[':id'].trash.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdMessagesIdUntrashKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/untrash', 'POST'] as const
}

export function usePostGmailV1UsersUserIdMessagesIdUntrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdMessagesIdUntrashKey()
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
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].messages[':id'].untrash.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdMessagesMessageIdAttachmentsIdKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages/:messageId/attachments/:id', args] as const
}

export function useGetGmailV1UsersUserIdMessagesMessageIdAttachmentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdMessagesMessageIdAttachmentsIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
          client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdMessagesMessageIdAttachmentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdMessagesMessageIdAttachmentsIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
          client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdProfileKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/profile', args] as const
}

export function useGetGmailV1UsersUserIdProfile<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
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
        ? getGetGmailV1UsersUserIdProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdProfile<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
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
        ? getGetGmailV1UsersUserIdProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsAutoForwardingKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', args] as const
}

export function useGetGmailV1UsersUserIdSettingsAutoForwarding<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsAutoForwardingKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
          client.gmail.v1.users[':userId'].settings.autoForwarding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsAutoForwarding<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsAutoForwardingKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
          client.gmail.v1.users[':userId'].settings.autoForwarding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsAutoForwardingKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsAutoForwarding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsAutoForwardingKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.autoForwarding.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsCseIdentitiesKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', args] as const
}

export function useGetGmailV1UsersUserIdSettingsCseIdentities<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseIdentitiesKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.identities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsCseIdentities<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseIdentitiesKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.identities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsCseIdentitiesKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsCseIdentities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsCseIdentitiesKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.identities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    args,
  ] as const
}

export function useGetGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    'DELETE',
  ] as const
}

export function useDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:emailAddress',
    'PATCH',
  ] as const
}

export function usePatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.identities[':emailAddress'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsCseKeypairsKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', args] as const
}

export function useGetGmailV1UsersUserIdSettingsCseKeypairs<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseKeypairsKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsCseKeypairs<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseKeypairsKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsCseKeypairsKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId', args] as const
}

export function useGetGmailV1UsersUserIdSettingsCseKeypairsKeyPairId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsCseKeypairsKeyPairId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:disable',
    'POST',
  ] as const
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:disable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:enable',
    'POST',
  ] as const
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:enable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:obliterate',
    'POST',
  ] as const
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:obliterate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsDelegatesKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', args] as const
}

export function useGetGmailV1UsersUserIdSettingsDelegates<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsDelegatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsDelegates<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsDelegatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsDelegatesKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsDelegates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsDelegatesKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsDelegatesDelegateEmailKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates/:delegateEmail', args] as const
}

export function useGetGmailV1UsersUserIdSettingsDelegatesDelegateEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsDelegatesDelegateEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsDelegatesDelegateEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsDelegatesDelegateEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates/:delegateEmail', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsFiltersKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', args] as const
}

export function useGetGmailV1UsersUserIdSettingsFilters<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsFilters<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.filters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsFiltersKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsFiltersKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].settings.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsFiltersIdKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', args] as const
}

export function useGetGmailV1UsersUserIdSettingsFiltersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsFiltersIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
          client.gmail.v1.users[':userId'].settings.filters[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsFiltersId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsFiltersIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
          client.gmail.v1.users[':userId'].settings.filters[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsFiltersIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdSettingsFiltersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdSettingsFiltersIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.filters[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsForwardingAddressesKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', args] as const
}

export function useGetGmailV1UsersUserIdSettingsForwardingAddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsForwardingAddressesKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
          client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsForwardingAddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsForwardingAddressesKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
          client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsForwardingAddressesKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsForwardingAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsForwardingAddressesKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.forwardingAddresses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    args,
  ] as const
}

export function useGetGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    'DELETE',
  ] as const
}

export function useDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsImapKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', args] as const
}

export function useGetGmailV1UsersUserIdSettingsImap<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsImapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.imap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsImap<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsImapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.imap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsImapKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsImap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsImapKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']
          >
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].settings.imap.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsLanguageKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', args] as const
}

export function useGetGmailV1UsersUserIdSettingsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.language.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.language.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsLanguageKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsLanguageKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].settings.language.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsPopKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', args] as const
}

export function useGetGmailV1UsersUserIdSettingsPop<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsPopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.pop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsPop<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsPopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.pop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsPopKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsPop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsPopKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']
          >
        },
      ) => parseResponse(client.gmail.v1.users[':userId'].settings.pop.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsSendAsKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', args] as const
}

export function useGetGmailV1UsersUserIdSettingsSendAs<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsSendAsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsSendAs<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsSendAsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsSendAsKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsSendAs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsSendAsKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', args] as const
}

export function useGetGmailV1UsersUserIdSettingsSendAsSendAsEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsSendAsSendAsEmail<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsSendAsSendAsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PATCH'] as const
}

export function usePatchGmailV1UsersUserIdSettingsSendAsSendAsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo', args] as const
}

export function useGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo',
    'POST',
  ] as const
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    args,
  ] as const
}

export function useGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<TError = unknown>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
        ? getGetGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdKey(args)
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
                (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    'DELETE',
  ] as const
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id/setDefault',
    'POST',
  ] as const
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[
            ':id'
          ].setDefault.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/verify', 'POST'] as const
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerify<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].verify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdSettingsVacationKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', args] as const
}

export function useGetGmailV1UsersUserIdSettingsVacation<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsVacationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdSettingsVacation<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
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
        ? getGetGmailV1UsersUserIdSettingsVacationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGmailV1UsersUserIdSettingsVacationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', 'PUT'] as const
}

export function usePutGmailV1UsersUserIdSettingsVacation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGmailV1UsersUserIdSettingsVacationKey()
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
            (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdStopKey() {
  return ['gmail', '/gmail/v1/users/:userId/stop', 'POST'] as const
}

export function usePostGmailV1UsersUserIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']> },
      ) => parseResponse(client.gmail.v1.users[':userId'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdThreadsKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads', args] as const
}

export function useGetGmailV1UsersUserIdThreads<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
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
        ? getGetGmailV1UsersUserIdThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdThreads<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
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
        ? getGetGmailV1UsersUserIdThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gmail.v1.users[':userId'].threads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGmailV1UsersUserIdThreadsIdKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', args] as const
}

export function useGetGmailV1UsersUserIdThreadsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdThreadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGmailV1UsersUserIdThreadsId<TError = unknown>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
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
        ? getGetGmailV1UsersUserIdThreadsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGmailV1UsersUserIdThreadsIdKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', 'DELETE'] as const
}

export function useDeleteGmailV1UsersUserIdThreadsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGmailV1UsersUserIdThreadsIdKey()
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
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdThreadsIdModifyKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/modify', 'POST'] as const
}

export function usePostGmailV1UsersUserIdThreadsIdModify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdThreadsIdModifyKey()
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
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].threads[':id'].modify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdThreadsIdTrashKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/trash', 'POST'] as const
}

export function usePostGmailV1UsersUserIdThreadsIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdThreadsIdTrashKey()
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
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].threads[':id'].trash.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdThreadsIdUntrashKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/untrash', 'POST'] as const
}

export function usePostGmailV1UsersUserIdThreadsIdUntrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdThreadsIdUntrashKey()
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
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
          >
        },
      ) =>
        parseResponse(
          client.gmail.v1.users[':userId'].threads[':id'].untrash.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGmailV1UsersUserIdWatchKey() {
  return ['gmail', '/gmail/v1/users/:userId/watch', 'POST'] as const
}

export function usePostGmailV1UsersUserIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGmailV1UsersUserIdWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']> },
      ) => parseResponse(client.gmail.v1.users[':userId'].watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
