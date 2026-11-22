import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWikiKey() {
  return ['wiki'] as const
}

export function getGetWikiRestApiAuditKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit', args] as const
}

export function useGetWikiRestApiAudit<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
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
        ? getGetWikiRestApiAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAudit<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
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
        ? getGetWikiRestApiAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiAuditKey() {
  return ['wiki', '/wiki/rest/api/audit', 'POST'] as const
}

export function usePostWikiRestApiAudit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.audit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiAuditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.audit.$post> }) =>
        parseResponse(client.wiki.rest.api.audit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiAuditExportKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit/export', args] as const
}

export function useGetWikiRestApiAuditExport<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
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
        ? getGetWikiRestApiAuditExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAuditExport<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
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
        ? getGetWikiRestApiAuditExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.export.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiAuditRetentionKey() {
  return ['wiki', '/wiki/rest/api/audit/retention'] as const
}

export function useGetWikiRestApiAuditRetention<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiAuditRetentionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.audit.retention.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAuditRetention<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiAuditRetentionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.audit.retention.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiAuditRetentionKey() {
  return ['wiki', '/wiki/rest/api/audit/retention', 'PUT'] as const
}

export function usePutWikiRestApiAuditRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.retention.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.audit.retention.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiAuditRetentionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.audit.retention.$put> },
      ) => parseResponse(client.wiki.rest.api.audit.retention.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiAuditSinceKey(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
) {
  return ['wiki', '/wiki/rest/api/audit/since', args] as const
}

export function useGetWikiRestApiAuditSince<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
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
        ? getGetWikiRestApiAuditSinceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.since.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAuditSince<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
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
        ? getGetWikiRestApiAuditSinceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.audit.since.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.audit.since.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentArchiveKey() {
  return ['wiki', '/wiki/rest/api/content/archive', 'POST'] as const
}

export function usePostWikiRestApiContentArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.archive.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.content.archive.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.content.archive.$post> },
      ) => parseResponse(client.wiki.rest.api.content.archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiContentBlueprintInstanceDraftIdKey() {
  return ['wiki', '/wiki/rest/api/content/blueprint/instance/:draftId', 'PUT'] as const
}

export function usePutWikiRestApiContentBlueprintInstanceDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentBlueprintInstanceDraftIdKey()
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
            (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content.blueprint.instance[':draftId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentBlueprintInstanceDraftIdKey() {
  return ['wiki', '/wiki/rest/api/content/blueprint/instance/:draftId', 'POST'] as const
}

export function usePostWikiRestApiContentBlueprintInstanceDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentBlueprintInstanceDraftIdKey()
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
            (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content.blueprint.instance[':draftId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentSearchKey(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
) {
  return ['wiki', '/wiki/rest/api/content/search', args] as const
}

export function useGetWikiRestApiContentSearch<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
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
        ? getGetWikiRestApiContentSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.content.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentSearch<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
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
        ? getGetWikiRestApiContentSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.content.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.content.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdPageTreeKey() {
  return ['wiki', '/wiki/rest/api/content/:id/pageTree', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdPageTree<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdPageTreeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].pageTree.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiContentPageIdMovePositionTargetIdKey() {
  return ['wiki', '/wiki/rest/api/content/:pageId/move/:position/:targetId', 'PUT'] as const
}

export function usePutWikiRestApiContentPageIdMovePositionTargetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentPageIdMovePositionTargetIdKey()
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
            (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':pageId'].move[':position'][':targetId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdChildAttachmentKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment', 'PUT'] as const
}

export function usePutWikiRestApiContentIdChildAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentIdChildAttachmentKey()
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
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].child.attachment.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdChildAttachmentKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment', 'POST'] as const
}

export function usePostWikiRestApiContentIdChildAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdChildAttachmentKey()
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
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].child.attachment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdChildAttachmentAttachmentIdKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment/:attachmentId', 'PUT'] as const
}

export function usePutWikiRestApiContentIdChildAttachmentAttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentIdChildAttachmentAttachmentIdKey()
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
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataKey() {
  return ['wiki', '/wiki/rest/api/content/:id/child/attachment/:attachmentId/data', 'POST'] as const
}

