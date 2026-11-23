import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttachmentKey() {
  return ['attachment'] as const
}

export function getKeywordKey() {
  return ['keyword'] as const
}

export function getLawDataKey() {
  return ['law_data'] as const
}

export function getLawFileKey() {
  return ['law_file'] as const
}

export function getLawRevisionsKey() {
  return ['law_revisions'] as const
}

export function getLawsKey() {
  return ['laws'] as const
}

export function getLawsQueryKey(args: InferRequestType<typeof client.laws.$get>) {
  return ['laws', '/laws', args] as const
}

export function getLawsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.laws.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLawsQueryKey>
  >({
    queryKey: getLawsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.laws.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLaws<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.laws.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLawsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLawsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLawRevisionsLawIdOrNumQueryKey(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
) {
  return ['law_revisions', '/law_revisions/:law_id_or_num', args] as const
}

export function getLawRevisionsLawIdOrNumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawRevisionsLawIdOrNumQueryKey>
  >({
    queryKey: getLawRevisionsLawIdOrNumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law_revisions[':law_id_or_num'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLawRevisionsLawIdOrNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLawRevisionsLawIdOrNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLawRevisionsLawIdOrNumQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLawDataLawIdOrNumOrRevisionIdQueryKey(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
) {
  return ['law_data', '/law_data/:law_id_or_num_or_revision_id', args] as const
}

export function getLawDataLawIdOrNumOrRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawDataLawIdOrNumOrRevisionIdQueryKey>
  >({
    queryKey: getLawDataLawIdOrNumOrRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law_data[':law_id_or_num_or_revision_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLawDataLawIdOrNumOrRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLawDataLawIdOrNumOrRevisionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLawDataLawIdOrNumOrRevisionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAttachmentLawRevisionIdQueryKey(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
) {
  return ['attachment', '/attachment/:law_revision_id', args] as const
}

export function getAttachmentLawRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttachmentLawRevisionIdQueryKey>
  >({
    queryKey: getAttachmentLawRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachment[':law_revision_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttachmentLawRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAttachmentLawRevisionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAttachmentLawRevisionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getKeywordQueryKey(args: InferRequestType<typeof client.keyword.$get>) {
  return ['keyword', '/keyword', args] as const
}

export function getKeywordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keyword.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeywordQueryKey>
  >({
    queryKey: getKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keyword.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keyword.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeywordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
) {
  return ['law_file', '/law_file/:file_type/:law_id_or_num_or_revision_id', args] as const
}

export function getLawFileFileTypeLawIdOrNumOrRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey>
  >({
    queryKey: getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLawFileFileTypeLawIdOrNumOrRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLawFileFileTypeLawIdOrNumOrRevisionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
