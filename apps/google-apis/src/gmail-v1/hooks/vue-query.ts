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

export function getGmailKey() {
  return ['gmail'] as const
}

export function getGmailV1UsersUserIdDraftsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts', toValue(args)] as const
}

export function getGmailV1UsersUserIdDraftsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdDraftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].drafts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdDraftsQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdDraftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].drafts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdDraftsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts', 'POST'] as const
}

export function getPostGmailV1UsersUserIdDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdDraftsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdDraftsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGmailV1UsersUserIdDraftsSendMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/send', 'POST'] as const
}

export function getPostGmailV1UsersUserIdDraftsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdDraftsSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts.send.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdDraftsSend<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdDraftsSendMutationOptions<
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

export function getGmailV1UsersUserIdDraftsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', toValue(args)] as const
}

export function getGmailV1UsersUserIdDraftsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdDraftsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].drafts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdDraftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdDraftsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdDraftsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdDraftsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].drafts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdDraftsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdDraftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdDraftsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdDraftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
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
  const mutationDefaults = getPutGmailV1UsersUserIdDraftsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGmailV1UsersUserIdDraftsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdDraftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdDraftsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdDraftsId<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdDraftsIdMutationOptions<
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

export function getGmailV1UsersUserIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/history', toValue(args)] as const
}

export function getGmailV1UsersUserIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels', toValue(args)] as const
}

export function getGmailV1UsersUserIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdLabelsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels', 'POST'] as const
}

export function getPostGmailV1UsersUserIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getGmailV1UsersUserIdLabelsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', toValue(args)] as const
}

export function getGmailV1UsersUserIdLabelsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdLabelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].labels[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdLabelsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdLabelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdLabelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].labels[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
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
  const mutationDefaults = getPutGmailV1UsersUserIdLabelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdLabelsId<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdLabelsIdMutationOptions<
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

export function getPatchGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PATCH'] as const
}

export function getPatchGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$patch(args, options))
    },
  })
}

export function usePatchGmailV1UsersUserIdLabelsId<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
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
  const mutationDefaults = getPatchGmailV1UsersUserIdLabelsIdMutationOptions<
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

export function getGmailV1UsersUserIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages', toValue(args)] as const
}

export function getGmailV1UsersUserIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdMessagesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesBatchDeleteMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchDelete', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.batchDelete.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesBatchDelete<
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
                    (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesBatchDeleteMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesBatchModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchModify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesBatchModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesBatchModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.batchModify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesBatchModify<
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
                    (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesBatchModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesImportMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/import', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.import.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesImport<
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
                    (typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesImportMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesSendMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/send', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.send.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesSend<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesSendMutationOptions<
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

export function getGmailV1UsersUserIdMessagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', toValue(args)] as const
}

export function getGmailV1UsersUserIdMessagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdMessagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdMessagesIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdMessagesId<
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdMessagesIdMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/modify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].modify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdModify<
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdTrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/trash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].trash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdTrash<
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdTrashMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdUntrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/untrash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdUntrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].untrash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdUntrash<
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdUntrashMutationOptions<
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

export function getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/messages/:messageId/attachments/:id',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGmailV1UsersUserIdMessagesMessageIdAttachmentsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/profile', toValue(args)] as const
}

export function getGmailV1UsersUserIdProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdProfileQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdSettingsAutoForwardingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsAutoForwardingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsAutoForwardingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.autoForwarding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsAutoForwarding<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsAutoForwardingQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsAutoForwardingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsAutoForwardingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.autoForwarding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsAutoForwardingMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsAutoForwardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsAutoForwardingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.autoForwarding.$put(args, options),
      )
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsAutoForwarding<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsAutoForwardingMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsCseIdentitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsCseIdentities<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseIdentities<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationOptions<
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

export function getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:emailAddress',
    'PATCH',
  ] as const
}

export function getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':emailAddress'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddress<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
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
    getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseKeypairsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsCseKeypairsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsCseKeypairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsCseKeypairs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsCseKeypairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairs<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsCseKeypairsMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsCseKeypairsKeyPairId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:disable',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:disable'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisable<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:enable',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:enable'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnable<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:obliterate',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:obliterate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterate<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationOptions<
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

export function getGmailV1UsersUserIdSettingsDelegatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsDelegatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsDelegatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsDelegates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesQueryKey>
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
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsDelegatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsDelegatesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.delegates.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsDelegates<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsDelegatesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/delegates/:delegateEmail',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates/:delegateEmail', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersQueryKey>
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
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsFiltersMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.filters.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsFilters<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsFiltersMutationOptions<
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

export function getGmailV1UsersUserIdSettingsFiltersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsFiltersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsFiltersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsFiltersId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersIdQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsFiltersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.filters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsFiltersId<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationOptions<
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

export function getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsForwardingAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsForwardingAddresses<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsForwardingAddresses<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsImapQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsImapQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsImapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.imap.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsImap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsImapQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsImapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsImapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.imap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsImapMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsImapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsImapMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.imap.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsImap<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsImapMutationOptions<
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

export function getGmailV1UsersUserIdSettingsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.language.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsLanguageQueryKey>
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
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.language.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsLanguageMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.language.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsLanguage<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsLanguageMutationOptions<
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

export function getGmailV1UsersUserIdSettingsPopQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsPopQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsPopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.pop.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsPop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsPopQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsPopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsPopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.pop.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsPopMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsPopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsPopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.pop.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsPop<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsPopMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsSendAsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsSendAsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsSendAs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsQueryKey>
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
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsSendAsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsSendAsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAs<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsSendAsMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
    >
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmail<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$put(args, options),
      )
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PATCH'] as const
}

export function getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$patch(args, options),
      )
    },
  })
}

export function usePatchGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
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
  const mutationDefaults = getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
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
    getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
    >
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    toValue(args),
  ] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey>
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
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id/setDefault',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[
          ':id'
        ].setDefault.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefault<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
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
    getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/verify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].verify.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerify<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationOptions<
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

export function getGmailV1UsersUserIdSettingsVacationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', toValue(args)] as const
}

export function getGmailV1UsersUserIdSettingsVacationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdSettingsVacationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.vacation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdSettingsVacation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdSettingsVacationQueryKey>
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
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsVacationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdSettingsVacationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].settings.vacation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsVacationMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsVacationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsVacationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsVacation<
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
                    (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsVacationMutationOptions<
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

export function getPostGmailV1UsersUserIdStopMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/stop', 'POST'] as const
}

export function getPostGmailV1UsersUserIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].stop.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getGmailV1UsersUserIdThreadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads', toValue(args)] as const
}

export function getGmailV1UsersUserIdThreadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdThreadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdThreadsQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdThreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdThreadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].threads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdThreadsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', toValue(args)] as const
}

export function getGmailV1UsersUserIdThreadsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGmailV1UsersUserIdThreadsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGmailV1UsersUserIdThreadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGmailV1UsersUserIdThreadsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdThreadsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGmailV1UsersUserIdThreadsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gmail.v1.users[':userId'].threads[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdThreadsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdThreadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdThreadsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdThreadsId<
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
                  ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdThreadsIdMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/modify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].modify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdModify<
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
                    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdTrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/trash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].trash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdTrash<
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
                    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdTrashMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdUntrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/untrash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdUntrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].untrash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdUntrash<
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
                    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdUntrashMutationOptions<
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

export function getPostGmailV1UsersUserIdWatchMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/watch', 'POST'] as const
}

export function getPostGmailV1UsersUserIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].watch.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
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
  const mutationDefaults = getPostGmailV1UsersUserIdWatchMutationOptions<TError, TOnMutateResult>(
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
