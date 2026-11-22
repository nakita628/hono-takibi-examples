import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAppendChatMessageQueryKey(
  args: InferRequestType<typeof client.appendChatMessage.$get>,
) {
  return ['appendChatMessage', '/appendChatMessage', args] as const
}

export function getAppendChatMessageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.appendChatMessage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppendChatMessageQueryKey>
  >({
    queryKey: getAppendChatMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.appendChatMessage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAppendChatMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.appendChatMessage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppendChatMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppendChatMessageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAppendChatMessageMutationKey() {
  return ['appendChatMessage', '/appendChatMessage', 'POST'] as const
}

export function getPostAppendChatMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.appendChatMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppendChatMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appendChatMessage.$post>) {
      return parseResponse(client.appendChatMessage.$post(args, options))
    },
  })
}

export function injectPostAppendChatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.appendChatMessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppendChatMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAppendTextQueryKey(args: InferRequestType<typeof client.appendText.$get>) {
  return ['appendText', '/appendText', args] as const
}

export function getAppendTextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.appendText.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppendTextQueryKey>
  >({
    queryKey: getAppendTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.appendText.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAppendText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.appendText.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAppendTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppendTextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAppendTextMutationKey() {
  return ['appendText', '/appendText', 'POST'] as const
}

export function getPostAppendTextMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$post>>>>>,
    TError,
    InferRequestType<typeof client.appendText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppendTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appendText.$post>) {
      return parseResponse(client.appendText.$post(args, options))
    },
  })
}

export function injectPostAppendText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.appendText.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAppendTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCheckTokenQueryKey() {
  return ['checkToken', '/checkToken'] as const
}

export function getCheckTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCheckTokenQueryKey>
  >({
    queryKey: getCheckTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.checkToken.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCheckToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCheckTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCheckTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCheckTokenMutationKey() {
  return ['checkToken', '/checkToken', 'POST'] as const
}

export function getPostCheckTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCheckTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.checkToken.$post(undefined, options))
    },
  })
}

export function injectPostCheckToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCheckTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCopyPadQueryKey(args: InferRequestType<typeof client.copyPad.$get>) {
  return ['copyPad', '/copyPad', args] as const
}

export function getCopyPadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.copyPad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCopyPadQueryKey>
  >({
    queryKey: getCopyPadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.copyPad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCopyPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.copyPad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCopyPadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCopyPadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCopyPadMutationKey() {
  return ['copyPad', '/copyPad', 'POST'] as const
}

export function getPostCopyPadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$post>>>>>,
    TError,
    InferRequestType<typeof client.copyPad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCopyPadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.copyPad.$post>) {
      return parseResponse(client.copyPad.$post(args, options))
    },
  })
}

export function injectPostCopyPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$post>>>>>,
        TError,
        InferRequestType<typeof client.copyPad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCopyPadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCopyPadWithoutHistoryQueryKey(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
) {
  return ['copyPadWithoutHistory', '/copyPadWithoutHistory', args] as const
}

export function getCopyPadWithoutHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCopyPadWithoutHistoryQueryKey>
  >({
    queryKey: getCopyPadWithoutHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.copyPadWithoutHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCopyPadWithoutHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.copyPadWithoutHistory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCopyPadWithoutHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCopyPadWithoutHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCopyPadWithoutHistoryMutationKey() {
  return ['copyPadWithoutHistory', '/copyPadWithoutHistory', 'POST'] as const
}

export function getPostCopyPadWithoutHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.copyPadWithoutHistory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCopyPadWithoutHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.copyPadWithoutHistory.$post>) {
      return parseResponse(client.copyPadWithoutHistory.$post(args, options))
    },
  })
}

export function injectPostCopyPadWithoutHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.copyPadWithoutHistory.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCopyPadWithoutHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateAuthorQueryKey(args: InferRequestType<typeof client.createAuthor.$get>) {
  return ['createAuthor', '/createAuthor', args] as const
}

export function getCreateAuthorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.createAuthor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreateAuthorQueryKey>
  >({
    queryKey: getCreateAuthorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createAuthor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreateAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createAuthor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreateAuthorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreateAuthorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreateAuthorMutationKey() {
  return ['createAuthor', '/createAuthor', 'POST'] as const
}

export function getPostCreateAuthorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createAuthor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAuthorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createAuthor.$post>) {
      return parseResponse(client.createAuthor.$post(args, options))
    },
  })
}

export function injectPostCreateAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createAuthor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateAuthorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateAuthorIfNotExistsForQueryKey(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
) {
  return ['createAuthorIfNotExistsFor', '/createAuthorIfNotExistsFor', args] as const
}

export function getCreateAuthorIfNotExistsForQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreateAuthorIfNotExistsForQueryKey>
  >({
    queryKey: getCreateAuthorIfNotExistsForQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createAuthorIfNotExistsFor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreateAuthorIfNotExistsFor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreateAuthorIfNotExistsForQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCreateAuthorIfNotExistsForQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCreateAuthorIfNotExistsForMutationKey() {
  return ['createAuthorIfNotExistsFor', '/createAuthorIfNotExistsFor', 'POST'] as const
}

export function getPostCreateAuthorIfNotExistsForMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createAuthorIfNotExistsFor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAuthorIfNotExistsForMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$post>) {
      return parseResponse(client.createAuthorIfNotExistsFor.$post(args, options))
    },
  })
}

export function injectPostCreateAuthorIfNotExistsFor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.createAuthorIfNotExistsFor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateAuthorIfNotExistsForMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateDiffHTMLQueryKey(
  args: InferRequestType<typeof client.createDiffHTML.$get>,
) {
  return ['createDiffHTML', '/createDiffHTML', args] as const
}

export function getCreateDiffHTMLQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.createDiffHTML.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateDiffHTMLQueryKey>
  >({
    queryKey: getCreateDiffHTMLQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createDiffHTML.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreateDiffHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createDiffHTML.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreateDiffHTMLQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreateDiffHTMLQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreateDiffHTMLMutationKey() {
  return ['createDiffHTML', '/createDiffHTML', 'POST'] as const
}

export function getPostCreateDiffHTMLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createDiffHTML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateDiffHTMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createDiffHTML.$post>) {
      return parseResponse(client.createDiffHTML.$post(args, options))
    },
  })
}

export function injectPostCreateDiffHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createDiffHTML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateDiffHTMLMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateGroupQueryKey() {
  return ['createGroup', '/createGroup'] as const
}

export function getCreateGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreateGroupQueryKey>
  >({
    queryKey: getCreateGroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.createGroup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreateGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreateGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreateGroupQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreateGroupMutationKey() {
  return ['createGroup', '/createGroup', 'POST'] as const
}

export function getPostCreateGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCreateGroupMutationKey(),
    async mutationFn() {
      return parseResponse(client.createGroup.$post(undefined, options))
    },
  })
}

export function injectPostCreateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateGroupIfNotExistsForQueryKey(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
) {
  return ['createGroupIfNotExistsFor', '/createGroupIfNotExistsFor', args] as const
}

export function getCreateGroupIfNotExistsForQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreateGroupIfNotExistsForQueryKey>
  >({
    queryKey: getCreateGroupIfNotExistsForQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createGroupIfNotExistsFor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreateGroupIfNotExistsFor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreateGroupIfNotExistsForQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCreateGroupIfNotExistsForQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostCreateGroupIfNotExistsForMutationKey() {
  return ['createGroupIfNotExistsFor', '/createGroupIfNotExistsFor', 'POST'] as const
}

export function getPostCreateGroupIfNotExistsForMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createGroupIfNotExistsFor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateGroupIfNotExistsForMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createGroupIfNotExistsFor.$post>) {
      return parseResponse(client.createGroupIfNotExistsFor.$post(args, options))
    },
  })
}

export function injectPostCreateGroupIfNotExistsFor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createGroupIfNotExistsFor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateGroupIfNotExistsForMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateGroupPadQueryKey(
  args: InferRequestType<typeof client.createGroupPad.$get>,
) {
  return ['createGroupPad', '/createGroupPad', args] as const
}

export function getCreateGroupPadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.createGroupPad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateGroupPadQueryKey>
  >({
    queryKey: getCreateGroupPadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createGroupPad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreateGroupPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createGroupPad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreateGroupPadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreateGroupPadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreateGroupPadMutationKey() {
  return ['createGroupPad', '/createGroupPad', 'POST'] as const
}

export function getPostCreateGroupPadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createGroupPad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateGroupPadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createGroupPad.$post>) {
      return parseResponse(client.createGroupPad.$post(args, options))
    },
  })
}

export function injectPostCreateGroupPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createGroupPad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateGroupPadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreatePadQueryKey(args: InferRequestType<typeof client.createPad.$get>) {
  return ['createPad', '/createPad', args] as const
}

export function getCreatePadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.createPad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreatePadQueryKey>
  >({
    queryKey: getCreatePadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createPad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreatePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createPad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreatePadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreatePadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreatePadMutationKey() {
  return ['createPad', '/createPad', 'POST'] as const
}

export function getPostCreatePadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$post>>>>>,
    TError,
    InferRequestType<typeof client.createPad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreatePadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createPad.$post>) {
      return parseResponse(client.createPad.$post(args, options))
    },
  })
}