export function usePostWikiRestApiContentIdChildAttachmentAttachmentIdData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdChildAttachmentAttachmentIdDataKey()
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
            (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].data.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdChildAttachmentAttachmentIdDownloadKey(
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

export function useGetWikiRestApiContentIdChildAttachmentAttachmentIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdChildAttachmentAttachmentIdDownloadKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
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
          client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdChildAttachmentAttachmentIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdChildAttachmentAttachmentIdDownloadKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
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
          client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdDescendantKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant', args] as const
}

export function useGetWikiRestApiContentIdDescendant<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
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
        ? getGetWikiRestApiContentIdDescendantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].descendant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdDescendant<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
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
        ? getGetWikiRestApiContentIdDescendantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].descendant.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdDescendantTypeKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/descendant/:type', args] as const
}

export function useGetWikiRestApiContentIdDescendantType<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdDescendantTypeKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
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
          client.wiki.rest.api.content[':id'].descendant[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdDescendantType<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdDescendantTypeKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
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
          client.wiki.rest.api.content[':id'].descendant[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId', args] as const
}

export function useGetWikiRestApiContentIdHistoryVersionMacroIdMacroId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdHistoryVersionMacroIdMacroId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToKey(
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

export function useGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertTo<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
            ':to'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToKey(
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

export function useGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[
            ':macroId'
          ].convert.async[':to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncTo<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
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
          client.wiki.rest.api.content[':id'].history[':version'].macro.id[
            ':macroId'
          ].convert.async[':to'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdLabelKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label', 'POST'] as const
}

export function usePostWikiRestApiContentIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].label.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdLabelKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].label.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdLabelLabelKey() {
  return ['wiki', '/wiki/rest/api/content/:id/label/:label', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdLabelLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdLabelLabelKey()
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
            (typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].label[':label'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdNotificationChildCreatedKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/child-created', args] as const
}

export function useGetWikiRestApiContentIdNotificationChildCreated<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdNotificationChildCreatedKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
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
          client.wiki.rest.api.content[':id'].notification['child-created'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdNotificationChildCreated<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdNotificationChildCreatedKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
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
          client.wiki.rest.api.content[':id'].notification['child-created'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdNotificationCreatedKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/notification/created', args] as const
}

export function useGetWikiRestApiContentIdNotificationCreated<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdNotificationCreatedKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
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
          client.wiki.rest.api.content[':id'].notification.created.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdNotificationCreated<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdNotificationCreatedKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
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
          client.wiki.rest.api.content[':id'].notification.created.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdPagehierarchyCopyKey() {
  return ['wiki', '/wiki/rest/api/content/:id/pagehierarchy/copy', 'POST'] as const
}

export function usePostWikiRestApiContentIdPagehierarchyCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdPagehierarchyCopyKey()
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
            (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].pagehierarchy.copy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdCopyKey() {
  return ['wiki', '/wiki/rest/api/content/:id/copy', 'POST'] as const
}

export function usePostWikiRestApiContentIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']> },
      ) => parseResponse(client.wiki.rest.api.content[':id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdPermissionCheckKey() {
  return ['wiki', '/wiki/rest/api/content/:id/permission/check', 'POST'] as const
}

export function usePostWikiRestApiContentIdPermissionCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdPermissionCheckKey()
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
            (typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].permission.check.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdRestrictionKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', args] as const
}

export function useGetWikiRestApiContentIdRestriction<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
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
        ? getGetWikiRestApiContentIdRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].restriction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdRestriction<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
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
        ? getGetWikiRestApiContentIdRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].restriction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdRestrictionKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'PUT'] as const
}

export function usePutWikiRestApiContentIdRestriction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentIdRestrictionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].restriction.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdRestrictionKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'POST'] as const
}

export function usePostWikiRestApiContentIdRestriction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdRestrictionKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['$post']
          >
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].restriction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdRestrictionKey() {
  return ['wiki', '/wiki/rest/api/content/:id/restriction', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdRestriction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdRestrictionKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']
          >
        },
      ) =>
        parseResponse(client.wiki.rest.api.content[':id'].restriction.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdRestrictionByOperationKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction/byOperation', args] as const
}

