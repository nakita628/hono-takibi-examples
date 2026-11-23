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
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendChatMessage.$get>>,
) {
  return ['appendChatMessage', '/appendChatMessage', toValue(args)] as const
}

export function getAppendChatMessageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendChatMessage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppendChatMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.appendChatMessage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppendChatMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendChatMessage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>
            >
          >,
          ReturnType<typeof getAppendChatMessageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppendChatMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppendChatMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.appendChatMessage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAppendChatMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.appendChatMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.appendChatMessage.$post>,
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
  const mutationDefaults = getPostAppendChatMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAppendTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendText.$get>>,
) {
  return ['appendText', '/appendText', toValue(args)] as const
}

export function getAppendTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendText.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppendTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.appendText.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppendText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appendText.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>
          >,
          ReturnType<typeof getAppendTextQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppendTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppendTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.appendText.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAppendText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appendText.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.appendText.$post>,
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
  const mutationDefaults = getPostAppendTextMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCheckTokenQueryKey() {
  return ['checkToken', '/checkToken'] as const
}

export function getCheckTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCheckTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checkToken.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCheckToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>
          >,
          ReturnType<typeof getCheckTokenQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCheckTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCheckTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.checkToken.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCheckToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkToken.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostCheckTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCopyPadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPad.$get>>,
) {
  return ['copyPad', '/copyPad', toValue(args)] as const
}

export function getCopyPadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCopyPadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.copyPad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCopyPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>
          >,
          ReturnType<typeof getCopyPadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCopyPadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCopyPadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.copyPad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCopyPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPad.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.copyPad.$post>,
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
  const mutationDefaults = getPostCopyPadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCopyPadWithoutHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPadWithoutHistory.$get>>,
) {
  return ['copyPadWithoutHistory', '/copyPadWithoutHistory', toValue(args)] as const
}

export function getCopyPadWithoutHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPadWithoutHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCopyPadWithoutHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.copyPadWithoutHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCopyPadWithoutHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.copyPadWithoutHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
            >
          >,
          ReturnType<typeof getCopyPadWithoutHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCopyPadWithoutHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCopyPadWithoutHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.copyPadWithoutHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCopyPadWithoutHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.copyPadWithoutHistory.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.copyPadWithoutHistory.$post>,
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
  const mutationDefaults = getPostCopyPadWithoutHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateAuthorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthor.$get>>,
) {
  return ['createAuthor', '/createAuthor', toValue(args)] as const
}

export function getCreateAuthorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateAuthorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createAuthor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreateAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>
          >,
          ReturnType<typeof getCreateAuthorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreateAuthorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateAuthorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createAuthor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAuthor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createAuthor.$post>,
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
  const mutationDefaults = getPostCreateAuthorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateAuthorIfNotExistsForQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>>,
) {
  return ['createAuthorIfNotExistsFor', '/createAuthorIfNotExistsFor', toValue(args)] as const
}

export function getCreateAuthorIfNotExistsForQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateAuthorIfNotExistsForQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createAuthorIfNotExistsFor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreateAuthorIfNotExistsFor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>
              >
            >
          >,
          ReturnType<typeof getCreateAuthorIfNotExistsForQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.createAuthorIfNotExistsFor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreateAuthorIfNotExistsForQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateAuthorIfNotExistsForQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createAuthorIfNotExistsFor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateAuthorIfNotExistsFor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateAuthorIfNotExistsForMutationOptions<
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

export function getCreateDiffHTMLQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createDiffHTML.$get>>,
) {
  return ['createDiffHTML', '/createDiffHTML', toValue(args)] as const
}

export function getCreateDiffHTMLQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createDiffHTML.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateDiffHTMLQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createDiffHTML.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreateDiffHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createDiffHTML.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
          >,
          ReturnType<typeof getCreateDiffHTMLQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateDiffHTMLQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateDiffHTMLQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createDiffHTML.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateDiffHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createDiffHTML.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createDiffHTML.$post>,
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
  const mutationDefaults = getPostCreateDiffHTMLMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateGroupQueryKey() {
  return ['createGroup', '/createGroup'] as const
}

export function getCreateGroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCreateGroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createGroup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreateGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>
          >,
          ReturnType<typeof getCreateGroupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreateGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCreateGroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.createGroup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroup.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostCreateGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateGroupIfNotExistsForQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupIfNotExistsFor.$get>>,
) {
  return ['createGroupIfNotExistsFor', '/createGroupIfNotExistsFor', toValue(args)] as const
}

export function getCreateGroupIfNotExistsForQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupIfNotExistsFor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateGroupIfNotExistsForQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createGroupIfNotExistsFor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreateGroupIfNotExistsFor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupIfNotExistsFor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>
              >
            >
          >,
          ReturnType<typeof getCreateGroupIfNotExistsForQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreateGroupIfNotExistsForQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateGroupIfNotExistsForQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createGroupIfNotExistsFor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateGroupIfNotExistsFor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.createGroupIfNotExistsFor.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.createGroupIfNotExistsFor.$post>,
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
  const mutationDefaults = getPostCreateGroupIfNotExistsForMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateGroupPadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupPad.$get>>,
) {
  return ['createGroupPad', '/createGroupPad', toValue(args)] as const
}

export function getCreateGroupPadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupPad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateGroupPadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createGroupPad.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreateGroupPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createGroupPad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
          >,
          ReturnType<typeof getCreateGroupPadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateGroupPadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateGroupPadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createGroupPad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateGroupPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createGroupPad.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createGroupPad.$post>,
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
  const mutationDefaults = getPostCreateGroupPadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreatePadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createPad.$get>>,
) {
  return ['createPad', '/createPad', toValue(args)] as const
}

export function getCreatePadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createPad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreatePadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createPad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCreatePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createPad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>
          >,
          ReturnType<typeof getCreatePadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreatePadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreatePadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createPad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreatePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPad.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createPad.$post>,
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
  const mutationDefaults = getPostCreatePadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCreateSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createSession.$get>>,
) {
  return ['createSession', '/createSession', toValue(args)] as const
}

export function getCreateSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createSession.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreateSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createSession.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreateSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.createSession.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
          >,
          ReturnType<typeof getCreateSessionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCreateSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreateSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createSession.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCreateSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSession.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.createSession.$post>,
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
  const mutationDefaults = getPostCreateSessionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteGroup.$get>>,
) {
  return ['deleteGroup', '/deleteGroup', toValue(args)] as const
}

export function getDeleteGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeleteGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deleteGroup.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeleteGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>
          >,
          ReturnType<typeof getDeleteGroupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeleteGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeleteGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deleteGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeleteGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteGroup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteGroup.$post>,
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
  const mutationDefaults = getPostDeleteGroupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletePad.$get>>,
) {
  return ['deletePad', '/deletePad', toValue(args)] as const
}

export function getDeletePadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletePad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeletePadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deletePad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeletePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deletePad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>
          >,
          ReturnType<typeof getDeletePadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeletePadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeletePadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deletePad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeletePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePad.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deletePad.$post>,
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
  const mutationDefaults = getPostDeletePadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSessionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteSession.$get>>,
) {
  return ['deleteSession', '/deleteSession', toValue(args)] as const
}

export function getDeleteSessionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteSession.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeleteSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deleteSession.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeleteSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deleteSession.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
          >,
          ReturnType<typeof getDeleteSessionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeleteSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeleteSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deleteSession.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeleteSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSession.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteSession.$post>,
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
  const mutationDefaults = getPostDeleteSessionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetAttributePoolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAttributePool.$get>>,
) {
  return ['getAttributePool', '/getAttributePool', toValue(args)] as const
}

export function getGetAttributePoolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAttributePool.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetAttributePoolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getAttributePool.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetAttributePool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAttributePool.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>
            >
          >,
          ReturnType<typeof getGetAttributePoolQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetAttributePoolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetAttributePoolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getAttributePool.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetAttributePool<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getAttributePool.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getAttributePool.$post>,
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
  const mutationDefaults = getPostGetAttributePoolMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetAuthorNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAuthorName.$get>>,
) {
  return ['getAuthorName', '/getAuthorName', toValue(args)] as const
}

export function getGetAuthorNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAuthorName.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetAuthorNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getAuthorName.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetAuthorName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getAuthorName.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
          >,
          ReturnType<typeof getGetAuthorNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetAuthorNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetAuthorNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getAuthorName.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetAuthorName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAuthorName.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getAuthorName.$post>,
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
  const mutationDefaults = getPostGetAuthorNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetChatHeadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHead.$get>>,
) {
  return ['getChatHead', '/getChatHead', toValue(args)] as const
}

export function getGetChatHeadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHead.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetChatHeadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getChatHead.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetChatHead<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHead.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>
          >,
          ReturnType<typeof getGetChatHeadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetChatHeadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetChatHeadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getChatHead.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetChatHead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHead.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getChatHead.$post>,
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
  const mutationDefaults = getPostGetChatHeadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetChatHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHistory.$get>>,
) {
  return ['getChatHistory', '/getChatHistory', toValue(args)] as const
}