export function injectPostCreatePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createPad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreatePadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreateSessionQueryKey(args: InferRequestType<typeof client.createSession.$get>) {
  return ['createSession', '/createSession', args] as const
}

export function getCreateSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.createSession.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateSessionQueryKey>
  >({
    queryKey: getCreateSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createSession.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCreateSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.createSession.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCreateSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreateSessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCreateSessionMutationKey() {
  return ['createSession', '/createSession', 'POST'] as const
}

export function getPostCreateSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createSession.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createSession.$post>) {
      return parseResponse(client.createSession.$post(args, options))
    },
  })
}

export function injectPostCreateSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createSession.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteGroupQueryKey(args: InferRequestType<typeof client.deleteGroup.$get>) {
  return ['deleteGroup', '/deleteGroup', args] as const
}

export function getDeleteGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deleteGroup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeleteGroupQueryKey>
  >({
    queryKey: getDeleteGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deleteGroup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeleteGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deleteGroup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeleteGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeleteGroupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDeleteGroupMutationKey() {
  return ['deleteGroup', '/deleteGroup', 'POST'] as const
}

export function getPostDeleteGroupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$post>>>>>,
    TError,
    InferRequestType<typeof client.deleteGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteGroup.$post>) {
      return parseResponse(client.deleteGroup.$post(args, options))
    },
  })
}

export function injectPostDeleteGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteGroup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePadQueryKey(args: InferRequestType<typeof client.deletePad.$get>) {
  return ['deletePad', '/deletePad', args] as const
}

export function getDeletePadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deletePad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeletePadQueryKey>
  >({
    queryKey: getDeletePadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deletePad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeletePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deletePad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeletePadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeletePadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDeletePadMutationKey() {
  return ['deletePad', '/deletePad', 'POST'] as const
}

export function getPostDeletePadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$post>>>>>,
    TError,
    InferRequestType<typeof client.deletePad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeletePadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deletePad.$post>) {
      return parseResponse(client.deletePad.$post(args, options))
    },
  })
}

export function injectPostDeletePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deletePad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeletePadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSessionQueryKey(args: InferRequestType<typeof client.deleteSession.$get>) {
  return ['deleteSession', '/deleteSession', args] as const
}

export function getDeleteSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.deleteSession.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeleteSessionQueryKey>
  >({
    queryKey: getDeleteSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deleteSession.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDeleteSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.deleteSession.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeleteSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeleteSessionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDeleteSessionMutationKey() {
  return ['deleteSession', '/deleteSession', 'POST'] as const
}

export function getPostDeleteSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteSession.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSessionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteSession.$post>) {
      return parseResponse(client.deleteSession.$post(args, options))
    },
  })
}

export function injectPostDeleteSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteSession.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteSessionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetAttributePoolQueryKey(
  args: InferRequestType<typeof client.getAttributePool.$get>,
) {
  return ['getAttributePool', '/getAttributePool', args] as const
}

export function getGetAttributePoolQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getAttributePool.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetAttributePoolQueryKey>
  >({
    queryKey: getGetAttributePoolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getAttributePool.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetAttributePool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getAttributePool.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetAttributePoolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetAttributePoolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetAttributePoolMutationKey() {
  return ['getAttributePool', '/getAttributePool', 'POST'] as const
}

export function getPostGetAttributePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getAttributePool.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAttributePoolMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getAttributePool.$post>) {
      return parseResponse(client.getAttributePool.$post(args, options))
    },
  })
}

export function injectPostGetAttributePool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getAttributePool.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetAttributePoolMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetAuthorNameQueryKey(args: InferRequestType<typeof client.getAuthorName.$get>) {
  return ['getAuthorName', '/getAuthorName', args] as const
}

export function getGetAuthorNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getAuthorName.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetAuthorNameQueryKey>
  >({
    queryKey: getGetAuthorNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getAuthorName.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetAuthorName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getAuthorName.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetAuthorNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetAuthorNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetAuthorNameMutationKey() {
  return ['getAuthorName', '/getAuthorName', 'POST'] as const
}

export function getPostGetAuthorNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getAuthorName.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAuthorNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getAuthorName.$post>) {
      return parseResponse(client.getAuthorName.$post(args, options))
    },
  })
}

export function injectPostGetAuthorName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getAuthorName.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetAuthorNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetChatHeadQueryKey(args: InferRequestType<typeof client.getChatHead.$get>) {
  return ['getChatHead', '/getChatHead', args] as const
}