export function useGetWikiRestApiContentIdRestrictionByOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdRestrictionByOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdRestrictionByOperationOperationKeyKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey', args] as const
}

export function useGetWikiRestApiContentIdRestrictionByOperationOperationKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdRestrictionByOperationOperationKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey(
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

export function useGetWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
            ':groupId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
            ':groupId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    'PUT',
  ] as const
}

export function usePutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
            ':groupId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    'DELETE',
  ] as const
}

export function useDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
            ':groupId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey(
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

export function useGetWikiRestApiContentIdRestrictionByOperationOperationKeyUser<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey(args)
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
                (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
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
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    'PUT',
  ] as const
}

export function usePutWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey() {
  return [
    'wiki',
    '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    'DELETE',
  ] as const
}

export function useDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserKey()
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
            (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdStateKey(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state', args] as const
}

export function useGetWikiRestApiContentIdState<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
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
        ? getGetWikiRestApiContentIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdState<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
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
        ? getGetWikiRestApiContentIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.content[':id'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiContentIdStateKey() {
  return ['wiki', '/wiki/rest/api/content/:id/state', 'PUT'] as const
}

export function usePutWikiRestApiContentIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiContentIdStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']> },
      ) => parseResponse(client.wiki.rest.api.content[':id'].state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdStateKey() {
  return ['wiki', '/wiki/rest/api/content/:id/state', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].state.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentIdStateAvailableKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/content/:id/state/available', args] as const
}

export function useGetWikiRestApiContentIdStateAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
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
        ? getGetWikiRestApiContentIdStateAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.content[':id'].state.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentIdStateAvailable<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
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
        ? getGetWikiRestApiContentIdStateAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.content[':id'].state.available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentIdVersionKey() {
  return ['wiki', '/wiki/rest/api/content/:id/version', 'POST'] as const
}

export function usePostWikiRestApiContentIdVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentIdVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>
        },
      ) => parseResponse(client.wiki.rest.api.content[':id'].version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiContentIdVersionVersionNumberKey() {
  return ['wiki', '/wiki/rest/api/content/:id/version/:versionNumber', 'DELETE'] as const
}

export function useDeleteWikiRestApiContentIdVersionVersionNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiContentIdVersionVersionNumberKey()
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
            (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.content[':id'].version[':versionNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentStatesKey() {
  return ['wiki', '/wiki/rest/api/content-states'] as const
}

export function useGetWikiRestApiContentStates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiContentStatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api['content-states'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentStates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiContentStatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api)['content-states']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api['content-states'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentbodyConvertAsyncToKey() {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/:to', 'POST'] as const
}

export function usePostWikiRestApiContentbodyConvertAsyncTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentbodyConvertAsyncToKey()
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
            (typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async[':to'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiContentbodyConvertAsyncIdKey(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/:id', args] as const
}

export function useGetWikiRestApiContentbodyConvertAsyncId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
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
        ? getGetWikiRestApiContentbodyConvertAsyncIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentbodyConvertAsyncId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
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
        ? getGetWikiRestApiContentbodyConvertAsyncIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiContentbodyConvertAsyncBulkTasksKey(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
) {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/bulk/tasks', args] as const
}

export function useGetWikiRestApiContentbodyConvertAsyncBulkTasks<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
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
        ? getGetWikiRestApiContentbodyConvertAsyncBulkTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiContentbodyConvertAsyncBulkTasks<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
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
        ? getGetWikiRestApiContentbodyConvertAsyncBulkTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiContentbodyConvertAsyncBulkTasksKey() {
  return ['wiki', '/wiki/rest/api/contentbody/convert/async/bulk/tasks', 'POST'] as const
}

export function usePostWikiRestApiContentbodyConvertAsyncBulkTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiContentbodyConvertAsyncBulkTasksKey()
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
            typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiLabelKey(
  args: InferRequestType<typeof client.wiki.rest.api.label.$get>,
) {
  return ['wiki', '/wiki/rest/api/label', args] as const
}

export function useGetWikiRestApiLabel<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.label.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
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
        ? getGetWikiRestApiLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiLabel<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.label.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
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
        ? getGetWikiRestApiLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.label.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiGroupKey(
  args: InferRequestType<typeof client.wiki.rest.api.group.$get>,
) {
  return ['wiki', '/wiki/rest/api/group', args] as const
}

export function useGetWikiRestApiGroup<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
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
        ? getGetWikiRestApiGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiGroup<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
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
        ? getGetWikiRestApiGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiGroupKey() {
  return ['wiki', '/wiki/rest/api/group', 'POST'] as const
}

export function usePostWikiRestApiGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.group.$post> }) =>
        parseResponse(client.wiki.rest.api.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiGroupByIdKey(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/group/by-id', args] as const
}

export function useGetWikiRestApiGroupById<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
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
        ? getGetWikiRestApiGroupByIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group['by-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiGroupById<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
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
        ? getGetWikiRestApiGroupByIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group['by-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWikiRestApiGroupByIdKey() {
  return ['wiki', '/wiki/rest/api/group/by-id', 'DELETE'] as const
}

export function useDeleteWikiRestApiGroupById<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiGroupByIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']> },
      ) => parseResponse(client.wiki.rest.api.group['by-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiGroupPickerKey(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
) {
  return ['wiki', '/wiki/rest/api/group/picker', args] as const
}

export function useGetWikiRestApiGroupPicker<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
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
        ? getGetWikiRestApiGroupPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiGroupPicker<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
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
        ? getGetWikiRestApiGroupPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.group.picker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.group.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiGroupGroupIdMembersByGroupIdKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/group/:groupId/membersByGroupId', args] as const
}

export function useGetWikiRestApiGroupGroupIdMembersByGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiGroupGroupIdMembersByGroupIdKey(args)
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
                (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
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
          client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiGroupGroupIdMembersByGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiGroupGroupIdMembersByGroupIdKey(args)
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
                (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
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
          client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiGroupUserByGroupIdKey() {
  return ['wiki', '/wiki/rest/api/group/userByGroupId', 'POST'] as const
}

export function usePostWikiRestApiGroupUserByGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiGroupUserByGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post> },
      ) => parseResponse(client.wiki.rest.api.group.userByGroupId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiGroupUserByGroupIdKey() {
  return ['wiki', '/wiki/rest/api/group/userByGroupId', 'DELETE'] as const
}

export function useDeleteWikiRestApiGroupUserByGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.group.userByGroupId.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiGroupUserByGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete> },
      ) => parseResponse(client.wiki.rest.api.group.userByGroupId.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiLongtaskKey(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
) {
  return ['wiki', '/wiki/rest/api/longtask', args] as const
}

export function useGetWikiRestApiLongtask<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
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
        ? getGetWikiRestApiLongtaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.longtask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiLongtask<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
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
        ? getGetWikiRestApiLongtaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.longtask.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.longtask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiLongtaskIdKey(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/longtask/:id', args] as const
}

export function useGetWikiRestApiLongtaskId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
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
        ? getGetWikiRestApiLongtaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.longtask[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiLongtaskId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
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
        ? getGetWikiRestApiLongtaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.longtask[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeKey(
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

export function useGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
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
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
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
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey(
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

export function useGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
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
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ][':targetKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
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
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ][':targetKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey() {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    'PUT',
  ] as const
}

export function usePutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey()
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
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ][':targetKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey() {
  return [
    'wiki',
    '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    'DELETE',
  ] as const
}

export function useDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyKey()
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
            (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
            ':targetType'
          ][':targetKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeKey(
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

export function useGetWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
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
          client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
            ':sourceType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeKey(args)
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
                (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
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
          client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
            ':sourceType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSearchKey(
  args: InferRequestType<typeof client.wiki.rest.api.search.$get>,
) {
  return ['wiki', '/wiki/rest/api/search', args] as const
}

export function useGetWikiRestApiSearch<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
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
        ? getGetWikiRestApiSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSearch<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
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
        ? getGetWikiRestApiSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSearchUserKey(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
) {
  return ['wiki', '/wiki/rest/api/search/user', args] as const
}

export function useGetWikiRestApiSearchUser<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
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
        ? getGetWikiRestApiSearchUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.search.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSearchUser<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
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
        ? getGetWikiRestApiSearchUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.search.user.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.search.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSettingsLookandfeelKey(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
) {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel', args] as const
}

export function useGetWikiRestApiSettingsLookandfeel<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
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
        ? getGetWikiRestApiSettingsLookandfeelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.lookandfeel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSettingsLookandfeel<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
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
        ? getGetWikiRestApiSettingsLookandfeelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.lookandfeel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiSettingsLookandfeelKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel', 'PUT'] as const
}

export function usePutWikiRestApiSettingsLookandfeel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiSettingsLookandfeelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put> },
      ) => parseResponse(client.wiki.rest.api.settings.lookandfeel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiSettingsLookandfeelCustomKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel/custom', 'POST'] as const
}

export function usePostWikiRestApiSettingsLookandfeelCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSettingsLookandfeelCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post> },
      ) =>
        parseResponse(client.wiki.rest.api.settings.lookandfeel.custom.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiSettingsLookandfeelCustomKey() {
  return ['wiki', '/wiki/rest/api/settings/lookandfeel/custom', 'DELETE'] as const
}

export function useDeleteWikiRestApiSettingsLookandfeelCustom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiSettingsLookandfeelCustomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>
        },
      ) =>
        parseResponse(client.wiki.rest.api.settings.lookandfeel.custom.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiSettingsSystemInfoKey() {
  return ['wiki', '/wiki/rest/api/settings/systemInfo'] as const
}

export function useGetWikiRestApiSettingsSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiSettingsSystemInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.systemInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSettingsSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiSettingsSystemInfoKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.systemInfo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.systemInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSettingsThemeKey(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
) {
  return ['wiki', '/wiki/rest/api/settings/theme', args] as const
}

export function useGetWikiRestApiSettingsTheme<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
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
        ? getGetWikiRestApiSettingsThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.settings.theme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSettingsTheme<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
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
        ? getGetWikiRestApiSettingsThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.settings.theme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSettingsThemeSelectedKey() {
  return ['wiki', '/wiki/rest/api/settings/theme/selected'] as const
}

export function useGetWikiRestApiSettingsThemeSelected<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiSettingsThemeSelectedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.theme.selected.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSettingsThemeSelected<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestApiSettingsThemeSelectedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.settings.theme.selected.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.theme.selected.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSettingsThemeThemeKeyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/settings/theme/:themeKey', args] as const
}

