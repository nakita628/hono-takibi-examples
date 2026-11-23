import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppendChatMessageKey() {
  return ['appendChatMessage'] as const
}

export function getAppendTextKey() {
  return ['appendText'] as const
}

export function getCheckTokenKey() {
  return ['checkToken'] as const
}

export function getCopyPadKey() {
  return ['copyPad'] as const
}

export function getCopyPadWithoutHistoryKey() {
  return ['copyPadWithoutHistory'] as const
}

export function getCreateAuthorKey() {
  return ['createAuthor'] as const
}

export function getCreateAuthorIfNotExistsForKey() {
  return ['createAuthorIfNotExistsFor'] as const
}

export function getCreateDiffHTMLKey() {
  return ['createDiffHTML'] as const
}

export function getCreateGroupKey() {
  return ['createGroup'] as const
}

export function getCreateGroupIfNotExistsForKey() {
  return ['createGroupIfNotExistsFor'] as const
}

export function getCreateGroupPadKey() {
  return ['createGroupPad'] as const
}

export function getCreatePadKey() {
  return ['createPad'] as const
}

export function getCreateSessionKey() {
  return ['createSession'] as const
}

export function getDeleteGroupKey() {
  return ['deleteGroup'] as const
}

export function getDeletePadKey() {
  return ['deletePad'] as const
}

export function getDeleteSessionKey() {
  return ['deleteSession'] as const
}

export function getGetAttributePoolKey() {
  return ['getAttributePool'] as const
}

export function getGetAuthorNameKey() {
  return ['getAuthorName'] as const
}

export function getGetChatHeadKey() {
  return ['getChatHead'] as const
}

export function getGetChatHistoryKey() {
  return ['getChatHistory'] as const
}

export function getGetHTMLKey() {
  return ['getHTML'] as const
}

export function getGetLastEditedKey() {
  return ['getLastEdited'] as const
}

export function getGetPadIDKey() {
  return ['getPadID'] as const
}

export function getGetPublicStatusKey() {
  return ['getPublicStatus'] as const
}

export function getGetReadOnlyIDKey() {
  return ['getReadOnlyID'] as const
}

export function getGetRevisionChangesetKey() {
  return ['getRevisionChangeset'] as const
}

export function getGetRevisionsCountKey() {
  return ['getRevisionsCount'] as const
}

export function getGetSavedRevisionsCountKey() {
  return ['getSavedRevisionsCount'] as const
}

export function getGetSessionInfoKey() {
  return ['getSessionInfo'] as const
}

export function getGetStatsKey() {
  return ['getStats'] as const
}

export function getGetTextKey() {
  return ['getText'] as const
}

export function getListAllGroupsKey() {
  return ['listAllGroups'] as const
}

export function getListAllPadsKey() {
  return ['listAllPads'] as const
}

export function getListAuthorsOfPadKey() {
  return ['listAuthorsOfPad'] as const
}

export function getListPadsKey() {
  return ['listPads'] as const
}

export function getListPadsOfAuthorKey() {
  return ['listPadsOfAuthor'] as const
}

export function getListSavedRevisionsKey() {
  return ['listSavedRevisions'] as const
}

export function getListSessionsOfAuthorKey() {
  return ['listSessionsOfAuthor'] as const
}

export function getListSessionsOfGroupKey() {
  return ['listSessionsOfGroup'] as const
}

export function getMovePadKey() {
  return ['movePad'] as const
}

export function getPadUsersKey() {
  return ['padUsers'] as const
}

export function getPadUsersCountKey() {
  return ['padUsersCount'] as const
}

export function getRestoreRevisionKey() {
  return ['restoreRevision'] as const
}

export function getSaveRevisionKey() {
  return ['saveRevision'] as const
}

export function getSendClientsMessageKey() {
  return ['sendClientsMessage'] as const
}

export function getSetHTMLKey() {
  return ['setHTML'] as const
}

export function getSetPublicStatusKey() {
  return ['setPublicStatus'] as const
}

export function getSetTextKey() {
  return ['setText'] as const
}

export function getGetAppendChatMessageKey(
  args: InferRequestType<typeof client.appendChatMessage.$get>,
) {
  return ['appendChatMessage', '/appendChatMessage', args] as const
}

