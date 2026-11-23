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

export function getWikiKey() {
  return ['wiki'] as const
}

export function getWikiRestApiAuditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.$get>>,
) {
  return ['wiki', '/wiki/rest/api/audit', toValue(args)] as const
}

export function getWikiRestApiAuditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.audit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiAuditQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.audit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiAuditMutationKey() {
  return ['wiki', '/wiki/rest/api/audit', 'POST'] as const
}

export function getPostWikiRestApiAuditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.audit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiAuditMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.audit.$post>) {
      return parseResponse(client.wiki.rest.api.audit.$post(args, options))
    },
  })
}

export function usePostWikiRestApiAudit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.audit.$post>,
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
  const mutationDefaults = getPostWikiRestApiAuditMutationOptions<TError, TOnMutateResult>(
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

export function getWikiRestApiAuditExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.export.$get>>,
) {
  return ['wiki', '/wiki/rest/api/audit/export', toValue(args)] as const
}

export function getWikiRestApiAuditExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiAuditExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.audit.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAuditExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiAuditExportQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiAuditExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.audit.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiAuditRetentionQueryKey() {
  return ['wiki', '/wiki/rest/api/audit/retention'] as const
}

export function getWikiRestApiAuditRetentionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWikiRestApiAuditRetentionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.audit.retention.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAuditRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiAuditRetentionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditRetentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWikiRestApiAuditRetentionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.audit.retention.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiAuditRetentionMutationKey() {
  return ['wiki', '/wiki/rest/api/audit/retention', 'PUT'] as const
}

export function getPutWikiRestApiAuditRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.audit.retention.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiAuditRetentionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.audit.retention.$put>) {
      return parseResponse(client.wiki.rest.api.audit.retention.$put(args, options))
    },
  })
}

export function usePutWikiRestApiAuditRetention<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.audit.retention.$put>,
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
  const mutationDefaults = getPutWikiRestApiAuditRetentionMutationOptions<TError, TOnMutateResult>(
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

export function getWikiRestApiAuditSinceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.since.$get>>,
) {
  return ['wiki', '/wiki/rest/api/audit/since', toValue(args)] as const
}

export function getWikiRestApiAuditSinceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.since.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiAuditSinceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.audit.since.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAuditSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.audit.since.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiAuditSinceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditSinceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiAuditSinceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.audit.since.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentArchiveMutationKey() {
  return ['wiki', '/wiki/rest/api/content/archive', 'POST'] as const
}

export function getPostWikiRestApiContentArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.archive.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.content.archive.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentArchiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.content.archive.$post>) {
      return parseResponse(client.wiki.rest.api.content.archive.$post(args, options))
    },
  })
}

export function usePostWikiRestApiContentArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.content.archive.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.content.archive.$post>,
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
  const mutationDefaults = getPostWikiRestApiContentArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPutWikiRestApiContentBlueprintInstanceDraftIdMutationKey() {
  return ['wiki', '/wiki/rest/api/content/blueprint/instance/:draftId', 'PUT'] as const
}

export function getPutWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentBlueprintInstanceDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content.blueprint.instance[':draftId'].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiContentBlueprintInstanceDraftId<
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
                    (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']
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
  const mutationDefaults = getPutWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
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

export function getPostWikiRestApiContentBlueprintInstanceDraftIdMutationKey() {
  return ['wiki', '/wiki/rest/api/content/blueprint/instance/:draftId', 'POST'] as const
}

export function getPostWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentBlueprintInstanceDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content.blueprint.instance[':draftId'].$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentBlueprintInstanceDraftId<
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
                    (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
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
  const mutationDefaults = getPostWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
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

export function getWikiRestApiContentSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.content.search.$get>>,
) {
  return ['wiki', '/wiki/rest/api/content/search', toValue(args)] as const
}

export function getWikiRestApiContentSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.content.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.content.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWikiRestApiContentIdPageTreeMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/pageTree', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdPageTreeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdPageTreeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].pageTree.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiContentIdPageTree<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiContentIdPageTreeMutationOptions<
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

export function getPutWikiRestApiContentPageIdMovePositionTargetIdMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:pageId/move/:position/:targetId', 'PUT'] as const
}

export function getPutWikiRestApiContentPageIdMovePositionTargetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentPageIdMovePositionTargetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':pageId'].move[':position'][':targetId'].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiContentPageIdMovePositionTargetId<
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
                    (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
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
  const mutationDefaults = getPutWikiRestApiContentPageIdMovePositionTargetIdMutationOptions<
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

export function getPutWikiRestApiContentIdChildAttachmentMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment', 'PUT'] as const
}

export function getPutWikiRestApiContentIdChildAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentIdChildAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']
      >,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].child.attachment.$put(args, options))
    },
  })
}