export function getGetChatHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetChatHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getChatHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetChatHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getChatHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
          >,
          ReturnType<typeof getGetChatHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetChatHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetChatHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getChatHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetChatHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getChatHistory.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getChatHistory.$post>,
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
  const mutationDefaults = getPostGetChatHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetHTMLQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getHTML.$get>>,
) {
  return ['getHTML', '/getHTML', toValue(args)] as const
}

export function getGetHTMLQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getHTML.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetHTMLQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getHTML.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getHTML.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>
          >,
          ReturnType<typeof getGetHTMLQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetHTMLQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetHTMLQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getHTML.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getHTML.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getHTML.$post>,
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
  const mutationDefaults = getPostGetHTMLMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetLastEditedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getLastEdited.$get>>,
) {
  return ['getLastEdited', '/getLastEdited', toValue(args)] as const
}

export function getGetLastEditedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getLastEdited.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetLastEditedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getLastEdited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetLastEdited<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getLastEdited.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
          >,
          ReturnType<typeof getGetLastEditedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetLastEditedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetLastEditedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getLastEdited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetLastEdited<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastEdited.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getLastEdited.$post>,
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
  const mutationDefaults = getPostGetLastEditedMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetPadIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPadID.$get>>,
) {
  return ['getPadID', '/getPadID', toValue(args)] as const
}

export function getGetPadIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPadID.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPadIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPadID.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetPadID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPadID.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>
          >,
          ReturnType<typeof getGetPadIDQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetPadIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPadIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPadID.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetPadID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPadID.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getPadID.$post>,
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
  const mutationDefaults = getPostGetPadIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetPublicStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPublicStatus.$get>>,
) {
  return ['getPublicStatus', '/getPublicStatus', toValue(args)] as const
}

export function getGetPublicStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPublicStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPublicStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getPublicStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPublicStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getPublicStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>
            >
          >,
          ReturnType<typeof getGetPublicStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetPublicStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPublicStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getPublicStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetPublicStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getPublicStatus.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getPublicStatus.$post>,
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
  const mutationDefaults = getPostGetPublicStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetReadOnlyIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getReadOnlyID.$get>>,
) {
  return ['getReadOnlyID', '/getReadOnlyID', toValue(args)] as const
}

export function getGetReadOnlyIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getReadOnlyID.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetReadOnlyIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getReadOnlyID.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetReadOnlyID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getReadOnlyID.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
          >,
          ReturnType<typeof getGetReadOnlyIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetReadOnlyIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetReadOnlyIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getReadOnlyID.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetReadOnlyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getReadOnlyID.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getReadOnlyID.$post>,
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
  const mutationDefaults = getPostGetReadOnlyIDMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetRevisionChangesetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionChangeset.$get>>,
) {
  return ['getRevisionChangeset', '/getRevisionChangeset', toValue(args)] as const
}

export function getGetRevisionChangesetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionChangeset.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRevisionChangesetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRevisionChangeset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetRevisionChangeset<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionChangeset.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>
            >
          >,
          ReturnType<typeof getGetRevisionChangesetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRevisionChangesetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRevisionChangesetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRevisionChangeset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetRevisionChangeset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionChangeset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getRevisionChangeset.$post>,
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
  const mutationDefaults = getPostGetRevisionChangesetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetRevisionsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionsCount.$get>>,
) {
  return ['getRevisionsCount', '/getRevisionsCount', toValue(args)] as const
}

export function getGetRevisionsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionsCount.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRevisionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRevisionsCount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetRevisionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRevisionsCount.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>
            >
          >,
          ReturnType<typeof getGetRevisionsCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRevisionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRevisionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRevisionsCount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetRevisionsCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRevisionsCount.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getRevisionsCount.$post>,
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
  const mutationDefaults = getPostGetRevisionsCountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetSavedRevisionsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSavedRevisionsCount.$get>>,
) {
  return ['getSavedRevisionsCount', '/getSavedRevisionsCount', toValue(args)] as const
}

export function getGetSavedRevisionsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSavedRevisionsCount.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetSavedRevisionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getSavedRevisionsCount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetSavedRevisionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSavedRevisionsCount.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
            >
          >,
          ReturnType<typeof getGetSavedRevisionsCountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetSavedRevisionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetSavedRevisionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getSavedRevisionsCount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetSavedRevisionsCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getSavedRevisionsCount.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getSavedRevisionsCount.$post>,
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
  const mutationDefaults = getPostGetSavedRevisionsCountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetSessionInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSessionInfo.$get>>,
) {
  return ['getSessionInfo', '/getSessionInfo', toValue(args)] as const
}

