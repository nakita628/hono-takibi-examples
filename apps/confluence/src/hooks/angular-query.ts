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

export function getWikiKey() {
  return ['wiki'] as const
}

export function getWikiRestApiAuditQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit', args] as const
}

export function getWikiRestApiAuditQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wiki.rest.api.audit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditQueryKey>
  >({
    queryKey: getWikiRestApiAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.audit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.audit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiAuditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWikiRestApiAudit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.audit.$post>,
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
    const mutationDefaults = getPostWikiRestApiAuditMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWikiRestApiAuditExportQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit/export', args] as const
}

export function getWikiRestApiAuditExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditExportQueryKey>
  >({
    queryKey: getWikiRestApiAuditExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.audit.export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiAuditExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiAuditExportQueryKey>
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
      ...getWikiRestApiAuditExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiAuditRetentionQueryKey() {
  return ['wiki', '/wiki/rest/api/audit/retention'] as const
}

export function getWikiRestApiAuditRetentionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditRetentionQueryKey>
  >({
    queryKey: getWikiRestApiAuditRetentionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.audit.retention.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiAuditRetention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiAuditRetentionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiAuditRetentionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutWikiRestApiAuditRetention<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiAuditRetentionMutationOptions<
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

export function getWikiRestApiAuditSinceQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit/since', args] as const
}

export function getWikiRestApiAuditSinceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiAuditSinceQueryKey>
  >({
    queryKey: getWikiRestApiAuditSinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.audit.since.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiAuditSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiAuditSinceQueryKey>
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
      ...getWikiRestApiAuditSinceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiContentArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentArchiveMutationOptions<
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

export function injectPutWikiRestApiContentBlueprintInstanceDraftId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
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

export function injectPostWikiRestApiContentBlueprintInstanceDraftId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentBlueprintInstanceDraftIdMutationOptions<
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

export function getWikiRestApiContentSearchQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
) {
  return ['wiki', '/wiki/rest/api/content/search', args] as const
}

export function getWikiRestApiContentSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiContentSearchQueryKey>
  >({
    queryKey: getWikiRestApiContentSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiContentSearchQueryKey>
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
      ...getWikiRestApiContentSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteWikiRestApiContentIdPageTree<
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
                ReturnType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>,
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
    const mutationDefaults = getDeleteWikiRestApiContentIdPageTreeMutationOptions<
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

export function injectPutWikiRestApiContentPageIdMovePositionTargetId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiContentPageIdMovePositionTargetIdMutationOptions<
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

export function injectPutWikiRestApiContentIdChildAttachment<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiContentIdChildAttachmentMutationOptions<
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

export function injectPostWikiRestApiContentIdChildAttachment<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdChildAttachmentMutationOptions<
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

export function injectPutWikiRestApiContentIdChildAttachmentAttachmentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiContentIdChildAttachmentAttachmentIdMutationOptions<
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

export function injectPostWikiRestApiContentIdChildAttachmentAttachmentIdData<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataMutationOptions<
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

export function getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/child/attachment/:attachmentId/download',
    args,
  ] as const
}

export function getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdChildAttachmentAttachmentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdDescendantQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant', args] as const
}

export function getWikiRestApiContentIdDescendantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdDescendantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].descendant.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdDescendant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiContentIdDescendantQueryKey>
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
      ...getWikiRestApiContentIdDescendantQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdDescendantTypeQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant/:type', args] as const
}

export function getWikiRestApiContentIdDescendantTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdDescendantTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].descendant[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdDescendantType<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiContentIdDescendantTypeQueryKey>
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
      ...getWikiRestApiContentIdDescendantTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId', args] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdHistoryVersionMacroIdMacroId<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdHistoryVersionMacroIdMacroIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/:to',
    args,
  ] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertTo<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/async/:to',
    args,
  ] as const
}