export function usePutWikiRestApiContentIdChildAttachment<
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']
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
  const mutationDefaults = getPutWikiRestApiContentIdChildAttachmentMutationOptions<
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

export function getPostWikiRestApiContentIdChildAttachmentMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment', 'POST'] as const
}

export function getPostWikiRestApiContentIdChildAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdChildAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].child.attachment.$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentIdChildAttachment<
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']
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
  const mutationDefaults = getPostWikiRestApiContentIdChildAttachmentMutationOptions<
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

export function getPutWikiRestApiContentIdChildAttachmentAttachmentIdMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment/:attachmentId', 'PUT'] as const
}

export function getPutWikiRestApiContentIdChildAttachmentAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentIdChildAttachmentAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiContentIdChildAttachmentAttachmentId<
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
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
  const mutationDefaults = getPutWikiRestApiContentIdChildAttachmentAttachmentIdMutationOptions<
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

export function getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment/:attachmentId/data', 'POST'] as const
}

export function getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].data.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostWikiRestApiContentIdChildAttachmentAttachmentIdData<
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
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
    getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataMutationOptions<
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

export function getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/child/attachment/:attachmentId/download',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWikiRestApiContentIdChildAttachmentAttachmentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdDescendantQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant', toValue(args)] as const
}

export function getWikiRestApiContentIdDescendantQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdDescendantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].descendant.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdDescendant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdDescendantQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdDescendantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdDescendantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].descendant.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdDescendantTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant/:type', toValue(args)] as const
}

export function getWikiRestApiContentIdDescendantTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdDescendantTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].descendant[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdDescendantType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']>
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
                    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdDescendantTypeQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdDescendantTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdDescendantTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].descendant[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWikiRestApiContentIdHistoryVersionMacroIdMacroId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/:to',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
            ':to'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/async/:to',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert.async[
          ':to'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey
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
              (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[
            ':macroId'
          ].convert.async[':to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentIdLabelMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label', 'POST'] as const
}

export function getPostWikiRestApiContentIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].label.$post(args, options))
    },
  })
}

export function usePostWikiRestApiContentIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiContentIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWikiRestApiContentIdLabelMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].label.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiContentIdLabel<
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
                    ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiContentIdLabelMutationOptions<
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

export function getDeleteWikiRestApiContentIdLabelLabelMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label/:label', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdLabelLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdLabelLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].label[':label'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiContentIdLabelLabel<
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
                      (typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']
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
  const mutationDefaults = getDeleteWikiRestApiContentIdLabelLabelMutationOptions<
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

export function getWikiRestApiContentIdNotificationChildCreatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
    >
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/child-created', toValue(args)] as const
}

export function getWikiRestApiContentIdNotificationChildCreatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdNotificationChildCreatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].notification['child-created'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdNotificationChildCreated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdNotificationChildCreatedQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdNotificationChildCreatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdNotificationChildCreatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].notification['child-created'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdNotificationCreatedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
    >
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/created', toValue(args)] as const
}

export function getWikiRestApiContentIdNotificationCreatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdNotificationCreatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].notification.created.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdNotificationCreated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdNotificationCreatedQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdNotificationCreatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdNotificationCreatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].notification.created.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentIdPagehierarchyCopyMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/pagehierarchy/copy', 'POST'] as const
}

export function getPostWikiRestApiContentIdPagehierarchyCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdPagehierarchyCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].pagehierarchy.copy.$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentIdPagehierarchyCopy<
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
                    (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
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
  const mutationDefaults = getPostWikiRestApiContentIdPagehierarchyCopyMutationOptions<
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

export function getPostWikiRestApiContentIdCopyMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/copy', 'POST'] as const
}

export function getPostWikiRestApiContentIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].copy.$post(args, options))
    },
  })
}

export function usePostWikiRestApiContentIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiContentIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getPostWikiRestApiContentIdPermissionCheckMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/permission/check', 'POST'] as const
}

export function getPostWikiRestApiContentIdPermissionCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdPermissionCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].permission.check.$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentIdPermissionCheck<
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
                    (typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']
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
  const mutationDefaults = getPostWikiRestApiContentIdPermissionCheckMutationOptions<
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

export function getWikiRestApiContentIdRestrictionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', toValue(args)] as const
}

export function getWikiRestApiContentIdRestrictionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdRestrictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdRestrictionQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdRestrictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdRestrictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].restriction.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiContentIdRestrictionMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'PUT'] as const
}

export function getPutWikiRestApiContentIdRestrictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentIdRestrictionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].restriction.$put(args, options))
    },
  })
}

export function usePutWikiRestApiContentIdRestriction<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>,
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
  const mutationDefaults = getPutWikiRestApiContentIdRestrictionMutationOptions<
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

export function getPostWikiRestApiContentIdRestrictionMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'POST'] as const
}

export function getPostWikiRestApiContentIdRestrictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdRestrictionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].restriction.$post(args, options))
    },
  })
}

export function usePostWikiRestApiContentIdRestriction<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiContentIdRestrictionMutationOptions<
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

export function getDeleteWikiRestApiContentIdRestrictionMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdRestrictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdRestrictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']
      >,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].restriction.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiContentIdRestriction<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiContentIdRestrictionMutationOptions<
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

export function getWikiRestApiContentIdRestrictionByOperationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
    >
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction/byOperation', toValue(args)] as const
}

export function getWikiRestApiContentIdRestrictionByOperationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdRestrictionByOperationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdRestrictionByOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdRestrictionByOperationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWikiRestApiContentIdRestrictionByOperationOperationKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
          ':groupId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey
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
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
            ':groupId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    'PUT',
  ] as const
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
          ':groupId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
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
    getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
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

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    'DELETE',
  ] as const
}

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
          ':groupId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
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
    getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
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

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    toValue(args),
  ] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey>
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
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    'PUT',
  ] as const
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
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
    getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
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

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    'DELETE',
  ] as const
}

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
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
                    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
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
    getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
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

export function getWikiRestApiContentIdStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state', toValue(args)] as const
}

export function getWikiRestApiContentIdStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdStateQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiContentIdStateMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/state', 'PUT'] as const
}

export function getPutWikiRestApiContentIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiContentIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].state.$put(args, options))
    },
  })
}

export function usePutWikiRestApiContentIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>,
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
  const mutationDefaults = getPutWikiRestApiContentIdStateMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWikiRestApiContentIdStateMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/state', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].state.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiContentIdState<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiContentIdStateMutationOptions<
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

export function getWikiRestApiContentIdStateAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state/available', toValue(args)] as const
}

export function getWikiRestApiContentIdStateAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentIdStateAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].state.available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentIdStateAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
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
                    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
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
                    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentIdStateAvailableQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentIdStateAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentIdStateAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.content[':id'].state.available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentIdVersionMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/version', 'POST'] as const
}

export function getPostWikiRestApiContentIdVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentIdVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.content[':id'].version.$post(args, options))
    },
  })
}

export function usePostWikiRestApiContentIdVersion<
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
                  ReturnType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiContentIdVersionMutationOptions<
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

export function getDeleteWikiRestApiContentIdVersionVersionNumberMutationKey() {
  return ['wiki', '/wiki/rest/api/content/:id/version/:versionNumber', 'DELETE'] as const
}

export function getDeleteWikiRestApiContentIdVersionVersionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiContentIdVersionVersionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].version[':versionNumber'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiContentIdVersionVersionNumber<
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
                      (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
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
  const mutationDefaults = getDeleteWikiRestApiContentIdVersionVersionNumberMutationOptions<
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

export function getWikiRestApiContentStatesQueryKey() {
  return ['wiki', '/wiki/rest/api/content-states'] as const
}

export function getWikiRestApiContentStatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWikiRestApiContentStatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api['content-states'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentStatesQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentStatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWikiRestApiContentStatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api['content-states'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentbodyConvertAsyncToMutationKey() {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/:to', 'POST'] as const
}

export function getPostWikiRestApiContentbodyConvertAsyncToMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentbodyConvertAsyncToMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async[':to'].$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentbodyConvertAsyncTo<
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
                    (typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiContentbodyConvertAsyncToMutationOptions<
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

export function getWikiRestApiContentbodyConvertAsyncIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/:id', toValue(args)] as const
}

export function getWikiRestApiContentbodyConvertAsyncIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentbodyConvertAsyncIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentbodyConvertAsyncId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentbodyConvertAsyncIdQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentbodyConvertAsyncIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentbodyConvertAsyncIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.contentbody.convert.async[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
  >,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/bulk/tasks', toValue(args)] as const
}

export function getWikiRestApiContentbodyConvertAsyncBulkTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiContentbodyConvertAsyncBulkTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
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
                  ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey>
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
          Awaited<ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiContentbodyConvertAsyncBulkTasksMutationKey() {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/bulk/tasks', 'POST'] as const
}

export function getPostWikiRestApiContentbodyConvertAsyncBulkTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiContentbodyConvertAsyncBulkTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiContentbodyConvertAsyncBulkTasks<
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
                  ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>,
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
  const mutationDefaults = getPostWikiRestApiContentbodyConvertAsyncBulkTasksMutationOptions<
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

export function getWikiRestApiLabelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.label.$get>>,
) {
  return ['wiki', '/wiki/rest/api/label', toValue(args)] as const
}

export function getWikiRestApiLabelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.label.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.label.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.label.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiLabelQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.label.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.$get>>,
) {
  return ['wiki', '/wiki/rest/api/group', toValue(args)] as const
}

export function getWikiRestApiGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiGroupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiGroupMutationKey() {
  return ['wiki', '/wiki/rest/api/group', 'POST'] as const
}

export function getPostWikiRestApiGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.group.$post>) {
      return parseResponse(client.wiki.rest.api.group.$post(args, options))
    },
  })
}