export function getGetChatHeadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getChatHead.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetChatHeadQueryKey>
  >({
    queryKey: getGetChatHeadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getChatHead.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetChatHead<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getChatHead.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetChatHeadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetChatHeadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetChatHeadMutationKey() {
  return ['getChatHead', '/getChatHead', 'POST'] as const
}

export function getPostGetChatHeadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$post>>>>>,
    TError,
    InferRequestType<typeof client.getChatHead.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatHeadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChatHead.$post>) {
      return parseResponse(client.getChatHead.$post(args, options))
    },
  })
}

export function injectPostGetChatHead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getChatHead.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetChatHeadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetChatHistoryQueryKey(
  args: InferRequestType<typeof client.getChatHistory.$get>,
) {
  return ['getChatHistory', '/getChatHistory', args] as const
}

export function getGetChatHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getChatHistory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetChatHistoryQueryKey>
  >({
    queryKey: getGetChatHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getChatHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetChatHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getChatHistory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetChatHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetChatHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetChatHistoryMutationKey() {
  return ['getChatHistory', '/getChatHistory', 'POST'] as const
}

export function getPostGetChatHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getChatHistory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetChatHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getChatHistory.$post>) {
      return parseResponse(client.getChatHistory.$post(args, options))
    },
  })
}

export function injectPostGetChatHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getChatHistory.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetChatHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetHTMLQueryKey(args: InferRequestType<typeof client.getHTML.$get>) {
  return ['getHTML', '/getHTML', args] as const
}

export function getGetHTMLQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getHTML.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetHTMLQueryKey>
  >({
    queryKey: getGetHTMLQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getHTML.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getHTML.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetHTMLQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetHTMLQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetHTMLMutationKey() {
  return ['getHTML', '/getHTML', 'POST'] as const
}

export function getPostGetHTMLMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$post>>>>>,
    TError,
    InferRequestType<typeof client.getHTML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetHTMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getHTML.$post>) {
      return parseResponse(client.getHTML.$post(args, options))
    },
  })
}

export function injectPostGetHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$post>>>>>,
        TError,
        InferRequestType<typeof client.getHTML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetHTMLMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetLastEditedQueryKey(args: InferRequestType<typeof client.getLastEdited.$get>) {
  return ['getLastEdited', '/getLastEdited', args] as const
}

export function getGetLastEditedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getLastEdited.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetLastEditedQueryKey>
  >({
    queryKey: getGetLastEditedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getLastEdited.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetLastEdited<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getLastEdited.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetLastEditedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetLastEditedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetLastEditedMutationKey() {
  return ['getLastEdited', '/getLastEdited', 'POST'] as const
}

export function getPostGetLastEditedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getLastEdited.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetLastEditedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getLastEdited.$post>) {
      return parseResponse(client.getLastEdited.$post(args, options))
    },
  })
}

export function injectPostGetLastEdited<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getLastEdited.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetLastEditedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetPadIDQueryKey(args: InferRequestType<typeof client.getPadID.$get>) {
  return ['getPadID', '/getPadID', args] as const
}

export function getGetPadIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPadID.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPadIDQueryKey>
  >({
    queryKey: getGetPadIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPadID.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetPadID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPadID.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetPadIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPadIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetPadIDMutationKey() {
  return ['getPadID', '/getPadID', 'POST'] as const
}

export function getPostGetPadIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$post>>>>>,
    TError,
    InferRequestType<typeof client.getPadID.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetPadIDMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getPadID.$post>) {
      return parseResponse(client.getPadID.$post(args, options))
    },
  })
}

export function injectPostGetPadID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getPadID.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetPadIDMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetPublicStatusQueryKey(
  args: InferRequestType<typeof client.getPublicStatus.$get>,
) {
  return ['getPublicStatus', '/getPublicStatus', args] as const
}

export function getGetPublicStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getPublicStatus.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPublicStatusQueryKey>
  >({
    queryKey: getGetPublicStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getPublicStatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetPublicStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getPublicStatus.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetPublicStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetPublicStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetPublicStatusMutationKey() {
  return ['getPublicStatus', '/getPublicStatus', 'POST'] as const
}

export function getPostGetPublicStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getPublicStatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetPublicStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getPublicStatus.$post>) {
      return parseResponse(client.getPublicStatus.$post(args, options))
    },
  })
}

export function injectPostGetPublicStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getPublicStatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetPublicStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetReadOnlyIDQueryKey(args: InferRequestType<typeof client.getReadOnlyID.$get>) {
  return ['getReadOnlyID', '/getReadOnlyID', args] as const
}