export function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert.async[
          ':to'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncTo<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiContentIdLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdLabelMutationOptions<
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

export function injectDeleteWikiRestApiContentIdLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiContentIdLabelMutationOptions<
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

export function injectDeleteWikiRestApiContentIdLabelLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiContentIdLabelLabelMutationOptions<
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

export function getWikiRestApiContentIdNotificationChildCreatedQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/child-created', args] as const
}

export function getWikiRestApiContentIdNotificationChildCreatedQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdNotificationChildCreatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].notification['child-created'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdNotificationChildCreated<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdNotificationChildCreatedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdNotificationCreatedQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/created', args] as const
}

export function getWikiRestApiContentIdNotificationCreatedQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdNotificationCreatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].notification.created.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdNotificationCreated<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdNotificationCreatedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiContentIdPagehierarchyCopy<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdPagehierarchyCopyMutationOptions<
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

export function injectPostWikiRestApiContentIdCopy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdCopyMutationOptions<
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

export function injectPostWikiRestApiContentIdPermissionCheck<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdPermissionCheckMutationOptions<
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

export function getWikiRestApiContentIdRestrictionQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', args] as const
}

export function getWikiRestApiContentIdRestrictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdRestrictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiContentIdRestrictionQueryKey>
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
      ...getWikiRestApiContentIdRestrictionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiContentIdRestriction<
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
                ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>,
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
    const mutationDefaults = getPutWikiRestApiContentIdRestrictionMutationOptions<
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

export function injectPostWikiRestApiContentIdRestriction<
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
                ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>,
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
    const mutationDefaults = getPostWikiRestApiContentIdRestrictionMutationOptions<
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

export function injectDeleteWikiRestApiContentIdRestriction<
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
                ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>,
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
    const mutationDefaults = getDeleteWikiRestApiContentIdRestrictionMutationOptions<
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

export function getWikiRestApiContentIdRestrictionByOperationQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction/byOperation', args] as const
}

export function getWikiRestApiContentIdRestrictionByOperationQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdRestrictionByOperationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdRestrictionByOperation<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdRestrictionByOperationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey', args] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdRestrictionByOperationOperationKey<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdRestrictionByOperationOperationKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    args,
  ] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
          ':groupId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
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

export function injectDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdMutationOptions<
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

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    args,
  ] as const
}

export function getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdRestrictionByOperationOperationKeyUserQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
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

export function injectDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserMutationOptions<
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

export function getWikiRestApiContentIdStateQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state', args] as const
}

export function getWikiRestApiContentIdStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentIdStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiContentIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiContentIdStateMutationOptions<
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

export function injectDeleteWikiRestApiContentIdState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiContentIdStateMutationOptions<
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

export function getWikiRestApiContentIdStateAvailableQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state/available', args] as const
}

export function getWikiRestApiContentIdStateAvailableQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentIdStateAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.content[':id'].state.available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentIdStateAvailable<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiContentIdStateAvailableQueryKey>
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
      ...getWikiRestApiContentIdStateAvailableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiContentIdVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiContentIdVersionMutationOptions<
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

export function injectDeleteWikiRestApiContentIdVersionVersionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiContentIdVersionVersionNumberMutationOptions<
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

export function getWikiRestApiContentStatesQueryKey() {
  return ['wiki', '/wiki/rest/api/content-states'] as const
}

export function getWikiRestApiContentStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentStatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api['content-states'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiContentStatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWikiRestApiContentbodyConvertAsyncTo<
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
                ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>,
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
    const mutationDefaults = getPostWikiRestApiContentbodyConvertAsyncToMutationOptions<
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

export function getWikiRestApiContentbodyConvertAsyncIdQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/:id', args] as const
}

export function getWikiRestApiContentbodyConvertAsyncIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentbodyConvertAsyncIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentbodyConvertAsyncId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiContentbodyConvertAsyncIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/bulk/tasks', args] as const
}