export function usePostWikiRestApiGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.group.$post>,
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
  const mutationDefaults = getPostWikiRestApiGroupMutationOptions<TError, TOnMutateResult>(
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

export function getWikiRestApiGroupByIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>,
) {
  return ['wiki', '/wiki/rest/api/group/by-id', toValue(args)] as const
}

export function getWikiRestApiGroupByIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiGroupByIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.group['by-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiGroupById<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiGroupByIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupByIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiGroupByIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.group['by-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWikiRestApiGroupByIdMutationKey() {
  return ['wiki', '/wiki/rest/api/group/by-id', 'DELETE'] as const
}

export function getDeleteWikiRestApiGroupByIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiGroupByIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.group['by-id'].$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiGroupById<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiGroupByIdMutationOptions<TError, TOnMutateResult>(
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

export function getWikiRestApiGroupPickerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.picker.$get>>,
) {
  return ['wiki', '/wiki/rest/api/group/picker', toValue(args)] as const
}

export function getWikiRestApiGroupPickerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.picker.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiGroupPickerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.group.picker.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiGroupPicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.group.picker.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiGroupPickerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupPickerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiGroupPickerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.group.picker.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/group/:groupId/membersByGroupId', toValue(args)] as const
}

export function getWikiRestApiGroupGroupIdMembersByGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiGroupGroupIdMembersByGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']>
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
                    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
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
                    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiGroupUserByGroupIdMutationKey() {
  return ['wiki', '/wiki/rest/api/group/userByGroupId', 'POST'] as const
}

export function getPostWikiRestApiGroupUserByGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiGroupUserByGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post>,
    ) {
      return parseResponse(client.wiki.rest.api.group.userByGroupId.$post(args, options))
    },
  })
}

export function usePostWikiRestApiGroupUserByGroupId<
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
                Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post>,
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
  const mutationDefaults = getPostWikiRestApiGroupUserByGroupIdMutationOptions<
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

export function getDeleteWikiRestApiGroupUserByGroupIdMutationKey() {
  return ['wiki', '/wiki/rest/api/group/userByGroupId', 'DELETE'] as const
}

export function getDeleteWikiRestApiGroupUserByGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiGroupUserByGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete>,
    ) {
      return parseResponse(client.wiki.rest.api.group.userByGroupId.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiGroupUserByGroupId<
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
                  Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete>,
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
  const mutationDefaults = getDeleteWikiRestApiGroupUserByGroupIdMutationOptions<
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

export function getWikiRestApiLongtaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.longtask.$get>>,
) {
  return ['wiki', '/wiki/rest/api/longtask', toValue(args)] as const
}

export function getWikiRestApiLongtaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.longtask.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiLongtaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.longtask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiLongtask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.longtask.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiLongtaskQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiLongtaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiLongtaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.longtask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiLongtaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>,
) {
  return ['wiki', '/wiki/rest/api/longtask/:id', toValue(args)] as const
}

export function getWikiRestApiLongtaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiLongtaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.longtask[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiLongtaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiLongtaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiLongtaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiLongtaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.longtask[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType',
    toValue(args),
  ] as const
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey
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
              (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    toValue(args),
  ] as const
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ][':targetKey'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey
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
              (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ][':targetKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    'PUT',
  ] as const
}

export function getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ][':targetKey'].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
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
    getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
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

export function getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationKey() {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    'DELETE',
  ] as const
}

export function getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ][':targetKey'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
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
                      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
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
    getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
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

export function getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
    >
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/to/:targetType/:targetKey/from/:sourceType',
    toValue(args),
  ] as const
}

export function getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
          ':sourceType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
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
                    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey
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
              (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
            ':sourceType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.$get>>,
) {
  return ['wiki', '/wiki/rest/api/search', toValue(args)] as const
}

export function getWikiRestApiSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSearchUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.user.$get>>,
) {
  return ['wiki', '/wiki/rest/api/search/user', toValue(args)] as const
}

export function getWikiRestApiSearchUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSearchUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.search.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSearchUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.search.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSearchUserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSearchUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSearchUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.search.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSettingsLookandfeelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>,
) {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel', toValue(args)] as const
}

export function getWikiRestApiSettingsLookandfeelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSettingsLookandfeelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.settings.lookandfeel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSettingsLookandfeel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSettingsLookandfeelQueryKey>
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
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsLookandfeelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSettingsLookandfeelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.settings.lookandfeel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiSettingsLookandfeelMutationKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel', 'PUT'] as const
}