export function getGetReadOnlyIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getReadOnlyID.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetReadOnlyIDQueryKey>
  >({
    queryKey: getGetReadOnlyIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getReadOnlyID.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetReadOnlyID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getReadOnlyID.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetReadOnlyIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetReadOnlyIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetReadOnlyIDMutationKey() {
  return ['getReadOnlyID', '/getReadOnlyID', 'POST'] as const
}

export function getPostGetReadOnlyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getReadOnlyID.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetReadOnlyIDMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getReadOnlyID.$post>) {
      return parseResponse(client.getReadOnlyID.$post(args, options))
    },
  })
}

export function injectPostGetReadOnlyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getReadOnlyID.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetReadOnlyIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetRevisionChangesetQueryKey(
  args: InferRequestType<typeof client.getRevisionChangeset.$get>,
) {
  return ['getRevisionChangeset', '/getRevisionChangeset', args] as const
}

export function getGetRevisionChangesetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getRevisionChangeset.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRevisionChangesetQueryKey>
  >({
    queryKey: getGetRevisionChangesetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRevisionChangeset.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetRevisionChangeset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRevisionChangeset.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRevisionChangesetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetRevisionChangesetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGetRevisionChangesetMutationKey() {
  return ['getRevisionChangeset', '/getRevisionChangeset', 'POST'] as const
}

export function getPostGetRevisionChangesetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getRevisionChangeset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetRevisionChangesetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getRevisionChangeset.$post>) {
      return parseResponse(client.getRevisionChangeset.$post(args, options))
    },
  })
}

export function injectPostGetRevisionChangeset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getRevisionChangeset.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetRevisionChangesetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetRevisionsCountQueryKey(
  args: InferRequestType<typeof client.getRevisionsCount.$get>,
) {
  return ['getRevisionsCount', '/getRevisionsCount', args] as const
}

export function getGetRevisionsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getRevisionsCount.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRevisionsCountQueryKey>
  >({
    queryKey: getGetRevisionsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRevisionsCount.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetRevisionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRevisionsCount.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRevisionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetRevisionsCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetRevisionsCountMutationKey() {
  return ['getRevisionsCount', '/getRevisionsCount', 'POST'] as const
}

export function getPostGetRevisionsCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getRevisionsCount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetRevisionsCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getRevisionsCount.$post>) {
      return parseResponse(client.getRevisionsCount.$post(args, options))
    },
  })
}

export function injectPostGetRevisionsCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getRevisionsCount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetRevisionsCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetSavedRevisionsCountQueryKey(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
) {
  return ['getSavedRevisionsCount', '/getSavedRevisionsCount', args] as const
}

export function getGetSavedRevisionsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetSavedRevisionsCountQueryKey>
  >({
    queryKey: getGetSavedRevisionsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getSavedRevisionsCount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetSavedRevisionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getSavedRevisionsCount.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetSavedRevisionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetSavedRevisionsCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGetSavedRevisionsCountMutationKey() {
  return ['getSavedRevisionsCount', '/getSavedRevisionsCount', 'POST'] as const
}

export function getPostGetSavedRevisionsCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getSavedRevisionsCount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSavedRevisionsCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getSavedRevisionsCount.$post>) {
      return parseResponse(client.getSavedRevisionsCount.$post(args, options))
    },
  })
}

export function injectPostGetSavedRevisionsCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getSavedRevisionsCount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetSavedRevisionsCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetSessionInfoQueryKey(
  args: InferRequestType<typeof client.getSessionInfo.$get>,
) {
  return ['getSessionInfo', '/getSessionInfo', args] as const
}

export function getGetSessionInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getSessionInfo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetSessionInfoQueryKey>
  >({
    queryKey: getGetSessionInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getSessionInfo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetSessionInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getSessionInfo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetSessionInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetSessionInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetSessionInfoMutationKey() {
  return ['getSessionInfo', '/getSessionInfo', 'POST'] as const
}

export function getPostGetSessionInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getSessionInfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetSessionInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getSessionInfo.$post>) {
      return parseResponse(client.getSessionInfo.$post(args, options))
    },
  })
}

export function injectPostGetSessionInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getSessionInfo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetSessionInfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetStatsQueryKey() {
  return ['getStats', '/getStats'] as const
}

export function getGetStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetStatsQueryKey>
  >({
    queryKey: getGetStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.getStats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetStatsMutationKey() {
  return ['getStats', '/getStats', 'POST'] as const
}

export function getPostGetStatsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGetStatsMutationKey(),
    async mutationFn() {
      return parseResponse(client.getStats.$post(undefined, options))
    },
  })
}

export function injectPostGetStats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetStatsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetTextQueryKey(args: InferRequestType<typeof client.getText.$get>) {
  return ['getText', '/getText', args] as const
}