export function useGetWikiRestApiSettingsThemeThemeKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
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
        ? getGetWikiRestApiSettingsThemeThemeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.theme[':themeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSettingsThemeThemeKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
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
        ? getGetWikiRestApiSettingsThemeThemeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.settings.theme[':themeKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiSpaceKey() {
  return ['wiki', '/wiki/rest/api/space', 'POST'] as const
}

export function usePostWikiRestApiSpace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.space.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSpaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.space.$post> }) =>
        parseResponse(client.wiki.rest.api.space.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiSpacePrivateKey() {
  return ['wiki', '/wiki/rest/api/space/_private', 'POST'] as const
}

export function usePostWikiRestApiSpacePrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.space._private.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.space._private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSpacePrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.space._private.$post> },
      ) => parseResponse(client.wiki.rest.api.space._private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiSpaceSpaceKeyKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey', 'PUT'] as const
}

export function usePutWikiRestApiSpaceSpaceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiSpaceSpaceKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']> },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiSpaceSpaceKeyKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey', 'DELETE'] as const
}

export function useDeleteWikiRestApiSpaceSpaceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiSpaceSpaceKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']> },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiSpaceSpaceKeyPermissionKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission', 'POST'] as const
}

export function usePostWikiRestApiSpaceSpaceKeyPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSpaceSpaceKeyPermissionKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']
          >
        },
      ) =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].permission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission/custom-content', 'POST'] as const
}