export function getPutWikiRestApiSettingsLookandfeelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiSettingsLookandfeelMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put>,
    ) {
      return parseResponse(client.wiki.rest.api.settings.lookandfeel.$put(args, options))
    },
  })
}

export function usePutWikiRestApiSettingsLookandfeel<
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
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put>,
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
  const mutationDefaults = getPutWikiRestApiSettingsLookandfeelMutationOptions<
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

export function getPostWikiRestApiSettingsLookandfeelCustomMutationKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel/custom', 'POST'] as const
}

export function getPostWikiRestApiSettingsLookandfeelCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSettingsLookandfeelCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>,
    ) {
      return parseResponse(client.wiki.rest.api.settings.lookandfeel.custom.$post(args, options))
    },
  })
}

export function usePostWikiRestApiSettingsLookandfeelCustom<
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
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>,
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
  const mutationDefaults = getPostWikiRestApiSettingsLookandfeelCustomMutationOptions<
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

export function getDeleteWikiRestApiSettingsLookandfeelCustomMutationKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel/custom', 'DELETE'] as const
}

export function getDeleteWikiRestApiSettingsLookandfeelCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiSettingsLookandfeelCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>,
    ) {
      return parseResponse(client.wiki.rest.api.settings.lookandfeel.custom.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiSettingsLookandfeelCustom<
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
                    ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>,
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
  const mutationDefaults = getDeleteWikiRestApiSettingsLookandfeelCustomMutationOptions<
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

export function getWikiRestApiSettingsSystemInfoQueryKey() {
  return ['wiki', '/wiki/rest/api/settings/systemInfo'] as const
}

export function getWikiRestApiSettingsSystemInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWikiRestApiSettingsSystemInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.settings.systemInfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSettingsSystemInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSettingsSystemInfoQueryKey>
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
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsSystemInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWikiRestApiSettingsSystemInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.settings.systemInfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSettingsThemeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>>,
) {
  return ['wiki', '/wiki/rest/api/settings/theme', toValue(args)] as const
}

export function getWikiRestApiSettingsThemeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSettingsThemeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.settings.theme.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSettingsTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSettingsThemeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsThemeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSettingsThemeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.settings.theme.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSettingsThemeSelectedQueryKey() {
  return ['wiki', '/wiki/rest/api/settings/theme/selected'] as const
}

export function getWikiRestApiSettingsThemeSelectedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWikiRestApiSettingsThemeSelectedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.settings.theme.selected.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSettingsThemeSelected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSettingsThemeSelectedQueryKey>
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
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsThemeSelectedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWikiRestApiSettingsThemeSelectedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.settings.theme.selected.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSettingsThemeThemeKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/settings/theme/:themeKey', toValue(args)] as const
}

export function getWikiRestApiSettingsThemeThemeKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSettingsThemeThemeKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.settings.theme[':themeKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSettingsThemeThemeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSettingsThemeThemeKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsThemeThemeKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSettingsThemeThemeKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.settings.theme[':themeKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiSpaceMutationKey() {
  return ['wiki', '/wiki/rest/api/space', 'POST'] as const
}

export function getPostWikiRestApiSpaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.space.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSpaceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.space.$post>) {
      return parseResponse(client.wiki.rest.api.space.$post(args, options))
    },
  })
}

export function usePostWikiRestApiSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.space.$post>,
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
  const mutationDefaults = getPostWikiRestApiSpaceMutationOptions<TError, TOnMutateResult>(
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

export function getPostWikiRestApiSpacePrivateMutationKey() {
  return ['wiki', '/wiki/rest/api/space/_private', 'POST'] as const
}

export function getPostWikiRestApiSpacePrivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space._private.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.space._private.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSpacePrivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.space._private.$post>) {
      return parseResponse(client.wiki.rest.api.space._private.$post(args, options))
    },
  })
}

export function usePostWikiRestApiSpacePrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.space._private.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.space._private.$post>,
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
  const mutationDefaults = getPostWikiRestApiSpacePrivateMutationOptions<TError, TOnMutateResult>(
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

export function getPutWikiRestApiSpaceSpaceKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey', 'PUT'] as const
}

export function getPutWikiRestApiSpaceSpaceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiSpaceSpaceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].$put(args, options))
    },
  })
}

export function usePutWikiRestApiSpaceSpaceKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>,
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
  const mutationDefaults = getPutWikiRestApiSpaceSpaceKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWikiRestApiSpaceSpaceKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey', 'DELETE'] as const
}

export function getDeleteWikiRestApiSpaceSpaceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiSpaceSpaceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiSpaceSpaceKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyMutationOptions<
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

export function getPostWikiRestApiSpaceSpaceKeyPermissionMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission', 'POST'] as const
}

export function getPostWikiRestApiSpaceSpaceKeyPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSpaceSpaceKeyPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']
      >,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].permission.$post(args, options))
    },
  })
}