export function useGetAppendChatMessage<TError = unknown>(
  args: InferRequestType<typeof client.appendChatMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
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
        ? getGetAppendChatMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appendChatMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppendChatMessage<TError = unknown>(
  args: InferRequestType<typeof client.appendChatMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
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
        ? getGetAppendChatMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appendChatMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppendChatMessageKey() {
  return ['appendChatMessage', '/appendChatMessage', 'POST'] as const
}

export function usePostAppendChatMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.appendChatMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppendChatMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appendChatMessage.$post> }) =>
        parseResponse(client.appendChatMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppendTextKey(args: InferRequestType<typeof client.appendText.$get>) {
  return ['appendText', '/appendText', args] as const
}

export function useGetAppendText<TError = unknown>(
  args: InferRequestType<typeof client.appendText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppendTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appendText.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppendText<TError = unknown>(
  args: InferRequestType<typeof client.appendText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppendTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appendText.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppendTextKey() {
  return ['appendText', '/appendText', 'POST'] as const
}

export function usePostAppendText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.appendText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppendTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appendText.$post> }) =>
        parseResponse(client.appendText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckTokenKey() {
  return ['checkToken', '/checkToken'] as const
}

export function useGetCheckToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checkToken.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCheckTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checkToken.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckTokenKey() {
  return ['checkToken', '/checkToken', 'POST'] as const
}

export function usePostCheckToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.checkToken.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCopyPadKey(args: InferRequestType<typeof client.copyPad.$get>) {
  return ['copyPad', '/copyPad', args] as const
}

export function useGetCopyPad<TError = unknown>(
  args: InferRequestType<typeof client.copyPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCopyPadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.copyPad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCopyPad<TError = unknown>(
  args: InferRequestType<typeof client.copyPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCopyPadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.copyPad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCopyPadKey() {
  return ['copyPad', '/copyPad', 'POST'] as const
}

export function usePostCopyPad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.copyPad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCopyPadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.copyPad.$post> }) =>
        parseResponse(client.copyPad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCopyPadWithoutHistoryKey(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
) {
  return ['copyPadWithoutHistory', '/copyPadWithoutHistory', args] as const
}

export function useGetCopyPadWithoutHistory<TError = unknown>(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
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
        ? getGetCopyPadWithoutHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.copyPadWithoutHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCopyPadWithoutHistory<TError = unknown>(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
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
        ? getGetCopyPadWithoutHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.copyPadWithoutHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCopyPadWithoutHistoryKey() {
  return ['copyPadWithoutHistory', '/copyPadWithoutHistory', 'POST'] as const
}

export function usePostCopyPadWithoutHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.copyPadWithoutHistory.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCopyPadWithoutHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.copyPadWithoutHistory.$post> },
      ) => parseResponse(client.copyPadWithoutHistory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateAuthorKey(args: InferRequestType<typeof client.createAuthor.$get>) {
  return ['createAuthor', '/createAuthor', args] as const
}

export function useGetCreateAuthor<TError = unknown>(
  args: InferRequestType<typeof client.createAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateAuthorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateAuthor<TError = unknown>(
  args: InferRequestType<typeof client.createAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateAuthorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateAuthorKey() {
  return ['createAuthor', '/createAuthor', 'POST'] as const
}

export function usePostCreateAuthor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createAuthor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAuthorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createAuthor.$post> }) =>
        parseResponse(client.createAuthor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateAuthorIfNotExistsForKey(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
) {
  return ['createAuthorIfNotExistsFor', '/createAuthorIfNotExistsFor', args] as const
}

export function useGetCreateAuthorIfNotExistsFor<TError = unknown>(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
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
        ? getGetCreateAuthorIfNotExistsForKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createAuthorIfNotExistsFor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateAuthorIfNotExistsFor<TError = unknown>(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
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
        ? getGetCreateAuthorIfNotExistsForKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createAuthorIfNotExistsFor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateAuthorIfNotExistsForKey() {
  return ['createAuthorIfNotExistsFor', '/createAuthorIfNotExistsFor', 'POST'] as const
}

export function usePostCreateAuthorIfNotExistsFor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createAuthorIfNotExistsFor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAuthorIfNotExistsForKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createAuthorIfNotExistsFor.$post> },
      ) => parseResponse(client.createAuthorIfNotExistsFor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateDiffHTMLKey(args: InferRequestType<typeof client.createDiffHTML.$get>) {
  return ['createDiffHTML', '/createDiffHTML', args] as const
}

export function useGetCreateDiffHTML<TError = unknown>(
  args: InferRequestType<typeof client.createDiffHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateDiffHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createDiffHTML.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateDiffHTML<TError = unknown>(
  args: InferRequestType<typeof client.createDiffHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateDiffHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createDiffHTML.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateDiffHTMLKey() {
  return ['createDiffHTML', '/createDiffHTML', 'POST'] as const
}

export function usePostCreateDiffHTML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createDiffHTML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateDiffHTMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createDiffHTML.$post> }) =>
        parseResponse(client.createDiffHTML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateGroupKey() {
  return ['createGroup', '/createGroup'] as const
}

export function useGetCreateGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateGroup<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateGroupKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroup.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateGroupKey() {
  return ['createGroup', '/createGroup', 'POST'] as const
}

export function usePostCreateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.createGroup.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateGroupIfNotExistsForKey(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
) {
  return ['createGroupIfNotExistsFor', '/createGroupIfNotExistsFor', args] as const
}

export function useGetCreateGroupIfNotExistsFor<TError = unknown>(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
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
        ? getGetCreateGroupIfNotExistsForKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroupIfNotExistsFor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateGroupIfNotExistsFor<TError = unknown>(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
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
        ? getGetCreateGroupIfNotExistsForKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroupIfNotExistsFor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateGroupIfNotExistsForKey() {
  return ['createGroupIfNotExistsFor', '/createGroupIfNotExistsFor', 'POST'] as const
}

export function usePostCreateGroupIfNotExistsFor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createGroupIfNotExistsFor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateGroupIfNotExistsForKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createGroupIfNotExistsFor.$post> },
      ) => parseResponse(client.createGroupIfNotExistsFor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateGroupPadKey(args: InferRequestType<typeof client.createGroupPad.$get>) {
  return ['createGroupPad', '/createGroupPad', args] as const
}

export function useGetCreateGroupPad<TError = unknown>(
  args: InferRequestType<typeof client.createGroupPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateGroupPadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroupPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateGroupPad<TError = unknown>(
  args: InferRequestType<typeof client.createGroupPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateGroupPadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createGroupPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateGroupPadKey() {
  return ['createGroupPad', '/createGroupPad', 'POST'] as const
}

export function usePostCreateGroupPad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createGroupPad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateGroupPadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createGroupPad.$post> }) =>
        parseResponse(client.createGroupPad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreatePadKey(args: InferRequestType<typeof client.createPad.$get>) {
  return ['createPad', '/createPad', args] as const
}

export function useGetCreatePad<TError = unknown>(
  args: InferRequestType<typeof client.createPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreatePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreatePad<TError = unknown>(
  args: InferRequestType<typeof client.createPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreatePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreatePadKey() {
  return ['createPad', '/createPad', 'POST'] as const
}

export function usePostCreatePad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.createPad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreatePadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createPad.$post> }) =>
        parseResponse(client.createPad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreateSessionKey(args: InferRequestType<typeof client.createSession.$get>) {
  return ['createSession', '/createSession', args] as const
}

export function useGetCreateSession<TError = unknown>(
  args: InferRequestType<typeof client.createSession.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createSession.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreateSession<TError = unknown>(
  args: InferRequestType<typeof client.createSession.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreateSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createSession.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCreateSessionKey() {
  return ['createSession', '/createSession', 'POST'] as const
}

export function usePostCreateSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createSession.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createSession.$post> }) =>
        parseResponse(client.createSession.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeleteGroupKey(args: InferRequestType<typeof client.deleteGroup.$get>) {
  return ['deleteGroup', '/deleteGroup', args] as const
}

export function useGetDeleteGroup<TError = unknown>(
  args: InferRequestType<typeof client.deleteGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeleteGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deleteGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeleteGroup<TError = unknown>(
  args: InferRequestType<typeof client.deleteGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeleteGroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deleteGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeleteGroupKey() {
  return ['deleteGroup', '/deleteGroup', 'POST'] as const
}

export function usePostDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deleteGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteGroup.$post> }) =>
        parseResponse(client.deleteGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeletePadKey(args: InferRequestType<typeof client.deletePad.$get>) {
  return ['deletePad', '/deletePad', args] as const
}

export function useGetDeletePad<TError = unknown>(
  args: InferRequestType<typeof client.deletePad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeletePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deletePad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeletePad<TError = unknown>(
  args: InferRequestType<typeof client.deletePad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeletePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deletePad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeletePadKey() {
  return ['deletePad', '/deletePad', 'POST'] as const
}

export function usePostDeletePad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deletePad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeletePadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deletePad.$post> }) =>
        parseResponse(client.deletePad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeleteSessionKey(args: InferRequestType<typeof client.deleteSession.$get>) {
  return ['deleteSession', '/deleteSession', args] as const
}

export function useGetDeleteSession<TError = unknown>(
  args: InferRequestType<typeof client.deleteSession.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeleteSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deleteSession.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeleteSession<TError = unknown>(
  args: InferRequestType<typeof client.deleteSession.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeleteSessionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deleteSession.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeleteSessionKey() {
  return ['deleteSession', '/deleteSession', 'POST'] as const
}

export function usePostDeleteSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteSession.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteSession.$post> }) =>
        parseResponse(client.deleteSession.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetAttributePoolKey(
  args: InferRequestType<typeof client.getAttributePool.$get>,
) {
  return ['getAttributePool', '/getAttributePool', args] as const
}

export function useGetGetAttributePool<TError = unknown>(
  args: InferRequestType<typeof client.getAttributePool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
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
        ? getGetGetAttributePoolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getAttributePool.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetAttributePool<TError = unknown>(
  args: InferRequestType<typeof client.getAttributePool.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
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
        ? getGetGetAttributePoolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getAttributePool.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetAttributePoolKey() {
  return ['getAttributePool', '/getAttributePool', 'POST'] as const
}

export function usePostGetAttributePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getAttributePool.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAttributePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getAttributePool.$post> }) =>
        parseResponse(client.getAttributePool.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetAuthorNameKey(args: InferRequestType<typeof client.getAuthorName.$get>) {
  return ['getAuthorName', '/getAuthorName', args] as const
}

export function useGetGetAuthorName<TError = unknown>(
  args: InferRequestType<typeof client.getAuthorName.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetAuthorNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getAuthorName.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetAuthorName<TError = unknown>(
  args: InferRequestType<typeof client.getAuthorName.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetAuthorNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getAuthorName.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetAuthorNameKey() {
  return ['getAuthorName', '/getAuthorName', 'POST'] as const
}

export function usePostGetAuthorName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getAuthorName.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAuthorNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getAuthorName.$post> }) =>
        parseResponse(client.getAuthorName.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetChatHeadKey(args: InferRequestType<typeof client.getChatHead.$get>) {
  return ['getChatHead', '/getChatHead', args] as const
}

export function useGetGetChatHead<TError = unknown>(
  args: InferRequestType<typeof client.getChatHead.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChatHeadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getChatHead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetChatHead<TError = unknown>(
  args: InferRequestType<typeof client.getChatHead.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChatHeadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getChatHead.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetChatHeadKey() {
  return ['getChatHead', '/getChatHead', 'POST'] as const
}

export function usePostGetChatHead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getChatHead.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatHeadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getChatHead.$post> }) =>
        parseResponse(client.getChatHead.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetChatHistoryKey(args: InferRequestType<typeof client.getChatHistory.$get>) {
  return ['getChatHistory', '/getChatHistory', args] as const
}

export function useGetGetChatHistory<TError = unknown>(
  args: InferRequestType<typeof client.getChatHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChatHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getChatHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetChatHistory<TError = unknown>(
  args: InferRequestType<typeof client.getChatHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetChatHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getChatHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetChatHistoryKey() {
  return ['getChatHistory', '/getChatHistory', 'POST'] as const
}

export function usePostGetChatHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getChatHistory.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetChatHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getChatHistory.$post> }) =>
        parseResponse(client.getChatHistory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetHTMLKey(args: InferRequestType<typeof client.getHTML.$get>) {
  return ['getHTML', '/getHTML', args] as const
}

export function useGetGetHTML<TError = unknown>(
  args: InferRequestType<typeof client.getHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getHTML.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGetHTML<TError = unknown>(
  args: InferRequestType<typeof client.getHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getHTML.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGetHTMLKey() {
  return ['getHTML', '/getHTML', 'POST'] as const
}

export function usePostGetHTML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getHTML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetHTMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getHTML.$post> }) =>
        parseResponse(client.getHTML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetLastEditedKey(args: InferRequestType<typeof client.getLastEdited.$get>) {
  return ['getLastEdited', '/getLastEdited', args] as const
}

export function useGetGetLastEdited<TError = unknown>(
  args: InferRequestType<typeof client.getLastEdited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetLastEditedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getLastEdited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetLastEdited<TError = unknown>(
  args: InferRequestType<typeof client.getLastEdited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetLastEditedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getLastEdited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetLastEditedKey() {
  return ['getLastEdited', '/getLastEdited', 'POST'] as const
}

export function usePostGetLastEdited<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getLastEdited.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetLastEditedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getLastEdited.$post> }) =>
        parseResponse(client.getLastEdited.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetPadIDKey(args: InferRequestType<typeof client.getPadID.$get>) {
  return ['getPadID', '/getPadID', args] as const
}

export function useGetGetPadID<TError = unknown>(
  args: InferRequestType<typeof client.getPadID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPadIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getPadID.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGetPadID<TError = unknown>(
  args: InferRequestType<typeof client.getPadID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPadIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getPadID.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGetPadIDKey() {
  return ['getPadID', '/getPadID', 'POST'] as const
}

export function usePostGetPadID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getPadID.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetPadIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getPadID.$post> }) =>
        parseResponse(client.getPadID.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetPublicStatusKey(
  args: InferRequestType<typeof client.getPublicStatus.$get>,
) {
  return ['getPublicStatus', '/getPublicStatus', args] as const
}

export function useGetGetPublicStatus<TError = unknown>(
  args: InferRequestType<typeof client.getPublicStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
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
        ? getGetGetPublicStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPublicStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPublicStatus<TError = unknown>(
  args: InferRequestType<typeof client.getPublicStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
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
        ? getGetGetPublicStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPublicStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetPublicStatusKey() {
  return ['getPublicStatus', '/getPublicStatus', 'POST'] as const
}

export function usePostGetPublicStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getPublicStatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetPublicStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getPublicStatus.$post> }) =>
        parseResponse(client.getPublicStatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetReadOnlyIDKey(args: InferRequestType<typeof client.getReadOnlyID.$get>) {
  return ['getReadOnlyID', '/getReadOnlyID', args] as const
}

export function useGetGetReadOnlyID<TError = unknown>(
  args: InferRequestType<typeof client.getReadOnlyID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetReadOnlyIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getReadOnlyID.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetReadOnlyID<TError = unknown>(
  args: InferRequestType<typeof client.getReadOnlyID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetReadOnlyIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getReadOnlyID.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetReadOnlyIDKey() {
  return ['getReadOnlyID', '/getReadOnlyID', 'POST'] as const
}

export function usePostGetReadOnlyID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getReadOnlyID.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetReadOnlyIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getReadOnlyID.$post> }) =>
        parseResponse(client.getReadOnlyID.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetRevisionChangesetKey(
  args: InferRequestType<typeof client.getRevisionChangeset.$get>,
) {
  return ['getRevisionChangeset', '/getRevisionChangeset', args] as const
}

export function useGetGetRevisionChangeset<TError = unknown>(
  args: InferRequestType<typeof client.getRevisionChangeset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
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
        ? getGetGetRevisionChangesetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRevisionChangeset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRevisionChangeset<TError = unknown>(
  args: InferRequestType<typeof client.getRevisionChangeset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
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
        ? getGetGetRevisionChangesetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRevisionChangeset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetRevisionChangesetKey() {
  return ['getRevisionChangeset', '/getRevisionChangeset', 'POST'] as const
}

export function usePostGetRevisionChangeset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getRevisionChangeset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetRevisionChangesetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getRevisionChangeset.$post> },
      ) => parseResponse(client.getRevisionChangeset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetRevisionsCountKey(
  args: InferRequestType<typeof client.getRevisionsCount.$get>,
) {
  return ['getRevisionsCount', '/getRevisionsCount', args] as const
}

export function useGetGetRevisionsCount<TError = unknown>(
  args: InferRequestType<typeof client.getRevisionsCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
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
        ? getGetGetRevisionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRevisionsCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRevisionsCount<TError = unknown>(
  args: InferRequestType<typeof client.getRevisionsCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
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
        ? getGetGetRevisionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRevisionsCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetRevisionsCountKey() {
  return ['getRevisionsCount', '/getRevisionsCount', 'POST'] as const
}

export function usePostGetRevisionsCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getRevisionsCount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetRevisionsCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getRevisionsCount.$post> }) =>
        parseResponse(client.getRevisionsCount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetSavedRevisionsCountKey(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
) {
  return ['getSavedRevisionsCount', '/getSavedRevisionsCount', args] as const
}

export function useGetGetSavedRevisionsCount<TError = unknown>(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
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
        ? getGetGetSavedRevisionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSavedRevisionsCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetSavedRevisionsCount<TError = unknown>(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
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
        ? getGetGetSavedRevisionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSavedRevisionsCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetSavedRevisionsCountKey() {
  return ['getSavedRevisionsCount', '/getSavedRevisionsCount', 'POST'] as const
}

export function usePostGetSavedRevisionsCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getSavedRevisionsCount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSavedRevisionsCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getSavedRevisionsCount.$post> },
      ) => parseResponse(client.getSavedRevisionsCount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetSessionInfoKey(args: InferRequestType<typeof client.getSessionInfo.$get>) {
  return ['getSessionInfo', '/getSessionInfo', args] as const
}

export function useGetGetSessionInfo<TError = unknown>(
  args: InferRequestType<typeof client.getSessionInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSessionInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSessionInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetSessionInfo<TError = unknown>(
  args: InferRequestType<typeof client.getSessionInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSessionInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSessionInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetSessionInfoKey() {
  return ['getSessionInfo', '/getSessionInfo', 'POST'] as const
}

export function usePostGetSessionInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getSessionInfo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetSessionInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getSessionInfo.$post> }) =>
        parseResponse(client.getSessionInfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetStatsKey() {
  return ['getStats', '/getStats'] as const
}

export function useGetGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getStats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getStats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetStatsKey() {
  return ['getStats', '/getStats', 'POST'] as const
}

export function usePostGetStats<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.getStats.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetTextKey(args: InferRequestType<typeof client.getText.$get>) {
  return ['getText', '/getText', args] as const
}

export function useGetGetText<TError = unknown>(
  args: InferRequestType<typeof client.getText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getText.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGetText<TError = unknown>(
  args: InferRequestType<typeof client.getText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getText.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGetTextKey() {
  return ['getText', '/getText', 'POST'] as const
}

export function usePostGetText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getText.$post> }) =>
        parseResponse(client.getText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListAllGroupsKey() {
  return ['listAllGroups', '/listAllGroups'] as const
}

export function useGetListAllGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListAllGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAllGroups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListAllGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListAllGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAllGroups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListAllGroupsKey() {
  return ['listAllGroups', '/listAllGroups', 'POST'] as const
}

export function usePostListAllGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAllGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.listAllGroups.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListAllPadsKey() {
  return ['listAllPads', '/listAllPads'] as const
}

export function useGetListAllPads<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListAllPadsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAllPads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListAllPads<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListAllPadsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAllPads.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListAllPadsKey() {
  return ['listAllPads', '/listAllPads', 'POST'] as const
}

export function usePostListAllPads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAllPadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.listAllPads.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListAuthorsOfPadKey(
  args: InferRequestType<typeof client.listAuthorsOfPad.$get>,
) {
  return ['listAuthorsOfPad', '/listAuthorsOfPad', args] as const
}

export function useGetListAuthorsOfPad<TError = unknown>(
  args: InferRequestType<typeof client.listAuthorsOfPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
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
        ? getGetListAuthorsOfPadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAuthorsOfPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListAuthorsOfPad<TError = unknown>(
  args: InferRequestType<typeof client.listAuthorsOfPad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
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
        ? getGetListAuthorsOfPadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listAuthorsOfPad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListAuthorsOfPadKey() {
  return ['listAuthorsOfPad', '/listAuthorsOfPad', 'POST'] as const
}

export function usePostListAuthorsOfPad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listAuthorsOfPad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAuthorsOfPadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listAuthorsOfPad.$post> }) =>
        parseResponse(client.listAuthorsOfPad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListPadsKey(args: InferRequestType<typeof client.listPads.$get>) {
  return ['listPads', '/listPads', args] as const
}

export function useGetListPads<TError = unknown>(
  args: InferRequestType<typeof client.listPads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listPads.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetListPads<TError = unknown>(
  args: InferRequestType<typeof client.listPads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPadsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listPads.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostListPadsKey() {
  return ['listPads', '/listPads', 'POST'] as const
}

export function usePostListPads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listPads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListPadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listPads.$post> }) =>
        parseResponse(client.listPads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListPadsOfAuthorKey(
  args: InferRequestType<typeof client.listPadsOfAuthor.$get>,
) {
  return ['listPadsOfAuthor', '/listPadsOfAuthor', args] as const
}

export function useGetListPadsOfAuthor<TError = unknown>(
  args: InferRequestType<typeof client.listPadsOfAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
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
        ? getGetListPadsOfAuthorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPadsOfAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListPadsOfAuthor<TError = unknown>(
  args: InferRequestType<typeof client.listPadsOfAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
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
        ? getGetListPadsOfAuthorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPadsOfAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListPadsOfAuthorKey() {
  return ['listPadsOfAuthor', '/listPadsOfAuthor', 'POST'] as const
}

export function usePostListPadsOfAuthor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listPadsOfAuthor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListPadsOfAuthorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listPadsOfAuthor.$post> }) =>
        parseResponse(client.listPadsOfAuthor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListSavedRevisionsKey(
  args: InferRequestType<typeof client.listSavedRevisions.$get>,
) {
  return ['listSavedRevisions', '/listSavedRevisions', args] as const
}

export function useGetListSavedRevisions<TError = unknown>(
  args: InferRequestType<typeof client.listSavedRevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
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
        ? getGetListSavedRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSavedRevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListSavedRevisions<TError = unknown>(
  args: InferRequestType<typeof client.listSavedRevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
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
        ? getGetListSavedRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSavedRevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListSavedRevisionsKey() {
  return ['listSavedRevisions', '/listSavedRevisions', 'POST'] as const
}

export function usePostListSavedRevisions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSavedRevisions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSavedRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listSavedRevisions.$post> }) =>
        parseResponse(client.listSavedRevisions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListSessionsOfAuthorKey(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$get>,
) {
  return ['listSessionsOfAuthor', '/listSessionsOfAuthor', args] as const
}

export function useGetListSessionsOfAuthor<TError = unknown>(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
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
        ? getGetListSessionsOfAuthorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSessionsOfAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListSessionsOfAuthor<TError = unknown>(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
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
        ? getGetListSessionsOfAuthorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSessionsOfAuthor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListSessionsOfAuthorKey() {
  return ['listSessionsOfAuthor', '/listSessionsOfAuthor', 'POST'] as const
}

export function usePostListSessionsOfAuthor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSessionsOfAuthor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSessionsOfAuthorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listSessionsOfAuthor.$post> },
      ) => parseResponse(client.listSessionsOfAuthor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListSessionsOfGroupKey(
  args: InferRequestType<typeof client.listSessionsOfGroup.$get>,
) {
  return ['listSessionsOfGroup', '/listSessionsOfGroup', args] as const
}

export function useGetListSessionsOfGroup<TError = unknown>(
  args: InferRequestType<typeof client.listSessionsOfGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
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
        ? getGetListSessionsOfGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSessionsOfGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListSessionsOfGroup<TError = unknown>(
  args: InferRequestType<typeof client.listSessionsOfGroup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
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
        ? getGetListSessionsOfGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listSessionsOfGroup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListSessionsOfGroupKey() {
  return ['listSessionsOfGroup', '/listSessionsOfGroup', 'POST'] as const
}

export function usePostListSessionsOfGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSessionsOfGroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSessionsOfGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listSessionsOfGroup.$post> }) =>
        parseResponse(client.listSessionsOfGroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMovePadKey(args: InferRequestType<typeof client.movePad.$get>) {
  return ['movePad', '/movePad', args] as const
}

export function useGetMovePad<TError = unknown>(
  args: InferRequestType<typeof client.movePad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.movePad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMovePad<TError = unknown>(
  args: InferRequestType<typeof client.movePad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovePadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.movePad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMovePadKey() {
  return ['movePad', '/movePad', 'POST'] as const
}

export function usePostMovePad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.movePad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMovePadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.movePad.$post> }) =>
        parseResponse(client.movePad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPadUsersKey(args: InferRequestType<typeof client.padUsers.$get>) {
  return ['padUsers', '/padUsers', args] as const
}

export function useGetPadUsers<TError = unknown>(
  args: InferRequestType<typeof client.padUsers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPadUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.padUsers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPadUsers<TError = unknown>(
  args: InferRequestType<typeof client.padUsers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPadUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.padUsers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPadUsersKey() {
  return ['padUsers', '/padUsers', 'POST'] as const
}

export function usePostPadUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.padUsers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPadUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.padUsers.$post> }) =>
        parseResponse(client.padUsers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPadUsersCountKey(args: InferRequestType<typeof client.padUsersCount.$get>) {
  return ['padUsersCount', '/padUsersCount', args] as const
}

export function useGetPadUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.padUsersCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPadUsersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.padUsersCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPadUsersCount<TError = unknown>(
  args: InferRequestType<typeof client.padUsersCount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPadUsersCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.padUsersCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPadUsersCountKey() {
  return ['padUsersCount', '/padUsersCount', 'POST'] as const
}

export function usePostPadUsersCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.padUsersCount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPadUsersCountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.padUsersCount.$post> }) =>
        parseResponse(client.padUsersCount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestoreRevisionKey(
  args: InferRequestType<typeof client.restoreRevision.$get>,
) {
  return ['restoreRevision', '/restoreRevision', args] as const
}

export function useGetRestoreRevision<TError = unknown>(
  args: InferRequestType<typeof client.restoreRevision.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
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
        ? getGetRestoreRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restoreRevision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestoreRevision<TError = unknown>(
  args: InferRequestType<typeof client.restoreRevision.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
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
        ? getGetRestoreRevisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restoreRevision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestoreRevisionKey() {
  return ['restoreRevision', '/restoreRevision', 'POST'] as const
}

export function usePostRestoreRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.restoreRevision.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestoreRevisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.restoreRevision.$post> }) =>
        parseResponse(client.restoreRevision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSaveRevisionKey(args: InferRequestType<typeof client.saveRevision.$get>) {
  return ['saveRevision', '/saveRevision', args] as const
}

export function useGetSaveRevision<TError = unknown>(
  args: InferRequestType<typeof client.saveRevision.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSaveRevisionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveRevision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSaveRevision<TError = unknown>(
  args: InferRequestType<typeof client.saveRevision.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSaveRevisionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveRevision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSaveRevisionKey() {
  return ['saveRevision', '/saveRevision', 'POST'] as const
}

export function usePostSaveRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.saveRevision.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSaveRevisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saveRevision.$post> }) =>
        parseResponse(client.saveRevision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSendClientsMessageKey(
  args: InferRequestType<typeof client.sendClientsMessage.$get>,
) {
  return ['sendClientsMessage', '/sendClientsMessage', args] as const
}

export function useGetSendClientsMessage<TError = unknown>(
  args: InferRequestType<typeof client.sendClientsMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
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
        ? getGetSendClientsMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sendClientsMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendClientsMessage<TError = unknown>(
  args: InferRequestType<typeof client.sendClientsMessage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
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
        ? getGetSendClientsMessageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sendClientsMessage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSendClientsMessageKey() {
  return ['sendClientsMessage', '/sendClientsMessage', 'POST'] as const
}

export function usePostSendClientsMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendClientsMessage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendClientsMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendClientsMessage.$post> }) =>
        parseResponse(client.sendClientsMessage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetHTMLKey(args: InferRequestType<typeof client.setHTML.$get>) {
  return ['setHTML', '/setHTML', args] as const
}

export function useGetSetHTML<TError = unknown>(
  args: InferRequestType<typeof client.setHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setHTML.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSetHTML<TError = unknown>(
  args: InferRequestType<typeof client.setHTML.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetHTMLKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setHTML.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSetHTMLKey() {
  return ['setHTML', '/setHTML', 'POST'] as const
}

export function usePostSetHTML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.setHTML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetHTMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setHTML.$post> }) =>
        parseResponse(client.setHTML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetPublicStatusKey(
  args: InferRequestType<typeof client.setPublicStatus.$get>,
) {
  return ['setPublicStatus', '/setPublicStatus', args] as const
}

export function useGetSetPublicStatus<TError = unknown>(
  args: InferRequestType<typeof client.setPublicStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
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
        ? getGetSetPublicStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setPublicStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetPublicStatus<TError = unknown>(
  args: InferRequestType<typeof client.setPublicStatus.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
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
        ? getGetSetPublicStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setPublicStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetPublicStatusKey() {
  return ['setPublicStatus', '/setPublicStatus', 'POST'] as const
}

export function usePostSetPublicStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setPublicStatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetPublicStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setPublicStatus.$post> }) =>
        parseResponse(client.setPublicStatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetTextKey(args: InferRequestType<typeof client.setText.$get>) {
  return ['setText', '/setText', args] as const
}

export function useGetSetText<TError = unknown>(
  args: InferRequestType<typeof client.setText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setText.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSetText<TError = unknown>(
  args: InferRequestType<typeof client.setText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetTextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.setText.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSetTextKey() {
  return ['setText', '/setText', 'POST'] as const
}

export function usePostSetText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.setText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setText.$post> }) =>
        parseResponse(client.setText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