export function usePostWikiRestApiSpaceSpaceKeyPermissionCustomContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSpaceSpaceKeyPermissionCustomContentKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.space[':spaceKey'].permission['custom-content'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiSpaceSpaceKeyPermissionIdKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/permission/:id', 'DELETE'] as const
}

export function useDeleteWikiRestApiSpaceSpaceKeyPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiSpaceSpaceKeyPermissionIdKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.space[':spaceKey'].permission[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeySettingsKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/settings', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeySettings<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
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
        ? getGetWikiRestApiSpaceSpaceKeySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeySettings<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
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
        ? getGetWikiRestApiSpaceSpaceKeySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiSpaceSpaceKeySettingsKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/settings', 'PUT'] as const
}

export function usePutWikiRestApiSpaceSpaceKeySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiSpaceSpaceKeySettingsKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']
          >
        },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyStateKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyState<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyState<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyStateSettingsKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/settings', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyStateSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiSpaceSpaceKeyStateSettingsKey(args)
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
                (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
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
          client.wiki.rest.api.space[':spaceKey'].state.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyStateSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiSpaceSpaceKeyStateSettingsKey(args)
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
                (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
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
          client.wiki.rest.api.space[':spaceKey'].state.settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyStateContentKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/state/content', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyStateContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiSpaceSpaceKeyStateContentKey(args)
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
                (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
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
          client.wiki.rest.api.space[':spaceKey'].state.content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyStateContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiSpaceSpaceKeyStateContentKey(args)
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
                (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
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
          client.wiki.rest.api.space[':spaceKey'].state.content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyThemeKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyTheme<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyTheme<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyThemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiSpaceSpaceKeyThemeKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', 'PUT'] as const
}

export function usePutWikiRestApiSpaceSpaceKeyTheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiSpaceSpaceKeyThemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>
        },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiSpaceSpaceKeyThemeKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/theme', 'DELETE'] as const
}

export function useDeleteWikiRestApiSpaceSpaceKeyTheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiSpaceSpaceKeyThemeKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']
          >
        },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyWatchKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/watch', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyWatch<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyWatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].watch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyWatch<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyWatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].watch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiSpaceSpaceKeyLabelKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', args] as const
}