export function usePostWikiRestApiSpaceSpaceKeyPermission<
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyPermissionMutationOptions<
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

export function getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission/custom-content', 'POST'] as const
}

export function getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].permission['custom-content'].$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiSpaceSpaceKeyPermissionCustomContent<
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
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
  const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentMutationOptions<
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

export function getDeleteWikiRestApiSpaceSpaceKeyPermissionIdMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission/:id', 'DELETE'] as const
}

export function getDeleteWikiRestApiSpaceSpaceKeyPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiSpaceSpaceKeyPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].permission[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiSpaceSpaceKeyPermissionId<
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
                      (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
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
  const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyPermissionIdMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeySettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/settings', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeySettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeySettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeySettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeySettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeySettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiSpaceSpaceKeySettingsMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/settings', 'PUT'] as const
}

export function getPutWikiRestApiSpaceSpaceKeySettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiSpaceSpaceKeySettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$put(args, options))
    },
  })
}

export function usePutWikiRestApiSpaceSpaceKeySettings<
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>,
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
  const mutationDefaults = getPutWikiRestApiSpaceSpaceKeySettingsMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeyStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/settings', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyStateSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyStateSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']>
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey>
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
              (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].state.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSpaceSpaceKeyStateContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/content', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyStateContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyStateContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']>
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
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
                    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateContentQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyStateContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].state.content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSpaceSpaceKeyThemeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyThemeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyThemeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].theme.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyThemeQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyThemeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyThemeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].theme.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiSpaceSpaceKeyThemeMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', 'PUT'] as const
}

export function getPutWikiRestApiSpaceSpaceKeyThemeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiSpaceSpaceKeyThemeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$put(args, options))
    },
  })
}

export function usePutWikiRestApiSpaceSpaceKeyTheme<
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>,
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
  const mutationDefaults = getPutWikiRestApiSpaceSpaceKeyThemeMutationOptions<
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

export function getDeleteWikiRestApiSpaceSpaceKeyThemeMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', 'DELETE'] as const
}

export function getDeleteWikiRestApiSpaceSpaceKeyThemeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiSpaceSpaceKeyThemeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiSpaceSpaceKeyTheme<
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
                    ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyThemeMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeyWatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/watch', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyWatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyWatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].watch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyWatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyWatchQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyWatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyWatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].watch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiSpaceSpaceKeyLabelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', toValue(args)] as const
}

export function getWikiRestApiSpaceSpaceKeyLabelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiSpaceSpaceKeyLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].label.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiSpaceSpaceKeyLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiSpaceSpaceKeyLabelQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSpaceSpaceKeyLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiSpaceSpaceKeyLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.space[':spaceKey'].label.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiSpaceSpaceKeyLabelMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', 'POST'] as const
}

export function getPostWikiRestApiSpaceSpaceKeyLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiSpaceSpaceKeyLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$post(args, options))
    },
  })
}

export function usePostWikiRestApiSpaceSpaceKeyLabel<
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
                  ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyLabelMutationOptions<
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

export function getDeleteWikiRestApiSpaceSpaceKeyLabelMutationKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', 'DELETE'] as const
}

export function getDeleteWikiRestApiSpaceSpaceKeyLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiSpaceSpaceKeyLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>,
    ) {
      return parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$delete(args, options))
    },
  })
}

export function useDeleteWikiRestApiSpaceSpaceKeyLabel<
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
                    ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyLabelMutationOptions<
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

export function getPutWikiRestApiTemplateMutationKey() {
  return ['wiki', '/wiki/rest/api/template', 'PUT'] as const
}

export function getPutWikiRestApiTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.template.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.template.$put>) {
      return parseResponse(client.wiki.rest.api.template.$put(args, options))
    },
  })
}

export function usePutWikiRestApiTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.template.$put>,
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
  const mutationDefaults = getPutWikiRestApiTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getPostWikiRestApiTemplateMutationKey() {
  return ['wiki', '/wiki/rest/api/template', 'POST'] as const
}

export function getPostWikiRestApiTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wiki.rest.api.template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wiki.rest.api.template.$post>) {
      return parseResponse(client.wiki.rest.api.template.$post(args, options))
    },
  })
}

export function usePostWikiRestApiTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.wiki.rest.api.template.$post>,
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
  const mutationDefaults = getPostWikiRestApiTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getWikiRestApiTemplateBlueprintQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>>,
) {
  return ['wiki', '/wiki/rest/api/template/blueprint', toValue(args)] as const
}

export function getWikiRestApiTemplateBlueprintQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiTemplateBlueprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.template.blueprint.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiTemplateBlueprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiTemplateBlueprintQueryKey>
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
          Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiTemplateBlueprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiTemplateBlueprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.template.blueprint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiTemplatePageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.page.$get>>,
) {
  return ['wiki', '/wiki/rest/api/template/page', toValue(args)] as const
}

export function getWikiRestApiTemplatePageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.page.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiTemplatePageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.template.page.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiTemplatePage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.template.page.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiTemplatePageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiTemplatePageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiTemplatePageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.template.page.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiTemplateContentTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/template/:contentTemplateId', toValue(args)] as const
}

export function getWikiRestApiTemplateContentTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiTemplateContentTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.template[':contentTemplateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiTemplateContentTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiTemplateContentTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiTemplateContentTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiTemplateContentTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.template[':contentTemplateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWikiRestApiTemplateContentTemplateIdMutationKey() {
  return ['wiki', '/wiki/rest/api/template/:contentTemplateId', 'DELETE'] as const
}

export function getDeleteWikiRestApiTemplateContentTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiTemplateContentTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.template[':contentTemplateId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiTemplateContentTemplateId<
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
                      (typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiTemplateContentTemplateIdMutationOptions<
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

export function getWikiRestApiUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user', toValue(args)] as const
}

export function getWikiRestApiUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiUserQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserAnonymousQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/anonymous', toValue(args)] as const
}

export function getWikiRestApiUserAnonymousQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserAnonymousQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.anonymous.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserAnonymous<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserAnonymousQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserAnonymousQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserAnonymousQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.anonymous.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserCurrentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.current.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/current', toValue(args)] as const
}

export function getWikiRestApiUserCurrentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.current.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.current.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserCurrentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserMemberofQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/memberof', toValue(args)] as const
}

export function getWikiRestApiUserMemberofQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserMemberofQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.memberof.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserMemberof<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserMemberofQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserMemberofQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserMemberofQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.memberof.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserBulkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/bulk', toValue(args)] as const
}

export function getWikiRestApiUserBulkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserBulkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.bulk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiUserBulkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserBulkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserBulkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.bulk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserWatchContentContentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', toValue(args)] as const
}

export function getWikiRestApiUserWatchContentContentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserWatchContentContentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.watch.content[':contentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserWatchContentContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserWatchContentContentIdQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserWatchContentContentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserWatchContentContentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.watch.content[':contentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiUserWatchContentContentIdMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', 'POST'] as const
}

export function getPostWikiRestApiUserWatchContentContentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiUserWatchContentContentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user.watch.content[':contentId'].$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiUserWatchContentContentId<
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
                      (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiUserWatchContentContentIdMutationOptions<
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

export function getDeleteWikiRestApiUserWatchContentContentIdMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', 'DELETE'] as const
}

export function getDeleteWikiRestApiUserWatchContentContentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiUserWatchContentContentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user.watch.content[':contentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiUserWatchContentContentId<
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
                      (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']
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
  const mutationDefaults = getDeleteWikiRestApiUserWatchContentContentIdMutationOptions<
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

export function getWikiRestApiUserWatchLabelLabelNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', toValue(args)] as const
}

export function getWikiRestApiUserWatchLabelLabelNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserWatchLabelLabelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.watch.label[':labelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserWatchLabelLabelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserWatchLabelLabelNameQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserWatchLabelLabelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserWatchLabelLabelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.watch.label[':labelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiUserWatchLabelLabelNameMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', 'POST'] as const
}

export function getPostWikiRestApiUserWatchLabelLabelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiUserWatchLabelLabelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.user.watch.label[':labelName'].$post(args, options))
    },
  })
}

export function usePostWikiRestApiUserWatchLabelLabelName<
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
                      (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiUserWatchLabelLabelNameMutationOptions<
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

export function getDeleteWikiRestApiUserWatchLabelLabelNameMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', 'DELETE'] as const
}

export function getDeleteWikiRestApiUserWatchLabelLabelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiUserWatchLabelLabelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user.watch.label[':labelName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiUserWatchLabelLabelName<
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
                      (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiUserWatchLabelLabelNameMutationOptions<
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

export function getWikiRestApiUserWatchSpaceSpaceKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', toValue(args)] as const
}

export function getWikiRestApiUserWatchSpaceSpaceKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserWatchSpaceSpaceKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.watch.space[':spaceKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserWatchSpaceSpaceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserWatchSpaceSpaceKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserWatchSpaceSpaceKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserWatchSpaceSpaceKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.watch.space[':spaceKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestApiUserWatchSpaceSpaceKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', 'POST'] as const
}

export function getPostWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiUserWatchSpaceSpaceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>,
    ) {
      return parseResponse(client.wiki.rest.api.user.watch.space[':spaceKey'].$post(args, options))
    },
  })
}

export function usePostWikiRestApiUserWatchSpaceSpaceKey<
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
                    ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>,
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
  const mutationDefaults = getPostWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
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

export function getDeleteWikiRestApiUserWatchSpaceSpaceKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', 'DELETE'] as const
}