export function getGetTextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getText.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetTextQueryKey>
  >({
    queryKey: getGetTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getText.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getText.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetTextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostGetTextMutationKey() {
  return ['getText', '/getText', 'POST'] as const
}

export function getPostGetTextMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$post>>>>>,
    TError,
    InferRequestType<typeof client.getText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getText.$post>) {
      return parseResponse(client.getText.$post(args, options))
    },
  })
}

export function injectPostGetText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$post>>>>>,
        TError,
        InferRequestType<typeof client.getText.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetTextMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListAllGroupsQueryKey() {
  return ['listAllGroups', '/listAllGroups'] as const
}

export function getListAllGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListAllGroupsQueryKey>
  >({
    queryKey: getListAllGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.listAllGroups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListAllGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListAllGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListAllGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostListAllGroupsMutationKey() {
  return ['listAllGroups', '/listAllGroups', 'POST'] as const
}

export function getPostListAllGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostListAllGroupsMutationKey(),
    async mutationFn() {
      return parseResponse(client.listAllGroups.$post(undefined, options))
    },
  })
}

export function injectPostListAllGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListAllGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListAllPadsQueryKey() {
  return ['listAllPads', '/listAllPads'] as const
}

export function getListAllPadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListAllPadsQueryKey>
  >({
    queryKey: getListAllPadsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.listAllPads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListAllPads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListAllPadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListAllPadsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostListAllPadsMutationKey() {
  return ['listAllPads', '/listAllPads', 'POST'] as const
}

export function getPostListAllPadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostListAllPadsMutationKey(),
    async mutationFn() {
      return parseResponse(client.listAllPads.$post(undefined, options))
    },
  })
}

export function injectPostListAllPads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListAllPadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListAuthorsOfPadQueryKey(
  args: InferRequestType<typeof client.listAuthorsOfPad.$get>,
) {
  return ['listAuthorsOfPad', '/listAuthorsOfPad', args] as const
}

export function getListAuthorsOfPadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listAuthorsOfPad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListAuthorsOfPadQueryKey>
  >({
    queryKey: getListAuthorsOfPadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listAuthorsOfPad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListAuthorsOfPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listAuthorsOfPad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListAuthorsOfPadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListAuthorsOfPadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostListAuthorsOfPadMutationKey() {
  return ['listAuthorsOfPad', '/listAuthorsOfPad', 'POST'] as const
}

export function getPostListAuthorsOfPadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listAuthorsOfPad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAuthorsOfPadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listAuthorsOfPad.$post>) {
      return parseResponse(client.listAuthorsOfPad.$post(args, options))
    },
  })
}

export function injectPostListAuthorsOfPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listAuthorsOfPad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListAuthorsOfPadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListPadsQueryKey(args: InferRequestType<typeof client.listPads.$get>) {
  return ['listPads', '/listPads', args] as const
}

export function getListPadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listPads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPadsQueryKey>
  >({
    queryKey: getListPadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listPads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListPads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listPads.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListPadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListPadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostListPadsMutationKey() {
  return ['listPads', '/listPads', 'POST'] as const
}

export function getPostListPadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$post>>>>>,
    TError,
    InferRequestType<typeof client.listPads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListPadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listPads.$post>) {
      return parseResponse(client.listPads.$post(args, options))
    },
  })
}

export function injectPostListPads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listPads.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListPadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListPadsOfAuthorQueryKey(
  args: InferRequestType<typeof client.listPadsOfAuthor.$get>,
) {
  return ['listPadsOfAuthor', '/listPadsOfAuthor', args] as const
}

export function getListPadsOfAuthorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listPadsOfAuthor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListPadsOfAuthorQueryKey>
  >({
    queryKey: getListPadsOfAuthorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listPadsOfAuthor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListPadsOfAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listPadsOfAuthor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListPadsOfAuthorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListPadsOfAuthorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostListPadsOfAuthorMutationKey() {
  return ['listPadsOfAuthor', '/listPadsOfAuthor', 'POST'] as const
}

export function getPostListPadsOfAuthorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listPadsOfAuthor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListPadsOfAuthorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listPadsOfAuthor.$post>) {
      return parseResponse(client.listPadsOfAuthor.$post(args, options))
    },
  })
}

export function injectPostListPadsOfAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listPadsOfAuthor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListPadsOfAuthorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListSavedRevisionsQueryKey(
  args: InferRequestType<typeof client.listSavedRevisions.$get>,
) {
  return ['listSavedRevisions', '/listSavedRevisions', args] as const
}