export function getWikiRestApiContentbodyConvertAsyncBulkTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiContentbodyConvertAsyncBulkTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiContentbodyConvertAsyncBulkTasksQueryKey>
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
      ...getWikiRestApiContentbodyConvertAsyncBulkTasksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiContentbodyConvertAsyncBulkTasks<
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
                ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>,
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
    const mutationDefaults = getPostWikiRestApiContentbodyConvertAsyncBulkTasksMutationOptions<
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

export function getWikiRestApiLabelQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.label.$get>,
) {
  return ['wiki', '/wiki/rest/api/label', args] as const
}

export function getWikiRestApiLabelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wiki.rest.api.label.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiLabelQueryKey>
  >({
    queryKey: getWikiRestApiLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.label.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.label.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiLabelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWikiRestApiGroupQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.group.$get>,
) {
  return ['wiki', '/wiki/rest/api/group', args] as const
}

export function getWikiRestApiGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wiki.rest.api.group.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupQueryKey>
  >({
    queryKey: getWikiRestApiGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.group.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.group.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiGroupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWikiRestApiGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.group.$post>,
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
    const mutationDefaults = getPostWikiRestApiGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWikiRestApiGroupByIdQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/group/by-id', args] as const
}

export function getWikiRestApiGroupByIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiGroupByIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.group['by-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiGroupById<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiGroupByIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteWikiRestApiGroupById<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiGroupByIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWikiRestApiGroupPickerQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
) {
  return ['wiki', '/wiki/rest/api/group/picker', args] as const
}

export function getWikiRestApiGroupPickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiGroupPickerQueryKey>
  >({
    queryKey: getWikiRestApiGroupPickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.group.picker.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiGroupPicker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiGroupPickerQueryKey>
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
      ...getWikiRestApiGroupPickerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/group/:groupId/membersByGroupId', args] as const
}

export function getWikiRestApiGroupGroupIdMembersByGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiGroupGroupIdMembersByGroupId<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiGroupGroupIdMembersByGroupIdQueryKey>
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
      ...getWikiRestApiGroupGroupIdMembersByGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiGroupUserByGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiGroupUserByGroupIdMutationOptions<
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

export function injectDeleteWikiRestApiGroupUserByGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiGroupUserByGroupIdMutationOptions<
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

export function getWikiRestApiLongtaskQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
) {
  return ['wiki', '/wiki/rest/api/longtask', args] as const
}

export function getWikiRestApiLongtaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiLongtaskQueryKey>
  >({
    queryKey: getWikiRestApiLongtaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.longtask.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiLongtask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiLongtaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiLongtaskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWikiRestApiLongtaskIdQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/longtask/:id', args] as const
}

export function getWikiRestApiLongtaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiLongtaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.longtask[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiLongtaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiLongtaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType',
    args,
  ] as const
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetType<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryKey
        >
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
      ...getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    args,
  ] as const
}

export function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
          ':targetType'
        ][':targetKey'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
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

export function injectDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyMutationOptions<
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

export function getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
) {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/to/:targetType/:targetKey/from/:sourceType',
    args,
  ] as const
}

export function getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
          ':sourceType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceType<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryKey
        >
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
      ...getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSearchQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.search.$get>,
) {
  return ['wiki', '/wiki/rest/api/search', args] as const
}