export function getGetSessionInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSessionInfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetSessionInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getSessionInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetSessionInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSessionInfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
          >,
          ReturnType<typeof getGetSessionInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetSessionInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetSessionInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getSessionInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetSessionInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getSessionInfo.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getSessionInfo.$post>,
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
  const mutationDefaults = getPostGetSessionInfoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetStatsQueryKey() {
  return ['getStats', '/getStats'] as const
}

export function getGetStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getStats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>
          >,
          ReturnType<typeof getGetStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.getStats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetStats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getStats.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostGetStatsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGetTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getText.$get>>,
) {
  return ['getText', '/getText', toValue(args)] as const
}

export function getGetTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getText.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getText.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getText.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>
          >,
          ReturnType<typeof getGetTextQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getText.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGetText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getText.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getText.$post>,
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
  const mutationDefaults = getPostGetTextMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListAllGroupsQueryKey() {
  return ['listAllGroups', '/listAllGroups'] as const
}

export function getListAllGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListAllGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listAllGroups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListAllGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
          >,
          ReturnType<typeof getListAllGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListAllGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListAllGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.listAllGroups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListAllGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllGroups.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostListAllGroupsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListAllPadsQueryKey() {
  return ['listAllPads', '/listAllPads'] as const
}

export function getListAllPadsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListAllPadsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listAllPads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListAllPads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>
          >,
          ReturnType<typeof getListAllPadsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListAllPadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListAllPadsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.listAllPads.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListAllPads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAllPads.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostListAllPadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListAuthorsOfPadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listAuthorsOfPad.$get>>,
) {
  return ['listAuthorsOfPad', '/listAuthorsOfPad', toValue(args)] as const
}

export function getListAuthorsOfPadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listAuthorsOfPad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListAuthorsOfPadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listAuthorsOfPad.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListAuthorsOfPad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listAuthorsOfPad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>
            >
          >,
          ReturnType<typeof getListAuthorsOfPadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListAuthorsOfPadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListAuthorsOfPadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listAuthorsOfPad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListAuthorsOfPad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listAuthorsOfPad.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listAuthorsOfPad.$post>,
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
  const mutationDefaults = getPostListAuthorsOfPadMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListPadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPads.$get>>,
) {
  return ['listPads', '/listPads', toValue(args)] as const
}

export function getListPadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListPadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listPads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListPads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>
          >,
          ReturnType<typeof getListPadsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListPadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listPads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListPads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listPads.$post>,
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
  const mutationDefaults = getPostListPadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListPadsOfAuthorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPadsOfAuthor.$get>>,
) {
  return ['listPadsOfAuthor', '/listPadsOfAuthor', toValue(args)] as const
}

export function getListPadsOfAuthorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPadsOfAuthor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListPadsOfAuthorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listPadsOfAuthor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListPadsOfAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPadsOfAuthor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>
            >
          >,
          ReturnType<typeof getListPadsOfAuthorQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListPadsOfAuthorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListPadsOfAuthorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listPadsOfAuthor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListPadsOfAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listPadsOfAuthor.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listPadsOfAuthor.$post>,
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
  const mutationDefaults = getPostListPadsOfAuthorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListSavedRevisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSavedRevisions.$get>>,
) {
  return ['listSavedRevisions', '/listSavedRevisions', toValue(args)] as const
}

export function getListSavedRevisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSavedRevisions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListSavedRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listSavedRevisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListSavedRevisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSavedRevisions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>
            >
          >,
          ReturnType<typeof getListSavedRevisionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSavedRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListSavedRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listSavedRevisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListSavedRevisions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSavedRevisions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listSavedRevisions.$post>,
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
  const mutationDefaults = getPostListSavedRevisionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListSessionsOfAuthorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfAuthor.$get>>,
) {
  return ['listSessionsOfAuthor', '/listSessionsOfAuthor', toValue(args)] as const
}

export function getListSessionsOfAuthorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfAuthor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListSessionsOfAuthorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listSessionsOfAuthor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListSessionsOfAuthor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfAuthor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>
            >
          >,
          ReturnType<typeof getListSessionsOfAuthorQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSessionsOfAuthorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListSessionsOfAuthorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listSessionsOfAuthor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListSessionsOfAuthor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfAuthor.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listSessionsOfAuthor.$post>,
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
  const mutationDefaults = getPostListSessionsOfAuthorMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListSessionsOfGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfGroup.$get>>,
) {
  return ['listSessionsOfGroup', '/listSessionsOfGroup', toValue(args)] as const
}