export function getDeleteWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiUserWatchSpaceSpaceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user.watch.space[':spaceKey'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiUserWatchSpaceSpaceKey<
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
                      (typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']>,
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
  const mutationDefaults = getDeleteWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
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

export function getWikiRestApiUserEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/email', toValue(args)] as const
}

export function getWikiRestApiUserEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.email.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
            >
          >,
          ReturnType<typeof getWikiRestApiUserEmailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.email.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserEmailBulkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>>,
) {
  return ['wiki', '/wiki/rest/api/user/email/bulk', toValue(args)] as const
}

export function getWikiRestApiUserEmailBulkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserEmailBulkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user.email.bulk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserEmailBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserEmailBulkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserEmailBulkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserEmailBulkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user.email.bulk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestAtlassianConnect1AppModuleDynamicQueryKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic'] as const
}

export function getWikiRestAtlassianConnect1AppModuleDynamicQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getWikiRestAtlassianConnect1AppModuleDynamicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestAtlassianConnect1AppModuleDynamic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
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
                    (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestAtlassianConnect1AppModuleDynamicQueryKey>
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
              (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestAtlassianConnect1AppModuleDynamicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWikiRestAtlassianConnect1AppModuleDynamicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWikiRestAtlassianConnect1AppModuleDynamicMutationKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic', 'POST'] as const
}

export function getPostWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestAtlassianConnect1AppModuleDynamicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$post(args, options),
      )
    },
  })
}

export function usePostWikiRestAtlassianConnect1AppModuleDynamic<
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
                    (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
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
  const mutationDefaults = getPostWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
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

export function getDeleteWikiRestAtlassianConnect1AppModuleDynamicMutationKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic', 'DELETE'] as const
}

export function getDeleteWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestAtlassianConnect1AppModuleDynamicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestAtlassianConnect1AppModuleDynamic<
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
                      (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
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
  const mutationDefaults = getDeleteWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
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

export function getWikiRestApiAnalyticsContentContentIdViewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/views', toValue(args)] as const
}

export function getWikiRestApiAnalyticsContentContentIdViewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiAnalyticsContentContentIdViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.analytics.content[':contentId'].views.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAnalyticsContentContentIdViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']>
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
                    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
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
                    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiAnalyticsContentContentIdViewsQueryKey>
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
              (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAnalyticsContentContentIdViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiAnalyticsContentContentIdViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.analytics.content[':contentId'].views.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiAnalyticsContentContentIdViewersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
    >
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/viewers', toValue(args)] as const
}

export function getWikiRestApiAnalyticsContentContentIdViewersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiAnalyticsContentContentIdViewersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiAnalyticsContentContentIdViewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
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
                    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
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
                    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiAnalyticsContentContentIdViewersQueryKey>
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
              (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAnalyticsContentContentIdViewersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiAnalyticsContentContentIdViewersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserUserIdPropertyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property', toValue(args)] as const
}

export function getWikiRestApiUserUserIdPropertyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserUserIdPropertyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserUserIdProperty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>
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
                  ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserUserIdPropertyQueryKey>
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
          Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserUserIdPropertyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserUserIdPropertyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user[':userId'].property.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikiRestApiUserUserIdPropertyKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
  >,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', toValue(args)] as const
}

export function getWikiRestApiUserUserIdPropertyKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikiRestApiUserUserIdPropertyKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikiRestApiUserUserIdPropertyKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
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
                    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']
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
                    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWikiRestApiUserUserIdPropertyKeyQueryKey>
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
            ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserUserIdPropertyKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikiRestApiUserUserIdPropertyKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWikiRestApiUserUserIdPropertyKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'PUT'] as const
}

export function getPutWikiRestApiUserUserIdPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWikiRestApiUserUserIdPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property[':key'].$put(args, options),
      )
    },
  })
}

export function usePutWikiRestApiUserUserIdPropertyKey<
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
                      (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']
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
  const mutationDefaults = getPutWikiRestApiUserUserIdPropertyKeyMutationOptions<
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

export function getPostWikiRestApiUserUserIdPropertyKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'POST'] as const
}

export function getPostWikiRestApiUserUserIdPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWikiRestApiUserUserIdPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property[':key'].$post(args, options),
      )
    },
  })
}

export function usePostWikiRestApiUserUserIdPropertyKey<
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
                    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']
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
  const mutationDefaults = getPostWikiRestApiUserUserIdPropertyKeyMutationOptions<
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

export function getDeleteWikiRestApiUserUserIdPropertyKeyMutationKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'DELETE'] as const
}

export function getDeleteWikiRestApiUserUserIdPropertyKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWikiRestApiUserUserIdPropertyKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property[':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWikiRestApiUserUserIdPropertyKey<
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
                      (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
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
  const mutationDefaults = getDeleteWikiRestApiUserUserIdPropertyKeyMutationOptions<
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