export function useGetWikiRestApiSpaceSpaceKeyLabel<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiSpaceSpaceKeyLabel<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
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
        ? getGetWikiRestApiSpaceSpaceKeyLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiSpaceSpaceKeyLabelKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', 'POST'] as const
}

export function usePostWikiRestApiSpaceSpaceKeyLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiSpaceSpaceKeyLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>
        },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiSpaceSpaceKeyLabelKey() {
  return ['wiki', '/wiki/rest/api/space/:spaceKey/label', 'DELETE'] as const
}

export function useDeleteWikiRestApiSpaceSpaceKeyLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiSpaceSpaceKeyLabelKey()
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
            (typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']
          >
        },
      ) => parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWikiRestApiTemplateKey() {
  return ['wiki', '/wiki/rest/api/template', 'PUT'] as const
}

export function usePutWikiRestApiTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.template.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.template.$put> },
      ) => parseResponse(client.wiki.rest.api.template.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiTemplateKey() {
  return ['wiki', '/wiki/rest/api/template', 'POST'] as const
}

export function usePostWikiRestApiTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wiki.rest.api.template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wiki.rest.api.template.$post> },
      ) => parseResponse(client.wiki.rest.api.template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiTemplateBlueprintKey(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
) {
  return ['wiki', '/wiki/rest/api/template/blueprint', args] as const
}

export function useGetWikiRestApiTemplateBlueprint<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
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
        ? getGetWikiRestApiTemplateBlueprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.template.blueprint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiTemplateBlueprint<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
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
        ? getGetWikiRestApiTemplateBlueprintKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.template.blueprint.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.template.blueprint.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiTemplatePageKey(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
) {
  return ['wiki', '/wiki/rest/api/template/page', args] as const
}

export function useGetWikiRestApiTemplatePage<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
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
        ? getGetWikiRestApiTemplatePageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.template.page.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiTemplatePage<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
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
        ? getGetWikiRestApiTemplatePageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.template.page.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.template.page.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiTemplateContentTemplateIdKey(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/template/:contentTemplateId', args] as const
}

export function useGetWikiRestApiTemplateContentTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
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
        ? getGetWikiRestApiTemplateContentTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.template[':contentTemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiTemplateContentTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
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
        ? getGetWikiRestApiTemplateContentTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.template[':contentTemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWikiRestApiTemplateContentTemplateIdKey() {
  return ['wiki', '/wiki/rest/api/template/:contentTemplateId', 'DELETE'] as const
}

export function useDeleteWikiRestApiTemplateContentTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiTemplateContentTemplateIdKey()
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
            (typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.template[':contentTemplateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiUserKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.$get>,
) {
  return ['wiki', '/wiki/rest/api/user', args] as const
}

export function useGetWikiRestApiUser<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
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
        ? getGetWikiRestApiUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUser<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
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
        ? getGetWikiRestApiUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserAnonymousKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/anonymous', args] as const
}

export function useGetWikiRestApiUserAnonymous<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
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
        ? getGetWikiRestApiUserAnonymousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.anonymous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserAnonymous<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
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
        ? getGetWikiRestApiUserAnonymousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.anonymous.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.anonymous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserCurrentKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/current', args] as const
}

export function useGetWikiRestApiUserCurrent<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
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
        ? getGetWikiRestApiUserCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserCurrent<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
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
        ? getGetWikiRestApiUserCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserMemberofKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/memberof', args] as const
}