export function getListSavedRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listSavedRevisions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSavedRevisionsQueryKey>
  >({
    queryKey: getListSavedRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listSavedRevisions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListSavedRevisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listSavedRevisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListSavedRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListSavedRevisionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostListSavedRevisionsMutationKey() {
  return ['listSavedRevisions', '/listSavedRevisions', 'POST'] as const
}

export function getPostListSavedRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listSavedRevisions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSavedRevisionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSavedRevisions.$post>) {
      return parseResponse(client.listSavedRevisions.$post(args, options))
    },
  })
}

export function injectPostListSavedRevisions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSavedRevisions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListSavedRevisionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListSessionsOfAuthorQueryKey(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$get>,
) {
  return ['listSessionsOfAuthor', '/listSessionsOfAuthor', args] as const
}

export function getListSessionsOfAuthorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listSessionsOfAuthor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSessionsOfAuthorQueryKey>
  >({
    queryKey: getListSessionsOfAuthorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listSessionsOfAuthor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListSessionsOfAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listSessionsOfAuthor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListSessionsOfAuthorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getListSessionsOfAuthorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostListSessionsOfAuthorMutationKey() {
  return ['listSessionsOfAuthor', '/listSessionsOfAuthor', 'POST'] as const
}

export function getPostListSessionsOfAuthorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listSessionsOfAuthor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSessionsOfAuthorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSessionsOfAuthor.$post>) {
      return parseResponse(client.listSessionsOfAuthor.$post(args, options))
    },
  })
}

export function injectPostListSessionsOfAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSessionsOfAuthor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListSessionsOfAuthorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getListSessionsOfGroupQueryKey(
  args: InferRequestType<typeof client.listSessionsOfGroup.$get>,
) {
  return ['listSessionsOfGroup', '/listSessionsOfGroup', args] as const
}

export function getListSessionsOfGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listSessionsOfGroup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSessionsOfGroupQueryKey>
  >({
    queryKey: getListSessionsOfGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listSessionsOfGroup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListSessionsOfGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listSessionsOfGroup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListSessionsOfGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListSessionsOfGroupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostListSessionsOfGroupMutationKey() {
  return ['listSessionsOfGroup', '/listSessionsOfGroup', 'POST'] as const
}

export function getPostListSessionsOfGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listSessionsOfGroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSessionsOfGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSessionsOfGroup.$post>) {
      return parseResponse(client.listSessionsOfGroup.$post(args, options))
    },
  })
}

export function injectPostListSessionsOfGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSessionsOfGroup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListSessionsOfGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMovePadQueryKey(args: InferRequestType<typeof client.movePad.$get>) {
  return ['movePad', '/movePad', args] as const
}

export function getMovePadQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movePad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovePadQueryKey>
  >({
    queryKey: getMovePadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movePad.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMovePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movePad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMovePadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovePadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMovePadMutationKey() {
  return ['movePad', '/movePad', 'POST'] as const
}

export function getPostMovePadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$post>>>>>,
    TError,
    InferRequestType<typeof client.movePad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMovePadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.movePad.$post>) {
      return parseResponse(client.movePad.$post(args, options))
    },
  })
}

export function injectPostMovePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$post>>>>>,
        TError,
        InferRequestType<typeof client.movePad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMovePadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPadUsersQueryKey(args: InferRequestType<typeof client.padUsers.$get>) {
  return ['padUsers', '/padUsers', args] as const
}

export function getPadUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.padUsers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPadUsersQueryKey>
  >({
    queryKey: getPadUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.padUsers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPadUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.padUsers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPadUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPadUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPadUsersMutationKey() {
  return ['padUsers', '/padUsers', 'POST'] as const
}

export function getPostPadUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$post>>>>>,
    TError,
    InferRequestType<typeof client.padUsers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPadUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.padUsers.$post>) {
      return parseResponse(client.padUsers.$post(args, options))
    },
  })
}

export function injectPostPadUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.padUsers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPadUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPadUsersCountQueryKey(args: InferRequestType<typeof client.padUsersCount.$get>) {
  return ['padUsersCount', '/padUsersCount', args] as const
}

export function getPadUsersCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.padUsersCount.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPadUsersCountQueryKey>
  >({
    queryKey: getPadUsersCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.padUsersCount.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPadUsersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.padUsersCount.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPadUsersCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPadUsersCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPadUsersCountMutationKey() {
  return ['padUsersCount', '/padUsersCount', 'POST'] as const
}

export function getPostPadUsersCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.padUsersCount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPadUsersCountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.padUsersCount.$post>) {
      return parseResponse(client.padUsersCount.$post(args, options))
    },
  })
}