export function getWikiRestApiSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wiki.rest.api.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSearchQueryKey>
  >({
    queryKey: getWikiRestApiSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWikiRestApiSearchUserQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
) {
  return ['wiki', '/wiki/rest/api/search/user', args] as const
}

export function getWikiRestApiSearchUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSearchUserQueryKey>
  >({
    queryKey: getWikiRestApiSearchUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.search.user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSearchUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiSearchUserQueryKey>
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
      ...getWikiRestApiSearchUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSettingsLookandfeelQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
) {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel', args] as const
}

export function getWikiRestApiSettingsLookandfeelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSettingsLookandfeelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.settings.lookandfeel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSettingsLookandfeel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSettingsLookandfeelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiSettingsLookandfeel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiSettingsLookandfeelMutationOptions<
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

export function injectPostWikiRestApiSettingsLookandfeelCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiSettingsLookandfeelCustomMutationOptions<
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

export function injectDeleteWikiRestApiSettingsLookandfeelCustom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiSettingsLookandfeelCustomMutationOptions<
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

export function getWikiRestApiSettingsSystemInfoQueryKey() {
  return ['wiki', '/wiki/rest/api/settings/systemInfo'] as const
}

export function getWikiRestApiSettingsSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSettingsSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.settings.systemInfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSettingsSystemInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSettingsSystemInfoQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSettingsThemeQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
) {
  return ['wiki', '/wiki/rest/api/settings/theme', args] as const
}

export function getWikiRestApiSettingsThemeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiSettingsThemeQueryKey>
  >({
    queryKey: getWikiRestApiSettingsThemeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.settings.theme.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSettingsTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiSettingsThemeQueryKey>
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
      ...getWikiRestApiSettingsThemeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSettingsThemeSelectedQueryKey() {
  return ['wiki', '/wiki/rest/api/settings/theme/selected'] as const
}

export function getWikiRestApiSettingsThemeSelectedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSettingsThemeSelectedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.settings.theme.selected.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSettingsThemeSelected<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSettingsThemeSelectedQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSettingsThemeThemeKeyQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/settings/theme/:themeKey', args] as const
}

export function getWikiRestApiSettingsThemeThemeKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSettingsThemeThemeKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.settings.theme[':themeKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSettingsThemeThemeKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSettingsThemeThemeKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiSpace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.space.$post>,
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
    const mutationDefaults = getPostWikiRestApiSpaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiSpacePrivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiSpacePrivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiSpaceSpaceKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiSpaceSpaceKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWikiRestApiSpaceSpaceKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyMutationOptions<
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

export function injectPostWikiRestApiSpaceSpaceKeyPermission<
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
                ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>,
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
    const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyPermissionMutationOptions<
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

export function injectPostWikiRestApiSpaceSpaceKeyPermissionCustomContent<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentMutationOptions<
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

export function injectDeleteWikiRestApiSpaceSpaceKeyPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyPermissionIdMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeySettingsQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/settings', args] as const
}

export function getWikiRestApiSpaceSpaceKeySettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeySettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiSpaceSpaceKeySettingsQueryKey>
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
      ...getWikiRestApiSpaceSpaceKeySettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiSpaceSpaceKeySettings<
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
                ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>,
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
    const mutationDefaults = getPutWikiRestApiSpaceSpaceKeySettingsMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeyStateQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state', args] as const
}

export function getWikiRestApiSpaceSpaceKeyStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSpaceSpaceKeyStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/settings', args] as const
}

export function getWikiRestApiSpaceSpaceKeyStateSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyStateSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyStateSettings<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSpaceSpaceKeyStateSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSpaceSpaceKeyStateContentQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/content', args] as const
}

export function getWikiRestApiSpaceSpaceKeyStateContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyStateContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].state.content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyStateContent<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiSpaceSpaceKeyStateContentQueryKey>
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
      ...getWikiRestApiSpaceSpaceKeyStateContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSpaceSpaceKeyThemeQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', args] as const
}

export function getWikiRestApiSpaceSpaceKeyThemeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyThemeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].theme.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyTheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSpaceSpaceKeyThemeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiSpaceSpaceKeyTheme<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWikiRestApiSpaceSpaceKeyThemeMutationOptions<
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

export function injectDeleteWikiRestApiSpaceSpaceKeyTheme<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyThemeMutationOptions<
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

export function getWikiRestApiSpaceSpaceKeyWatchQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/watch', args] as const
}

export function getWikiRestApiSpaceSpaceKeyWatchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyWatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].watch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyWatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSpaceSpaceKeyWatchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiSpaceSpaceKeyLabelQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', args] as const
}