export function useGetWikiRestApiUserMemberof<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
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
        ? getGetWikiRestApiUserMemberofKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.memberof.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserMemberof<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
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
        ? getGetWikiRestApiUserMemberofKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.memberof.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.memberof.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserBulkKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/bulk', args] as const
}

export function useGetWikiRestApiUserBulk<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
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
        ? getGetWikiRestApiUserBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserBulk<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
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
        ? getGetWikiRestApiUserBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.bulk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserWatchContentContentIdKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', args] as const
}

export function useGetWikiRestApiUserWatchContentContentId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
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
        ? getGetWikiRestApiUserWatchContentContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user.watch.content[':contentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserWatchContentContentId<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
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
        ? getGetWikiRestApiUserWatchContentContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user.watch.content[':contentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiUserWatchContentContentIdKey() {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', 'POST'] as const
}

export function usePostWikiRestApiUserWatchContentContentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiUserWatchContentContentIdKey()
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
            (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user.watch.content[':contentId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiUserWatchContentContentIdKey() {
  return ['wiki', '/wiki/rest/api/user/watch/content/:contentId', 'DELETE'] as const
}

export function useDeleteWikiRestApiUserWatchContentContentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiUserWatchContentContentIdKey()
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
            (typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user.watch.content[':contentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiUserWatchLabelLabelNameKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', args] as const
}

export function useGetWikiRestApiUserWatchLabelLabelName<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
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
        ? getGetWikiRestApiUserWatchLabelLabelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user.watch.label[':labelName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserWatchLabelLabelName<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
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
        ? getGetWikiRestApiUserWatchLabelLabelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user.watch.label[':labelName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiUserWatchLabelLabelNameKey() {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', 'POST'] as const
}

export function usePostWikiRestApiUserWatchLabelLabelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiUserWatchLabelLabelNameKey()
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
            (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user.watch.label[':labelName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiUserWatchLabelLabelNameKey() {
  return ['wiki', '/wiki/rest/api/user/watch/label/:labelName', 'DELETE'] as const
}

export function useDeleteWikiRestApiUserWatchLabelLabelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiUserWatchLabelLabelNameKey()
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
            (typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user.watch.label[':labelName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiUserWatchSpaceSpaceKeyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', args] as const
}

export function useGetWikiRestApiUserWatchSpaceSpaceKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
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
        ? getGetWikiRestApiUserWatchSpaceSpaceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.user.watch.space[':spaceKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserWatchSpaceSpaceKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
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
        ? getGetWikiRestApiUserWatchSpaceSpaceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.user.watch.space[':spaceKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestApiUserWatchSpaceSpaceKeyKey() {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', 'POST'] as const
}

export function usePostWikiRestApiUserWatchSpaceSpaceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiUserWatchSpaceSpaceKeyKey()
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
            (typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']
          >
        },
      ) =>
        parseResponse(client.wiki.rest.api.user.watch.space[':spaceKey'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiUserWatchSpaceSpaceKeyKey() {
  return ['wiki', '/wiki/rest/api/user/watch/space/:spaceKey', 'DELETE'] as const
}

export function useDeleteWikiRestApiUserWatchSpaceSpaceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiUserWatchSpaceSpaceKeyKey()
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
            (typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user.watch.space[':spaceKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiUserEmailKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/email', args] as const
}

export function useGetWikiRestApiUserEmail<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
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
        ? getGetWikiRestApiUserEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserEmail<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
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
        ? getGetWikiRestApiUserEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wiki.rest.api.user.email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserEmailBulkKey(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
) {
  return ['wiki', '/wiki/rest/api/user/email/bulk', args] as const
}

export function useGetWikiRestApiUserEmailBulk<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
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
        ? getGetWikiRestApiUserEmailBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.email.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserEmailBulk<TError = unknown>(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
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
        ? getGetWikiRestApiUserEmailBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.wiki.rest.api.user.email.bulk.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wiki.rest.api.user.email.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestAtlassianConnect1AppModuleDynamicKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic'] as const
}

export function useGetWikiRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
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
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestAtlassianConnect1AppModuleDynamicKey()
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
                (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
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
          client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestAtlassianConnect1AppModuleDynamic<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
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
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWikiRestAtlassianConnect1AppModuleDynamicKey()
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
                (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
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
          client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWikiRestAtlassianConnect1AppModuleDynamicKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic', 'POST'] as const
}

export function usePostWikiRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestAtlassianConnect1AppModuleDynamicKey()
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
            (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestAtlassianConnect1AppModuleDynamicKey() {
  return ['wiki', '/wiki/rest/atlassian-connect/1/app/module/dynamic', 'DELETE'] as const
}

export function useDeleteWikiRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestAtlassianConnect1AppModuleDynamicKey()
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
            (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWikiRestApiAnalyticsContentContentIdViewsKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/views', args] as const
}

export function useGetWikiRestApiAnalyticsContentContentIdViews<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiAnalyticsContentContentIdViewsKey(args)
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
                (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
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
          client.wiki.rest.api.analytics.content[':contentId'].views.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAnalyticsContentContentIdViews<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiAnalyticsContentContentIdViewsKey(args)
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
                (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
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
          client.wiki.rest.api.analytics.content[':contentId'].views.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiAnalyticsContentContentIdViewersKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
) {
  return ['wiki', '/wiki/rest/api/analytics/content/:contentId/viewers', args] as const
}

export function useGetWikiRestApiAnalyticsContentContentIdViewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiAnalyticsContentContentIdViewersKey(args)
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
                (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
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
          client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiAnalyticsContentContentIdViewers<TError = unknown>(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetWikiRestApiAnalyticsContentContentIdViewersKey(args)
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
                (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
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
          client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserUserIdPropertyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property', args] as const
}

export function useGetWikiRestApiUserUserIdProperty<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
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
        ? getGetWikiRestApiUserUserIdPropertyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.user[':userId'].property.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserUserIdProperty<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
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
        ? getGetWikiRestApiUserUserIdPropertyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.wiki.rest.api.user[':userId'].property.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWikiRestApiUserUserIdPropertyKeyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
) {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', args] as const
}

export function useGetWikiRestApiUserUserIdPropertyKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
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
        ? getGetWikiRestApiUserUserIdPropertyKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWikiRestApiUserUserIdPropertyKey<TError = unknown>(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
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
        ? getGetWikiRestApiUserUserIdPropertyKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWikiRestApiUserUserIdPropertyKeyKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'PUT'] as const
}

export function usePutWikiRestApiUserUserIdPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWikiRestApiUserUserIdPropertyKeyKey()
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
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWikiRestApiUserUserIdPropertyKeyKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'POST'] as const
}

export function usePostWikiRestApiUserUserIdPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWikiRestApiUserUserIdPropertyKeyKey()
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
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteWikiRestApiUserUserIdPropertyKeyKey() {
  return ['wiki', '/wiki/rest/api/user/:userId/property/:key', 'DELETE'] as const
}

export function useDeleteWikiRestApiUserUserIdPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWikiRestApiUserUserIdPropertyKeyKey()
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
            (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.wiki.rest.api.user[':userId'].property[':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