export function getListSessionsOfGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfGroup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListSessionsOfGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listSessionsOfGroup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListSessionsOfGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listSessionsOfGroup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>
            >
          >,
          ReturnType<typeof getListSessionsOfGroupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListSessionsOfGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListSessionsOfGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listSessionsOfGroup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostListSessionsOfGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listSessionsOfGroup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listSessionsOfGroup.$post>,
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
  const mutationDefaults = getPostListSessionsOfGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMovePadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movePad.$get>>,
) {
  return ['movePad', '/movePad', toValue(args)] as const
}

export function getMovePadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movePad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovePadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movePad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMovePad<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movePad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>
          >,
          ReturnType<typeof getMovePadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovePadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovePadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movePad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMovePad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movePad.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.movePad.$post>,
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
  const mutationDefaults = getPostMovePadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPadUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsers.$get>>,
) {
  return ['padUsers', '/padUsers', toValue(args)] as const
}

export function getPadUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPadUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.padUsers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePadUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>
          >,
          ReturnType<typeof getPadUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPadUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPadUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.padUsers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPadUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.padUsers.$post>,
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
  const mutationDefaults = getPostPadUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPadUsersCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsersCount.$get>>,
) {
  return ['padUsersCount', '/padUsersCount', toValue(args)] as const
}

export function getPadUsersCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsersCount.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPadUsersCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.padUsersCount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePadUsersCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padUsersCount.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
          >,
          ReturnType<typeof getPadUsersCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPadUsersCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPadUsersCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.padUsersCount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPadUsersCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padUsersCount.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.padUsersCount.$post>,
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
  const mutationDefaults = getPostPadUsersCountMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRestoreRevisionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restoreRevision.$get>>,
) {
  return ['restoreRevision', '/restoreRevision', toValue(args)] as const
}

export function getRestoreRevisionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restoreRevision.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestoreRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.restoreRevision.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestoreRevision<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.restoreRevision.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>
            >
          >,
          ReturnType<typeof getRestoreRevisionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestoreRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.restoreRevision.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRestoreRevision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.restoreRevision.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.restoreRevision.$post>,
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
  const mutationDefaults = getPostRestoreRevisionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSaveRevisionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveRevision.$get>>,
) {
  return ['saveRevision', '/saveRevision', toValue(args)] as const
}

export function getSaveRevisionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveRevision.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSaveRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saveRevision.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSaveRevision<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveRevision.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>
          >,
          ReturnType<typeof getSaveRevisionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSaveRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSaveRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saveRevision.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSaveRevision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveRevision.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.saveRevision.$post>,
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
  const mutationDefaults = getPostSaveRevisionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSendClientsMessageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sendClientsMessage.$get>>,
) {
  return ['sendClientsMessage', '/sendClientsMessage', toValue(args)] as const
}

export function getSendClientsMessageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sendClientsMessage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendClientsMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sendClientsMessage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendClientsMessage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sendClientsMessage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>
            >
          >,
          ReturnType<typeof getSendClientsMessageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendClientsMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendClientsMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sendClientsMessage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSendClientsMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sendClientsMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sendClientsMessage.$post>,
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
  const mutationDefaults = getPostSendClientsMessageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSetHTMLQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setHTML.$get>>,
) {
  return ['setHTML', '/setHTML', toValue(args)] as const
}

export function getSetHTMLQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setHTML.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetHTMLQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setHTML.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSetHTML<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setHTML.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>
          >,
          ReturnType<typeof getSetHTMLQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetHTMLQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetHTMLQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setHTML.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSetHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setHTML.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setHTML.$post>,
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
  const mutationDefaults = getPostSetHTMLMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSetPublicStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setPublicStatus.$get>>,
) {
  return ['setPublicStatus', '/setPublicStatus', toValue(args)] as const
}

export function getSetPublicStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setPublicStatus.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetPublicStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setPublicStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetPublicStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setPublicStatus.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>
            >
          >,
          ReturnType<typeof getSetPublicStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetPublicStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetPublicStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setPublicStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSetPublicStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setPublicStatus.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setPublicStatus.$post>,
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
  const mutationDefaults = getPostSetPublicStatusMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSetTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setText.$get>>,
) {
  return ['setText', '/setText', toValue(args)] as const
}

export function getSetTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setText.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setText.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSetText<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setText.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>
          >,
          ReturnType<typeof getSetTextQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setText.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSetText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setText.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setText.$post>,
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
  const mutationDefaults = getPostSetTextMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