export function getWikiRestApiSpaceSpaceKeyLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiSpaceSpaceKeyLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.space[':spaceKey'].label.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiSpaceSpaceKeyLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiSpaceSpaceKeyLabelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiSpaceSpaceKeyLabel<
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
                ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>,
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
    const mutationDefaults = getPostWikiRestApiSpaceSpaceKeyLabelMutationOptions<
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

export function injectDeleteWikiRestApiSpaceSpaceKeyLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiSpaceSpaceKeyLabelMutationOptions<
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

export function injectPutWikiRestApiTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.template.$put>,
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
    const mutationDefaults = getPutWikiRestApiTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wiki.rest.api.template.$post>,
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
    const mutationDefaults = getPostWikiRestApiTemplateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWikiRestApiTemplateBlueprintQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
) {
  return ['wiki', '/wiki/rest/api/template/blueprint', args] as const
}

export function getWikiRestApiTemplateBlueprintQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiTemplateBlueprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.template.blueprint.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiTemplateBlueprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiTemplateBlueprintQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiTemplatePageQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
) {
  return ['wiki', '/wiki/rest/api/template/page', args] as const
}

export function getWikiRestApiTemplatePageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiTemplatePageQueryKey>
  >({
    queryKey: getWikiRestApiTemplatePageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.template.page.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiTemplatePage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiTemplatePageQueryKey>
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
      ...getWikiRestApiTemplatePageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiTemplateContentTemplateIdQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/template/:contentTemplateId', args] as const
}

export function getWikiRestApiTemplateContentTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiTemplateContentTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.template[':contentTemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiTemplateContentTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiTemplateContentTemplateIdQueryKey>
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
      ...getWikiRestApiTemplateContentTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteWikiRestApiTemplateContentTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiTemplateContentTemplateIdMutationOptions<
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

export function getWikiRestApiUserQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.$get>,
) {
  return ['wiki', '/wiki/rest/api/user', args] as const
}

export function getWikiRestApiUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wiki.rest.api.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserQueryKey>
  >({
    queryKey: getWikiRestApiUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWikiRestApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWikiRestApiUserAnonymousQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/anonymous', args] as const
}

export function getWikiRestApiUserAnonymousQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserAnonymousQueryKey>
  >({
    queryKey: getWikiRestApiUserAnonymousQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.anonymous.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserAnonymous<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserAnonymousQueryKey>
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
      ...getWikiRestApiUserAnonymousQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserCurrentQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/current', args] as const
}

export function getWikiRestApiUserCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserCurrentQueryKey>
  >({
    queryKey: getWikiRestApiUserCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserCurrentQueryKey>
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
      ...getWikiRestApiUserCurrentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserMemberofQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/memberof', args] as const
}

export function getWikiRestApiUserMemberofQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserMemberofQueryKey>
  >({
    queryKey: getWikiRestApiUserMemberofQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.memberof.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserMemberof<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserMemberofQueryKey>
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
      ...getWikiRestApiUserMemberofQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserBulkQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/bulk', args] as const
}

export function getWikiRestApiUserBulkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserBulkQueryKey>
  >({
    queryKey: getWikiRestApiUserBulkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.bulk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserBulkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikiRestApiUserBulkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWikiRestApiUserWatchContentContentIdQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', args] as const
}

export function getWikiRestApiUserWatchContentContentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiUserWatchContentContentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.watch.content[':contentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserWatchContentContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiUserWatchContentContentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiUserWatchContentContentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiUserWatchContentContentIdMutationOptions<
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

export function injectDeleteWikiRestApiUserWatchContentContentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']>,
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
    const mutationDefaults = getDeleteWikiRestApiUserWatchContentContentIdMutationOptions<
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

export function getWikiRestApiUserWatchLabelLabelNameQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', args] as const
}

export function getWikiRestApiUserWatchLabelLabelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiUserWatchLabelLabelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.watch.label[':labelName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserWatchLabelLabelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiUserWatchLabelLabelNameQueryKey>
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
      ...getWikiRestApiUserWatchLabelLabelNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiUserWatchLabelLabelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiUserWatchLabelLabelNameMutationOptions<
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

export function injectDeleteWikiRestApiUserWatchLabelLabelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiUserWatchLabelLabelNameMutationOptions<
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

export function getWikiRestApiUserWatchSpaceSpaceKeyQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', args] as const
}

export function getWikiRestApiUserWatchSpaceSpaceKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiUserWatchSpaceSpaceKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.watch.space[':spaceKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserWatchSpaceSpaceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiUserWatchSpaceSpaceKeyQueryKey>
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
      ...getWikiRestApiUserWatchSpaceSpaceKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestApiUserWatchSpaceSpaceKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
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

export function injectDeleteWikiRestApiUserWatchSpaceSpaceKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiUserWatchSpaceSpaceKeyMutationOptions<
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

export function getWikiRestApiUserEmailQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/email', args] as const
}

export function getWikiRestApiUserEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserEmailQueryKey>
  >({
    queryKey: getWikiRestApiUserEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.email.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserEmailQueryKey>
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
      ...getWikiRestApiUserEmailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserEmailBulkQueryKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/email/bulk', args] as const
}

export function getWikiRestApiUserEmailBulkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikiRestApiUserEmailBulkQueryKey>
  >({
    queryKey: getWikiRestApiUserEmailBulkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user.email.bulk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserEmailBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikiRestApiUserEmailBulkQueryKey>
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
      ...getWikiRestApiUserEmailBulkQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestAtlassianConnect1AppModuleDynamicQueryKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic'] as const
}

export function getWikiRestAtlassianConnect1AppModuleDynamicQueryOptions<
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
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestAtlassianConnect1AppModuleDynamicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestAtlassianConnect1AppModuleDynamic<
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
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestAtlassianConnect1AppModuleDynamicQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostWikiRestAtlassianConnect1AppModuleDynamic<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
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

export function injectDeleteWikiRestAtlassianConnect1AppModuleDynamic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestAtlassianConnect1AppModuleDynamicMutationOptions<
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

export function getWikiRestApiAnalyticsContentContentIdViewsQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/views', args] as const
}

export function getWikiRestApiAnalyticsContentContentIdViewsQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiAnalyticsContentContentIdViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.analytics.content[':contentId'].views.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiAnalyticsContentContentIdViews<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiAnalyticsContentContentIdViewsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiAnalyticsContentContentIdViewersQueryKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/viewers', args] as const
}

export function getWikiRestApiAnalyticsContentContentIdViewersQueryOptions<
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
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiAnalyticsContentContentIdViewersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiAnalyticsContentContentIdViewers<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiAnalyticsContentContentIdViewersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserUserIdPropertyQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property', args] as const
}

export function getWikiRestApiUserUserIdPropertyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiUserUserIdPropertyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserUserIdProperty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWikiRestApiUserUserIdPropertyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWikiRestApiUserUserIdPropertyKeyQueryKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', args] as const
}

export function getWikiRestApiUserUserIdPropertyKeyQueryOptions<
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
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWikiRestApiUserUserIdPropertyKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wiki.rest.api.user[':userId'].property[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWikiRestApiUserUserIdPropertyKey<
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
  args: () => InferRequestType<
    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getWikiRestApiUserUserIdPropertyKeyQueryKey>
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
      ...getWikiRestApiUserUserIdPropertyKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutWikiRestApiUserUserIdPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']>,
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
    const mutationDefaults = getPutWikiRestApiUserUserIdPropertyKeyMutationOptions<
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

export function injectPostWikiRestApiUserUserIdPropertyKey<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWikiRestApiUserUserIdPropertyKeyMutationOptions<
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

export function injectDeleteWikiRestApiUserUserIdPropertyKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWikiRestApiUserUserIdPropertyKeyMutationOptions<
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