export function injectPostPadUsersCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.padUsersCount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPadUsersCountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRestoreRevisionQueryKey(
  args: InferRequestType<typeof client.restoreRevision.$get>,
) {
  return ['restoreRevision', '/restoreRevision', args] as const
}

export function getRestoreRevisionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.restoreRevision.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreRevisionQueryKey>
  >({
    queryKey: getRestoreRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.restoreRevision.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRestoreRevision<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.restoreRevision.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreRevisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestoreRevisionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRestoreRevisionMutationKey() {
  return ['restoreRevision', '/restoreRevision', 'POST'] as const
}

export function getPostRestoreRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.restoreRevision.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreRevisionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restoreRevision.$post>) {
      return parseResponse(client.restoreRevision.$post(args, options))
    },
  })
}

export function injectPostRestoreRevision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.restoreRevision.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreRevisionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSaveRevisionQueryKey(args: InferRequestType<typeof client.saveRevision.$get>) {
  return ['saveRevision', '/saveRevision', args] as const
}

export function getSaveRevisionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saveRevision.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSaveRevisionQueryKey>
  >({
    queryKey: getSaveRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saveRevision.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSaveRevision<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.saveRevision.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveRevisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSaveRevisionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSaveRevisionMutationKey() {
  return ['saveRevision', '/saveRevision', 'POST'] as const
}

export function getPostSaveRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.saveRevision.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSaveRevisionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saveRevision.$post>) {
      return parseResponse(client.saveRevision.$post(args, options))
    },
  })
}

export function injectPostSaveRevision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.saveRevision.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSaveRevisionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSendClientsMessageQueryKey(
  args: InferRequestType<typeof client.sendClientsMessage.$get>,
) {
  return ['sendClientsMessage', '/sendClientsMessage', args] as const
}

export function getSendClientsMessageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sendClientsMessage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendClientsMessageQueryKey>
  >({
    queryKey: getSendClientsMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sendClientsMessage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSendClientsMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sendClientsMessage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendClientsMessageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSendClientsMessageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSendClientsMessageMutationKey() {
  return ['sendClientsMessage', '/sendClientsMessage', 'POST'] as const
}

export function getPostSendClientsMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendClientsMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendClientsMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendClientsMessage.$post>) {
      return parseResponse(client.sendClientsMessage.$post(args, options))
    },
  })
}

export function injectPostSendClientsMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sendClientsMessage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSendClientsMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetHTMLQueryKey(args: InferRequestType<typeof client.setHTML.$get>) {
  return ['setHTML', '/setHTML', args] as const
}

export function getSetHTMLQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setHTML.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetHTMLQueryKey>
  >({
    queryKey: getSetHTMLQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setHTML.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setHTML.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSetHTMLQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetHTMLQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSetHTMLMutationKey() {
  return ['setHTML', '/setHTML', 'POST'] as const
}

export function getPostSetHTMLMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$post>>>>>,
    TError,
    InferRequestType<typeof client.setHTML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetHTMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setHTML.$post>) {
      return parseResponse(client.setHTML.$post(args, options))
    },
  })
}

export function injectPostSetHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$post>>>>>,
        TError,
        InferRequestType<typeof client.setHTML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetHTMLMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetPublicStatusQueryKey(
  args: InferRequestType<typeof client.setPublicStatus.$get>,
) {
  return ['setPublicStatus', '/setPublicStatus', args] as const
}

export function getSetPublicStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setPublicStatus.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetPublicStatusQueryKey>
  >({
    queryKey: getSetPublicStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setPublicStatus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetPublicStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setPublicStatus.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSetPublicStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetPublicStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSetPublicStatusMutationKey() {
  return ['setPublicStatus', '/setPublicStatus', 'POST'] as const
}

export function getPostSetPublicStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setPublicStatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetPublicStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setPublicStatus.$post>) {
      return parseResponse(client.setPublicStatus.$post(args, options))
    },
  })
}

export function injectPostSetPublicStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.setPublicStatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetPublicStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSetTextQueryKey(args: InferRequestType<typeof client.setText.$get>) {
  return ['setText', '/setText', args] as const
}

export function getSetTextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setText.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetTextQueryKey>
  >({
    queryKey: getSetTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setText.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setText.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSetTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetTextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSetTextMutationKey() {
  return ['setText', '/setText', 'POST'] as const
}

export function getPostSetTextMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$post>>>>>,
    TError,
    InferRequestType<typeof client.setText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setText.$post>) {
      return parseResponse(client.setText.$post(args, options))
    },
  })
}

export function injectPostSetText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$post>>>>>,
        TError,
        InferRequestType<typeof client.setText.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetTextMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
